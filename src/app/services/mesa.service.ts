import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Mesa } from '../clases/mesa';
import { Cliente } from '../clases/cliente';
import { CodigoQRService } from './codigo-qr.service';

@Injectable({
  providedIn: 'root'
})
export class MesaService {
  public static mesas: Mesa[] = [];

  constructor(public firebase: AngularFireDatabase, private escanerQR: CodigoQRService) { }

  public crear(mesa: Mesa): Promise<any>
  {
    console.log(mesa);
    mesa.isActive = true;
    mesa.cliente = new Cliente();
    mesa.estadoPedido = "Sin pedido"; // Cambiar por enum de Pedidos

    return this.firebase.database.ref('mesas')
                .push(mesa)
                .then((snapshot) => {
                  mesa.id = snapshot.key;
                  this.escanerQR.generar(mesa, mesa.id); //Generacion de QR
                })
                .then(() => this.actualizar(mesa))
                .catch(console.error);
  }

  public actualizar(mesa: Mesa): Promise<any>
  {
    return this.firebase.database.ref('mesas/' + mesa.id).update(mesa);
  } 

  // Este método realiza una Baja Física, no usar de ser necesario
  public borrar(mesa: Mesa): Promise<any>
  {
    mesa.isActive = false;

    return this.firebase.database.ref('mesas/' + mesa.id).update(mesa);
  } 

  public leer()
  {
    let mesas: Mesa[] = [];
    console.info("Fetch de todas las mesas");

    const fetch = new Promise<Mesa[]>(resolve =>{
      this.firebase.database.ref('mesas').on('value',(snapshot) => {          
        mesas = [];  
          snapshot.forEach((child) =>{
            var data: Mesa = child.val();
            mesas.push(Mesa.CrearMesa(data.id, data.numero, data.comensales, data.tipo, 
                                      data.foto, data.codigoQR, data.isAvailable,
                                      data.isActive, data.estadoPedido, data.cliente));
          });
          MesaService.mesas = mesas.filter(mesa => mesa.isActive);
          resolve(MesaService.mesas);
      })
    });
    return fetch;
  }

  public fetch(id: string)
  {
    return this.firebase.database.ref(`mesas/${id}`).once('value');
  }

  
}
