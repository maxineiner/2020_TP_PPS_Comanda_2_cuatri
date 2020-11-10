import { Component, DoCheck, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clases/cliente';
import { Mesa } from 'src/app/clases/mesa';
import { EstadoPedido, Pedido } from 'src/app/clases/pedido';
import { ClienteService } from 'src/app/services/cliente.service';
import { MesaService } from 'src/app/services/mesa.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { UIVisualService } from 'src/app/services/uivisual.service';

@Component({
  selector: 'app-lista-de-espera',
  templateUrl: './lista-de-espera.page.html',
  styleUrls: ['./lista-de-espera.page.scss'],
})
export class ListaDeEsperaPage implements OnInit, DoCheck
{

  asignandoMesa: boolean = false;
  clientes: Cliente[];
  mesas: Mesa[];
  clienteActual: Cliente;

  constructor(
    private clienteService: ClienteService,
    private UIVisual: UIVisualService,
    private pedidosService: PedidoService,
    private mesasService: MesaService,
  )
  {
    this.clienteService.leer().then(clientes =>
    {
      this.clientes = clientes.filter(cliente => cliente.enListaDeEspera == true);
      console.log(this.clientes);
    })
    this.mesasService.leer().then(mesas =>
    {
      this.mesas = mesas/* .filter(mesa=>{mesa.isAvailable == true}) */
    })

  }

  ngDoCheck(): void
  {
    this.clientes = ClienteService.clientes.filter(cliente => cliente.enListaDeEspera == true);
    this.mesas = MesaService.mesas;/* .filter(mesa=>{mesa.isAvailable == true}) */
  }


  ngOnInit() 
  {

  }

  quitarDeLaLista(cliente: Cliente)
  {
    cliente.enListaDeEspera = false;
    this.clienteService.actualizar(cliente).then(ok =>
    {
      UIVisualService.presentToast('Removido correctamente.');
    });
  }

  verMesas(cliente: Cliente)
  {
    this.clienteActual = cliente;
    this.asignandoMesa = true;
    UIVisualService.presentAlert('Cliente ' + cliente.nombre, 'Asigne una mesa.');
  }

  asignarMesa(mesa: Mesa)
  {
    let mensaje = 'Mesa:' + mesa.numero + ' asignada.';
    let fechaActual = Date.now() - (new Date().getTimezoneOffset() * 60000);

    this.pedidosService.crear(Pedido.CrearPedido('', this.clienteActual, mesa, null, fechaActual,
      null, null, EstadoPedido.ASIGNADO, true)).then(() =>
      {
        //Se envia push al cliente avisando que es su turno y un redireccionamiento al pedidos page
        UIVisualService.presentAlert('Mesa Asignada', mensaje);
        this.asignandoMesa = false;
      })

  }

}
