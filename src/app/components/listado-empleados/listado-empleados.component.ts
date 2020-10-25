import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Empleado } from 'src/app/clases/empleado';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrls: ['./listado-empleados.component.scss'],
})
export class ListadoEmpleadosComponent implements OnInit
{
  @Input() empleados: Empleado[] = [];
  @Output() seleccionarEmpleadoEmitter: EventEmitter<Empleado> = new EventEmitter<Empleado>();
  loadingTime = 2000;

  constructor(private loadingController: LoadingController)
  { }

  ngOnInit() 
  {
    this.presentLoading('Cargando empleados...', 2000);
  }

  /**
   * Método para enviar empleado seleccionado
   * @param empleado Empleado seleccionado
   */
  seleccionarEmpleado(empleado: Empleado)
  {
    this.seleccionarEmpleadoEmitter.emit(empleado);
  }

  //TODO: do this method generic for all lists
  async presentLoading(message: string, duration?: number)
  {
    if (duration <= 0)
    {
      duration = this.loadingTime
    }
    const loading = await this.loadingController.create({
      message,
      duration,
      spinner: 'crescent'
    });
    await loading.present();
  }
}
