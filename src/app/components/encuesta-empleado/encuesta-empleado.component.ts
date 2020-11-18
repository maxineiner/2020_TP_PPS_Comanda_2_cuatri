import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from 'src/app/clases/empleado';
import { TipoEncuesta } from 'src/app/clases/encuesta';
import { EncuestaEmpleado, Ubicacion } from 'src/app/clases/encuestaEmpleado';
import { Imagen } from 'src/app/clases/imagen';
import { AuthService } from 'src/app/services/auth.service';
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
  @Input() empleado: Empleado = <Empleado>AuthService.usuario;
  encuesta: EncuestaEmpleado = new EncuestaEmpleado();
  auxiliarFoto: Imagen;
  imgPreview: string;
  habilitado: boolean = true;
  customActionSheetOptions = {
    header: 'Calidad de limpieza',
    mode: 'ios',
    translucent: true
  };

  constructor(private encuestaService: EncuestaService,
    private imagenService: ImagenService,
    private UIVisual: UIVisualService) { }

  ngOnInit() 
  {
    this.habilitado = EncuestaService.validarAcceso(this.empleado.id);
  }

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
    if (!this.encuesta.lugaresBuenEstado.includes(event.detail.value))
    {
      this.encuesta.lugaresBuenEstado.push(<Ubicacion>event.detail.value);
    }
    else
    {
      this.encuesta.lugaresBuenEstado = this.encuesta.lugaresBuenEstado
        .filter(opcion => opcion != event.detail.value);
    }
  }

  async guardar()
  {
    console.log(this.encuesta);
    const imagenGuardada = await this.imagenService.crearUnaImagen(
      this.auxiliarFoto,
      '/encuestas-empleado'
    )

    this.encuesta.foto = imagenGuardada;
    this.encuesta.tipo = TipoEncuesta.EMPLEADO;
    this.encuesta.usuario = AuthService.usuario;

    this.encuestaService.crear(this.encuesta)
      .then(() => UIVisualService.presentToast("Encuesta guardada."))
      .catch(() => UIVisualService.presentToast("No se pudo guardar."));;
  }
}
