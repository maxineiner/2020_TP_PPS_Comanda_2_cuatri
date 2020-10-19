import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Mesa } from '../clases/mesa';

@Injectable({
  providedIn: 'root'
})
export class MesaService {
  public static mesas: Mesa[] = [];

  constructor(public firebase: AngularFireDatabase) { }

  public crear(mesa: Mesa): Promise<any>
  {
    return this.firebase.database.ref('mesas')
                    .push()
                    .then((snapshot) => mesa.id = snapshot.key)
                    .then(() => this.actualizar(mesa))
                    .catch(console.error);
  }

  public actualizar(mesa: Mesa): Promise<any>
  {
    return this.firebase.database.ref('mesas/' + mesa.id)
                    .update(mesa)
                    .then(() => console.info("Actualizacion exitosa"))
                    .catch(() => console.info("No se pudo actualizar"));
  } 

  // Este método realiza una Baja Física, no usar de ser necesario
  public borrar(mesa: Mesa): Promise<any>
  {
    return this.firebase.database.ref('mesas/' + mesa.id)
                    .remove()
                    .then(() => console.info("Baja física exitosa"))
                    .catch(() => console.info("No se pudo actualizar"));
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
                                    data.foto, data.datosQR ));
          });
          MesaService.mesas = mesas.filter(mesa => mesa.datosQR.isAvailable == true);
          resolve(MesaService.mesas);
      })
    });
    return fetch;
  }
}
