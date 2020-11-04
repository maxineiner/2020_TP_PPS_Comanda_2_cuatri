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

/**
 * Interfaz para crear dinámicamente botones de un Action Sheet
 */
export interface IBotonesGenerados
{
  mostrarPlatos?: { boton?: ActionSheetButton, handler: any, params?: any },
  solicitar?: { boton?: ActionSheetButton, handler: any },
  confirmar?: { boton?: ActionSheetButton, handler: any },
  entregar?: { boton?: ActionSheetButton, handler: any },
  recibir?: { boton?: ActionSheetButton, handler: any },
  cerrar?: { boton?: ActionSheetButton, handler: any },
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
    private popoverController: PopoverController) 
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
      case 'Usuario':
        handlers.solicitar.boton = {
          text: 'Solicitar',
          icon: 'hand-left-sharp',
          handler: () => handlers.solicitar.handler()
        }
        if (handlers.solicitar) botonesGenerados.push(handlers.solicitar.boton);

        handlers.mostrarPlatos.boton = {
          text: 'Mostrar Platos',
          icon: 'fast-food-outline',
          handler: () => handlers.mostrarPlatos.handler(handlers.mostrarPlatos.params)
        }
        if (handlers.mostrarPlatos) botonesGenerados.push(handlers.mostrarPlatos.boton);
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
