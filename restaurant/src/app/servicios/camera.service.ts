import { Injectable } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { storage } from 'firebase';
import { v4 as uuid } from 'uuid';


//  import { Foto } from '../clases/foto';
 import { DatePipe } from '@angular/common';
 import * as firebase from 'firebase';
 import { Producto } from '../clases/producto';
import { UsuariosPageModule } from '../usuarios/usuarios.module';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(private camera: Camera) { }

   async tomarFoto() {
    let urlFoto
    const options: CameraOptions = {
      quality: 5,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      // mediaType: this.camera.MediaType.PICTURE,
      mediaType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true,
      sourceType: PictureSourceType.CAMERA
    };

    return this.camera.getPicture(options);

    // try { 
    //   let ubicacion = "productos/" + uuid();
    //   const result =   this.camera.getPicture(options);
    //   const image = `data:image/jpeg;base64,${result}`;
    //   const picture = storage().ref(ubicacion);
    //   picture.putString(image, 'data_url').then(()=>{
    //   // return this.guardarReferencia(ubicacion);
    //   var storage = firebase.storage();
    //   var storageRef = storage.ref(ubicacion);
      
    //    storageRef.getDownloadURL().then(url  => {
    //     console.warn('urlFoto');
    //      console.log(JSON.stringify(url));
    //      urlFoto =  JSON.stringify(url);
    //   });
    //   }); 
    // } catch (e) {
    //   console.log("dio un error dentro del catch");
    //   console.log(JSON.stringify(e.error));
    // }

    // // return this.camera.getPicture(options);
    // //  console.warn(urlFoto);
    // return JSON.stringify(urlFoto) 

  }

  async guardarReferencia(imagen: string) {
    imagen = 'data:image/jpeg;base64,' + imagen;
    let storageRef = firebase.storage().ref();

    const filename = Math.random().toString(36).substring(2);

    //OBTENGO LA REFERENCIA DE LA IMAGEN
    const imageRef = storageRef.child(`productos/${filename}.jpg`);


    return await imageRef.putString(imagen, firebase.storage.StringFormat.DATA_URL)
      .then((snapshot) => {
        //OBTENGO EL URL DE LA IMAGEN
        return imageRef.getDownloadURL();
      })
      .catch(error => {
        alert("Algo salio mal. " + JSON.stringify(error));
      })
 
  }

  // PATO
  base64ToImg(base64: string): string {
    return 'data:image/jpeg;base64,'.concat(base64);
  }
  
 /* private fotos: Foto[] = [];

  constructor(
    private camera: Camera,
    private webview: WebView,
    private date: DatePipe
  ) { }

  private getOpciones(): CameraOptions {
    return {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
  }

  public tomarFoto(): void {
    this.camera.getPicture(this.getOpciones())
    .then(datos => {
      this.fotos.unshift({
        filepath: this.webview.convertFileSrc(datos),
        webviewPath: datos,
        fecha: Date.now(),
        name: this.date.transform(Date.now(), 'yyyyMMddHHmmSSS').concat('.jpg')
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  public limpiarFotos(): void {
    this.camera.cleanup();
    this.fotos.splice(0, this.fotos.length);
  }

  public async subirFotos(): Promise<void> {

    this.fotos.forEach(async foto => 
 
      await this.storage.subirImagen(foto));
  }

  public getCantidad(): number {
    return this.fotos.length;
  }

  public getFotos(): Foto[] {
    return this.fotos;
  }

  guardarReferencia(pReferencia: string): any {
    console.log(pReferencia);
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var spaceRef = storageRef.child(pReferencia);

    spaceRef.getDownloadURL().then(url => {
      var messagesRef = firebase.database().ref().child("buenas");
      messagesRef.push({ carpeta: "buenas", usuario: this.usuarioActual, referencia: url });
    });
    return "";
  }*/

}
