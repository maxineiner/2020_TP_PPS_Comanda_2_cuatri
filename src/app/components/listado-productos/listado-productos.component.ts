import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from "../../clases/producto";
@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss'],
})
export class ListadoProductosComponent implements OnInit {

  @Input() productos: Producto[] = [];
  @Output() elegirProducto: EventEmitter<Producto> = new EventEmitter<Producto>();

  constructor() { }

  ngOnInit() {}

  seleccionarProducto(producto: Producto)
  {
    this.elegirProducto.emit(producto);
  }
}
