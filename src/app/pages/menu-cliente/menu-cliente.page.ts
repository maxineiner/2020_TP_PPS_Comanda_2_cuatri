import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/clases/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.page.html',
  styleUrls: ['./menu-cliente.page.scss'],
})
export class MenuClientePage implements OnInit, DoCheck
{
  opcion: string = 'Listado';
  listado: Cliente[] = ClienteService.clientes;
  clienteSeleccionado: Cliente = new Cliente();

  constructor(private router: Router, private clienteService: ClienteService) { }

  ngDoCheck(): void
  {
    this.listado = ClienteService.clientes;
  }

  ngOnInit() 
  {
    console.log("INIT");

    this.clienteService.leer().then((clientes) =>
    {
      console.log(clientes);
      this.listado = clientes;
      console.log(this.listado);
    });
    this.clienteSeleccionado = new Cliente();
  }

  /**
   * Metodo para seleccionar modo del form para ABM
   * @param event Evento con el valor que determina modo del form
   */
  seleccionarOpcion(event)
  {
    console.log(event.detail.value);
    this.opcion = event.detail.value;
  }

  /**
   * Método para recibir cliente seleccionada
   * @param cliente seleccionado desde listado 
   */
  seleccionarCliente(cliente)
  {
    console.log(cliente);
    this.clienteSeleccionado = cliente;
  }
}