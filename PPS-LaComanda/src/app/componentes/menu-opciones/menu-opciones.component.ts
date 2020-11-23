import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-opciones',
  templateUrl: './menu-opciones.component.html',
  styleUrls: ['./menu-opciones.component.scss'],
})
export class MenuOpcionesComponent implements OnInit {
	@Input() usuario
  constructor() { }

  ngOnInit() {}

}
