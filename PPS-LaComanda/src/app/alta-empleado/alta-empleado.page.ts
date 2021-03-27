import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DatabaseService } from 'src/app/servicios/database.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { AngularFireStorage } from "@angular/fire/storage"
import { ComplementosService } from 'src/app/servicios/complementos.service';
import firebase from 'firebase/app';
import { firebaseErrors } from 'src/assets/scripts/errores';

@Component({
  selector: 'app-alta-empleado',
  templateUrl: './alta-empleado.page.html',
  styleUrls: ['./alta-empleado.page.scss'],
})
export class AltaEmpleadoPage implements OnInit {
  pickedName: string = '';
  miFormulario: FormGroup;
  splash: boolean = false;
  usuarioJson = {
    foto: "../../assets/icon/iconLogoMovimiento.png",
    perfil: "Mozo",
    estado: true,
  };
  barcodeOptions = {
    "prompt": "Place a barcode inside the scan area",
    "formats": "QR_CODE,PDF_417",
    "orientation": "landscape"
  };

  listaPerfiles = [
    { perfil: "alta-empleado.listaPerfiles.MOZO", value: "Mozo" },
    { perfil: "alta-empleado.listaPerfiles.COCINERO", value: "Cocinero" },
    { perfil: "alta-empleado.listaPerfiles.BAR_TENDER", value: "Bar tender" },
    { perfil: "alta-empleado.listaPerfiles.METRE", value: "Metre" }
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
      correo: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+\\s*$')]],
    });
  }

  validation_messages = {
    'nombre': [
      { type: 'required', message: 'alta-empleado.validationMessages.nombre.REQUIRED_MESSAGE' },
      { type: 'pattern', message: 'alta-empleado.validationMessages.nombre.PATTERN_MESSAGE' }
    ],
    'apellido': [
      { type: 'required', message: 'alta-empleado.validationMessages.apellido.REQUIRED_MESSAGE' },
      { type: 'pattern', message: 'alta-empleado.validationMessages.apellido.PATTERN_MESSAGE' }
    ],
    'dni': [
      { type: 'required', message: 'alta-empleado.validationMessages.dni.REQUIRED_MESSAGE' },
      { type: 'pattern', message: 'alta-empleado.validationMessages.dni.REQUIRED_MESSAGE' }
    ],
    'cuil': [
      { type: 'required', message: 'alta-empleado.validationMessages.cuil.REQUIRED_MESSAGE' },
      { type: 'pattern', message: 'alta-empleado.validationMessages.cuil.REQUIRED_MESSAGE' }
    ],
    'correo': [
      { type: 'required', message: 'alta-empleado.validationMessages.correo.REQUIRED_MESSAGE' },
      { type: 'pattern', message: 'alta-empleado.validationMessages.correo.REQUIRED_MESSAGE' }
    ],
    'contrasenia': [
      { type: 'required', message: 'alta-empleado.validationMessages.contrasenia.REQUIRED_MESSAGE' },
      { type: 'pattern', message: 'alta-empleado.validationMessages.contrasenia.REQUIRED_MESSAGE' }
    ]
  };

  ngOnInit() {
    this.usuarioJson.perfil = this.pickedName;
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

  pickerUser(pickedName) {
    this.usuarioJson.perfil = pickedName;
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
      this.complemetos.presentToastConMensajeYColor("alta-empleado.registrar.SE_CREO", "primary");
    }).catch(err => {
        this.complemetos.presentToastConMensajeYColor(firebaseErrors(err), "danger");
      }).finally(()=>{
        this.splash = false;
      });;
  }

  limpiarCampos() {
    this.pickedName = "";
    this.usuarioJson.foto = "../../assets/icon/iconLogoMovimiento.png",
    this.usuarioJson.perfil = "Mozo";
  }
}
