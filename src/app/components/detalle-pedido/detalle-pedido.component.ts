import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Pedido } from 'src/app/clases/pedido';
import { ListaPlatosClienteComponent } from '../lista-platos-cliente/lista-platos-cliente.component';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.scss'],
})
export class DetallePedidoComponent implements OnInit
{
  @Input() pedido: Pedido;

  constructor(private actionSheetController: ActionSheetController,
    private modalController: ModalController) 
  {
    //this.pedido.calcularTotal();
  }

  ngOnInit() { }

  confirmar()
  {
    console.log("Se confirma el pedido");
  }

  entregar()
  {
    console.log("Pedido entregado");
  }

  recibir()
  {
    console.log("Se recibe pedido en la mesa");
  }

  async mostrarOpciones()
  {
    // Acá se validaría el perfil para crear los botones correspondientes

    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      mode: "ios",
      translucent: true,
      buttons: [{
        text: 'Confirmar',
        icon: 'checkmark',
        handler: () => this.confirmar()
      },
      {
        text: 'Recibir',
        icon: 'fast-food',
        handler: () =>
        {
          this.recibir();
        }
      },
      {
        text: 'Ver platos',
        icon: 'list',
        handler: () =>
        {
          this.presentModal();
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () =>
        {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();
  }

  async presentModal()
  {
    const modal = await this.modalController.create({
      component: ListaPlatosClienteComponent,
      componentProps: { productos: this.pedido.productos }
    });

    await modal.present();

  }



}
