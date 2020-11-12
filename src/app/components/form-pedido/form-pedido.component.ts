import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoPedido, Pedido } from 'src/app/clases/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { UIVisualService } from 'src/app/services/uivisual.service';

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

  constructor(private pedidoService: PedidoService, private UIVisual: UIVisualService,
    private router: Router) { }

  ngOnInit()
  { }

  alta()
  {
    if (this.pedido)
    {
      this.pedido.fechaFin = new Date().getTime();
      this.pedido.estado = EstadoPedido.SOLICITADO;
      // Alta de mesa en DB
      this.pedidoService.actualizar(this.pedido)
        .then(() =>
        {
          UIVisualService.presentToast('Alta exitosa');
          this.router.navigate(['/home/inicio']);
        })
        .catch(() => UIVisualService.presentToast('No se pudo realizar el alta'));
    }
  }

  modificacion()
  {
    if (this.pedido)
    {
      this.pedidoService.actualizar(this.pedido)
        .then(() =>
        {
          UIVisualService.presentToast('Modificación exitosa');
          this.router.navigate(['/home/inicio']);
        })
        .catch(() => UIVisualService.presentToast('No se pudo modificar'));
    }

  }

  baja()
  {
    if (this.pedido)
    {
      this.pedidoService.borrar(this.pedido)
        .then(() =>
        {
          UIVisualService.presentToast('Baja realizada');
          this.router.navigate(['/home/inicio']);
        })
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
  }

  async mostrarDetalle()
  {
    UIVisualService.verPlatos(this.pedido);
    this.pedido.calcularTotal();
  }

}
