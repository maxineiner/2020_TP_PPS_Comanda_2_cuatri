import { Component, DoCheck, OnInit } from '@angular/core';
import { EstadoPedido, Pedido } from 'src/app/clases/pedido';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-menu-pedidos',
  templateUrl: './menu-pedidos.page.html',
  styleUrls: ['./menu-pedidos.page.scss'],
})
export class MenuPedidosPage implements OnInit, DoCheck
{
  usuario: Usuario;
  opcion: string = 'Listado';
  pedidos: Pedido[] = PedidoService.pedidos;
  pedidoElegido: Pedido = new Pedido();

  constructor(private pedidoService: PedidoService, private rolService: RolesService) { }

  ngDoCheck(): void
  {
    this.pedidos = this.filtrarPedidos(PedidoService.pedidos);
  }

  ngOnInit()
  {
    this.usuario = AuthService.usuario;
    console.log("INIT");

    this.pedidoService.leer().then((pedidos) =>
    {
      this.pedidos = this.filtrarPedidos(pedidos);
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

  filtrarPedidos(pedidos: Pedido[])
  {
    let pedidosFiltrados = [];
    console.log(pedidos);

    // Pedidos del Cliente logueado
    if (this.rolService.isClienteAceptado(this.usuario))
    {
      pedidosFiltrados = pedidos.filter(pedido => 
      {
        if (pedido.cliente)
        {
          return pedido.cliente.id === this.usuario.id;
        }
      });
    }
    else if (this.rolService.isEmpleado(this.usuario)) // Pedidos para empleados
    {
      pedidosFiltrados = pedidos.filter(pedido => pedido.estado != EstadoPedido.RESERVADO);
    }
    else if (this.rolService.isJefe(this.usuario)) // Pedidos para jefes
    {
      pedidosFiltrados = pedidos.filter(pedido => pedido.estado == EstadoPedido.RESERVADO);
    }
    return pedidosFiltrados;
  }
}
