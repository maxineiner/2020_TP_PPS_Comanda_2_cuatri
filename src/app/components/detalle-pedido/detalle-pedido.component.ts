import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { EstadoPedido, Pedido } from 'src/app/clases/pedido';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { MetadataMensaje } from 'src/app/services/mensajes.service';
import { DataPedido, PedidoService } from 'src/app/services/pedido.service';
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

  async mostrarOpciones()
  {
    let rol;
    let mesa = null;

    if (this.rolService.isCliente(this.usuario))
    {
      rol = 'Cliente';
      mesa = this.pedido.mesa.numero;
    }
    else if (this.rolService.isEmpleadoMozo(this.usuario))
    {
      rol = 'Mozo';
    }
    else if (this.rolService.isEmpleadoCocinero(this.usuario))
    {
      rol = 'Cocinero';
    }
    else if (this.rolService.isEmpleadoBartender(this.usuario))
    {
      rol = 'Bartender';
    }

    let metadataMensaje: MetadataMensaje = {
      chatId: this.pedido.id,
      mesa: mesa
    };

    let dataPedido: DataPedido = {
      productos: this.pedido.productos,
      estado: this.pedido.estado
    };

    UIVisualService.presentActionSheet(rol, {
      mostrarPlatos: { handler: UIVisualService.verPlatos, params: dataPedido },
      solicitar: { handler: "", params: this.pedido },
      confirmar: { handler: "", params: this.pedido },
      recibir: { handler: "", params: this.pedido },
      cerrar: { handler: "", params: this.pedido },
      chat: { handler: UIVisualService.verChat, params: metadataMensaje }
    })
  }



}
