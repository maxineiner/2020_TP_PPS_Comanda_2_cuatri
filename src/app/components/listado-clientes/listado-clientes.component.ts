import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoadingController } from '@ionic/angular';
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

  constructor(private loadingController: LoadingController)
  { }

  ngOnInit() 
  {
    this.presentLoading('Cargando clientes...');
  }

  /**
   * Método para enviar cliente seleccionado
   * @param cliente Cliente seleccionado
   */
  seleccionarClienteDelListado(cliente: Cliente)
  {
    this.seleccionarCliente.emit(cliente);
  }

  //TODO: do this method generic for all lists
  async presentLoading(message: string, duration?: number)
  {
    if (duration === undefined || duration <= 0)
    {
      duration = this.loadingTime
    }
    const loading = await this.loadingController.create({
      message,
      duration,
      spinner: 'crescent'
    });
    await loading.present();
  }
}
