import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Usuario } from 'src/app/clases/usuario';
import { UtilsService } from 'src/app/servicios/utils.service';
import { TipoUsuario } from 'src/app/enums/tipo-usuario.enum';
import * as firebase from 'firebase';
@Component({
  selector: 'app-clientes-anonimos',
  templateUrl: './clientes-anonimos.component.html',
  styleUrls: ['./clientes-anonimos.component.scss'],
})
export class ClientesAnonimosComponent implements OnInit {

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
    this.user.perfil = TipoUsuario.CLIENTE_ANONIMO;
    this.user.foto = "";
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
        //Guardo la foto en una variable local
        this.foto;
        
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
    if(this.foto == undefined)
    {
      this.utils.presentAlert("Falta foto!","","Es obligatorio que tener una foto de la persona para continuar.");
      return 1;
    }
    //Una vez que pasan todas las validacion, recien ahi subo la foto.
    //this.SubirFotoFirestore(this.foto);
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

  SubirFotoFirestore(imagen) {
    this.utils.presentLoading();
    let storageRef = firebase.storage().ref();
    
    // Creo el nombre del archivo
    const filename = Math.random().toString(36).substring(2);

    // Creo la referencia de la imagen
    const imageRef = storageRef.child(`clientes/${filename}.jpg`);

    imageRef.putString(imagen, firebase.storage.StringFormat.DATA_URL)
      .then((snapshot) => {
        imageRef.getDownloadURL().then(url => {
          this.user.foto = url;
          this.RegistrarImagenEnBD(url, filename, TipoUsuario.CLIENTE_ANONIMO, this.user.nombre);
        });
      })
      .catch(error => {
        alert("Algo salio mal. " + JSON.stringify(error));
      })
  }

  RegistrarImagenEnBD(imagenURL, fileName, tipo, creador) {//Importante ------------------------
    try {

      var fechaActualStr = this.ObtenerFechaActual();
      var database = firebase.database();
      //var idFoto = this.crearIDFoto();
      
      database.ref("clientes/" + fileName).set({
        fileName: fileName,
        url: imagenURL,
        tipo: tipo,
        fecha: fechaActualStr,
        creador: creador,
        //id: idFoto,
      });

    }
    catch (e) {
      this.utils.presentAlert("Algo salio mal!","","Error al registrar imagen: " + e);
    }
  }

  RegistrarUsuarioEnBD(usuario:Usuario) {//Importante ------------------------
    try {

      //var fechaActualStr = this.ObtenerFechaActual();
      var database = firebase.database();
      //var idFoto = this.crearIDFoto();
      
      database.ref("clientes/").push({
        nombre: usuario.nombre,
        foto: usuario.foto,
        tipo: usuario.perfil,
      });

    }
    catch (e) {
      this.utils.presentAlert("Algo salio mal!","","Error al registrar al usuario: " + e);
    }
  }

  ObtenerFechaActual() {
    var now = new Date();
    return (now.getHours()) + ":" + (now.getMinutes()) + ":" + now.getSeconds() + " " + now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
  }

  ObtenerFechaActualObjDate (fechaStr: string): any {
    var horario = fechaStr.split(" ")[0];
    var fecha = fechaStr.split(" ")[1];

    var hora = horario.split(":")[0];
    var minutos = horario.split(":")[1];
    var segundos = horario.split(":")[2];

    var dia = fecha.split("/")[0];
    var mes = fecha.split("/")[1];
    var anio = fecha.split("/")[2];
    return new Date(parseInt(anio), parseInt(mes) - 1, parseInt(dia), parseInt(hora) - 1, parseInt(minutos), parseInt(segundos));
  }
}
