import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-lista-platos-cliente',
  templateUrl: './lista-platos-cliente.component.html',
  styleUrls: ['./lista-platos-cliente.component.scss'],
})
export class ListaPlatosClienteComponent implements OnInit
{
  @Input() productos: Producto[];
  @Output() enviarProductos: EventEmitter<Producto[]> = new EventEmitter<Producto[]>();

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

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

  public cerrar()
  {
    this.modalController.dismiss(this.productos);
  }

}
