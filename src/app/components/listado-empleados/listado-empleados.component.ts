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

  constructor()
  { }

  ngOnInit() 
  {
  }

  /**
   * Método para enviar empleado seleccionado
   * @param empleado Empleado seleccionado
   */
  seleccionarEmpleadoDelListado(empleado: Empleado)
  {
    this.seleccionarEmpleado.emit(empleado);
  }

}
