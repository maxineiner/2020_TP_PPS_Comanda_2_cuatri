import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mesa } from 'src/app/clases/mesa';
import { EstadoPedido, Pedido } from 'src/app/clases/pedido';
import { Usuario } from 'src/app/clases/usuario';
import { ClienteService } from 'src/app/services/cliente.service';
import { DateService } from 'src/app/services/date.service';
import { MesaService } from 'src/app/services/mesa.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-info-mesa',
  templateUrl: './info-mesa.page.html',
  styleUrls: ['./info-mesa.page.scss'],
})
export class InfoMesaPage implements OnInit
{
  usuario: Usuario;
  pedido: Pedido;
  horaActual: Date;

  constructor(private route: ActivatedRoute, private mesaService: MesaService,
    private clienteService: ClienteService, private pedidoService: PedidoService,
    private dateService: DateService) 
  {
    // Se recibe id de Mesa asignada y id de Cliente
    // this.route.params.subscribe(params =>
    // {
    //   console.log(params['id']);
    //   this.buscarReserva(params['id']);
    //   //this.clienteService.fetch(idCliente)
    // });
    //
    // Codigo para testing
    this.buscarReserva("-MLOssaEI7D5pr7Q8OMl");
  }

  ngOnInit() 
  {
  }

  async buscarReserva(id: string)
  {
    let horaActual = new Date();
    // Se debería traer Entidad con información sobre Pedido y Cliente de Mesa

    this.pedido = PedidoService.pedidos.filter(pedido =>
    {
      // Agregar validacion de hora actual
      if (pedido.cliente && pedido.mesa)
      {
        return pedido.estado == EstadoPedido.RESERVADO &&
          this.compararFechas(this.dateService.toDate(pedido.fechaInicio), horaActual) &&
          pedido.mesa.id === id &&
          pedido.cliente.id == this.usuario.id;
      }
    })[0];
  }

  verEncuesta()
  {
    console.log("Ver encuesta");
  }

  consultarAlMozo()
  {

  }

  compararFechas(fechaA: Date, fechaB: Date)
  {
    console.log("Fecha A - Fecha pedido");
    console.log(fechaA);
    console.log("Fecha B- Fecha actual");
    console.log(fechaB);

    if (fechaA.getFullYear() == fechaB.getFullYear() &&
      fechaA.getMonth() === fechaB.getMonth() &&
      fechaA.getDate() === fechaB.getMonth() &&
      fechaA.getHours() === fechaB.getHours())
    {
      return true;
    }
    return false;
  }
}

