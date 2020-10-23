import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Imagen } from 'src/app/clases/imagen';
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
  }
  codigoQR: any;
  auxiliarFoto: Imagen = new Imagen();
  imgPreview: string;

  constructor(private mesaService: MesaService, private imagenService: ImagenService,
              private toastController: ToastController) { }


  /**
   * Método para tomar foto y previsualizar
   */
  async sacarFoto()
  {
    const foto = await this.imagenService.subirFoto()
   
    this.imgPreview = `data:image/jpeg;base64,${foto.base64}`;
    this.auxiliarFoto = Imagen.CrearImagen("_", foto.base64, "_", foto.fecha);
  }

  /**
   * Alta de mesa
   */
  crearMesa()
  {
    if(this.mesa && !this.mesa.id)
    {
      this.imagenService.crearUnaImagen(this.auxiliarFoto, "/mesas")
          .then(img => {
            this.mesa.foto = img;
            this.mesaService.crear(this.mesa)
                .then(() => this.presentToast("Alta exitosa", 2000))
                .catch(() => this.presentToast("No se pudo realizar el alta", 2000));
          });  
    }
    else
    {
      this.presentToast("Mesa existente", 2000);
    }
  }

  modificarMesa()
  {
    console.log("Modificar Mesa");
    this.mesa.foto = new Imagen();

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
