import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { EstadoPedido, Pedido } from '../clases/pedido';
import { UIVisualService } from './uivisual.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoService 
{
  public static pedidos: Pedido[] = [];

  constructor(public firebase: AngularFireDatabase, public router: Router) { }

  /**
   * Método para realizar Alta en DB
   * @param pedido instancia de Pedido
   */
  public crear(pedido: Pedido): Promise<any>
  {
    console.log(pedido);
    pedido.isActive = true;

    return this.firebase.database.ref('pedidos')
      .push(pedido)
      .then((snapshot) => pedido.id = snapshot.key)
      .then(() => this.actualizar(pedido))
      .catch(console.error);
  }

  /**
   * Método para realizar Modificacion en DB
   * @param pedido instancia de Pedido
   */
  public actualizar(pedido: Pedido): Promise<any>
  {
    return this.firebase.database.ref('pedidos/' + pedido.id).update(pedido);
  }

  /**
   * Método para realizar Baja lógica en DB
   * @param pedido instancia de Pedido
   */
  public borrar(pedido: Pedido): Promise<any>
  {
    pedido.isActive = false;

    return this.firebase.database.ref('pedidos/' + pedido.id).update(pedido);
  }

  /**
   * Método para realizar Fetch de todas las mesas en DB
   */
  public leer()
  {
    let pedidos: Pedido[] = [];
    console.info("Fetch de todas los pedidos");

    const fetch = new Promise<Pedido[]>(resolve =>
    {
      this.firebase.database.ref('pedidos').on('value', (snapshot) =>
      {
        pedidos = [];
        snapshot.forEach((child) =>
        {
          var data: Pedido = child.val();
          pedidos.push(Pedido.CrearPedido(data.id, data.cliente, data.mesa, data.productos,
            data.fechaInicio, data.fechaFin,
            data.valorTotal, data.estado, data.isActive));
        });
        PedidoService.pedidos = pedidos.filter(pedido => pedido.isActive);
        resolve(PedidoService.pedidos);
      })
    });
    return fetch;
  }

  /**
   * Método para realizar Fetch de una mesa en DB
   * @param id UID del registro a obtener
   */
  public fetch(id: string)
  {
    return this.firebase.database.ref(`pedidos/${id}`).once('value');
  }

  /**
   * Método para navegar al ABM de Pedido
   * @param pedido 
   */
  hacerPedido(pedido: Pedido)
  {
    this.router.navigate(["/home/menu-pedidos", pedido.id]);
  }

  /**
   * Método para confirmar recepción de Pedido en Mesa
   * @param pedido 
   */
  recibirPedido(pedido: Pedido)
  {
    if (pedido.estado == EstadoPedido.EN_PROGRESO)
    {
      console.log("Se recibe pedido en la mesa");
      pedido.cambiarEstado();
      return this.actualizar(pedido);
    }
  }

  /**
   * Método para pagar pedido por parte de Cliente
   * @param pedido 
   */
  pagarPedido(pedido: Pedido)
  {
    if (pedido.estado == EstadoPedido.ENTREGADO)
    {
      console.log("Se paga pedido de la mesa");
      pedido.cambiarEstado();
      return this.actualizar(pedido);
    }
  }

  /**
   * Método para aceptar por parte de Mozo
   * @param pedido Pedido solicitado por Cliente acepta Mozo
   */
  aceptarPedido(pedido: Pedido)
  {
    if (pedido.estado == EstadoPedido.SOLICITADO)
    {
      console.log("Se acepto pedido para cocina y barra");
      pedido.cambiarEstado();
      return this.actualizar(pedido);
    }
  }




}
