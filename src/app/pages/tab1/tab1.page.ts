import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { CodigoQRService } from 'src/app/services/codigo-qr.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page
{
  constructor(private escanerQR: CodigoQRService,
    private toastController: ToastController) { }

  escanear()
  {
    let scan = this.escanerQR.escanear("Escanee el DNI", 'QR_CODE');

    this.presentToast(scan);
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
