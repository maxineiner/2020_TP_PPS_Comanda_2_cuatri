import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from 'src/app/clases/empleado';
import { EncuestaEmpleado } from 'src/app/clases/encuestaEmpleado';
import { Imagen } from 'src/app/clases/imagen';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { ImagenService } from 'src/app/services/imagen.service';
import { UIVisualService } from 'src/app/services/uivisual.service';

@Component({
  selector: 'app-encuesta-empleado',
  templateUrl: './encuesta-empleado.component.html',
  styleUrls: ['./encuesta-empleado.component.scss'],
})
export class EncuestaEmpleadoComponent implements OnInit
{
  @Input() empleado: Empleado;
  encuesta: EncuestaEmpleado = new EncuestaEmpleado();
  auxiliarFoto: Imagen
  imgPreview: string
  customActionSheetOptions = {
    header: 'Calidad de limpieza',
    mode: 'ios',
    translucent: true
  };

  constructor(private encuestaService: EncuestaService, private imagenService: ImagenService,
    private UIVisual: UIVisualService) { }

  ngOnInit() { }

  async sacarFoto()
  {
    const foto = await this.imagenService.sacarFoto()

    this.imgPreview = `data:image/jpeg;base64,${foto.base64}`

    this.auxiliarFoto = new Imagen();
    this.auxiliarFoto.base64 = foto.base64;
    this.auxiliarFoto.fecha = foto.fecha;
  }


  rangeChange(event)
  {
    console.log(event.detail.value);

    this.encuesta.conformidad = event.detail.value;
  }

  checked(event)
  {
    console.log(event);
  }

  async guardar()
  {
    console.log(this.encuesta);
    // const imagenGuardada = await this.imagenService.crearUnaImagen(
    //   this.auxiliarFoto,
    //   '/encuestas-empleado'
    // )

    // this.encuesta.fotos = imagenesGuardadas;

    // this.encuestaService.crear(this.encuesta);
  }
}
