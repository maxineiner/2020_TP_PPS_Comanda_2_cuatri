import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { EstadoPedido, Pedido } from 'src/app/clases/pedido';
import { Usuario } from 'src/app/clases/usuario';
import { INotificacion } from 'src/app/interfaces/INotification';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-menu-reserva',
  templateUrl: './menu-reserva.page.html',
  styleUrls: ['./menu-reserva.page.scss'],
})
export class MenuReservaPage implements OnInit, DoCheck
{
  usuario: Usuario;
  opcion: string = 'Listado';
  listado: Pedido[];
  reservaElegida: Pedido;

  constructor(private pedidoService: PedidoService,
    private rolService: RolesService,
    private platform: Platform,
    private notificationService:NotificationsService,
    private router: Router) 
  {
    this.platform.backButton.subscribeWithPriority(10, () =>
    {
      this.router.navigate(["/home/inicio"]);
    });
  }

  ngDoCheck(): void
  {
    this.listado = PedidoService.pedidos.filter(pedido => pedido.estado == EstadoPedido.RESERVADO || pedido.estado == EstadoPedido.ASIGNADO);
  }

  ngOnInit()
  {
    this.usuario = AuthService.usuario;
    console.log("INIT");
    this.pedidoService.leer().then(data =>
    {
      /* console.log(data); */
      this.listado = data.filter(pedido => pedido.estado == EstadoPedido.RESERVADO);
    });
    let notificacion:INotificacion = {
      title : "Cliente notification",
      body : "este es un mensaje desde el cliente"
    };
    this.notificationService.sendNotification(notificacion,'jefes').then(data=>{
      console.log('RESPUESTA: ', data);
    })
  }

  seleccionarOpcion(event)
  {
    console.log(event.detail.value);
    this.opcion = event.detail.value;
  }

  elegirReserva(event)
  {
    console.log(event);
    this.reservaElegida = event;
  }

}
