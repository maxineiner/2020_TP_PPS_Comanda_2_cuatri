import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Producto } from "../../clases/producto";
@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss'],
})
export class ListadoProductosComponent implements OnInit
{

  @Input() productos: Producto[] = [];
  @Output() elegirProducto: EventEmitter<Producto> = new EventEmitter<Producto>();

  constructor(private loadingController: LoadingController, private modalController: ModalController) { }

  ngOnInit() { this.presentLoading('Cargando productos...', 2000); }

  seleccionarProducto(producto: Producto)
  {
    this.elegirProducto.emit(producto);
  }

  async presentLoading(message, duration) 
  {
    const loading = await this.loadingController.create({
      message,
      duration,
      spinner: 'crescent'
    });
    await loading.present();
  }

}
