import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jefe } from 'src/app/clases/jefe';
import { JefeService } from 'src/app/services/jefe.service';

@Component({
  selector: 'app-menu-jefe',
  templateUrl: './menu-jefe.page.html',
  styleUrls: ['./menu-jefe.page.scss'],
})
export class MenuJefePage implements OnInit, DoCheck
{
  opcion: string = 'Listado';
  listado: Jefe[] = JefeService.jefes;
  jefeSeleccionado: Jefe = new Jefe();

  constructor(private router: Router, private jefeService: JefeService) { }

  ngDoCheck(): void
  {
    this.listado = JefeService.jefes;
  }

  ngOnInit() 
  {
    console.log("INIT");

    this.jefeService.leer().then((jefes) =>
    {
      console.log(jefes);
      this.listado = jefes;
      console.log(this.listado);
    });
    this.jefeSeleccionado = new Jefe();
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
   * Método para recibir jefe seleccionada
   * @param jefe seleccionado desde listado 
   */
  seleccionarJefe(jefe)
  {
    console.log(jefe);
    this.jefeSeleccionado = jefe;
  }
}