import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { EstadoPedido, Pedido } from 'src/app/clases/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { UIVisualService } from 'src/app/services/uivisual.service';
import { FormPedidoComponent } from '../form-pedido/form-pedido.component';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.scss'],
})
export class DetallePedidoComponent implements OnInit
{
  @Input() pedido: Pedido;

  constructor(private actionSheetController: ActionSheetController,
    private modalController: ModalController,
    private UIVisual: UIVisualService,
    private pedidoService: PedidoService,
    private router: Router) 
  {
    //this.pedido.calcularTotal();
  }

  ngOnInit() { }



  recibir()
  {
    console.log("Se recibe pedido en la mesa");
    this.pedido.cambiarEstado();
    this.pedidoService.actualizar(this.pedido);
  }

  pagar()
  {
    console.log("Pagar pedido");
    this.pedido.cambiarEstado();
    this.pedidoService.actualizar(this.pedido);
  }

  async mostrarOpciones()
  {
    UIVisualService.presentActionSheet('Cliente', {
      mostrarPlatos: { handler: UIVisualService.verPlatos, params: this.pedido.productos },
      solicitar: { handler: "", params: this.pedido },
      confirmar: { handler: null },
      entregar: { handler: null },
      recibir: { handler: null },
      cerrar: { handler: null },
      chat: { handler: UIVisualService.verChat }
    })
  }



}
