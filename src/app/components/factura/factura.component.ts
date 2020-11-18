import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Pedido } from 'src/app/clases/pedido';
import { CodigoQRService } from 'src/app/services/codigo-qr.service';
import { HapticService } from 'src/app/services/haptic.service';
import { MesaService } from 'src/app/services/mesa.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { UIVisualService } from 'src/app/services/uivisual.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss'],
})
export class FacturaComponent implements OnInit
{
  @Input() pedido: Pedido;

  constructor(private modalController: ModalController, private alertController: AlertController,
    private pedidoService: PedidoService,
    private mesaService: MesaService,
    private toastController: ToastController,
    private escanerQR: CodigoQRService) { }

  ngOnInit() { }

  cerrar()
  {
    this.modalController.dismiss();
  }

  async escanearPropina()
  {
    const scan = await this.escanerQR.escanear("Escanee el código QR", 'QR_CODE');

    HapticService.vibrar();
    let textoQR = scan.text.split(':');
    let entidad = textoQR[1];
    let propina = textoQR[2];

    console.log(textoQR);
    console.log(`Tipo: ${entidad}`);
    console.log(`Propina: ${propina}`);

    this.pedido.propina = parseInt(propina);
    this.pedido.calcularTotal();
  }

  async pagar()
  {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Desea pagar la cuenta?',
      cssClass: 'buttonCss',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'buttonCss',
          handler: () =>
          {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sí',
          handler: () =>
          {
            this.pedidoService.pagarPedido(this.pedido)
              .then(() =>
              {
                this.presentToast("Pedido pagado");
                console.log(this.pedido);

                this.modalController.dismiss();
              })
              .catch(error => this.presentToast(error));
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
