import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoadingController, ModalController, PopoverController } from '@ionic/angular';
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
