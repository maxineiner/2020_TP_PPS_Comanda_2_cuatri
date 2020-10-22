import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Mesa } from 'src/app/clases/mesa';
import { EstadosMesa } from 'src/app/enums/estado-mesa.enum';
import { UtilsService } from 'src/app/servicios/utils.service';
import * as firebase from 'firebase';
import { TipoMesa } from 'src/app/enums/tipo-mesa.enum';
@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss'],
})
export class MesasComponent implements OnInit {

  foto;
  datosEscaneados;
  constructor(
    private scanner: BarcodeScanner,
    private camera: Camera,
    private utils: UtilsService,
    public mesa: Mesa,
  ) { }

  ngOnInit() {
    this.mesa.numero = undefined;
    this.mesa.cantidad = undefined;
    this.mesa.estado = EstadosMesa.LIBRE;
    this.mesa.foto = undefined;
    this.mesa.qr = undefined;
  }

  onSelectMesas(e) {
    switch (parseInt(e)) {
      case 0:
        this.mesa.tipo = TipoMesa.NORMAL;
        break;
      case 1:
        this.mesa.tipo = TipoMesa.VIP;
        break;
      case 2:
        this.mesa.tipo = TipoMesa.DISCAPACITADOS;
        break;
    }
  }

  scanQr(): void {
    this.scanner.scan({ formats: 'QR_CODE' }).then((data) => {
      this.mesa.qr = data.text;
    }, (err) => {
      console.log('Error: ' + err);
    });
  }




  TomarFoto() {
    const options: CameraOptions = {
      quality: 10,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true
    }
    this.camera.getPicture(options)
      .then((imageData) => {
        this.mesa.foto = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        console.log(err);
      });
  }

  ValidarFormulario() {
    if (this.mesa.numero <= 0 || this.mesa.numero >= 999 || this.mesa.numero == undefined) {
      this.utils.presentAlert("Numero de mesa inválido", "", "El numero de mesa no debe ser menor a 1 ni mayor a 999");
      return 1;
    }
    if (this.mesa.cantidad <= 0 || this.mesa.cantidad >= 50 || this.mesa.cantidad == undefined) {
      this.utils.presentAlert("Cantidad de comensales inválido", "", "La cantidad de comensales no debe ser menor a 1 ni mayor a 50");
      return 1;
    }
    if (this.mesa.tipo == undefined) {
      this.utils.presentAlert("Falta definir tipo de mesa!", "", "Es obligatorio que elija de que tipo es la mesa para continuar.");
      return 1;
    }
    if (this.mesa.foto == undefined) {
      this.utils.presentAlert("Falta foto!", "", "Es obligatorio que tener una foto de la persona para continuar.");
      return 1;
    }
    if (this.mesa.qr == undefined) {
      this.utils.presentAlert("Falta qr!", "", "Es obligatorio asociar la mesa a un código qr.");
      return 1;
    }

    this.utils.presentLoadingAuto(2000);
    //----------- USAR SOLO SI YA SE TIENE DEFINIDA LA BASE DE DATOS---------
    this.AltaMesa();
    return 0;
  }

  //Valida que solo haya letras en una cadena
  ValidarSoloLetras(texto: string) {
    var numeros = "1234567890";
    for (var i = 0; i < texto.length; i++) {
      if (numeros.indexOf(texto.charAt(i), 0) != -1) {
        return false;
      }
    }
    return true;
  }


  //----------- USAR SOLO SI YA SE TIENE DEFINIDA LA BASE DE DATOS---------
  AltaMesa() {

    this.SubirFotoStorage(this.foto);
  }

  SubirFotoStorage(imagen) {
    this.utils.presentLoading();
    let storageRef = firebase.storage().ref();

    // Creo el nombre del archivo
    //const filename = Math.random().toString(36).substring(2);
    const filename = this.mesa.numero;
    // Creo la referencia de la imagen
    const imageRef = storageRef.child(`clientes/${filename}.jpg`);

    imageRef.putString(imagen, firebase.storage.StringFormat.DATA_URL)
      .then((snapshot) => {
        imageRef.getDownloadURL().then(url => {
          this.mesa.foto = url;
          //this.RegistrarImagenMesaEnBD(url, filename, this.mesa.numero);
        });
      })
      .catch(error => {
        this.utils.presentAlert("Algo salio mal...", "", JSON.stringify(error));
      })
  }

  RegistrarMesaEnBD(mesa: Mesa) {//Importante ------------------------
    try {

      //var fechaActualStr = this.ObtenerFechaActual();
      var database = firebase.database();
      //var idFoto = this.crearIDFoto();

      database.ref("mesas/").push({
        numero: mesa.numero,
        cantidad: mesa.cantidad,
        estado: mesa.estado,
        foto: mesa.foto,
        tipo: mesa.tipo,
        qr: mesa.qr
      })
    }
    catch (e) {
      this.utils.presentAlert("Algo salio mal!", "", "Error al registrar la mesa: " + e);
    }
  }

}