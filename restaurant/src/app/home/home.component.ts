import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../servicios/auth.service';
import { UtilsService } from 'src/app/servicios/utils.service';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { NotificationService } from 'src/app/servicios/notification.service';
import { from } from 'rxjs';
import { TipoUsuario } from 'src/app/enums/tipo-usuario.enum';
import { Notificacion } from 'src/app/clases/notificacion';
import { Router } from '@angular/router';
import { SonidosService } from '../servicios/sonidos.service';
import { ConfiguracionPage } from './configuracion/configuracion.page';
import { ModalController } from '@ionic/angular';
import { ReturnStatement } from '@angular/compiler';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  public formHome: FormGroup;
  usuario: Usuario = new Usuario();
  public numeroNotificaciones: number;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    private utilsService: UtilsService,
    public usuarioService: UsuarioService,
    public notificationService: NotificationService,
    private router:Router,
    private sonido:SonidosService,
    private modalCtrl : ModalController,
  ) { }

  ngOnInit() {
    this.notificationService.desactivarNotificaciones();
    this.authService.currentUser().then((response: firebase.User) => {
      this.authService.obtenerDetalle(response).subscribe(datos => {
        console.log('Se asignaron datos al usuario');
        this.usuario = datos;
        this.notificationService.activarNotificaciones(this.usuario.perfil);
        console.warn('cantidad notificaciones');
        this.notificationService.obtenerCantidadDeNotificaciones().subscribe(resp => {
          resp = resp.filter((current)=>{
            //console.log(current.payload.doc.get("receptor"),this.usuario.perfil.toString());
            return current.payload.doc.get("receptor") == this.usuario.perfil.toString();
          });
          this.numeroNotificaciones = resp.length;
          //console.log(resp.length);
        });
        /*let notificacion = new Notificacion();
        notificacion.idPedido = "27";
        notificacion.mensaje = "sale con fritas";
        notificacion.receptor = TipoUsuario.COCINERO;
        this.notificationService.crearNotificacion(notificacion);*///.then(data => console.log(data));
        
      });
      // .subscribe(datos => {console.log(datos[0].mensaje)});
    });
  }

  ngOnDestroy()
  {
    this.notificationService.desactivarNotificaciones();
  }

  ionViewWillEnter() {
    this.authService.currentUser().then((response: firebase.User) => {
      this.authService.obtenerDetalle(response).subscribe(datos => {
        console.log('Se asignaron datos al usuario');
        this.usuario = datos;
        this.notificationService.activarNotificaciones(this.usuario.perfil);
        
        /*let notificacion = new Notificacion();
        notificacion.idPedido = "27";
        notificacion.mensaje = "sale con fritas";
        notificacion.receptor = TipoUsuario.COCINERO;
        this.notificationService.crearNotificacion(notificacion);*///.then(data => console.log(data));
        
      });
      // .subscribe(datos => {console.log(datos[0].mensaje)});
    });
    /*this.authService.currentUser().then((response: firebase.User) => {
      this.authService.obtenerDetalle(response).subscribe(datos => {
        this.usuario = datos;
      });
    });*/
  }

  AbrirOpciones()
  {
    this.utilsService.presentModal(ConfiguracionPage);
  }

  goToNotificaciones():void {
    this.utilsService.showLoadingAndNavigate('notificaciones');
    this.dismiss();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss()
  }


  gestionarUsuarios() {
    this.utilsService.showLoadingAndNavigate('usuarios');
  }

  gestionarMesas() {
    this.utilsService.showLoadingAndNavigate('mesas');
  }

  gestionarListaEspera() {
    this.utilsService.showLoadingAndNavigate('clientes-espera');
  }

  gestionarPropinas() {
    this.utilsService.showLoadingAndNavigate('propinas');
  }

  irAProductos(): void {
    this.utilsService.showLoadingAndNavigate('productos');
  }

  irAPendientes() {
    this.utilsService.showLoadingAndNavigate('pendientes');
  }

  irABartender(): void {
    this.utilsService.showLoadingAndNavigate('bartender');
  }

  irAMozo(): void {
    this.utilsService.showLoadingAndNavigate('mozo');
  }
}
