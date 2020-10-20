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
export class FormProductoComponent implements OnInit {

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
  ngOnInit() {
    console.log(this.producto);
    this.rellenarFormulario();
  }

  rellenarFormulario(){
    try {
      
      if (this.producto) {
        this.registroForm.setValue(
          {
            'nombre': this.producto.nombre,
            'descripcion': this.producto.descripcion,
            'minutosDeElaboracion': this.producto.minutosDeElaboracion,
            'precio': this.producto.precio,
            'fotos': this.producto.fotos,
          }
        );
      }

      if (this.opcion == OpcionForm.BAJA) {
        this.registroForm.disable();
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
    this.productoService.registrar(new Producto(this.registroForm.value)).then(data => {
      console.log("Registrado correctamente.")
    }
    );
  }

  tomarFoto() {
    this.imagenService.sacarFoto("/productos").then(data => {
      this.fotos.push(data);
      this.registroForm.get('fotos').setValue(this.fotos);
    })
  }

  modificarMesa()
  {
    console.log("Modificar Mesa");
    console.log(this.producto);
    if(this.producto)
    {
      this.productoService.actualizar(this.producto);
    }
  }

  borrarMesa()
  {
    console.log("Baja de mesa");
    if(this.producto)
    {            
      this.producto.isActive = false;
      this.productoService.actualizar(this.producto);
    }
  }









}
