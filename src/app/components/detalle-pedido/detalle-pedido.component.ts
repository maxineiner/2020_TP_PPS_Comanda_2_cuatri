import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { EstadoPedido, Pedido } from 'src/app/clases/pedido';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { MetadataMensaje } from 'src/app/services/mensajes.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { RolesService } from 'src/app/services/roles.service';
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
  usuario: Usuario = AuthService.usuario;

  constructor(private actionSheetController: ActionSheetController,
    private modalController: ModalController,
    private UIVisual: UIVisualService,
    private pedidoService: PedidoService,
    private router: Router,
    private rolService: RolesService) 
  {
    //this.pedido.calcularTotal();
  }

  ngOnInit() 
  {
    console.log(this.pedido);
  }

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
    let rol = this.rolService.isCliente(this.usuario) ? 'Cliente' : 'Mozo';
    let mesa = null;

    if (rol == 'Cliente')
    {
      mesa = this.pedido.mesa.numero;
    }

    let metadataMensaje: MetadataMensaje = {
      chatId: this.pedido.id,
      mesa: mesa
    };

    UIVisualService.presentActionSheet(rol, {
      mostrarPlatos: { handler: UIVisualService.verPlatos, params: this.pedido.productos },
      solicitar: { handler: "", params: this.pedido },
      confirmar: { handler: "", params: this.pedido },
      recibir: { handler: "", params: this.pedido },
      cerrar: { handler: "", params: this.pedido },
      chat: { handler: UIVisualService.verChat, params: metadataMensaje }
    })
  }



}
