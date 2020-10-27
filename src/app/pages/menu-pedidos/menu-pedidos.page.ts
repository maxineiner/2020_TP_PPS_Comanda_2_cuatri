import { Component, DoCheck, OnInit } from '@angular/core';
import { Pedido } from 'src/app/clases/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-menu-pedidos',
  templateUrl: './menu-pedidos.page.html',
  styleUrls: ['./menu-pedidos.page.scss'],
})
export class MenuPedidosPage implements OnInit, DoCheck
{
  opcion: string = 'Listado';
  pedidos: Pedido[] = PedidoService.pedidos;
  pedidoElegido: Pedido = new Pedido();

  constructor(private pedidoService: PedidoService) { }

  ngDoCheck(): void
  {
    this.pedidos = PedidoService.pedidos;
  }

  ngOnInit()
  {
    console.log("INIT");

    this.pedidoService.leer().then((pedidos) =>
    {
      console.log(pedidos);
      this.pedidos = pedidos;
    });
    this.pedidoElegido = new Pedido();
  }

  /**
   * Metodo para seleccionar modo del form para ABM
   * @param event Evento con el valor que determina modo del form
   */
  seleccionarOpcion(event)
  {
    console.log(event.detail.value);
    this.opcion = event.detail.value;
  }

  /**
   * Método para recibir pedido seleccionado
   * @param pedido Pedido seleccionado desde listado 
   */
  elegirPedido(pedido)
  {
    console.log(pedido);
    this.pedidoElegido = pedido;
  }
}
