import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { ProductoService } from 'src/app/services/producto.service';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-menu-producto',
  templateUrl: './menu-producto.page.html',
  styleUrls: ['./menu-producto.page.scss'],
})
export class MenuProductoPage implements OnInit
{
  usuario: Usuario;
  opcion: string = 'Listado';
  listado: Producto[];
  productoElegido: Producto = new Producto();

  constructor(private productoService: ProductoService, private rolService: RolesService) { }

  ngDoCheck(): void 
  {
    this.listado = ProductoService.productos;
  }

  ngOnInit()
  {
    // No es necesario inyectar el servicio por ser propiedad estática
    this.usuario = AuthService.usuario;

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
