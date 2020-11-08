import { Component, DoCheck, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente, EstadoAceptacion } from '../../clases/cliente';

@Component({
  selector: 'app-clientes-pendientes',
  templateUrl: './clientes-pendientes.page.html',
  styleUrls: ['./clientes-pendientes.page.scss'],
})
export class ClientesPendientesPage implements OnInit, DoCheck
{

  clientesPendientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit()
  {
    this.clienteService.leer().then()
  }

  ngDoCheck()
  {
    this.clientesPendientes = ClienteService.clientes.filter(c => c.estado == EstadoAceptacion.Pendiente)
    console.log(this.clientesPendientes)
  }
}
