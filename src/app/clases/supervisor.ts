import { Jefe } from './jefe';

export class Supervisor extends Jefe
{
  public static CrearSupervisor(
    id: string,
    nombre: string,
    apellido: string,
    dni: string,
    foto: string,
    isActive: boolean,
    cuil: string
  )
  {
    let supervisor = new Supervisor();

    supervisor.id = id;
    supervisor.nombre = nombre;
    supervisor.apellido = apellido;
    supervisor.dni = dni;
    supervisor.foto = foto;
    supervisor.isActive = isActive;
    supervisor.cuil = cuil;

    return supervisor;
  }
}
