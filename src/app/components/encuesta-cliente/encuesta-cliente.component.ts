import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cliente } from 'src/app/clases/cliente';
import { Encuesta, TipoEncuesta } from 'src/app/clases/encuesta';
import { Destacado, EncuestaCliente } from 'src/app/clases/encuestaCliente';
import { Imagen } from 'src/app/clases/imagen';
import { AuthService } from 'src/app/services/auth.service';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { ImagenService } from 'src/app/services/imagen.service';
import { UIVisualService } from 'src/app/services/uivisual.service';

@Component({
  selector: 'app-encuesta-cliente',
  templateUrl: './encuesta-cliente.component.html',
  styleUrls: ['./encuesta-cliente.component.scss'],
})
export class EncuestaClienteComponent implements OnInit
{
  @Input() cliente: Cliente = <Cliente>AuthService.usuario;
  encuesta: EncuestaCliente = new EncuestaCliente();
  imgPreview: string[] = new Array<string>(3);
  fotos: Imagen[] = new Array<Imagen>(3);
  habilitado: boolean = true;
  customActionSheetOptions = {
    header: 'Calidad del servicio',
    mode: 'ios',
    translucent: true
  };

  constructor(private encuestaService: EncuestaService, private imagenService: ImagenService,
    private UIVisual: UIVisualService) { }

  ngOnInit() 
  {
    this.habilitado = EncuestaService.validarAcceso(this.cliente.id);
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

  rangeChange(event)
  {
    console.log(event.detail.value);

    this.encuesta.satisfaccion = event.detail.value;
  }

  checked(event)
  {
    if (!this.encuesta.destacado.includes(event.detail.value))
    {
      this.encuesta.destacado.push(<Destacado>event.detail.value);
    }
    else
    {
      this.encuesta.destacado = this.encuesta.destacado.filter(opcion => opcion != event.detail.value);
    }
  }

  async guardar()
  {
    console.log(this.encuesta);

    if (this.fotos.some(img => img.base64))
    {
      const imagenesGuardadas = await this.imagenService.crearArrayImagenes(this.fotos, "/encuestas-cliente");

      this.encuesta.fotos = imagenesGuardadas;
    }

    this.encuesta.tipo = TipoEncuesta.CLIENTE;
    this.encuesta.usuario = AuthService.usuario;

    this.encuestaService.crear(this.encuesta)
      .then(() => UIVisualService.presentToast("Encuesta guardada."))
      .catch(() => UIVisualService.presentToast("No se pudo guardar."));
  }
}
