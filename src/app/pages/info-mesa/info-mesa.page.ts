import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Cliente } from 'src/app/clases/cliente';
import { Mesa } from 'src/app/clases/mesa';
import { EstadoPedido, Pedido } from 'src/app/clases/pedido';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { DateService } from 'src/app/services/date.service';
import { MesaService } from 'src/app/services/mesa.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-info-mesa',
  templateUrl: './info-mesa.page.html',
  styleUrls: ['./info-mesa.page.scss'],
})
export class InfoMesaPage implements OnInit
{
  usuario: Usuario;
  pedido: Pedido = new Pedido();
  horaActual: Date;
  idPedido: string;
  idMesa: string;

  constructor(private route: ActivatedRoute, private router: Router, private mesaService: MesaService,
    private clienteService: ClienteService, private pedidoService: PedidoService,
    private dateService: DateService, private modalController: ModalController,
    private rolService: RolesService) 
  {

  }

  ngOnInit() 
  {
    this.usuario = AuthService.usuario;
    // Se recibe id de Mesa asignada y id de Cliente
    this.route.params.subscribe(params =>
    {
      console.log(params['id']);
      this.idMesa = params['mesa'];
      this.idPedido = params['pedido'] ? params['pedido'] : "";

      this.buscarReserva();
    });

  }

  buscarReserva()
  {
    let fechaActual = new Date();


    if (this.rolService.isCliente(this.usuario)) // Si es cliente accede por QR de Mesa
    {
      this.pedido = PedidoService.pedidos.filter(pedido =>
      {
        // Agregar validacion de hora actual
        if (pedido.cliente && pedido.mesa)
        {
          return pedido.mesa.id === this.idMesa && pedido.cliente.id == this.usuario.id &&
            this.compararFechas(new Date(pedido.fechaInicio), fechaActual);
        }
      })[0];
    }
    else if (this.rolService.isEmpleado(this.usuario)) // Si es empleado accede desde listado
    {
      this.pedido = PedidoService.pedidos.filter(pedido =>
      {
        // Agregar validacion de hora actual
        if (pedido.cliente && pedido.mesa)
        {
          return pedido.id === this.idPedido;
        }
      })[0];
    }

    console.log(this.pedido);
  }

  compararFechas(fechaA: Date, fechaB: Date)
  {
    console.log(fechaA);
    console.log(fechaB);


    if (fechaA.getUTCFullYear() === fechaB.getFullYear() &&
      fechaA.getUTCMonth() === fechaB.getMonth() &&
      fechaA.getUTCDate() === fechaB.getDate() &&
      fechaA.getUTCHours() === fechaB.getHours())
    {
      console.log("Misma fecha");
      return true;
    }
    return false;
  }
}

