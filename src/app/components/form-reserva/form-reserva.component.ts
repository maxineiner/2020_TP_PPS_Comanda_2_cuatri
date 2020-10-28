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
  
  registroForm: FormGroup;
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
        this.registroForm.setValue({
          mesa: this.reserva.mesa,
          cliente: this.reserva.cliente,
          pedido: this.reserva.pedido,
          fecha: this.reserva.fecha,
          hora: this.reserva.hora,
        });
      } else
      {
        this.registroForm.reset();
      }

      if (this.opcion == OpcionForm.BAJA)
      {
        this.registroForm.disable();
      } else
      {
        this.registroForm.enable();
      }
    } catch (error)
    {
      console.error(error);
    }
  }

  crearForm()
  {
    this.registroForm = this.fb.group({
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
    this.reserva = new Reserva(this.registroForm.value);
    this.reservaService.crear(this.reserva).then(data =>
    {

    })
  }

  modificarProducto()
  {
    console.log("Modificando Reserva-------");
    this.reserva.mesa = this.registroForm.get("mesa").value;
    this.reserva.cliente = this.registroForm.get("cliente").value;
    this.reserva.fecha = this.registroForm.get("fecha").value;
    this.reserva.hora = this.registroForm.get("hora").value;

    this.reservaService
      .actualizar(this.reserva)
      .then(() =>
      {
        this.presentToast("Modificación exitosa", 2000);
        console.log("Modificado correctamente.");
      })
      .catch(() => this.presentToast("No se pudo modificar", 2000));
  }

  borrarProducto()
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
          this.registroForm.reset();
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
