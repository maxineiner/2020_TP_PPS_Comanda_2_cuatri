import { Component, OnInit } from '@angular/core';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DatabaseService } from "../servicios/database.service";
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import firebase from 'firebase/app';
import {AngularFireStorage} from "@angular/fire/storage"
import { Usuariosbd } from "../clases/usuariosbd";
import { ComplementosService } from 'src/app/servicios/complementos.service';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-alta-supervisor',
  templateUrl: './alta-supervisor.page.html',
  styleUrls: ['./alta-supervisor.page.scss'],
})
export class AltaSupervisorPage implements OnInit {

  qrScan:any;

  pickedName : string;
  miFormulario : FormGroup;
  pathImagen : string;

  usuarioJson = {
    nombre : "",
    apellido : "",
    dni : "",
    foto :  "../assets/icon/iconLogoMovimiento.png",
    cuil : "",
    perfil : "",
    contrasenia: "",
    correo : "",
  };

  barcodeOptions = {
    "prompt": "Place a barcode inside the scan area",
    "formats": "QR_CODE,PDF_417",
    "orientation": "landscape"
  };

  listaPerfiles = [ 
    { perfil : "Supervisor" },
    { perfil : "Dueño" }
  ]

  constructor(
    private qr : BarcodeScanner,
    private camera : Camera,
    private bd : DatabaseService,
    private formBuilder: FormBuilder,
    private auth : AuthService,
    private st : AngularFireStorage,
    private complemetos : ComplementosService) {
      this.miFormulario = this.formBuilder.group({
        nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,10}$')]],
        apellido: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,10}$')]],
        dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
        cuil :  ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
        contrasenia: ['', [Validators.required] ],
        correo: ['', [Validators.required, Validators.email] ],
     });
   }
   


  ngOnInit() {
  this.pickedName = "Dueño";
  this.usuarioJson.perfil = this.pickedName;
  }

  registrar(perfil)
  {
    if(this.pathImagen != null){
      this.st.storage.ref(this.pathImagen).getDownloadURL().then((link) =>
      {
        this.usuarioJson.foto = link;
        this.bd.crear('usuarios',this.usuarioJson);
      });
    }
    else
    {
      this.bd.crear('usuarios',this.usuarioJson);
    }
   this.auth.registrarUsuario(this.usuarioJson.correo,this.usuarioJson.contrasenia);
    this.complemetos.presentToastConMensajeYColor("¡El "+perfil +" se creo con exito!","primary");
    this.limpiarCampos();
  }

  limpiarCampos()
  {
    this.usuarioJson.nombre = "";
    this.usuarioJson.apellido = ""; 
    this.usuarioJson.dni = "";  
    this.usuarioJson.foto = "../assets/icon/iconLogoMovimiento.png",
    this.usuarioJson.cuil = "";  
    this.usuarioJson.perfil = this.pickedName;  
    this.usuarioJson.contrasenia = "";  
    this.usuarioJson.correo = ""; 
  }

  
  tomarFotografia()
  {
    const options: CameraOptions =  { 
      quality:100,
      targetHeight:600,
      targetWidth:600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then((imageData)=> {
      var base64Str = 'data:image/jpeg;base64,'+imageData;
      this.usuarioJson.foto = base64Str;
      var storageRef = firebase.storage().ref();
      let obtenerMili = new Date().getTime(); 
      var nombreFoto = "usuarios/"+obtenerMili+"."+this.usuarioJson.dni+".jpg";
      var childRef = storageRef.child(nombreFoto);
      this.pathImagen = nombreFoto;
      childRef.putString(base64Str,'data_url').then(function(snapshot)
      {
      })
    },(Err)=>{
      alert(JSON.stringify(Err));
    })
  }

  pickerUser(pickedName){
    this.listaPerfiles.forEach((usuario) =>{
      if(usuario.perfil == pickedName )
      {
        this.usuarioJson.perfil = pickedName;
      }
    })
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

}
