import { Usuario } from './usuario';

export enum EstadoAceptacion
{
  Pendiente = 'Pendiente',
  Aceptado = 'Aceptado',
  Rechazado = 'Rechazado'
}

export class Cliente extends Usuario
{
  estado: EstadoAceptacion;

  public static CrearCliente(
    id: string,
    nombre: string,
    apellido: string,
    dni: string,
    foto: string,
    email: string,
    isActive: boolean,
    estado: EstadoAceptacion
  )
  {
    let cliente = new Cliente();

    cliente.id = id;
    cliente.nombre = nombre;
    cliente.apellido = apellido;
    cliente.dni = dni;
    cliente.foto = foto;
    cliente.email = email;
    cliente.isActive = isActive;
    cliente.estado = estado;

    return cliente;
  }
}