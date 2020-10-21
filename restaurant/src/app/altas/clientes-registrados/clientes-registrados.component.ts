import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Usuario } from 'src/app/clases/usuario';
import { UtilsService } from 'src/app/servicios/utils.service';

@Component({
  selector: 'app-clientes-registrados',
  templateUrl: './clientes-registrados.component.html',
  styleUrls: ['./clientes-registrados.component.scss'],
})
export class ClientesRegistradosComponent implements OnInit {

  foto;
  datosEscaneados;
  constructor(
    private scanner: BarcodeScanner,
    private camera: Camera,
    private utils: UtilsService,
    public user: Usuario
  ) { }

  ngOnInit() { 
    this.user.nombre = "";
    this.user.apellido = "";
    this.user.dni = "";
  }

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

    //Agrego mayuscula a solo la primera letra
    nombre = nombre.toLowerCase().substr(0, 1).toUpperCase() + nombre.toLowerCase().substr(1);
    apellido = apellido.toLowerCase().substr(0, 1).toUpperCase() + apellido.toLowerCase().substr(1);

    //Aisgno variables procesadas al usuario
    this.user.nombre = nombre;
    this.user.apellido = apellido;
    this.user.dni = dni.toString();
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
    if (this.user.nombre.length > 20  || this.user.nombre.length == 0) {
      this.utils.presentAlert("Nombre inválido","","La cantidad de caracteres debe ser mayor a 0 y menor o igual 20.");
      return 1;
    }
    if (!this.ValidarSoloLetras(this.user.nombre)) {
      this.utils.presentAlert("Nombre inválido","","No debe contener caracteres numeros");
      return 1;
    }
    if (this.user.apellido.length > 20  || this.user.apellido.length == 0) {
      this.utils.presentAlert("Apellido inválido","","La cantidad de caracteres debe ser mayor a 0 y menor o igual 20.");
      return 1;
    }
    if (!this.ValidarSoloLetras(this.user.apellido)) {
      this.utils.presentAlert("Apellido inválido","","No debe contener caracteres numeros");
      return 1;
    }
    if (parseInt(this.user.dni) > 99999999 || parseInt(this.user.dni) < 10000000 || this.user.dni == "") {
      this.utils.presentAlert("DNI inválido","","Valor fuera de rango");
      return 1;
    }
    if(this.foto == undefined)
    {
      this.utils.presentAlert("Falta foto!","","Es obligatorio que tener una foto de la persona para continuar.");
      return 1;
    }
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


}
