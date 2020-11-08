import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoadingController, ModalController, PopoverController } from '@ionic/angular';
import { TipoEmpleado } from 'src/app/clases/empleado';
import { Imagen } from 'src/app/clases/imagen';
import { Producto } from "../../clases/producto";
import { FotoComponent } from '../foto/foto.component';
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

  constructor(private loadingController: LoadingController, private modalController: ModalController) { }


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

    this.presentLoading('Cargando productos...', 2000);
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

  async presentLoading(message, duration) 
  {
    const loading = await this.loadingController.create({
      message,
      duration,
      spinner: 'crescent',
      mode: "ios",
    });
    await loading.present();
  }



}
