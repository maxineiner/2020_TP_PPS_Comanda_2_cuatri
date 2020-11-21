import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/clases/cliente';
import { AuthService } from 'src/app/services/auth.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { RolesService } from 'src/app/services/roles.service';
import { UIVisualService } from 'src/app/services/uivisual.service';

@Component({
  selector: 'app-info-ingreso',
  templateUrl: './info-ingreso.page.html',
  styleUrls: ['./info-ingreso.page.scss'],
})
export class InfoIngresoPage implements OnInit
{

  constructor(
    private roles: RolesService,
    private route: Router,
    private clienteService: ClienteService,
    private UIvisual:UIVisualService,
    private notificationService:NotificationsService
  ) { }

  ngOnInit()
  {
  }

  verEncuestasAntiguas()
  {

  }


  ponerseEnListaDeEspera()
  {
    if (this.roles.isCliente(AuthService.usuario))
    {
      console.log(AuthService.usuario);
      var cliente = AuthService.usuario as Cliente;
      cliente.enListaDeEspera.isWaiting = true;
      cliente.enListaDeEspera.horario = Date.now();
      this.clienteService.actualizar(cliente).then(() =>
      {
        this.notificationService.enviarNotificacion(
          'Cliente en espera',
          `El cliente ${cliente.nombre} esta en la lista de espera`,
          '/home/lista-de-espera',
          'mozos'
        )
        UIVisualService.presentToast('Estas en la lista de espera');
      })
    }
  }

  verListaDeEspera()
  {
    this.route.navigate(['/home/lista-de-espera']);
  }

}
