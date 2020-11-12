import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonList, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Empleado } from 'src/app/clases/empleado';
import { EstadoPedido, Pedido } from 'src/app/clases/pedido';
import { Producto } from 'src/app/clases/producto';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { RolesService } from 'src/app/services/roles.service';
import { UIVisualService } from 'src/app/services/uivisual.service';

@Component({
  selector: 'app-lista-platos-cliente',
  templateUrl: './lista-platos-cliente.component.html',
  styleUrls: ['./lista-platos-cliente.component.scss'],
})
export class ListaPlatosClienteComponent implements OnInit
{
  @Input() usuario: Usuario = AuthService.usuario;
  @Input() pedido: Pedido;
  @Output() enviarProductos: EventEmitter<Producto[]> = new EventEmitter<Producto[]>();
  pedidoModificado: boolean;

  @ViewChild('lista', { static: false }) lista: IonList;

  constructor(private modalController: ModalController, private rolService: RolesService,
    private pedidoService: PedidoService, private loadingController: LoadingController,
    private toastController: ToastController, private UIVisual: UIVisualService) { }

  ngOnInit() 
  {
    this.pedidoModificado = false;
  }

  removerPlato(index: number)
  {
    const nuevaLista = this.pedido.productos.filter((p, i) => i != index);
    this.pedido.productos = nuevaLista;
    this.enviarProductos.emit(this.pedido.productos);
    this.pedidoModificado = true;

    this.lista.closeSlidingItems();
  }

  entregarPlato(index: number)
  {
    console.log(this.pedido.productos[index]);

    if (!this.pedido.productos[index].isReady)
    {
      this.pedido.productos[index].isReady = true;
    }
    else if (this.pedido.productos[index].isReady)
    {
      this.pedido.productos[index].isReady = false;
    }

    this.pedidoModificado = true;
    this.lista.closeSlidingItems();
  }

  cerrar()
  {
    if (this.pedidoModificado)
    {
      console.log("Pedido actualizado");
      UIVisualService.loading();
      this.pedido.calcularTotal();
      this.pedidoService.actualizar(this.pedido)
        .then(() => UIVisualService.presentToast("Se actualiza pedido"));
    }
    this.modalController.dismiss(this.pedido.productos);
  }

  validarAccion(producto: Producto)
  {
    if (this.pedido.estado == EstadoPedido.EN_PROGRESO &&
      this.rolService.isEmpleadoCocinero(this.usuario) ||
      this.rolService.isEmpleadoBartender(this.usuario))
    {
      if (producto.tipo == (<Empleado>this.usuario).tipo)
      {
        return true
      }
    }
    return false;
  }

  isReady(index: number)
  {
    if (this.pedido.productos[index].isReady) 
    {
      return true;
    }
    return false;
  }

  cambiarColor(index)
  {
    if (this.isReady(index))
    {
      return "success";
    }
    return "light"
  }




}
