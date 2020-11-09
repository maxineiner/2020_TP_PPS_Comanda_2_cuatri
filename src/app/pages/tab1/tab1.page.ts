import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanResult } from '@ionic-native/barcode-scanner';
import { ModalController, ToastController } from '@ionic/angular';
import { CodigoQRService } from 'src/app/services/codigo-qr.service';
import { SalaChatPage } from '../sala-chat/sala-chat.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page
{
  constructor(private escanerQR: CodigoQRService,
    private toastController: ToastController,
    private router: Router,
    private modalController: ModalController) { }


  async escanear()
  {
    // Ya debe existir un usuario logueado
    const scan = await this.escanerQR.escanear("Escanee el código QR", 'QR_CODE');

    this.procesarQR(scan);
  }


  async presentToast(message)
  {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  procesarQR(scan: BarcodeScanResult)
  {
    let textoQR = scan.text.split(':');
    let entidad = textoQR[1];
    let id = textoQR[2];

    switch (entidad)
    {
      case 'Mesa':
        this.router.navigate(['/info-mesa', id]);
        break;
      case 'Producto':
        break;
      case 'Ingreso':
        break;

    }
  }

  async verChat()
  {
    const modal = await this.modalController.create({
      component: SalaChatPage,
    });

    await modal.present();
  }



}
