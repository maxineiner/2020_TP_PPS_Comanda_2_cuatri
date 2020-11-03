import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Cliente, EstadoAceptacion } from "../clases/cliente";

@Injectable({
  providedIn: "root",
})
export class ClienteService
{
  public static clientes: Cliente[] = [];

  constructor(public firebase: AngularFireDatabase) { }

  public crear(cliente: Cliente, uid: string): Promise<any>
  {
    cliente.id = uid;

    //TODO: eliminar cuando tenga implementado la carga de imagenes
    cliente.foto = "-"
    cliente.isActive = true;
    cliente.estado = EstadoAceptacion.Pendiente;
    console.log(cliente)

    return this.firebase.database
      .ref("clientes/" + cliente.id)
      .set(cliente)
      .catch(console.error);
  }

  public actualizar(cliente: Cliente): Promise<any>
  {
    return this.firebase.database
      .ref("clientes/" + cliente.id)
      .update(cliente);
  }

  public borradoLogico(cliente: Cliente): Promise<any>
  {
    cliente.isActive = false;

    return this.actualizar(cliente);
  }

  public leer()
  {
    let clientes: Cliente[] = [];
    console.info("Fetch de todos los clientes");

    return new Promise<Cliente[]>((resolve) =>
    {
      this.firebase.database.ref("clientes").on("value", (snapshot) =>
      {
        clientes = [];

        snapshot.forEach((child) =>
        {
          var data: Cliente = child.val();
          clientes.push(
            Cliente.CrearCliente(
              data.id,
              data.nombre,
              data.apellido,
              data.dni,
              data.foto,
              data.email,
              data.isActive,
              data.estado,
              data.enListaDeEspera
            )
          );
        });

        ClienteService.clientes = clientes.filter(e => e.isActive);

        resolve(ClienteService.clientes);
      });
    });
  }

  public leerPorID(id: string)
  {
    return this.firebase.database
      .ref(`clientes/${id}`)
      .once('value');
  }
}
