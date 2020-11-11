import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Pedido } from 'src/app/clases/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss'],
})
export class FacturaComponent implements OnInit
{
  @Input() pedido: Pedido;

  constructor(private modalController: ModalController, private alertController: AlertController,
    private pedidoService: PedidoService, private toastController: ToastController) { }

  ngOnInit() { }

  cerrar()
  {
    this.modalController.dismiss();
  }

  async pagar()
  {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Desea pagar la cuenta?',
      cssClass: 'buttonCss',
      mode: "ios",
      translucent: true,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () =>
          {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sí',
          handler: () =>
          {
            this.pedidoService.pagarPedido(this.pedido)
              .then(() => this.presentToast("Pedido pagado"));
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast(message)
  {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
