import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Producto } from "src/app/clases/producto";
import { ImagenService } from "src/app/services/imagen.service";
import { ProductoService } from "src/app/services/producto.service";
import { LoadingController, ToastController } from "@ionic/angular";
import { Imagen } from 'src/app/clases/imagen';

enum OpcionForm
{
  ALTA = "Alta",
  MODIFICACION = "Modificación",
  BAJA = "Baja",
}

@Component({
  selector: "app-form-producto",
  templateUrl: "./form-producto.component.html",
  styleUrls: ["./form-producto.component.scss"],
})
export class FormProductoComponent
{
  @Input() opcion: OpcionForm;
  @Input() producto: Producto;
  popoverOptions = {
    header: "Seleccione el tipo",
    translucent: true,
    cancelText: "Cerrar",
    okText: "Guardar",
  };

  confirmaClave;
  EstadoRegistro;
  fotos: Imagen[] = new Array<Imagen>(3);
  imgPreview: string[] = new Array<string>(3);

  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private imagenService: ImagenService,
    private toastController: ToastController,
    private loadingController: LoadingController
  )
  {
    this.crearForm();
  }

  ngOnChanges()
  {
    this.rellenarFormulario();
  }

  rellenarFormulario()
  {
    try
    {
      if (this.producto && this.opcion != OpcionForm.ALTA)
      {
        this.registroForm.setValue({
          nombre: this.producto.nombre,
          descripcion: this.producto.descripcion,
          minutosDeElaboracion: this.producto.minutosDeElaboracion,
          precio: this.producto.precio,
          fotos: this.producto.fotos,
        });
        this.fotos = this.producto.fotos;
      } else
      {
        this.registroForm.reset();
        this.fotos = [];
      }

      if (this.opcion == OpcionForm.BAJA)
      {
        this.registroForm.disable();
      } else
      {
        this.registroForm.enable();
      }
    } catch (error)
    {
      console.error(error);
    }
  }

  crearForm()
  {
    this.registroForm = this.fb.group({
      nombre: ["", Validators.required],
      descripcion: ["", Validators.required],
      minutosDeElaboracion: [
        "",
        [
          Validators.required,
          Validators.minLength,
          Validators.pattern("^[0-9]*$"),
        ],
      ],
      precio: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      fotos: [""],
    });
  }


  async subirFoto(index: number)
  {
    const foto = await this.imagenService.sacarFoto();

    this.imgPreview[index] = `data:image/jpeg;base64,${foto.base64}`;

    let imagen = new Imagen();
    imagen.base64 = foto.base64;
    imagen.fecha = foto.fecha;

    this.fotos[index] = imagen;
    console.log(this.fotos);
  }

  async registrar()
  {
    this.presentLoading("Guardando...", 5000);
    const imagenesGuardadas = await this.imagenService.crearArrayImagenes(this.fotos, "/productos");

    console.log(imagenesGuardadas);
    this.registroForm.get("fotos").setValue(imagenesGuardadas);

    this.productoService.registrar(new Producto(this.registroForm.value))
      .then(() =>
      {
        this.presentToast("Alta exitosa", 2000);
        console.log("Registrado correctamente.");
      })
      .catch((error) =>
      {
        this.presentToast("No se pudo realizar el alta", 2000);
        console.error("No se pudo realizar el alta.", error);
      });
  }



  async modificarProducto()
  {
    console.log("Modificando Producto-------");

    this.producto.nombre = this.registroForm.get("nombre").value;
    this.producto.descripcion = this.registroForm.get("descripcion").value;
    this.producto.minutosDeElaboracion = this.registroForm.get(
      "minutosDeElaboracion"
    ).value;
    this.producto.precio = this.registroForm.get("precio").value;
    this.producto.fotos = this.registroForm.get("fotos").value;

    this.productoService
      .actualizar(this.producto)
      .then(() =>
      {
        this.presentToast("Modificación exitosa", 2000);
        console.log("Modificado correctamente.");
      })
      .catch(() => this.presentToast("No se pudo modificar", 2000));
  }

  borrarProducto()
  {
    console.log("Baja de producto------");
    if (this.producto)
    {
      this.producto.isActive = false;
      this.productoService
        .actualizar(this.producto)
        .then(() =>
        {
          this.presentToast("Baja realizada", 2000);
          this.registroForm.reset();
        })
        .catch(() => this.presentToast("No se pudo realizar baja", 2000));
    }
  }

  async presentToast(message, duration)
  {
    const toast = await this.toastController.create({
      message,
      duration,
    });
    toast.present();
  }

  async presentLoading(message, duration)
  {
    const loading = await this.loadingController.create({
      message,
      duration,
      spinner: 'bubbles'
    });
    await loading.present();
  }

}
