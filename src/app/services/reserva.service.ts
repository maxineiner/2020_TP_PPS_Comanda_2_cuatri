import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Reserva } from '../clases/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService
{

  public static reservas: Reserva[] = [];

  constructor(public firebase: AngularFireDatabase) { }

  /**
   * Método para realizar Alta en DB
   * @param reserva instancia de Reserva
   */
  public crear(reserva: Reserva): Promise<any>
  {
    console.log(reserva);
    reserva.isActive = true;

    return this.firebase.database.ref('reservas')
      .push(reserva)
      .then((snapshot) => reserva.id = snapshot.key)
      .then(() => this.actualizar(reserva))
      .catch(console.error);
  }

  /**
   * Método para realizar Modificacion en DB
   * @param reserva instancia de Reserva
   */
  public actualizar(reserva: Reserva): Promise<any>
  {
    return this.firebase.database.ref('reservas/' + reserva.id).update(reserva);
  }

  /**
   * Método para realizar Baja lógica en DB
   * @param reserva instancia de Reserva
   */
  public borrar(reserva: Reserva): Promise<any>
  {
    reserva.isActive = false;
    return this.firebase.database.ref('reservas/' + reserva.id).update(reserva);
  }

  /**
   * Método para realizar Fetch de todas las reservas en DB
   */
  public leer()
  {
    let reservas: Reserva[] = [];
    console.info("Fetch de todas las reservas");

    const fetch = new Promise<Reserva[]>(resolve =>
    {
      this.firebase.database.ref('reservas').on('value', (snapshot) =>
      {
        reservas = [];
        snapshot.forEach((child) =>
        {
          var data: Reserva = child.val();
          reservas.push(Reserva.CrearReserva(data.id,data.mesa,data.cliente,data.pedido));
        });
        ReservaService.reservas = reservas.filter(reserva => reserva.isActive);
        resolve(ReservaService.reservas);
      })
    });
    return fetch;
  }

  /**
   * Método para realizar Fetch de una reserva en DB
   * @param id UID del registro a obtener
   */
  public fetch(id: string)
  {
    return this.firebase.database.ref(`reservas/${id}`).once('value');
  }
}
