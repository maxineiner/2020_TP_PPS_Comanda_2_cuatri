import { Component, DoCheck, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Cliente } from 'src/app/clases/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { UIVisualService } from 'src/app/services/uivisual.service';

@Component({
  selector: 'app-lista-de-espera',
  templateUrl: './lista-de-espera.page.html',
  styleUrls: ['./lista-de-espera.page.scss'],
})
export class ListaDeEsperaPage implements OnInit , DoCheck
{

  clientes: Cliente[];

  constructor(
    private clienteService: ClienteService,
    private UIVisual: UIVisualService
  )
  {
    this.clienteService.leer().then(clientes=>{
      this.clientes = clientes.filter(cliente => cliente.enListaDeEspera == true);
      console.log(this.clientes);
    })
    
  }

  ngDoCheck(): void
  {
    this.clientes = ClienteService.clientes.filter(cliente => cliente.enListaDeEspera == true);
  }


  ngOnInit() 
  {

  }

  quitarDeLaLista(cliente:Cliente){
    cliente.enListaDeEspera = false;
    this.clienteService.actualizar(cliente).then(ok=>{
      UIVisualService.presentToast('Removido correctamente.');
    });
  }

  asignarMesa(cliente){
    
  }

}
