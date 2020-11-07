import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanResult } from '@ionic-native/barcode-scanner';
import { Cliente } from 'src/app/clases/cliente';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { CodigoQRService } from 'src/app/services/codigo-qr.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit
{
  // Código de prueba
  usuario: Usuario = AuthService.usuario;
  icono = '/assets/img/icono.png';

  constructor(
    private rolService: RolesService,
    private authService: AuthService,
    private router: Router,
    private notifications:NotificationsService
  ) { }

  ngOnInit()
  {
    this.usuario = AuthService.usuario;
    this.notifications.initPush();
  }

  cerrarSesion()
  {
    this.authService.onLogout();
    this.router.navigate(['/auth-page']);

  }

}
