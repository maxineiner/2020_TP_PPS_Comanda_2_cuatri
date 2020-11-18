import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cliente } from 'src/app/clases/cliente';
import { Encuesta } from 'src/app/clases/encuesta';
import { EncuestaCliente } from 'src/app/clases/encuestaCliente';
import { Imagen } from 'src/app/clases/imagen';
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
  @Input() cliente: Cliente;
  encuesta: EncuestaCliente = new EncuestaCliente();
  imgPreview: string[] = new Array<string>(3);
  fotos: Imagen[] = new Array<Imagen>(3);
  customActionSheetOptions = {
    header: 'Calidad del servicio',
    mode: 'ios',
    translucent: true
  };

  constructor(private encuestaService: EncuestaService, private imagenService: ImagenService,
    private UIVisual: UIVisualService) { }

  ngOnInit() { }

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
    console.log(event);
  }

  async guardar()
  {
    console.log(this.encuesta);
    // const imagenesGuardadas = await this.imagenService.crearArrayImagenes(this.fotos, "/encuestas-cliente");

    // this.encuesta.fotos = imagenesGuardadas;

    // this.encuestaService.crear(this.encuesta);
  }
}
