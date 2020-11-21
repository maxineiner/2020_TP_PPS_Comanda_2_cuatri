import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DatabaseService } from "../servicios/database.service";
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import firebase from 'firebase/app';
import {AngularFireStorage} from "@angular/fire/storage";
import { Usuariosbd } from "../clases/usuariosbd";
import { ComplementosService } from '../servicios/complementos.service';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-alta-mesa',
  templateUrl: './alta-mesa.page.html',
  styleUrls: ['./alta-mesa.page.scss'],
})
export class AltaMesaPage implements OnInit {

  pickedName : string;
  miFormulario : FormGroup;

  mesaJson = {
    numero : "",
    comensales : "",
    tipo : "",
    foto :  "../../assets/icon/iconLogoMovimiento.png",
  };

  pathImagen : string;

  listaTipo = [ 
    { tipo : "Por defecto" },
    { tipo : "VIP" },
    { tipo : "Discapacitados"},
  ]

  constructor(
    private qr : BarcodeScanner,
    private camera : Camera,
    private bd : DatabaseService,
    private formBuilder: FormBuilder,
    private st : AngularFireStorage,
    private complemetos : ComplementosService) {
      this.miFormulario = this.formBuilder.group({
        comensales: ['', [Validators.required, Validators.pattern('^[0-9]{2}$')]],
        numero: ['', [Validators.required, Validators.pattern('^[0-9]{2}$')]],
     });
   }
   
  ngOnInit() {
    this.pickedName = "Cliente";
  }

  pickerUser(pickedName){
    this.listaTipo.forEach((mesa) =>{
      if(mesa.tipo == pickedName && pickedName == "Cliente")
      {
        this.mesaJson.tipo = pickedName;
      }
      else{
        this.mesaJson.tipo = pickedName;
      }
    })
  }


  registrar()
  {
    if(this.pathImagen != null){   
      this.st.storage.ref(this.pathImagen).getDownloadURL().then((link) =>
      {
        this.mesaJson.foto = link;
        this.bd.crear('mesas',this.mesaJson);
      });
    }
    else
    {
      this.bd.crear('mesas',this.mesaJson);
    }
    this.complemetos.presentToastConMensajeYColor("El estado del cliente esta pendiente al registro.","primary");
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
      this.mesaJson.foto = base64Str;
      var storageRef = firebase.storage().ref();
      let obtenerMili = new Date().getTime(); 
      var nombreFoto = "usuarios/"+obtenerMili+"."+this.mesaJson.tipo+".jpg";
      var childRef = storageRef.child(nombreFoto);
      this.pathImagen = nombreFoto;
      childRef.putString(base64Str,'data_url').then(function(snapshot)
      {})
    },(Err)=>{
      alert(JSON.stringify(Err));
    })
    
  }
}
