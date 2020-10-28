import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservaService } from '../../services/reserva.service';
import { Reserva } from '../../clases/reserva';
import { ToastController } from '@ionic/angular';
import { MesaService } from '../../services/mesa.service';
import { Mesa } from '../../clases/mesa';
import { Cliente } from 'src/app/clases/cliente';
import { Usuario } from 'src/app/clases/usuario';
enum OpcionForm
{
  ALTA = "Alta",
  MODIFICACION = "Modificación",
  BAJA = "Baja",
}
@Component({
  selector: 'app-form-reserva',
  templateUrl: './form-reserva.component.html',
  styleUrls: ['./form-reserva.component.scss'],
})
export class FormReservaComponent
{

  @Input() opcion: OpcionForm;
  @Input() reserva: Reserva;
  
  reservaForm: FormGroup;
  mesas:Array<Mesa>;
  cliente:Usuario;


  constructor(
    private fb: FormBuilder,
    private reservaService: ReservaService,
    private toastController: ToastController,
    private mesasService:MesaService
  )
  {
    this.crearForm();
    this.mesasService.leer().then(mesas=>{
      this.mesas = mesas;
      console.log(mesas);
    })
  }
  ngOnChanges()
  {
    this.rellenarFormulario();
  }

  rellenarFormulario()
  {
    try
    {
      if (this.reserva && this.opcion != OpcionForm.ALTA)
      {
        this.reservaForm.setValue({
          mesa: this.reserva.mesa,
          cliente: this.reserva.cliente,
          pedido: this.reserva.pedido,
          fecha: this.reserva.fecha,
          hora: this.reserva.hora,
        });
      } else
      {
        this.reservaForm.reset();
      }

      if (this.opcion == OpcionForm.BAJA)
      {
        this.reservaForm.disable();
      } else
      {
        this.reservaForm.enable();
      }
    } catch (error)
    {
      console.error(error);
    }
  }

  crearForm()
  {
    this.reservaForm = this.fb.group({
      mesa: ["", Validators.required],
      cliente: ["", Validators.required],
      pedido: ["", [Validators.required],
      ],
      fecha: ["", [Validators.required]],
      hora: [""],
    });
  }

  crear()
  {
    this.reserva = new Reserva(this.reservaForm.value);
    this.reservaService.crear(this.reserva).then(data =>
    {

    })
  }

  modificarReserva()
  {
    console.log("Modificando Reserva-------");
    this.reserva.mesa = this.reservaForm.get("mesa").value;
    this.reserva.cliente = this.reservaForm.get("cliente").value;
    this.reserva.fecha = this.reservaForm.get("fecha").value;
    this.reserva.hora = this.reservaForm.get("hora").value;

    this.reservaService
      .actualizar(this.reserva)
      .then(() =>
      {
        this.presentToast("Modificación exitosa", 2000);
        console.log("Modificado correctamente.");
      })
      .catch(() => this.presentToast("No se pudo modificar", 2000));
  }

  borrarReserva()
  {
    console.log("Baja de reserva------");
    if (this.reserva)
    {
      this.reserva.isActive = false;
      this.reservaService
        .actualizar(this.reserva)
        .then(() =>
        {
          this.presentToast("Baja realizada", 2000);
          this.reservaForm.reset();
        })
        .catch(() => this.presentToast("No se pudo realizar baja", 2000));
    }
  }

  async presentToast(message, duration)
  {
    const toast = await this.toastController.create({
      message,
      duration,
    });
    toast.present();
  }

}
