import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Pedido } from 'src/app/clases/pedido';
import { UIVisualService } from 'src/app/services/uivisual.service';
import { ListaPlatosClienteComponent } from '../lista-platos-cliente/lista-platos-cliente.component';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.scss'],
})
export class DetallePedidoComponent implements OnInit
{
  @Input() pedido: Pedido;

  constructor(private actionSheetController: ActionSheetController,
    private modalController: ModalController, private UIVisual: UIVisualService) 
  {
    //this.pedido.calcularTotal();
  }

  ngOnInit() { }

  confirmar()
  {
    console.log("Se confirma el pedido");
  }

  entregar()
  {
    console.log("Pedido entregado");
  }

  recibir()
  {
    console.log("Se recibe pedido en la mesa");
  }

  async mostrarOpciones()
  {
    UIVisualService.presentActionSheet('Usuario', {
      mostrarPlatos: { handler: UIVisualService.verPlatos, params: this.pedido.productos },
      solicitar: { handler: this.solicitar() },
      confirmar: { handler: null },
      entregar: { handler: null },
      recibir: { handler: null },
      cerrar: { handler: null },
    })
  }



  solicitar()
  {
    console.log("Se solicita el pedido");
  }



}
