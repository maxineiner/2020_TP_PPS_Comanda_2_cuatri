import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Imagen } from '../clases/imagen';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { database } from 'firebase';
import { ToastController } from '@ionic/angular';
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
  async sacarFoto(): Promise<Imagen> {
    let imagen: Imagen = new Imagen();


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

      })
      .catch(error => {
        this.presentToast(error);
      })
    return imagen;
  }
  //Registra una imagen y la devuelve con su respectivo id y su url
  public async registrarUnaImagen(imagen: Imagen, rutaCarpetaStorage: string):Promise<Imagen> {
    let carpeta = rutaCarpetaStorage;
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
    return imagen;
  }
  //Registra un array de imagenes y lo devuelve con sus respectivos id y url
  public async registrarArrayImagenes(imagenes: Array<Imagen>, rutaCarpetaStorage: string):Promise<Array<Imagen>> {
    let carpeta = rutaCarpetaStorage;
    // Se sube imagen a Base de Datos
    imagenes.forEach(imagen => {
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
    return imagenes;
  }

  private async guardarImagen(imagen: Imagen, carpeta: string) {
    console.log("Guardar imagen-----------------------");
    const metadata: UploadMetadata = {
      contentType: 'image/jpeg',
      customMetadata: {
        /*  user : imagen.nombre,
         userName : imagen.descripcion,
         date : imagen.fecha, */
      }
    };
    // Se sube imagen al Firebase Storage
    return this.storage.ref(`${carpeta}/${imagen.id}`)
      .putString(imagen.base64, firebase.storage.StringFormat.BASE64, metadata).catch(error => console.log("Firebase Storage:", error));
  }
  //Crea una referencia en la carpeta imagenes de la base de datos, y devuelve el parametro imagen pero con el id de referencia 
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

  public borrar(imagen: Imagen): Promise<any> {
    return database().ref('imagenes/' + imagen.id)
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