import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SonidosService } from 'src/app/servicios/sonidos.service';
import { UtilsService } from 'src/app/servicios/utils.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  constructor(
    private sonidos:SonidosService,
    private utils:UtilsService,
    private modalCtrl : ModalController
  ) { }

  ngOnInit() {
    this.sonidos.sonido

  }

  BtnAudio()
  {
    if(this.sonidos.ConfigurarAudio())
    {
      this.sonidos.DesactivarSonido();
    }
    else
    {
      this.sonidos.ActivarSonido();
    }
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss()
  }

}
