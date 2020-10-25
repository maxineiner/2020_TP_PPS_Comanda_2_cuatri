import { Jefe } from './jefe';

export class Dueno extends Jefe {
  public static CrearDueno(
    id: string,
    nombre: string,
    apellido: string,
    dni: string,
    foto: string,
    isActive: boolean,
    cuil: string
  ) {
    let dueno = new Dueno();

    dueno.id = id;
    dueno.nombre = nombre;
    dueno.apellido = apellido;
    dueno.dni = dni;
    dueno.foto = foto;
    dueno.isActive = isActive;
    dueno.cuil = cuil;

    return dueno;
  }
}
