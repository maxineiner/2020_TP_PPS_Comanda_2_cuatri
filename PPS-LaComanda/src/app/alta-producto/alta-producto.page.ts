import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DatabaseService } from 'src/app/servicios/database.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import firebase from 'firebase/app';
import { AngularFirestore } from "@angular/fire/firestore"
import { ComplementosService } from 'src/app/servicios/complementos.service';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { firebaseErrors } from 'src/assets/scripts/errores';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.page.html',
  styleUrls: ['./alta-producto.page.scss'],
})
export class AltaProductoPage implements OnInit {
  splash: boolean = false;
  pickedName: string = '';
  miFormulario: FormGroup;
  productoJson = {
    tipo: "",
    fotos: ['../../assets/icon/iconLogoMovimiento.png', '../../assets/icon/iconLogoMovimiento.png', '../../assets/icon/iconLogoMovimiento.png'],
  };
  listaProductos = [
    { tipo: "alta-producto.listaProductos.PLATO", value: "Plato" },
    { tipo: "alta-producto.listaProductos.BEBIDA", value: "Bebida" },
    { tipo: "alta-producto.listaProductos.POSTRE", value: "Postre" }
  ]

  constructor(
    private qr: BarcodeScanner,
    private camera: Camera,
    private bd: DatabaseService,
    private formBuilder: FormBuilder,
    private fire: AngularFirestore,
    private complemetos: ComplementosService) {
    this.miFormulario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-ZñÑ ]{3,25}$')]],
      descripcion: ['', [Validators.required, Validators.pattern('^[a-zA-ZñÑ ]{3,50}$')]],
      tiempo: ['', [Validators.required, Validators.min(0),Validators.max(9999)]],
      precio: ['', [Validators.required, Validators.min(0),Validators.max(9999)]],
    });
  }

  validation_messages = {
    'nombre': [
      { type: 'required', message: 'alta-producto.validationMessages.nombre.REQUIRED_MESSAGE' },
      { type: 'pattern', message: 'alta-producto.validationMessages.nombre.PATTERN_MESSAGE' }
    ],
    'descripcion': [
      { type: 'required', message: 'alta-producto.validationMessages.descripcion.REQUIRED_MESSAGE' },
      { type: 'pattern', message: 'alta-producto.validationMessages.descripcion.PATTERN_MESSAGE' }
    ],
    'tiempo': [
      { type: 'required', message: 'alta-producto.validationMessages.tiempo.REQUIRED_MESSAGE' },
      { type: 'min', message: 'alta-producto.validationMessages.tiempo.MIN_MESSAGE' },
      { type: 'max', message: 'alta-producto.validationMessages.tiempo.MAX_MESSAGE' }
    ],
    'precio': [
      { type: 'required', message: 'alta-producto.validationMessages.precio.REQUIRED_MESSAGE' },
      { type: 'min', message: 'alta-producto.validationMessages.precio.MIN_MESSAGE' },
      { type: 'max', message: 'alta-producto.validationMessages.precio.MAX_MESSAGE' }
    ],
  };

  ngOnInit() {
    let uid = localStorage.getItem('uidUsuario');
    this.bd.obtenerPorIdPromise('usuarios', uid).then(user => {
      if (user.data().perfil === 'Cocinero') {
        this.listaProductos = [
          { tipo: "alta-producto.listaProductos.PLATO", value: "Plato" },
          { tipo: "alta-producto.listaProductos.POSTRE", value: "Postre" }
        ]
      } else if (user.data().perfil === 'BarTender') {
        this.listaProductos = [
          { tipo: "alta-producto.listaProductos.BEBIDA", value: "Bebida" },

        ]
      }
      return this.listaProductos;
    }).then(productos => {
      this.pickedName = productos[0].tipo;
      this.productoJson.tipo = this.pickedName;
    });
  }

  pickerUser(pickedName) {
    this.productoJson.tipo = pickedName;
  }

  tomarFotografia(indice) {
    if (this.productoJson.fotos.length <= 3) {
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
        this.productoJson.fotos[indice] = base64Str;
      });
    }
    else {
      this.complemetos.presentToastConMensajeYColor("alta-producto.tomarFotografia.NO_MAS_FOTOS", "primary");
    }
  }

  registrar() {
    if (this.productoJson.fotos.indexOf(null) === -1 && this.productoJson.fotos.indexOf('../../assets/icon/iconLogoMovimiento.png') === -1) {
      this.splash = true;
      this.productoJson['nombre'] = this.miFormulario.value.nombre;
      this.productoJson['descripcion'] = this.miFormulario.value.descripcion;
      this.productoJson['tiempo'] = this.miFormulario.value.tiempo;
      this.productoJson['precio'] = this.miFormulario.value.precio;
      return this.fire.collection('productos').add({ nombre: null }).then(ref => ref.id).then(docId => {
        let fotoUno = "productos/" + Date.now() + "." + docId + "_1.jpg";
        return this.bd.subirImagen(fotoUno, this.productoJson.fotos[0]).then(url1 => {
          this.productoJson.fotos[0] = url1;
          let fotoDos = "productos/" + Date.now() + "." + docId + "_2.jpg";
          return this.bd.subirImagen(fotoDos, this.productoJson.fotos[1])
        }).then(url2 => {
          this.productoJson.fotos[1] = url2;
          let fotoTres = "productos/" + Date.now() + "." + docId + "_3.jpg";
          return this.bd.subirImagen(fotoTres, this.productoJson.fotos[2])
        }).then(url3 => {
          this.productoJson.fotos[2] = url3;
          return docId;
        });
        return docId;
      }).then(docId => {
        return this.bd.actualizar('productos', this.productoJson, docId);
      }).then(() => {
        this.limpiarCampos();
        this.complemetos.presentToastConMensajeYColor("alta-producto.registrar.PRODUCTO_EXITO", "primary");
      }).catch(err => {
        this.complemetos.presentToastConMensajeYColor(firebaseErrors(err), "danger");
      }).finally(() => {
        this.splash = false;
      });
    } else {
      this.complemetos.presentToastConMensajeYColor("alta-producto.registrar.TRES_IMAGENES", "danger");
    }
  }

  limpiarCampos() {
    this.pickedName = this.listaProductos[0].tipo;
    this.productoJson = {
      tipo: this.pickedName,
      fotos: ['../../assets/icon/iconLogoMovimiento.png', '../../assets/icon/iconLogoMovimiento.png', '../../assets/icon/iconLogoMovimiento.png'],
    };
  }
}
