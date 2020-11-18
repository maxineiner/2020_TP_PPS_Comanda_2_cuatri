import { Injectable } from '@angular/core';
import { Encuesta } from '../clases/encuesta';
import { IDatabase } from '../interfaces/IDatabase';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService implements IDatabase<Encuesta>{

  constructor() { }

  crear(elemento: Encuesta): Promise<any>
  {
    throw new Error('Method not implemented.');
  }
  actualizar(elemento: Encuesta): Promise<any>
  {
    throw new Error('Method not implemented.');
  }
  leer(): Promise<Encuesta[]>
  {
    throw new Error('Method not implemented.');
  }
  borrar(elemento: Encuesta): Promise<any>
  {
    throw new Error('Method not implemented.');
  }
  leerPorId(id: string): Promise<Encuesta>
  {
    throw new Error('Method not implemented.');
  }

}
