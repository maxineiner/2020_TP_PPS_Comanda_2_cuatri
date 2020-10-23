import { Component, Input, OnInit } from '@angular/core';
import { Mesa } from 'src/app/clases/mesa';

@Component({
  selector: 'app-detalle-mesa',
  templateUrl: './detalle-mesa.component.html',
  styleUrls: ['./detalle-mesa.component.scss'],
})
export class DetalleMesaComponent implements OnInit {
  @Input() mesa: Mesa;

  constructor() { }

  ngOnInit() {}

  reservar()
  {
    console.log("Realizar reserva");
  }

}
