import { ComponentRef, Injectable } from '@angular/core';
import { ActionSheetButton } from '@ionic/core/dist/types/interface';
import { ActionSheetController, AlertController, ModalController, PopoverController, ToastController } from '@ionic/angular';
import { CartaPage } from '../pages/carta/carta.page';
import { Imagen } from '../clases/imagen';
import { FotoComponent } from '../components/foto/foto.component';
import { Producto } from '../clases/producto';
import { ListaPlatosClienteComponent } from '../components/lista-platos-cliente/lista-platos-cliente.component';
import { LoginPage } from '../components/login/login.page';
import { RegisterPage } from '../components/register/register.page';
import { Router } from '@angular/router';
import { FormPedidoComponent } from '../components/form-pedido/form-pedido.component';
import { EstadoPedido, Pedido } from '../clases/pedido';
import { SalaChatPage } from '../pages/sala-chat/sala-chat.page';
import { PedidoService } from './pedido.service';

/**
 * Interfaz para crear dinámicamente botones de un Action Sheet
 */
export interface IBotonesGenerados
{
  mostrarPlatos?: { boton?: ActionSheetButton, handler: any, params?: any },
  solicitar?: { boton?: ActionSheetButton, handler: any, params?: any },
  confirmar?: { boton?: ActionSheetButton, handler: any, params?: any },
  recibir?: { boton?: ActionSheetButton, handler: any, params?: any },
  cerrar?: { boton?: ActionSheetButton, handler: any, params?: any },
  chat?: { boton?: ActionSheetButton, handler: any },
}

/**
 * Clase para centralizar lógica de componentes de UI de Ionic
 * Los métodos de modals y popovers deben estar encapsulados en las clases clientes
 */
@Injectable({
  providedIn: 'root'
})
export class UIVisualService
{
  private static UI: UIVisualService;
  private static DURACION_TOAST = 2000;

  constructor(private modalController: ModalController,
    private toastController: ToastController,
    private alertController: AlertController,
    private actionSheetController: ActionSheetController,
    private popoverController: PopoverController,
    private router: Router,
    private pedidoService: PedidoService) 
  {
    UIVisualService.UI = this;
  }

  static async presentToast(message)
  {
    const toast = await UIVisualService.UI.toastController.create({
      message,
      duration: UIVisualService.DURACION_TOAST,
    })
    toast.present();
  }

  static async presentAlert(header, message)
  {
    const alert = await UIVisualService.UI.alertController.create({
      header,
      message,
      buttons: ['Cerrar']
    });

    await alert.present();
  }



  static async presentActionSheet(rol: any, handlers: IBotonesGenerados) 
  {
    console.log(handlers);
    // TODO: Modificar cuando se implemente servicio de Roles
    let botones = this.generarBotones(rol, handlers);

    console.log(botones);
    // Botones por defecto para cualquier Rol
    botones.push({
      text: 'Cancelar',
      icon: 'close',
      role: 'cancel',
      handler: () => console.log('Cancel clicked')
    })

    const actionSheet = await UIVisualService.UI.actionSheetController.create({
      header: 'Opciones',
      mode: 'ios',
      translucent: true,
      buttons: botones
    });

    await actionSheet.present();
  }

  static generarBotones(rol: any, handlers: IBotonesGenerados): ActionSheetButton[]
  {
    // Codigo a modo de ejemplo
    let botonesGenerados: ActionSheetButton[] = [];

    switch (rol)
    {
      case 'Cliente':
        handlers.solicitar.boton = {
          text: 'Hacer pedido',
          icon: 'hand-left-sharp',
          handler: () => this.UI.pedidoService.hacerPedido(handlers.solicitar.params)
        }
        if (handlers.solicitar) botonesGenerados.push(handlers.solicitar.boton);

        handlers.mostrarPlatos.boton = {
          text: 'Mostrar Platos',
          icon: 'fast-food-outline',
          handler: () => handlers.mostrarPlatos.handler(handlers.mostrarPlatos.params)
        }
        if (handlers.mostrarPlatos) botonesGenerados.push(handlers.mostrarPlatos.boton);

        handlers.chat.boton = {
          text: 'Consultar a mozo',
          icon: 'chatbubbles-sharp',
          handler: () => handlers.chat.handler()
        }
        if (handlers.chat) botonesGenerados.push(handlers.chat.boton);

        handlers.recibir.boton = {
          text: 'Confirmar recepción',
          icon: 'checkmark-done-sharp',
          handler: () => this.UI.pedidoService.recibirPedido(handlers.recibir.params)
        }
        if (handlers.recibir) botonesGenerados.push(handlers.recibir.boton);

        handlers.cerrar.boton = {
          text: 'Pagar',
          icon: 'cash-outline',
          handler: () => this.UI.pedidoService.pagarPedido(handlers.cerrar.params)
        }
        if (handlers.cerrar) botonesGenerados.push(handlers.cerrar.boton);

        break;
      case 'Mozo':
        handlers.mostrarPlatos.boton = {
          text: 'Mostrar Platos',
          icon: 'fast-food-outline',
          handler: () => handlers.mostrarPlatos.handler(handlers.mostrarPlatos.params)
        }
        if (handlers.mostrarPlatos) botonesGenerados.push(handlers.mostrarPlatos.boton);

        handlers.chat.boton = {
          text: 'Consultar a mozo',
          icon: 'chatbubbles-sharp',
          handler: () => handlers.chat.handler()
        }
        if (handlers.chat) botonesGenerados.push(handlers.chat.boton);

        handlers.confirmar.boton = {
          text: 'Confirmar pedido',
          icon: 'checkmark-sharp',
          handler: () => this.UI.pedidoService.aceptarPedido(handlers.confirmar.params)
        }
        if (handlers.confirmar) botonesGenerados.push(handlers.confirmar.boton);
        break;
    }

    return botonesGenerados;
  }

  static async verCarta(): Promise<Producto[]>
  {
    const modal = await UIVisualService.UI.modalController.create({
      component: CartaPage,
    });

    await modal.present();

    const { data } = await modal.onDidDismiss<Producto[]>();

    return data;
  }

  static async verPlatos(productos: Producto[])
  {
    const modal = await UIVisualService.UI.modalController.create({
      component: ListaPlatosClienteComponent,
      componentProps: { productos: productos }
    });

    await modal.present();
  }

  static async verChat()
  {
    const modal = await UIVisualService.UI.modalController.create({
      component: SalaChatPage,
    });

    await modal.present();
  }

  static async verFoto(ev: any, foto: Imagen)
  {
    const popover = await UIVisualService.UI.popoverController.create({
      component: FotoComponent,
      animated: true,
      event: ev,
      translucent: false,
      componentProps: {
        img: foto
      }
    });

    await popover.present();
  }



}
