import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanResult } from '@ionic-native/barcode-scanner';
import { ActionSheetController, MenuController } from '@ionic/angular';
import { Cliente } from 'src/app/clases/cliente';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { CodigoQRService } from 'src/app/services/codigo-qr.service';
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

  constructor(private rolService: RolesService, private authService: AuthService,
    private router: Router, private actionSheetController: ActionSheetController) { }

  ngOnInit()
  {
    this.usuario = AuthService.usuario;
  }

  cerrarSesion()
  {
    this.authService.onLogout();
    this.router.navigate(['/auth-page']);
  }


  async mostrarMenu() 
  {
    const actionSheet = await this.actionSheetController.create({
      header: 'Menú',
      mode: 'ios',
      translucent: true,
      buttons: [{
        text: 'Clientes',
        icon: 'person-circle',
        handler: () => this.router.navigate(['/home/menu-cliente'])
      },
      {
        text: 'Empleados',
        icon: 'accessibility-outline',
        handler: () => this.router.navigate(['/home/menu-empleado'])
      },
      {
        text: 'Supervisores',
        icon: 'glasses-outline',
        handler: () => this.router.navigate(['/home/menu-jefe'])
      },
      {
        text: 'Mesas',
        icon: 'storefront-outline',
        handler: () => this.router.navigate(['/home/menu-mesa'])
      },
      {
        text: 'Cerrar',
        role: 'cancel',
        handler: () =>
        {
          console.log('Cerrar');
        }
      }
      ]
    });

    await actionSheet.present();
  }

}
