import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Empleado } from 'src/app/clases/empleado';
import { EstadoPedido } from 'src/app/clases/pedido';
import { Producto } from 'src/app/clases/producto';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-lista-platos-cliente',
  templateUrl: './lista-platos-cliente.component.html',
  styleUrls: ['./lista-platos-cliente.component.scss'],
})
export class ListaPlatosClienteComponent implements OnInit
{
  @Input() usuario: Usuario = AuthService.usuario;
  @Input() productos: Producto[];
  @Input() estado: EstadoPedido;
  @Output() enviarProductos: EventEmitter<Producto[]> = new EventEmitter<Producto[]>();

  constructor(private modalController: ModalController, private rolService: RolesService) { }

  ngOnInit() 
  {
    console.log(this.estado);
    console.log(this.usuario);
  }

  removerPlato(index: number)
  {
    const nuevaLista = this.productos.filter((p, i) => i != index);
    this.productos = nuevaLista;
    this.enviarProductos.emit(this.productos);
  }

  entregarPlato(index: number)
  {
    console.log(this.productos[index]);
    this.enviarProductos.emit(this.productos);
  }

  cerrar()
  {
    this.modalController.dismiss(this.productos);
  }

  validarAccion(producto: Producto)
  {
    if (this.estado == EstadoPedido.EN_PROGRESO &&
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

}
