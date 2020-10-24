import { Usuario } from './usuario';

export class Cliente extends Usuario {
  public static CrearCliente(
    id: string,
    nombre: string,
    apellido: string,
    dni: string,
    foto: string,
    isActive: boolean
  ) {
    let cliente = new Cliente();

    cliente.id = id;
    cliente.nombre = nombre;
    cliente.apellido = apellido;
    cliente.dni = dni;
    cliente.foto = foto;
    cliente.isActive = isActive;

    return cliente;
  }
}
