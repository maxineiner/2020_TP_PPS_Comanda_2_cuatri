import { Component, DoCheck, OnInit } from '@angular/core';
import { EstadoPedido, Pedido } from 'src/app/clases/pedido';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
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

  constructor(private pedidoService: PedidoService,private rolService: RolesService) { }

  ngDoCheck(): void
  {
    this.listado = PedidoService.pedidos.filter(pedido => pedido.estado == EstadoPedido.RESERVADO);
  }

  ngOnInit()
  {
    this.usuario = AuthService.usuario;
    console.log("INIT");
    this.pedidoService.leer().then(data =>
    {
      console.log(data);
      this.listado = data.filter(pedido => pedido.estado == EstadoPedido.RESERVADO);
    });
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
