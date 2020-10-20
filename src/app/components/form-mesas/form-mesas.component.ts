import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DatosMesa, Mesa } from 'src/app/clases/mesa';
import { MesaService } from 'src/app/services/mesa.service';

enum OpcionForm
{
  ALTA = "Alta",
  MODIFICACION = "Modificación",
  BAJA = "Baja"
}


@Component({
  selector: 'app-form-mesas',
  templateUrl: './form-mesas.component.html',
  styleUrls: ['./form-mesas.component.scss'],
})
export class FormMesasComponent implements OnInit {
  @Input() opcion: OpcionForm;
  @Input() mesa: Mesa;
  popoverOptions = {
    header: 'Seleccione el tipo',
    translucent: true,
    cancelText: "Cerrar",
    okText: "Guardar"
  }
  codigoQR: any;

  constructor(private mesaService: MesaService, private toastController: ToastController) { }

  ngOnInit() 
  {
  }

  sacarFoto()
  {

  }

  crearMesa()
  {
    this.mesa.datosQR = new DatosMesa( true , null, "Sin pedido");
    console.log("Crear Mesa");
    if(this.mesa && !this.mesa.id)
    {
      this.mesaService.crear(this.mesa)
                      .then(() => this.presentToast("Alta exitosa"))
                      .catch(() => this.presentToast("No se pudo realizar el alta"));
    }
    else
    {
      this.presentToast("Mesa existente");
    }
  }

  modificarMesa()
  {
    console.log("Modificar Mesa");
    console.log(this.mesa);
    this.mesa.foto = "_";
    if(this.mesa)
    {
      this.mesaService.actualizar(this.mesa)
                      .then(() => this.presentToast("Modificación exitosa"))
                      .catch(err => this.presentToast("No se pudo modificar"));
    }
  }

  borrarMesa()
  {
    console.log("Baja de mesa");
    if(this.mesa)
    {
      this.mesa.foto = "_";
      this.mesaService.borrar(this.mesa)
                      .then(() => this.presentToast("Baja realizada"))
                      .catch(err => this.presentToast("No se pudo realizar baja"));
    }
  }

  submit()
  {
    console.log(this.mesa);
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
