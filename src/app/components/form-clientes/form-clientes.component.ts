
import { Component, Input, OnInit } from '@angular/core'
import { ToastController } from '@ionic/angular'
import { Cliente } from "src/app/clases/cliente";
import { ClienteService } from "src/app/services/cliente.service";

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
  toastTime = 2000;

  constructor(private clienteService: ClienteService, private toastController: ToastController) { }

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
      // Alta de cliente en DB
      this.clienteService
        .crear(this.cliente)
        .then(() => this.presentToast('Alta exitosa'))
        .catch(() => this.presentToast('No se pudo realizar el alta'))
    }
    else
    {
      this.presentToast('Cliente existente')
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
        .then(() => this.presentToast('Modificación exitosa'))
        .catch(() => this.presentToast('No se pudo modificar'))
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
        .then(() => this.presentToast('Baja realizada'))
        .catch(() => this.presentToast('No se pudo realizar baja'))
    }
  }

  //TODO: do this method generic for all components
  // Toast para notificaciones
  async presentToast(message: string, duration?: number)
  {
    if (duration === undefined || duration <= 0)
    {
      duration = this.toastTime
    }
    const toast = await this.toastController.create({
      message,
      duration: this.toastTime,
    })
    toast.present()
  }
}
