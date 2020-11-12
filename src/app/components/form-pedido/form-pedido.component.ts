import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { EstadoPedido, Pedido } from 'src/app/clases/pedido';
import { Producto } from 'src/app/clases/producto';
import { CartaPage } from 'src/app/pages/carta/carta.page';
import { DataPedido, PedidoService } from 'src/app/services/pedido.service';
import { ProductoService } from 'src/app/services/producto.service';
import { UIVisualService } from 'src/app/services/uivisual.service';
import { ListaPlatosClienteComponent } from '../lista-platos-cliente/lista-platos-cliente.component';
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
    private toastController: ToastController, private UIVisual: UIVisualService) { }

  ngOnInit() 
  {

  }

  alta()
  {
    console.log("Alta pedido");
    console.log(this.pedido);
    if (this.pedido)
    {
      this.pedido.fechaFin = new Date().getTime();
      this.pedido.estado = EstadoPedido.SOLICITADO;
      // Alta de mesa en DB
      this.pedidoService.actualizar(this.pedido)
        .then(() => UIVisualService.presentToast('Alta exitosa'))
        .catch(() => UIVisualService.presentToast('No se pudo realizar el alta'));
    }
  }

  modificacion()
  {
    if (this.pedido)
    {
      this.pedidoService.actualizar(this.pedido)
        .then(() => UIVisualService.presentToast('Modificación exitosa'))
        .catch(() => UIVisualService.presentToast('No se pudo modificar'));
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
        .then(() => UIVisualService.presentToast('Baja realizada'))
        .catch(() => UIVisualService.presentToast('No se pudo realizar baja'));
    }
  }


  async mostrarCarta()
  {
    console.log("Ver carta");

    const data = await UIVisualService.verCarta();

    this.pedido.productos = this.pedido.productos ? this.pedido.productos : [];

    this.pedido.productos.push(...data);
    this.pedido.calcularTotal();

    console.log(data);
  }

  actualizarPlatos(productos)
  {
    this.pedido.productos = productos;
  }


  async mostrarDetalle()
  {
    UIVisualService.verPlatos(this.pedido);
  }

}
