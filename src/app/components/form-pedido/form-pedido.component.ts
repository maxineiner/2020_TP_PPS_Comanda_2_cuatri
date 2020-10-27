import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Pedido } from 'src/app/clases/pedido';
import { Producto } from 'src/app/clases/producto';
import { CartaPage } from 'src/app/pages/carta/carta.page';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProductoService } from 'src/app/services/producto.service';
import { ListadoProductosComponent } from '../listado-productos/listado-productos.component';

enum OpcionForm
{
  ALTA = 'Alta',
  MODIFICACION = 'Modificación',
  BAJA = 'Baja',
}

@Component({
  selector: 'app-form-pedido',
  templateUrl: './form-pedido.component.html',
  styleUrls: ['./form-pedido.component.scss'],
})
export class FormPedidoComponent implements OnInit 
{
  @Input() reserva: any; // Se requiere tener una reserva para hacer pedido
  @Input() opcion: OpcionForm = OpcionForm.ALTA;
  @Input() pedido: Pedido = new Pedido();

  constructor(private pedidoService: PedidoService, private modalController: ModalController,
    private toastController: ToastController) { }

  ngOnInit() 
  {
    if (this.opcion == 'Alta')
    {
      this.pedido = new Pedido();
    }
  }

  alta()
  {
    console.log("Alta pedido");
    console.log(this.pedido);
    if (this.pedido && !this.pedido.id)
    {
      // Alta de mesa en DB
      this.pedidoService.crear(this.pedido)
        .then(() => this.presentToast('Alta exitosa', 2000))
        .catch(() => this.presentToast('No se pudo realizar el alta', 2000));
    }
  }

  modificacion()
  {
    if (this.pedido)
    {
      this.pedidoService.actualizar(this.pedido)
        .then(() => this.presentToast('Modificación exitosa', 2000))
        .catch(() => this.presentToast('No se pudo modificar', 2000));
    }
    console.log("Modificacion pedido");
    console.log(this.pedido);
  }

  cierre()
  {
    console.log("Baja pedido");
    console.log(this.pedido);
    if (this.pedido)
    {
      this.pedidoService.borrar(this.pedido)
        .then(() => this.presentToast('Baja realizada', 2000))
        .catch(() => this.presentToast('No se pudo realizar baja', 2000));
    }
  }


  async mostrarCarta()
  {
    console.log("Ver carta");

    const modal = await this.modalController.create({
      component: CartaPage,
    });

    await modal.present();

    const { data } = await modal.onDidDismiss<Producto[]>();
    this.pedido.productos.push(...data);
    this.pedido.calcularTotal();

    console.log(data);
  }

  removerProducto(producto)
  {
    const nuevaLista = this.pedido.productos.filter(p => p.id != producto.id);
    this.pedido.productos = nuevaLista;
  }

  // Toast para notificaciones
  async presentToast(message, duration)
  {
    const toast = await this.toastController.create({
      message,
      duration,
    })
    toast.present();
  }

}
