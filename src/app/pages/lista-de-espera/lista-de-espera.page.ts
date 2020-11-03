import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Cliente } from 'src/app/clases/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-lista-de-espera',
  templateUrl: './lista-de-espera.page.html',
  styleUrls: ['./lista-de-espera.page.scss'],
})
export class ListaDeEsperaPage implements OnInit
{

  clientes: Cliente[] = [];
  loadingTime = 2000;

  constructor(
    private clienteService: ClienteService,
  )
  {
    this.clienteService.leer().then(clientes=>{
      this.clientes = clientes.filter(cliente => cliente.enListaDeEspera == true);
    })
  }

  ngOnInit() 
  {

  }

  seleccionarClienteDelListado(cliente: Cliente)
  {

  }

}
