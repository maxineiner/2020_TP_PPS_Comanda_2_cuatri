import { Component, OnInit } from '@angular/core';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DatabaseService } from 'src/app/servicios/database.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import firebase from 'firebase/app';
import { AngularFireStorage } from "@angular/fire/storage"
import { Usuariosbd } from "../clases/usuariosbd";
import { ComplementosService } from 'src/app/servicios/complementos.service';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { AuthService } from 'src/app/servicios/auth.service';
import { firebaseErrors } from 'src/assets/scripts/errores';

@Component({
  selector: 'app-alta-supervisor',
  templateUrl: './alta-supervisor.page.html',
  styleUrls: ['./alta-supervisor.page.scss'],
})
export class AltaSupervisorPage implements OnInit {
  pickedName: string = 'Dueño';
  miFormulario: FormGroup;
  splash:boolean = false;
  usuarioJson = {
    foto: "../../assets/icon/iconLogoMovimiento.png",
    perfil: "",
    estado: true,
  };

  barcodeOptions = {
    "prompt": "Place a barcode inside the scan area",
    "formats": "QR_CODE,PDF_417",
    "orientation": "landscape"
  };

  listaPerfiles = [
    { perfil: "alta-supervisor.listaPerfiles.SUPERVISOR", value: "Supervisor" },
    { perfil: "alta-supervisor.listaPerfiles.DUENIO", value: "Dueño" }
  ]

  constructor(
    private qr: BarcodeScanner,
    private camera: Camera,
    private bd: DatabaseService,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private st: AngularFireStorage,
    private complemetos: ComplementosService) {
    this.miFormulario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-ZñÑ]{3,10}$')]],
      apellido: ['', [Validators.required, Validators.pattern('^[a-zA-ZñÑ]{3,10}$')]],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      cuil: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
      contrasenia: ['', [Validators.required, Validators.pattern('^[a-zA-ZñÑ0-9_-]{6,18}$')]],
      correo: ['', [Validators.required, Validators.email]],
    });
  }

  validation_messages = {
    'nombre': [
      { type: 'required', message: 'alta-supervisor.validationMessages.nombre.REQUIRED_MESSAGE' },
      { type: 'pattern', message: 'alta-supervisor.validationMessages.nombre.PATTERN_MESSAGE' }
    ],
    'apellido': [
      { type: 'required', message: 'alta-supervisor.validationMessages.apellido.REQUIRED_MESSAGE' },
      { type: 'pattern', message: 'alta-supervisor.validationMessages.apellido.PATTERN_MESSAGE' }
    ],
    'dni': [
      { type: 'required', message: 'alta-supervisor.validationMessages.dni.REQUIRED_MESSAGE' },
      { type: 'pattern', message: 'alta-supervisor.validationMessages.dni.PATTERN_MESSAGE' }
    ],
    'cuil': [
      { type: 'required', message: 'alta-supervisor.validationMessages.cuil.REQUIRED_MESSAGE' },
      { type: 'pattern', message: 'alta-supervisor.validationMessages.cuil.PATTERN_MESSAGE' }
    ],
    'correo': [
      { type: 'required', message: 'alta-supervisor.validationMessages.correo.REQUIRED_MESSAGE' },
      { type: 'email', message: 'alta-supervisor.validationMessages.correo.EMAIL_MESSAGE' }
    ],
    'contrasenia': [
      { type: 'required', message: 'alta-supervisor.validationMessages.contrasenia.REQUIRED_MESSAGE' },
      { type: 'pattern', message: 'alta-supervisor.validationMessages.contrasenia.PATTERN_MESSAGE' }
    ]
  };

  ngOnInit() {
    this.usuarioJson.perfil = this.pickedName;
  }

  pickerUser(pickedName) {
    this.usuarioJson.perfil = pickedName;
  }

  tomarFotografia() {
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 600,
      targetWidth: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      var base64Str = 'data:image/jpeg;base64,' + imageData;
      this.usuarioJson.foto = base64Str;
    });
  }

  escanearDni() {
    let auxDni;
    let scanSub = this.qr.scan(this.barcodeOptions).then(dataString => {
      let x: any = [];
      x = dataString.text.split('@');
      if (x.length == 8 || x.length == 9) {
        this.miFormulario.controls.apellido.setValue(x[1]);
        this.miFormulario.controls.nombre.setValue(x[2]);
        this.miFormulario.controls.dni.setValue(x[4]);
        let cuilAux = x[8] != null ? x[8].substr(0, 2) + x[4] + x[8].substr(-1) : null;
        this.miFormulario.controls.cuil.setValue(cuilAux);
      } else {
        this.miFormulario.controls.dni.setValue(x[1]);
        this.miFormulario.controls.apellido.setValue(x[4]);
        this.miFormulario.controls.nombre.setValue(x[5]);
      }
    });
  }

  registrar(perfil) {
    this.splash = true;
    this.usuarioJson['nombre'] = this.miFormulario.value.nombre;
    this.usuarioJson['apellido'] = this.miFormulario.value.apellido;
    this.usuarioJson['dni'] = this.miFormulario.value.dni;
    this.usuarioJson['cuil'] = this.miFormulario.value.cuil;
    this.usuarioJson['contrasenia'] = this.miFormulario.value.contrasenia;
    this.usuarioJson['correo'] = this.miFormulario.value.correo;
    this.auth.registrarUsuario(this.usuarioJson).then(() => {
      this.limpiarCampos();
      this.complemetos.presentToastConMensajeYColor("alta-supervisor.registrar.SE_CREO", "primary");
    }).catch(err =>{
        this.complemetos.presentToastConMensajeYColor(firebaseErrors(err), "danger");
    }).finally(()=>{
      this.splash = false;
    });
  }

  limpiarCampos() {
    this.pickedName = 'Dueño'
    this.usuarioJson.foto = "../../assets/icon/iconLogoMovimiento.png",
      this.usuarioJson.perfil = this.pickedName;
  }
}
