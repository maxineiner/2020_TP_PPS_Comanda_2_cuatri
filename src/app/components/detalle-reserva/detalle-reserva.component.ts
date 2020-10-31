import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reserva } from '../../clases/reserva';

@Component({
  selector: 'app-detalle-reserva',
  templateUrl: './detalle-reserva.component.html',
  styleUrls: ['./detalle-reserva.component.scss'],
})
export class DetalleReservaComponent implements OnInit {

  @Input() reserva: Reserva;

  constructor() { }

  ngOnInit() {}

}
