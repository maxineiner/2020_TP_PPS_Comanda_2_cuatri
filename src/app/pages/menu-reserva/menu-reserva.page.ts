import { Component, DoCheck, OnInit } from '@angular/core';
import { EstadoPedido, Pedido } from 'src/app/clases/pedido';
import { Reserva } from 'src/app/clases/reserva';
import { PedidoService } from 'src/app/services/pedido.service';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-menu-reserva',
  templateUrl: './menu-reserva.page.html',
  styleUrls: ['./menu-reserva.page.scss'],
})
export class MenuReservaPage implements OnInit, DoCheck
{

  opcion: string = 'Listado';
  listado: Pedido[];
  reservaElegida: Pedido;

  constructor(private reservaService: ReservaService, private pedidoService: PedidoService) { }

  ngDoCheck(): void
  {
    this.listado = PedidoService.pedidos.filter(pedido => pedido.estado == EstadoPedido.RESERVADO);
  }

  ngOnInit()
  {
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
