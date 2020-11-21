import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MesaService } from '../../services/mesa.service';
import { Mesa } from '../../clases/mesa';
import { Cliente } from 'src/app/clases/cliente';
import { EstadoPedido, Pedido } from 'src/app/clases/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { UIVisualService } from 'src/app/services/uivisual.service';
import { DateService } from 'src/app/services/date.service';
import { AuthService } from 'src/app/services/auth.service';
import { RolesService } from 'src/app/services/roles.service';
import { NotificationsService } from 'src/app/services/notifications.service';

enum OpcionForm
{
  ALTA = "Alta",
  MODIFICACION = "Modificación",
  BAJA = "Baja",
}
@Component({
  selector: 'app-form-reserva',
  templateUrl: './form-reserva.component.html',
  styleUrls: ['./form-reserva.component.scss'],
})
export class FormReservaComponent
{

  @Input() opcion: OpcionForm;
  @Input() pedido: Pedido;

  reservaForm: FormGroup;
  todasLasMesas: Array<Mesa>;
  mesasDisponibles: Array<Mesa>;
  pedidos: Array<Pedido>;
  cliente: Cliente;
  fechaActual: string;
  hayDisponibilidad: boolean = true;

  constructor(
    private fb: FormBuilder,
    private mesasService: MesaService,
    private pedidosService: PedidoService,
    private UIVisual: UIVisualService,
    private dateService: DateService,
    private authService: AuthService,
    private rolesService: RolesService,
    private notificationService:NotificationsService
  )
  {
    this.fechaActual = this.dateService.getIsoLocalTime(new Date());
    if (this.rolesService.isClienteAceptado(AuthService.usuario))//Solo un cliente registrado puede hacer una reserva.
    {
      this.cliente = AuthService.usuario as Cliente;
      console.log('Cliente actual: ', this.cliente);
    }


    this.crearForm();
    this.leerPedidos();
    this.leerMesas();
  }


  ngOnChanges()
  {
    this.rellenarFormulario();
  }

  rellenarFormulario()
  {
    try
    {
      if (this.pedido && this.opcion != OpcionForm.ALTA)
      {
        let date = new Date(this.pedido.fechaInicio).toISOString();
        this.reservaForm.setValue({
          cliente: this.cliente,
          mesa: this.pedido.mesa,
          date: date,
        });
      } else
      {
        this.reservaForm.reset();
      }

      if (this.opcion == OpcionForm.BAJA)
      {
        this.reservaForm.disable();
      } else
      {
        this.reservaForm.enable();
      }
    } catch (error)
    {
      console.error(error);
    }
  }

  crearForm()
  {
    this.reservaForm = this.fb.group({
      cliente: new FormControl({ value: this.cliente }, Validators.required),
      date: new FormControl('', Validators.required),
      mesa: new FormControl({ value: Mesa }, Validators.required),
    });
  }

  crear()
  {
    if (this.asignarCliente(this.cliente))
    {
      let stringISO = this.reservaForm.controls['date'].value;
      let timeStamp = Date.parse(stringISO);
      console.log(stringISO);
      console.log(timeStamp);
      let pedido = Pedido.CrearPedido(
        "_",
        this.reservaForm.controls['cliente'].value,
        this.reservaForm.controls['mesa'].value,
        [], timeStamp, null, 0, EstadoPedido.RESERVADO, true);
      this.pedidosService.crear(pedido).then(() => { 
        this.notificationService.enviarNotificacion(
          'Nueva Reserva',`El cliente ${this.cliente.nombre} ${this.cliente.apellido} acaba de hacer una reserva`,
          '/home/menu-reserva',
          'jefes'
          ).then().catch(()=>UIVisualService.presentToast('No se envio la notificacion.'))
        UIVisualService.presentToast('Reserva exitosa.');
       });
    }

  }

  leerMesasDisponibles()
  {
    let stringISO = this.reservaForm.controls['date'].value;
    let timeStamp = Date.parse(stringISO);
    let reservasFechaYHoraElegida = this.filtrarReservas(timeStamp);
    this.mesasDisponibles = this.todasLasMesas.filter(mesa =>
    {
      if (reservasFechaYHoraElegida.length >= 1)
      {
        let estaReservada = false;
        reservasFechaYHoraElegida.forEach(pedido =>
        {
          if (pedido.mesa.id == mesa.id)
          {
            estaReservada = true;
          }
        })
        if (!estaReservada)
        {
          return mesa;
        }

      }
      else
      {
        return mesa;
      }

    })
    if (this.mesasDisponibles.length == 0)
    {
      this.hayDisponibilidad = false;
    }
    else
    {
      this.hayDisponibilidad = true;
    }
  }

  /**
   * Filtra las reservas que hay para el dia elegido y la hora elegida +- 10 minutos.
   * (podrian ser 40, o el tiempo estipulado para que una persona coma)
   * Luego ya se puede reservar otra vez
   * @param timeStamp El timeStamp de la pedido que se quiere hacer.
   */
  filtrarReservas(timeStamp)
  {
    let tiempoPromedioDeOcupacionDeMesa = this.dateService.sumarMinutos(timeStamp, 10);
    let tiempoPromedioDeOcupacionDeMesaNegativo = this.dateService.restarMinutos(timeStamp, 10);//para no tomen esa mesa antes del tiempo estipulado para que una persona coma
    console.log('tiempoPromedioDeOcupacionDeMesa', this.dateService.toDate(tiempoPromedioDeOcupacionDeMesa).toLocaleString());
    console.log('tiempoPromedioDeOcupacionDeMesaNegativo', this.dateService.toDate(tiempoPromedioDeOcupacionDeMesaNegativo).toLocaleString());
    let reservasFechaYHoraElegida = this.pedidos.filter(pedido =>
    {
      if (pedido.fechaInicio >= tiempoPromedioDeOcupacionDeMesaNegativo && pedido.fechaInicio <= tiempoPromedioDeOcupacionDeMesa)
      {
        return pedido;
      }
    })
    console.log('Reservas para la FechaYHoraElegida', reservasFechaYHoraElegida);
    return reservasFechaYHoraElegida;
  }

  leerPedidos()
  {
    this.pedidosService.leer().then(pedidos =>
    {
      this.pedidos = pedidos.filter(pedido => pedido.estado == EstadoPedido.RESERVADO);
    })
  }

  leerMesas()
  {
    this.mesasService.leer().then(mesas => { this.todasLasMesas = mesas; console.log('Todas las mesas: ', this.todasLasMesas) });
  }

  modificarReserva()
  {
    console.log("Modificando Reserva-------");

    let stringISO = this.reservaForm.controls['date'].value;
    let timeStamp = Date.parse(stringISO);
    this.pedido.mesa = this.reservaForm.get("mesa").value;
    this.pedido.fechaInicio = timeStamp;
    this.pedido.fechaFin = null;
    if (!this.pedido.productos)
    {
      this.pedido.productos = [];
    }

    this.pedidosService
      .actualizar(this.pedido)
      .then(() =>
      {
        UIVisualService.presentToast("Modificación exitosa");
        console.log("Modificado correctamente.");
      })
      .catch(() => UIVisualService.presentToast("No se pudo modificar"));
  }

  borrarReserva()
  {
    console.log("Baja de pedido------");
    if (this.pedido)
    {
      this.pedido.isActive = false;
      this.pedido.fechaFin = null;
      this.pedido.productos = [];
      this.pedidosService
        .actualizar(this.pedido)
        .then(() =>
        {
          UIVisualService.presentToast("Baja realizada");
          this.reservaForm.reset();
        })
        .catch(() => UIVisualService.presentToast("No se pudo realizar baja"));
    }
  }

  asignarCliente(cliente: Cliente)
  {
    this.reservaForm.controls['cliente'].setValue(cliente);
    if (this.reservaForm.controls['cliente'].value)
    {
      return true;
    }
    return false;
  }

}
