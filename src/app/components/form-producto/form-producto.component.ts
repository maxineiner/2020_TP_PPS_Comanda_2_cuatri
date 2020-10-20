import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/clases/producto';
import { ImagenService } from 'src/app/services/imagen.service';
import { ProductoService } from 'src/app/services/producto.service';

enum OpcionForm {
  ALTA = "Alta",
  MODIFICACION = "Modificación",
  BAJA = "Baja"
}

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.scss'],
})
export class FormProductoComponent {

  @Input() opcion: OpcionForm;
  @Input() producto: Producto;
  popoverOptions = {
    header: 'Seleccione el tipo',
    translucent: true,
    cancelText: "Cerrar",
    okText: "Guardar"
  }

  confirmaClave;
  EstadoRegistro;
  fotos: Array<any> = [];

  registroForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private imagenService: ImagenService,
  ) {
    this.crearForm();
  }
  ngOnChanges(){
    console.log(this.opcion);
    this.rellenarFormulario();
  }

  rellenarFormulario() {
    try {

      if (this.producto && this.opcion != OpcionForm.ALTA) {
        this.registroForm.setValue(
          {
            'nombre': this.producto.nombre,
            'descripcion': this.producto.descripcion,
            'minutosDeElaboracion': this.producto.minutosDeElaboracion,
            'precio': this.producto.precio,
            'fotos': this.producto.fotos,
          }
        );
        this.fotos = this.producto.fotos;
      }
      else{
        this.registroForm.reset();
      }

      if (this.opcion == OpcionForm.BAJA) {
        this.registroForm.disable();
      }
      else{
        this.registroForm.enable();
      }


    } catch (error) {
      console.error(error);
    }
  }

  crearForm() {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      minutosDeElaboracion: ['', [Validators.required, Validators.minLength, Validators.pattern("^[0-9]*$")]],
      precio: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      fotos: [''],

    });

  }

  registrar() {
    console.log("registrando..");
    this.imagenService.registrarArrayImagenes(this.fotos, '/productos').then((data) => {
      this.fotos = data;
      this.productoService.registrar(new Producto(this.registroForm.value)).then(data => {
        console.log("Registrado correctamente.")
      }
      );
    }).catch(error => console.error(error))

  }

  tomarFoto() {
    this.imagenService.sacarFoto().then(data => {
      this.fotos.push(data);
      this.registroForm.get('fotos').setValue(this.fotos);
    })
  }

  modificarProducto() {
    console.log("Modificar Producto");
    this.producto.nombre = this.registroForm.get('nombre').value;
    this.producto.descripcion = this.registroForm.get('descripcion').value;
    this.producto.minutosDeElaboracion = this.registroForm.get('minutosDeElaboracion').value;
    this.producto.precio = this.registroForm.get('precio').value;
    this.producto.fotos = this.registroForm.get('fotos').value;
    
    this.productoService.actualizar(this.producto).then(data => {
      console.log("Registrado correctamente.")
    }
    ).catch(error=>{console.error(error)});
  }

  borrarProducto() {
    console.log("Baja de producto");
    if (this.producto) {
      this.producto.isActive = false;
      this.productoService.actualizar(this.producto);
    }
  }









}
