import { Injectable } from '@angular/core';
import { Mensaje } from '../clases/mensaje';
import { IDatabase } from '../interfaces/IDatabase';
import { AngularFireDatabase } from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class MensajesService implements IDatabase<Mensaje>
{
  public static mensajes: Mensaje[] = [];

  constructor(public firebase: AngularFireDatabase) { }

  crear(mensaje: Mensaje): Promise<any>
  {
    return this.firebase.database.ref('mensajes')
      .push(mensaje)
      .then((snapshot) => mensaje.id = snapshot.key)
      .then(() => this.actualizar(mensaje))
      .catch(console.error);
  }
  actualizar(mensaje: Mensaje): Promise<any>
  {
    return this.firebase.database.ref('mensajes/' + mensaje.id).update(mensaje);
  }

  async leer(): Promise<Mensaje[]>
  {
    let mensajes: Mensaje[] = [];

    const fetch = new Promise<Mensaje[]>(resolve =>
    {
      this.firebase.database.ref('mensajes').on('value', (snapshot) =>
      {
        mensajes = [];
        snapshot.forEach((child) =>
        {
          var data: Mensaje = child.val();
          mensajes.push(Mensaje.CrearMensaje(data.id, data.texto, data.usuario, data.fecha, data.chatId));
        });
        MensajesService.mensajes = mensajes;
        resolve(MensajesService.mensajes);
      })
    });
    return fetch;
  }

  borrar(mensaje: Mensaje): Promise<any>
  {
    return this.firebase.database.ref("mensajes/" + mensaje.id).remove();
  }

  leerPorId(id: string): Promise<Mensaje>
  {
    return new Promise<Mensaje>(resolve =>
    {
      this.firebase.database.ref(`mensajes/${id}`).once('value').then(snapshot =>
      {
        let data: Mensaje = snapshot.val();
        const mensaje = Mensaje.CrearMensaje(data.id, data.texto, data.usuario, data.fecha, data.chatId);
        resolve(mensaje);
      });
    })
  }

}
