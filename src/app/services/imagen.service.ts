import { Injectable } from "@angular/core";
import { Imagen } from "../clases/imagen";
import {
  Plugins,
  CameraResultType,
  CameraSource,
  Capacitor,
} from "@capacitor/core";
import { AngularFireStorage } from "@angular/fire/storage";
import { ToastController } from "@ionic/angular";
import { UploadMetadata } from "@angular/fire/storage/interfaces";
import {
  MediaCapture,
  MediaFile,
  CaptureError,
  CaptureImageOptions,
} from "@ionic-native/media-capture/ngx";
import { AngularFireDatabase } from "@angular/fire/database";
const { Camera } = Plugins;
declare const window: any;

@Injectable({
  providedIn: "root",
})
export class ImagenService {
  constructor(
    private storage: AngularFireStorage,
    private firebaseDB: AngularFireDatabase,
    private toastController: ToastController,
    private mediaCapture: MediaCapture
  ) {}

  /** Permite sacar multiples fotos y devuelve un array de Imagenes*/
  async tomarFotos(cantidadDeFotos: number) {
    let options: CaptureImageOptions = { limit: cantidadDeFotos };
    let fotos: Array<Imagen>;
    await this.mediaCapture.captureImage(options).then(
      async (data: MediaFile[]) => {
        await this.convertirMediaFileAImagen(data).then((imagenes) => {
          fotos = imagenes;
        });        
      },
      (err: CaptureError) => {
        console.error("Error al sacar fotos ", err);
      }
    );
    return fotos;
  }
  /**Convierte un archivo MediaFile[] a Array<Imagen>.
   * Agregandoles la fecha y una url local(se cambia cuando se guarda definitivamente en el Storage)
   */
  private async convertirMediaFileAImagen(
    data: MediaFile[]
  ): Promise<Array<Imagen>> {
    var fotos: Array<any> = new Array();
    var i, len;
    for (i = 0, len = data.length; i < len; i += 1) {
      let imagen: Imagen = new Imagen();
      imagen.url = window.Ionic.WebView.convertFileSrc(data[i].fullPath);
      imagen.fecha = new Date().toUTCString();
      this.convertirArchivoABase64(data[i].fullPath, function (imgbase) {
        imagen.base64 = imgbase;
      });
      fotos.push(imagen);
    }
    return fotos;
  }
  /**
   * Esta funcion convierte un archivo a formato Base64
   * @path string con la ruta local hacia el archivo
   * @callback function recibe como primer parámetro el la imagen base64
   */
  convertirArchivoABase64(path, callback) {
    window.resolveLocalFileSystemURL(path, archivoEncontrado, fail);
    function fail(e) {
      console.error("No se pudo acceder al archivo en este dispositivo");
    }
    function archivoEncontrado(archivo) {
      archivo.file(function (file) {
        var reader = new FileReader();
        reader.onloadend = function (e) {
          var content = this.result;
          callback(content);
        };
        reader.readAsDataURL(file);
      });
    }
  }
  /**
   * Subir foto del almacenamiento del dispositivo
   */
  async subirFoto(): Promise<Imagen> {
    let imagen: Imagen = new Imagen();

    const image = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.Base64,
        correctOrientation: true,
        source: CameraSource.Prompt,
        promptLabelHeader: "Subir foto",
        promptLabelCancel: "Cancelar",
        promptLabelPhoto: "Subir desde galería",
        promptLabelPicture: "Nueva foto",
      })

    console.log(image);
    imagen.base64 = image.base64String;
    imagen.fecha = new Date().toUTCString();
      
    return imagen;
  }

  /**
   * Registra una imagen en la base de datos y la devuelve con su respectivo id y su url
   *  @imagen Imagen que se desea guardar
   * @rutaCarpetaStorage Ruta de la base de datos donde guardar el array, ej '/productos'
   */
  public async crearUnaImagen(
    imagen: Imagen,
    rutaCarpetaStorage: string
  ): Promise<Imagen> {
    let carpeta = rutaCarpetaStorage;
    // Se sube imagen a Base de Datos
    this.crear(imagen)
      .then((img) => {
        imagen = img;
        // Se guarda imagen en el Storage
        this.guardarImagen(imagen, carpeta)
          .then((snapshot) =>
            snapshot.ref.getDownloadURL().then((res) => (imagen.url = res))
          )
          .finally(() => this.actualizar(imagen));
      })
      .catch(console.error);
    return imagen;
  }

  /**
   * Registra un array de imagenes en la base de datos, Guardando el archivo en Firebase.Storage y lo devuelve con sus respectivos id y url
   * @imagenes Array<Imagen> el array que se decea guardar
   * @rutaCarpetaStorage Ruta de la base de datos donde guardar el array, ej '/productos'
   */
  public async crearArrayImagenes(
    imagenes: Array<Imagen>,
    rutaCarpetaStorage: string
  ): Promise<Array<Imagen>> {
    let carpeta = rutaCarpetaStorage;
    // Se sube imagen a Base de Datos
    imagenes.forEach((imagen) => {
      this.crear(imagen)
        .then((img) => {
          imagen = img;
          // Se guarda imagen en el Storage
          this.guardarImagen(imagen, carpeta)
            .then((snapshot) =>
              snapshot.ref.getDownloadURL().then((res) => (imagen.url = res))
            )
            .finally(() => this.actualizar(imagen));
        })
        .catch(console.error);
    });
    return imagenes;
  }

  private async guardarImagen(imagen: Imagen, carpeta: string) {
    console.log("Guardar imagen-----------------------");
    const metadata: UploadMetadata = {
      contentType: "image/jpeg",
      customMetadata: {},
    };
    // Se sube imagen al Firebase Storage
    return this.storage
      .ref(`${carpeta}/${imagen.id}`)
      .putString(imagen.base64, "data_url", metadata)
      .catch((error) => console.error("Firebase Storage:", error));
  }

  /**
   * Crea una referencia en la carpeta imagenes de la base de datos (Realtime data base), y devuelve el parametro imagen pero con el id de referencia
   */
  private async crear(imagen: Imagen) {
    this.firebaseDB.database
      .ref("imagenes")
      .push()
      .then((snapshot) =>{
        imagen.id = snapshot.key;
        console.log('Creado correctamente');
      })
      .catch(() => console.info("No se pudo realizar alta"));
    return imagen;
  }

  public actualizar(imagen: Imagen): Promise<any> {
    return this.firebaseDB.database
      .ref("imagenes/" + imagen.id)
      .update(imagen)
      .then(() => console.info("Actualizacion exitosa"))
      .catch(() => console.info("No se pudo actualizar"));
  }

  public borrar(imagen: Imagen): Promise<any> {
    return this.firebaseDB.database
      .ref("imagenes/" + imagen.id)
      .remove()
      .then(() => console.info("Imagen eliminada"))
      .catch(() => console.info("No se pudo realizar la baja."));
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }
}
