import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Pedido } from '../clases/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService 
{
  public static pedidos: Pedido[] = [];

  constructor(public firebase: AngularFireDatabase) { }

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
          pedidos.push(Pedido.CrearPedido(data.id, data.productos, data.valorTotal, data.estado,
            data.isActive));
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
}
