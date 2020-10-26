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
  @Output() seleccionarEmpleado: EventEmitter<Empleado> = new EventEmitter<Empleado>();
  loadingTime = 2000;

  constructor(private loadingController: LoadingController)
  { }

  ngOnInit() 
  {
    this.presentLoading('Cargando empleados...');
  }

  /**
   * Método para enviar empleado seleccionado
   * @param empleado Empleado seleccionado
   */
  seleccionarEmpleadoDelListado(empleado: Empleado)
  {
    this.seleccionarEmpleado.emit(empleado);
  }

  //TODO: do this method generic for all lists
  async presentLoading(message: string, duration?: number)
  {
    if (duration === undefined || duration <= 0)
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
