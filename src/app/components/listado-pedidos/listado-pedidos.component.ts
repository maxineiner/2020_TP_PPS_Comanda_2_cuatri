import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pedido } from 'src/app/clases/pedido';

@Component({
  selector: 'app-listado-pedidos',
  templateUrl: './listado-pedidos.component.html',
  styleUrls: ['./listado-pedidos.component.scss'],
})
export class ListadoPedidosComponent implements OnInit
{
  @Input() pedidos: Pedido[];
  @Output() elegirPedido: EventEmitter<Pedido> = new EventEmitter<Pedido>();

  constructor() { }

  ngOnInit() { }

  seleccionarPedido(pedido)
  {
    this.elegirPedido.emit(pedido);
  }

}
