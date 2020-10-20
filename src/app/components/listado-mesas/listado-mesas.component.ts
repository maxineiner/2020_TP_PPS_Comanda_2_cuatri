import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Mesa } from 'src/app/clases/mesa';

@Component({
  selector: 'app-listado-mesas',
  templateUrl: './listado-mesas.component.html',
  styleUrls: ['./listado-mesas.component.scss'],
})
export class ListadoMesasComponent implements OnInit {
  @Input() mesas: Mesa[] = [];
  @Output() elegirMesa: EventEmitter<Mesa> = new EventEmitter<Mesa>();

  constructor() { }

  ngOnInit() {}

  seleccionarMesa(mesa: Mesa)
  {
    this.elegirMesa.emit(mesa);
  }
}
