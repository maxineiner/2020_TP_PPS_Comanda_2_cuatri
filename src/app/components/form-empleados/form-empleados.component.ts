
import { Component, Input, OnInit } from '@angular/core'
import { ToastController } from '@ionic/angular'
import { Empleado } from "src/app/clases/empleado";
import { EmpleadoService } from "src/app/services/empleado.service";

enum OpcionForm
{
  ALTA = "Alta",
  MODIFICACION = "Modificación",
  BAJA = "Baja",
}

@Component({
  selector: "app-form-empleados",
  templateUrl: "./form-empleados.component.html",
  styleUrls: ["./form-empleados.component.scss"],
})
export class FormEmpleadosComponent implements OnInit
{
  @Input() opcion: OpcionForm;
  @Input() empleado: Empleado;
  toastTime = 2000;

  popoverOptions = {
    header: "Seleccione el tipo",
    // translucent: true,
    // cancelText: "Cerrar",
    okText: "Guardar",
  };

  constructor(private empleadoService: EmpleadoService, private toastController: ToastController) { }

  ngOnInit(): void
  {
    if (this.opcion == "Alta")
    {
      this.empleado = new Empleado()
    }
  }

  /**
   * Alta de mesa
   */
  async altaEmpleado()
  {
    if (this.empleado && !this.empleado.id)
    {
      // Alta de mesa en DB
      this.empleadoService
        .crear(this.empleado)
        .then(() => this.presentToast('Alta exitosa'))
        .catch(() => this.presentToast('No se pudo realizar el alta'))
    } else
    {
      this.presentToast('Mesa existente')
    }
  }

  /**
   *  Modificacion de mesa
   */
  async modificarEmpleado()
  {
    console.log('Modificar Empleado')

    if (this.empleado)
    {
      // Se actualiza Mesa en DB
      this.empleadoService
        .actualizar(this.empleado)
        .then(() => this.presentToast('Modificación exitosa'))
        .catch(() => this.presentToast('No se pudo modificar'))
    }
  }

  /**
   * Baja lógica de empleado
   */
  borrarEmpleado()
  {
    console.log("Baja empleado");

    if (this.empleado)
    {
      this.empleadoService
        .borradoLogico(this.empleado)
        .then(() => this.presentToast('Baja realizada'))
        .catch(() => this.presentToast('No se pudo realizar baja'))
    }
  }

  //TODO: do this method generic for all forms
  // Toast para notificaciones
  async presentToast(message: string, duration?: number)
  {
    if (duration <= 0)
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
