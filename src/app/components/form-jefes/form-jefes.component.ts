
import { Component, Input, OnInit } from '@angular/core'
import { ToastController } from '@ionic/angular'
import { Jefe } from "src/app/clases/jefe";
import { JefeService } from "src/app/services/jefe.service";

enum OpcionForm
{
  ALTA = "Alta",
  MODIFICACION = "Modificación",
  BAJA = "Baja",
}

@Component({
  selector: "app-form-jefes",
  templateUrl: "./form-jefes.component.html",
  styleUrls: ["./form-jefes.component.scss"],
})
export class FormJefesComponent implements OnInit
{
  @Input() opcion: OpcionForm;
  @Input() jefe: Jefe;
  toastTime = 2000;

  popoverOptions = {
    header: "Seleccione el tipo",
    // translucent: true,
    // cancelText: "Cerrar",
    okText: "Guardar",
  };

  constructor(private jefeService: JefeService, private toastController: ToastController) { }

  ngOnInit(): void
  {
    if (this.opcion == "Alta")
    {
      this.jefe = new Jefe()
    }
  }

  /**
   * Alta de jefe
   */
  async altaJefe()
  {
    if (this.jefe && !this.jefe.id)
    {
      // Alta de jefe en DB
      this.jefeService
        .crear(this.jefe)
        .then(() => this.presentToast('Alta exitosa'))
        .catch(() => this.presentToast('No se pudo realizar el alta'))
    }
    else
    {
      this.presentToast('Jefe existente')
    }
  }

  /**
   *  Modificacion de jefe
   */
  async modificarJefe()
  {
    console.log('Modificar Jefe')

    if (this.jefe)
    {
      // Se actualiza Mesa en DB
      this.jefeService
        .actualizar(this.jefe)
        .then(() => this.presentToast('Modificación exitosa'))
        .catch(() => this.presentToast('No se pudo modificar'))
    }
  }

  /**
   * Baja lógica de jefe
   */
  borrarJefe()
  {
    console.log("Baja jefe");

    if (this.jefe)
    {
      this.jefeService
        .borradoLogico(this.jefe)
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
