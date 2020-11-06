import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { NotificationService } from 'src/app/servicios/notification.service';
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
    private modalCtrl : ModalController,
    public authService:AuthService,
    public sonido:SonidosService,
    public router:Router,
    public notificaciones:NotificationService
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
  cerrarSesion(){
    this.notificaciones.desactivarNotificaciones();
    this.authService.logout();
    this.sonido.Reproducir('cerrar');
    this.router.navigateByUrl('/login');
    this.dismiss();
  }

  goToNotificaciones():void {
    this.utils.showLoadingAndNavigate('notificaciones');
    this.dismiss();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss()
  }

}
