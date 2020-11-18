import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Cliente } from 'src/app/clases/cliente';
import { Empleado } from 'src/app/clases/empleado';
import { TipoEncuesta } from 'src/app/clases/encuesta';
import { Conflictos, EncuestaSupervisor } from 'src/app/clases/encuestaSupervisor';
import { Jefe } from 'src/app/clases/jefe';
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
  jefe: Jefe = <Jefe>AuthService.usuario;
  empleados: Empleado[] = EmpleadoService.empleados;
  clientes: Cliente[] = ClienteService.clientes;
  encuesta: EncuestaSupervisor = new EncuestaSupervisor();

  customActionSheetOptions = {
    mode: 'ios',
    translucent: true
  };

  constructor(private encuestaService: EncuestaService,
    private popoverController: PopoverController,
    private UIVisual: UIVisualService) { }

  ngOnInit() 
  {
  }

  segmentChanged(event)
  {
    console.log(event.detail);

    this.presentPopover(event.detail.value);
  }

  rangeChange(event)
  {
    this.encuesta.usoDeAplicacion = event.detail.value;
  }

  checked(event)
  {
    if (!this.encuesta.conflictosApp.includes(event.detail.value))
    {
      this.encuesta.conflictosApp.push(<Conflictos>event.detail.value);
    }
    else
    {
      this.encuesta.conflictosApp = this.encuesta.conflictosApp
        .filter(opcion => opcion != event.detail.value);
    }
  }

  async presentPopover(modo: string)
  {
    const popover = await this.popoverController.create({
      component: PopoverUsuariosComponent,
      translucent: true,
      componentProps: {
        modo: modo
      }
    });
    await popover.present();

    const { data } = await popover.onDidDismiss<Usuario>();
    console.log(data);

    if (data)
    {
      this.encuesta.usuario = this.jefe;
      this.encuesta.idUsuario = data.id;
      this.encuesta.nombre = data.nombre;
      this.encuesta.apellido = data.apellido;
      this.encuesta.dni = data.dni;
    }
  }

  async guardar()
  {
    console.log(this.encuesta);

    if (EncuestaService.validarAcceso(this.encuesta.idUsuario, true))
    {
      this.encuesta.tipo = TipoEncuesta.SUPERVISOR;

      this.encuestaService.crear(this.encuesta)
        .then(() => UIVisualService.presentToast("Encuesta guardada."))
        .then(() => this.encuestaService.leer())
        .catch(() => UIVisualService.presentToast("No se pudo guardar."));
    }
    else
    {
      UIVisualService.presentToast("Ya se han registrado datos de este usuario.");
    }
  }
}
