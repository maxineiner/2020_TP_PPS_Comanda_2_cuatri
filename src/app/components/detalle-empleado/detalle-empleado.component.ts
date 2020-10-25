import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from 'src/app/clases/empleado';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.scss'],
})
export class DetalleEmpleadoComponent implements OnInit
{
  @Input() empleado: Empleado;

  constructor() { }

  ngOnInit() { }

  //TODO: tomar foto del empleado
  sacarFoto()
  {
    console.log("Sacar foto");
  }

}
