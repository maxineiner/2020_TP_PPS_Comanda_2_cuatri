import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Jefe } from 'src/app/clases/jefe';


@Component({
  selector: 'app-listado-jefes',
  templateUrl: './listado-jefes.component.html',
  styleUrls: ['./listado-jefes.component.scss'],
})
export class ListadoJefesComponent implements OnInit
{
  @Input() jefes: Jefe[] = [];
  @Output() seleccionarJefe: EventEmitter<Jefe> = new EventEmitter<Jefe>();
  loadingTime = 2000;

  constructor()
  { }

  ngOnInit() 
  {
  }

  /**
   * Método para enviar jefe seleccionado
   * @param jefe Jefe seleccionado
   */
  seleccionarJefeDelListado(jefe: Jefe)
  {
    this.seleccionarJefe.emit(jefe);
  }

}
