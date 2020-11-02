
import { Component, Input, OnInit } from '@angular/core'
import { Jefe } from "src/app/clases/jefe";
import { JefeService } from "src/app/services/jefe.service";
import { AuthService } from "src/app/services/auth.service";
import { UIVisualService } from "src/app/services/uivisual.service"

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

  popoverOptions = {
    header: "Seleccione el tipo",
    okText: "Guardar",
  };

  constructor(private jefeService: JefeService, private authService: AuthService, private UIVisual: UIVisualService) { }

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
      this.authService
        .onRegisterJefe(this.jefe)
        .then(() => UIVisualService.presentToast('Alta exitosa'))
        .catch(() => UIVisualService.presentToast('No se pudo realizar el alta'))
    }
    else
    {
      UIVisualService.presentToast('Empleado existente')
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
        .then(() => UIVisualService.presentToast('Modificación exitosa'))
        .catch(() => UIVisualService.presentToast('No se pudo modificar'))
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
        .then(() => UIVisualService.presentToast('Baja realizada'))
        .catch(() => UIVisualService.presentToast('No se pudo realizar baja'))
    }
  }
}
