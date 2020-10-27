import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from 'src/app/clases/pedido';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.scss'],
})
export class DetallePedidoComponent implements OnInit
{
  @Input() pedido: Pedido;

  constructor() 
  {
    //this.pedido.calcularTotal();
  }

  ngOnInit() { }

  entregar()
  {
    console.log("Se termina pedido desde cocina o barra");
  }

  recibir()
  {
    console.log("Se recibe pedido en la mesa");
  }

}
