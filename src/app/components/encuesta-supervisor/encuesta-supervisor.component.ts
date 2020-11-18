import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Cliente } from 'src/app/clases/cliente';
import { Empleado } from 'src/app/clases/empleado';
import { EncuestaSupervisor } from 'src/app/clases/encuestaSupervisor';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { UIVisualService } from 'src/app/services/uivisual.service';
import { PopoverUsuariosComponent } from '../popover-usuarios/popover-usuarios.component';

@Component({
  selector: 'app-encuesta-supervisor',
  templateUrl: './encuesta-supervisor.component.html',
  styleUrls: ['./encuesta-supervisor.component.scss'],
})
export class EncuestaSupervisorComponent implements OnInit
{
  encuesta: EncuestaSupervisor = new EncuestaSupervisor();

  customActionSheetOptions = {
    mode: 'ios',
    translucent: true
  };

  constructor(private encuestaService: EncuestaService,
    private empleadoService: EmpleadoService,
    private clienteService: ClienteService,
    private UIVisual: UIVisualService,
    private popoverController: PopoverController) { }

  ngOnInit() 
  {
    UIVisualService.loading();
    this.empleadoService.leer();
    this.clienteService.leer();
  }

  segmentChanged(event)
  {
    console.log(event.detail);

    this.presentPopover(event.detail.value);
  }

  rangeChange(event)
  {
    console.log(event.detail.value);

    this.encuesta.usoDeAplicacion = event.detail.value;
  }

  checked(event)
  {
    console.log(event);
  }

  async presentPopover(modo: string)
  {
    const popover = await this.popoverController.create({
      component: PopoverUsuariosComponent,
      cssClass: 'my-custom-class',
      translucent: true,
      componentProps: {
        modo: modo
      }
    });
    await popover.present();

    const { data } = await popover.onDidDismiss<Usuario>();
    console.log(data);
    this.encuesta.idUsuario = data.id;
    this.encuesta.nombre = data.nombre;
    this.encuesta.apellido = data.apellido;
    this.encuesta.dni = data.dni;
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
