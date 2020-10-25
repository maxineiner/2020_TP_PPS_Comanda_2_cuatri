import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/clases/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-menu-empleado',
  templateUrl: './menu-empleado.page.html',
  styleUrls: ['./menu-empleado.page.scss'],
})
export class MenuEmpleadoPage implements OnInit
{
  opcion: string = 'Listado';
  listado: Empleado[] = EmpleadoService.empleados;
  empleadoSeleccionado: Empleado = new Empleado();

  constructor(private router: Router, private empleadoService: EmpleadoService) { }

  ngDoCheck(): void
  {
    this.listado = EmpleadoService.empleados;
  }

  ngOnInit() 
  {
    console.log("INIT");

    this.empleadoService.leer().then((empleados) =>
    {
      console.log(empleados);
      this.listado = empleados;
      console.log(this.listado);
    });
    this.empleadoSeleccionado = new Empleado();
  }

  /**
   * Metodo para seleccionar modo del form para ABM
   * @param event Evento con el valor que determina modo del form
   */
  seleccionarOpcion(event)
  {
    console.log(event.detail.value);
    this.opcion = event.detail.value;
  }

  /**
   * Método para recibir empleado seleccionada
   * @param empleado seleccionado desde listado 
   */
  seleccionarEmpleado(empleado)
  {
    console.log(empleado);
    this.empleadoSeleccionado = empleado;
  }

}