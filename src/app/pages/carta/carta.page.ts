import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Producto } from 'src/app/clases/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.page.html',
  styleUrls: ['./carta.page.scss'],
})
export class CartaPage implements OnInit
{
  productos: Producto[] = [];
  productosElegidos: Producto[] = [];

  constructor(private modalController: ModalController,
    private productoService: ProductoService,
    private toastController: ToastController) { }

  ngOnInit()
  {
    this.generarCarta();
  }

  async generarCarta()
  {
    this.productos = await this.productoService.traerTodos();

    console.log(this.productos);
  }


  public agregar(producto: Producto)
  {
    console.log(producto);
    this.productosElegidos.push(producto);
    this.presentToast(`Se agregó ${producto.nombre} al pedido`);
  }

  public cerrar()
  {
    this.modalController.dismiss(this.productosElegidos);
  }

  async presentToast(message)
  {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
