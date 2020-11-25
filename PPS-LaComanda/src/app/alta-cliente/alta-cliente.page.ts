import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DatabaseService } from "../servicios/database.service";
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import firebase from 'firebase/app';
import { AngularFireStorage } from "@angular/fire/storage"
import { Usuariosbd } from "../clases/usuariosbd";
import { ComplementosService } from 'src/app/servicios/complementos.service';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.page.html',
  styleUrls: ['./alta-cliente.page.scss'],
})
export class AltaClientePage implements OnInit {
  pickedName: string;
  miFormulario: FormGroup;
  miFormularioAnonimo: FormGroup;
  usuarioJson = {
    nombre: "",
    apellido: "",
    dni: "",
    foto: "../../assets/icon/iconLogoMovimiento.png",
    perfil: "Cliente",
    correo: "",
    contrasenia: "",
    estado: "esperando",
    estadoMesa: "sinMesa",
  };

  barcodeOptions = {
    "prompt": "Place a barcode inside the scan area",
    "formats": "QR_CODE,PDF_417",
    "orientation": "landscape"
  };

  anonimoJson = {
    nombre: "",
    foto: "../../assets/icon/iconLogoMovimiento.png",
    perfil: "Anonimo",
    estado: "esperando",
    estadoMesa: "sinMesa"
  };
  pathImagen: string;

  listaPerfiles = [
    { perfil: "Cliente" },
    { perfil: "Anonimo" }
  ];

  constructor(
    private router: Router,
    private qr: BarcodeScanner,
    private camera: Camera,
    private bd: DatabaseService,
    private formBuilder: FormBuilder,
    private st: AngularFireStorage,
    private complemetos: ComplementosService) {
    this.miFormulario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,20}$')]],
      apellido: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,20}$')]],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      contrasenia: ['', [Validators.required, Validators.pattern('^[a-z0-9_-]{6,18}$')]],
      correo: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+\\s*$')]],
    });
    this.miFormularioAnonimo = this.formBuilder.group({
      nombreAnonimo: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,20}$')]],
    });
  }

  validation_messages = {
    'nombre': [
      { type: 'required', message: 'El nombre es requerido.' },
      { type: 'pattern', message: 'Introduzca un nombre de mínimo 3 a 20 caracteres y no números.' }
    ],
    'nombreAnonimo': [
      { type: 'required', message: 'El nombre es requerido.' },
      { type: 'pattern', message: 'Introduzca un nombre de mínimo 3 a 20 caracteres y no números.' }
    ],
    'apellido': [
      { type: 'required', message: 'El apellido es requerido.' },
      { type: 'pattern', message: 'Introduzca un apellido de mínimo 3 a 20 caracteres y no números.' }
    ],
    'dni': [
      { type: 'required', message: 'El DNI es requerido.' },
      { type: 'pattern', message: 'Introduzca un DNI válido(8 caracteres).' }
    ],
    'correo': [
      { type: 'required', message: 'El correo electronico es requerido.' },
      { type: 'pattern', message: 'Introduzca un correo electrónico válido.' }
    ],
    'contrasenia': [
      { type: 'required', message: 'La contraseña es requerida.' },
      { type: 'pattern', message: 'La contraseña debe tener entre 6 y 18 caracteres.' }
    ]
  };

  ngOnInit() {
    this.pickedName = "Cliente";
  }

  pickerUser(pickedName) {
    this.listaPerfiles.forEach((usuario) => {
      if (usuario.perfil == pickedName && pickedName == "Cliente") {
        this.usuarioJson.perfil = pickedName;
      }
      else {
        this.anonimoJson.perfil = pickedName;
      }
    })
  }

  registrar() {
    if (this.pathImagen != null) {
      this.st.storage.ref(this.pathImagen).getDownloadURL().then((link) => {
        this.usuarioJson.foto = link;
        this.anonimoJson.foto = link;
        if (this.pickedName == "Cliente") {
          this.bd.crear('usuarios', this.usuarioJson);
          this.limpiarCampos();
          this.complemetos.presentToastConMensajeYColor("El estado del cliente esta pendiente al registro.", "primary");
        }
        else {
          this.bd.crear('usuarios', this.anonimoJson);
          localStorage.setItem('nombreAnonimo', this.anonimoJson.nombre);
          localStorage.setItem('tieneCorreo', 'sinCorreo');
          this.complemetos.presentToastConMensajeYColor("Anónimo exitoso", "primary");
          this.router.navigate(['/home']);
        }
      });
    }
    else {
      if (this.pickedName == "Cliente") {
        this.bd.crear('usuarios', this.usuarioJson);
        this.limpiarCampos();
        this.complemetos.presentToastConMensajeYColor("El estado del cliente esta pendiente al registro.", "primary");
      }
      else {
        this.bd.crear('usuarios', this.anonimoJson);
        localStorage.setItem('nombreAnonimo', this.anonimoJson.nombre);
        localStorage.setItem('tieneCorreo', 'sinCorreo');
        this.router.navigate(['/home']);
        this.complemetos.presentToastConMensajeYColor("Anónimo exitoso", "primary");
      }
    }
  }

  tomarFotografia() {
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 600,
      targetWidth: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }
    this.camera.getPicture(options).then((imageData) => {
      var base64Str = 'data:image/jpeg;base64,' + imageData;
      this.usuarioJson.foto = base64Str;
      let obtenerMili = new Date().getTime();
      var nombreFoto = "usuarios/" + obtenerMili + "." + this.usuarioJson.dni + ".jpg";
      var storageRef = firebase.storage().ref();
      var childRef = storageRef.child(nombreFoto);
      this.pathImagen = nombreFoto;
      childRef.putString(base64Str, 'data_url').then(function(snapshot) { })
    }, (Err) => {
      alert(JSON.stringify(Err));
    })
  }

  escanearDni() {
    let auxDni;
    let scanSub = this.qr.scan(this.barcodeOptions).then( dataString =>{
    let x: any = [];
    x = dataString.text.split('@');
    if (x.length == 8 || x.length == 9) {
      this.miFormulario.controls.apellido.setValue(x[1]);
      this.miFormulario.controls.nombre.setValue(x[2]);
      this.miFormulario.controls.dni.setValue(x[4]);
    } else {
      this.miFormulario.controls.dni.setValue(x[1]);
      this.miFormulario.controls.apellido.setValue(x[4]);
      this.miFormulario.controls.nombre.setValue(x[5]);
    }
  });
}

limpiarCampos() {
  this.usuarioJson = {
    nombre: "",
    apellido: "",
    dni: "",
    foto: "../../assets/icon/iconLogoMovimiento.png",
    perfil: "Cliente",
    correo: "",
    contrasenia: "",
    estado: "esperando",
    estadoMesa: "sinMesa"
  };
  this.anonimoJson = {
    nombre: "",
    foto: "../../assets/icon/iconLogoMovimiento.png",
    perfil: "Anonimo",
    estado: "esperando",
    estadoMesa: "sinMesa"
  }
}
}
