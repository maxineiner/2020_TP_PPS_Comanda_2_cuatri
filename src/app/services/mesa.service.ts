import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Mesa } from '../clases/mesa';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../clases/cliente';

@Injectable({
  providedIn: 'root'
})
export class MesaService {
  public static mesas: Mesa[] = [];

  constructor(public firebase: AngularFireDatabase, private http: HttpClient) { }

  public crear(mesa: Mesa): Promise<any>
  {
    mesa.isActive = true;
    mesa.cliente = new Cliente();
    mesa.estadoPedido = "Sin pedido"; 

    return this.firebase.database.ref('mesas')
                .push()
                .then((snapshot) => {
                  mesa.id = snapshot.key;
                  this.generarQR(mesa);
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
    let mesas = [];
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
          MesaService.mesas = mesas.filter(mesa => mesa.datosQR.isAvailable == true);
          resolve(MesaService.mesas);
      })
    });
    return fetch;
  }

  public fetch(id: string)
  {
    return this.firebase.database.ref(`mesas/${id}`).once('value');
  }

  public generarQR(mesa: Mesa)
  {
    // The text to store within the QR code (URL encoded, PHP programmers may use urlencode()).
    let data = `ID%3A${mesa.id}`;

    const codigoQR = `http://api.qrserver.com/v1/create-qr-code/?data=${data}&size=66x66`;

    mesa.codigoQR = codigoQR;
  }
}
