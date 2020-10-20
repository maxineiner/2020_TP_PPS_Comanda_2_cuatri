import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { UtilsService } from 'src/app/servicios/utils.service';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.scss'],
})
export class SupervisorComponent implements OnInit {

  constructor(

    private scanner: BarcodeScanner,
    private camera: Camera,
    private utils: UtilsService
  ) { }
  mostrarContenidos = true;
  instanciaScanner;
  datosEscaneados;

  nombre = "";
  apellido = "";
  dni:any = "";
  cuil:any = "";
  perfil = "dueño";
  foto;
  ngOnInit() { }

  scanQrAltaUsuarios(): void {
    this.scanner.scan({ formats: 'PDF_417' }).then((data) => {
      this.datosEscaneados = data;
      this.cargarDatosQr(this.datosEscaneados);
    }, (err) => {
      console.log('Error: ' + err);
    });
  }

  cargarDatosQr(datos: any): void {
    var parsedData = datos.text.split('@');
    var nombre: string = (parsedData[2].toString());
    var apellido: string = parsedData[1].toString();
    var dni: number = parsedData[4];
    var cuil: number = parsedData[8];
    cuil = parseInt(cuil.toString().substr(0, 2) + dni + cuil.toString().substr(2));// por ej: 20 + dni + 5
    //Agrego mayuscula a solo la primera letra
    nombre = nombre.toLowerCase().substr(0, 1).toUpperCase() + nombre.toLowerCase().substr(1);
    apellido = apellido.toLowerCase().substr(0, 1).toUpperCase() + apellido.toLowerCase().substr(1);
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.cuil = cuil;
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
        this.foto = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        console.log(err);
      });
  }

  ValidarFormulario() {
    if (this.nombre.length > 20  || this.nombre.length == 0) {
      this.utils.presentAlert("Nombre inválido","","La cantidad de caracteres debe ser mayor a 0 y menor o igual 20.");
      return 1;
    }
    if (!this.ValidarSoloLetras(this.nombre)) {
      this.utils.presentAlert("Nombre inválido","","No debe contener caracteres numeros");
      return 1;
    }
    if (this.apellido.length > 20  || this.apellido.length == 0) {
      this.utils.presentAlert("Apellido inválido","","La cantidad de caracteres debe ser mayor a 0 y menor o igual 20.");
      return 1;
    }
    if (!this.ValidarSoloLetras(this.apellido)) {
      this.utils.presentAlert("Apellido inválido","","No debe contener caracteres numeros");
      return 1;
    }
    if (this.dni > 99999999 || this.dni < 10000000 || this.dni == "") {
      this.utils.presentAlert("DNI inválido","","Valor fuera de rango");
      return 1;
    }
    if (this.cuil > 99999999999 || this.cuil < 10000000000 || this.dni == "") {
      this.utils.presentAlert("CUIL inválido","","Valor fuera de rango");
      return 1;
    }
  }

  ValidarSoloLetras(texto: string) {
    var numeros = "1234567890";
    for (var i = 0; i < texto.length; i++) {
      if (numeros.indexOf(texto.charAt(i), 0) != -1) {
        return false;
      }
    }
    return true;
  }
}
