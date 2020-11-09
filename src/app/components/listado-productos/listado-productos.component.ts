import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TipoEmpleado } from 'src/app/clases/empleado';
import { Producto } from "../../clases/producto";

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss'],
})
export class ListadoProductosComponent implements OnInit
{
  @Input() opcion: string;
  @Input() productos: Producto[] = [];
  @Output() elegirProducto: EventEmitter<Producto> = new EventEmitter<Producto>();

  constructor() { }


  ngDoCheck(): void 
  {
    if (this.opcion == "Platos")
    {
      this.productos = this.productos.filter(producto => producto.tipo == TipoEmpleado.Cocinero);
    }
    else if (this.opcion == "Bebidas")
    {
      this.productos = this.productos.filter(producto => producto.tipo == TipoEmpleado.Bartender);
    }
  }

  ngOnInit() 
  {
    console.log(this.opcion)

    if (this.opcion == "Platos")
    {
      this.productos = this.productos.filter(producto => producto.tipo === TipoEmpleado.Cocinero);
    }
    else if (this.opcion == "Bebidas")
    {
      this.productos = this.productos.filter(producto => producto.tipo === TipoEmpleado.Bartender);
    }

  }

  seleccionarProducto(producto: Producto)
  {
    this.elegirProducto.emit(producto);
  }





}
