import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mesa } from 'src/app/clases/mesa';
import { ClienteService } from 'src/app/services/cliente.service';
import { MesaService } from 'src/app/services/mesa.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-info-mesa',
  templateUrl: './info-mesa.page.html',
  styleUrls: ['./info-mesa.page.scss'],
})
export class InfoMesaPage implements OnInit
{
  mesa: Mesa;

  constructor(private route: ActivatedRoute, private mesaService: MesaService,
    private clienteService: ClienteService, private pedidoService: PedidoService) 
  {
    // Se recibe id de Mesa asignada y id de Cliente
    this.route.params.subscribe(params =>
    {
      this.buscarReserva(params['id']);
      //this.clienteService.fetch(idCliente)
    });
  }

  ngOnInit() 
  {
  }

  async buscarReserva(id: string)
  {
    let horaActual = new Date();
    // Se debería traer Entidad con información sobre Pedido y Cliente de Mesa
    this.mesa = await this.mesaService.fetch(id);
  }

  verEncuesta()
  {
    console.log("Ver encuesta");
  }

}
