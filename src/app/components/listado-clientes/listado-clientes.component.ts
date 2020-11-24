import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cliente } from 'src/app/clases/cliente';


@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.scss'],
})
export class ListadoClientesComponent implements OnInit
{
  @Input() clientes: Cliente[] = [];
  @Input() pendientes: boolean;
  @Output() seleccionarCliente: EventEmitter<Cliente> = new EventEmitter<Cliente>();
  loadingTime = 2000;

  constructor()
  { }

  ngOnInit() 
  {
  }

  /**
   * Método para enviar cliente seleccionado
   * @param cliente Cliente seleccionado
   */
  seleccionarClienteDelListado(cliente: Cliente)
  {
    this.seleccionarCliente.emit(cliente);
  }


}
