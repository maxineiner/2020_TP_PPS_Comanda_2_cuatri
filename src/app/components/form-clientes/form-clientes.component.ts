
import { Component, Input, OnInit } from '@angular/core'
import { Cliente } from "src/app/clases/cliente";
import { ClienteService } from "src/app/services/cliente.service";
import { AuthService } from "src/app/services/auth.service";
import { UIVisualService } from "src/app/services/uivisual.service"

enum OpcionForm
{
  ALTA = "Alta",
  MODIFICACION = "Modificación",
  BAJA = "Baja",
}

@Component({
  selector: "app-form-clientes",
  templateUrl: "./form-clientes.component.html",
  styleUrls: ["./form-clientes.component.scss"],
})
export class FormClientesComponent implements OnInit
{
  @Input() opcion: OpcionForm;
  @Input() cliente: Cliente;

  constructor(private clienteService: ClienteService, private authService: AuthService, private UIVisual: UIVisualService) { }

  ngOnInit(): void
  {
    if (this.opcion == "Alta")
    {
      this.cliente = new Cliente()
    }
  }

  /**
   * Alta de cliente
   */
  async altaCliente()
  {
    if (this.cliente && !this.cliente.id)
    {
      this.authService
        .onRegisterCliente(this.cliente)
        .then(() => UIVisualService.presentToast('Alta exitosa'))
        .catch(() => UIVisualService.presentToast('No se pudo realizar el alta'))
    }
    else
    {
      UIVisualService.presentToast('Cliente existente')
    }
  }

  /**
   *  Modificacion de cliente
   */
  async modificarCliente()
  {
    console.log('Modificar Cliente')

    if (this.cliente)
    {
      // Se actualiza Mesa en DB
      this.clienteService
        .actualizar(this.cliente)
        .then(() => UIVisualService.presentToast('Modificación exitosa'))
        .catch(() => UIVisualService.presentToast('No se pudo modificar'))
    }
  }

  /**
   * Baja lógica de cliente
   */
  borrarCliente()
  {
    console.log("Baja cliente");

    if (this.cliente)
    {
      this.clienteService
        .borradoLogico(this.cliente)
        .then(() => UIVisualService.presentToast('Baja realizada'))
        .catch(() => UIVisualService.presentToast('No se pudo realizar baja'))
    }
  }
}
