import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Imagen } from '../clases/imagen';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

import { AngularFireStorage } from '@angular/fire/storage';
import { database } from 'firebase';
import { ToastController } from '@ionic/angular';
import { Producto } from '../clases/producto';

import { UploadMetadata } from '@angular/fire/storage/interfaces';

const { Camera } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  public static imagenes = [];

  constructor(private storage: AngularFireStorage, private toastController: ToastController) {
  }
  //Abre la camara, si toman la foto devuelve un objeto tipo Imagen, recibe una ruta a la carpeta que quieras guardar la foto
  async sacarFoto(rutaCarpetaStorage: string): Promise<Imagen> {
    let imagen: Imagen = new Imagen();
    let carpeta = rutaCarpetaStorage;

    Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Base64,
      correctOrientation: true,
      source: CameraSource.Prompt,
      promptLabelHeader: 'Subir foto',
      promptLabelCancel: 'Cancelar',
      promptLabelPhoto: 'Subir desde galería',
      promptLabelPicture: 'Nueva foto',

    })
      .then(imageData => {
        console.log(imageData);
        imagen.base64 = imageData.base64String;
        imagen.fecha = new Date().toUTCString();
        // Se sube imagen a Base de Datos
        this.crear(imagen).then(img => {
          imagen = img;
          // Se guarda imagen en el Storage
          this.guardarImagen(imagen, carpeta)
            .then(snapshot => snapshot.ref.getDownloadURL()
              .then(res => imagen.url = res))
            .finally(() => this.actualizar(imagen));
        })
          .catch(console.error);
      })
      .catch(error => {
        this.presentToast(error);
      })
    return imagen;
  }

  async guardarImagen(imagen: Imagen, carpeta: string) {
    console.log("Guardar imagen-----------------------");
    const metadata: UploadMetadata = {
      contentType: 'image/jpeg',
      customMetadata: {
        /*  user : imagen.nombre,
         userName : imagen.descripcion,
         date : imagen.fecha, */
      }
    };

    console.log(imagen);
    // Se sube imagen al Firebase Storage
    return this.storage.ref(`${carpeta}/${imagen.id}`)
      .putString(imagen.base64, firebase.storage.StringFormat.BASE64, metadata).catch(error => console.log("Firebase Storage:", error));
  }

  public async descargarImagen(carpeta: string, usuario: string) {
    return this.storage.ref(`${carpeta}/${usuario}`).getDownloadURL()
  }

  private async crear(imagen: Imagen) {
    console.log(imagen);
    database().ref('imagenes')
      .push()
      .then(snapshot => imagen.id = snapshot.key)
      .catch(() => console.info("No se pudo realizar alta"));
    return imagen;
  }

  public actualizar(imagen: Imagen): Promise<any> {
    return database().ref('imagenes/' + imagen.id)
      .update(imagen)
      .then(() => console.info("Actualizacion exitosa"))
      .catch(() => console.info("No se pudo actualizar"));
  }

  public borrar(id: number): Promise<any> {
    return database().ref('imagenes/' + id)
      .remove()
      .then(() => console.info("Imagen eliminada"))
      .catch(() => console.info("No se pudo realizar la baja."));
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}