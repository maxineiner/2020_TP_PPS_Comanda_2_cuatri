import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-menu-producto',
  templateUrl: './menu-producto.page.html',
  styleUrls: ['./menu-producto.page.scss'],
})
export class MenuProductoPage implements OnInit
{

  opcion: string = 'Listado';
  listado: Producto[];
  productoElegido: Producto;

  constructor(private productoService: ProductoService) { }

  ngDoCheck(): void 
  {
    this.listado = ProductoService.productos;
  }

  ngOnInit()
  {
    console.log("INIT");
    this.productoService.traerTodos().then(data =>
    {
      console.log(data);
      this.listado = data;
    });
  }

  seleccionarOpcion(event)
  {
    console.log(event.detail.value);
    this.opcion = event.detail.value;
  }

  elegirProducto(event)
  {
    console.log(event);
    this.productoElegido = event;
  }

}
