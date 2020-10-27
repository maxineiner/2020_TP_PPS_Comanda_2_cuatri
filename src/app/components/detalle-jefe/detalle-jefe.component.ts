import { Component, Input, OnInit } from '@angular/core';
import { Jefe } from 'src/app/clases/jefe';

@Component({
  selector: 'app-detalle-jefe',
  templateUrl: './detalle-jefe.component.html',
  styleUrls: ['./detalle-jefe.component.scss'],
})
export class DetalleJefeComponent implements OnInit
{
  @Input() jefe: Jefe;

  constructor() { }

  ngOnInit() { }

  //TODO: tomar foto del jefe
  sacarFoto()
  {
    console.log("Sacar foto");
  }
}