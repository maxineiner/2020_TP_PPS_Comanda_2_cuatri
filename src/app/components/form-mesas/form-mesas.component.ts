import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Mesa } from 'src/app/clases/mesa';
import { ImagenService } from 'src/app/services/imagen.service';
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
export class FormMesasComponent{
  @Input() opcion: OpcionForm;
  @Input() mesa: Mesa;
  popoverOptions = {
    header: 'Seleccione el tipo',
    translucent: true,
    cancelText: "Cerrar",
    okText: "Guardar"
  }
  codigoQR: any;

  constructor(private mesaService: MesaService, private imagenService: ImagenService,
              private toastController: ToastController) { }


  sacarFoto()
  {
    this.imagenService.sacarFoto('mesas');
  }

  crearMesa()
  {
    if(this.mesa && !this.mesa.id)
    {
      this.mesa.foto = "_";

      this.mesaService.crear(this.mesa)
                      .then(() => this.presentToast("Alta exitosa", 2000))
                      .catch(() => this.presentToast("No se pudo realizar el alta", 2000));
    }
    else
    {
      this.presentToast("Mesa existente", 2000);
    }
  }

  modificarMesa()
  {
    console.log("Modificar Mesa");
    this.mesa.foto = "_";

    if(this.mesa)
    {
      this.mesaService.actualizar(this.mesa)
                      .then(() => this.presentToast("Modificación exitosa", 2000))
                      .catch(() => this.presentToast("No se pudo modificar", 2000));
    }
  }

  borrarMesa()
  {
    console.log("Baja de mesa");
    if(this.mesa)
    {
      this.mesaService.borrar(this.mesa)
                      .then(() => this.presentToast("Baja realizada", 2000))
                      .catch(() => this.presentToast("No se pudo realizar baja", 2000));
    }
  }

  async presentToast(message, duration) {
    const toast = await this.toastController.create({
      message,
      duration 
    });
    toast.present();
  }
}
