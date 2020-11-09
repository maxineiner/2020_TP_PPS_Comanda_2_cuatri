import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { TipoEmpleado } from 'src/app/clases/empleado';
import { Producto } from 'src/app/clases/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.page.html',
  styleUrls: ['./carta.page.scss'],
})
export class CartaPage implements OnInit
{
  platos: Producto[];
  bebidas: Producto[];
  productosElegidos: Producto[] = [];
  opcion: string = 'Platos';

  constructor(private modalController: ModalController,
    private productoService: ProductoService,
    private toastController: ToastController) { }

  ngOnInit()
  {
    this.generarCarta();
  }

  async generarCarta()
  {
    this.platos = ProductoService.productos.filter(producto => producto.tipo == TipoEmpleado.Cocinero);
    this.bebidas = ProductoService.productos.filter(producto => producto.tipo == TipoEmpleado.Bartender);
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

  seleccionarOpcion(event)
  {
    console.log(event.detail.value);
    this.opcion = event.detail.value;
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
