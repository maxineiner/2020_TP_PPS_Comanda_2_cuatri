import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CodigoQRService } from 'src/app/services/codigo-qr.service';
import { MenuMesaPage } from '../menu-mesa/menu-mesa.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private escanerQR: CodigoQRService) {}

  escanear()
  {
    let scan = this.escanerQR.escanear(); 

    console.log(scan);
  }


}
