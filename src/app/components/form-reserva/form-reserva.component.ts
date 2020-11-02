import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservaService } from '../../services/reserva.service';
import { Reserva } from '../../clases/reserva';
import { ToastController } from '@ionic/angular';
import { MesaService } from '../../services/mesa.service';
import { Mesa } from '../../clases/mesa';
import { Cliente, EstadoAceptacion } from 'src/app/clases/cliente';
import { dateFormat } from 'highcharts';

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
  @Input() reserva: Reserva;

  reservaForm: FormGroup;
  todasLasMesas: Array<Mesa>;
  mesasDisponibles: Array<Mesa>;
  reservas: Array<Reserva>;
  cliente: Cliente;
  fechaActual: string;/*  = new Date().toISOString(); */

  constructor(
    private fb: FormBuilder,
    private reservaService: ReservaService,
    private toastController: ToastController,
    private mesasService: MesaService
  )
  {
    this.fechaActual = this.getIsoLocalTime(new Date);
    /* this.cliente =   TRAER CLIENTE ACTUAL*/
    this.cliente = Cliente.CrearCliente('01', 'carlitos', 'gonzales', '123456789', 'none', 'example@gmail.com', true, EstadoAceptacion.Aceptado);
    this.crearForm();
    this.leerReservas();
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
      if (this.reserva && this.opcion != OpcionForm.ALTA)
      {
        this.reservaForm.setValue({
          cliente: this.cliente,
          mesa: this.reserva.mesa,
          date: this.reserva.stringISO,
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
      let date = this.getDateObject();
      let hora = date.getHours().toString();
      if (date.getMinutes() < 10)
      {
        hora += ':0' + date.getMinutes().toString();
      }
      else
      {
        hora += ':' + date.getMinutes().toString();
      }
      let fecha = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
      let timeStamp = this.toTimeStamp(date);
      /* console.log(this.toTimeStamp(date));
      console.log(this.toDate(timeStamp));
      console.log(fecha, hora); */

      let reserva = Reserva.CrearReserva(
        this.reservaForm.controls['mesa'].value,
        this.reservaForm.controls['cliente'].value,
        fecha,
        hora,
        timeStamp,
        ''
      )
      /* reserva.stringISO = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+'T'+hora+':'+'00'+'Z'; */
      reserva.stringISO = this.reservaForm.controls['date'].value;
      this.reservaService.crear(reserva).then(() => { this.presentToast('Reserva exitosa.', 2000) });
    }

  }
  //a pesar de que el usuario no puede elegir los segundos el stringISO que devuelve ion-datetime siempre es distinto
  //entonces creo un nuevo date pasando los segundos y milisigundos como 0.
  getDateObject()
  {
    let stringISO = this.reservaForm.controls['date'].value;
    let timeStamp = Date.parse(stringISO);
    let anio = Number.parseInt(dateFormat('%Y', timeStamp));
    let mes = Number.parseInt(dateFormat('%m', timeStamp));
    let dia = Number.parseInt(dateFormat('%e', timeStamp));
    let horas = Number.parseInt(dateFormat('%k', timeStamp));
    let minutos = Number.parseInt(dateFormat('%M', timeStamp));
    let newDate = new Date(anio, mes - 1, dia, horas, minutos, 0, 0);
    return newDate;
  }
  /**
   * convierte un objeto Date a timeStamp expresado en segundos
   * @param date 
   */
  toTimeStamp(date: Date)
  {
    return date.getTime() / 1000;
  }
  toDate(timeStamp)
  {
    let date = new Date(timeStamp * 1000);
    return date;
  }

  leerMesasDisponibles()
  {
    let date = this.getDateObject();
    let timeStamp = this.toTimeStamp(date);
    let reservasFechaYHoraElegida = this.filtrarReservas(timeStamp);


    this.mesasDisponibles = this.todasLasMesas.filter(mesa =>
    {
      if (reservasFechaYHoraElegida.length >= 1)
      {
        let estaReservada = false;
        reservasFechaYHoraElegida.forEach(reserva =>
        {
          /*  console.log(mesa);
           console.log(reserva.mesa); */
          if (reserva.mesa.id == mesa.id)
          {
            /*  console.log('Mesa ocupada', mesa); */
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
  }

  /**
   * Filtra las reservas que hay para el dia elegido y la hora elegida +- 10 minutos.
   * (podrian ser 40, o el tiempo estipulado para que una persona coma)
   * Luego ya se puede reservar otra vez
   * @param timeStamp El timeStamp de la reserva que se quiere hacer.
   */
  filtrarReservas(timeStamp)
  {
    let tiempoPromedioDeOcupacionDeMesa = this.sumarMinutos(timeStamp, 10);
    let tiempoPromedioDeOcupacionDeMesaNegativo = this.restarMinutos(timeStamp, 10);//para no tomen esa mesa antes del tiempo estipulado para que una persona coma
    console.log('tiempoPromedioDeOcupacionDeMesa', this.toDate(tiempoPromedioDeOcupacionDeMesa).toLocaleString());
    console.log('tiempoPromedioDeOcupacionDeMesaNegativo', this.toDate(tiempoPromedioDeOcupacionDeMesaNegativo).toLocaleString());
    let reservasFechaYHoraElegida = this.reservas.filter(reserva =>
    {
      if (reserva.timeStamp >= tiempoPromedioDeOcupacionDeMesaNegativo && reserva.timeStamp <= tiempoPromedioDeOcupacionDeMesa)
      {
        /* console.log('tiempoPromedioDeOcupacionDeMesaNegativo', tiempoPromedioDeOcupacionDeMesaNegativo);
        console.log('tiempoPromedioDeOcupacionDeMesa', tiempoPromedioDeOcupacionDeMesa);
        console.log(reserva.timeStamp); */
        return reserva;
      }
    })
    console.log('Reservas para la FechaYHoraElegida', reservasFechaYHoraElegida);
    return reservasFechaYHoraElegida;
  }

  leerReservas()
  {
    this.reservaService.leer().then(reservas =>
    {
      this.reservas = reservas;
    })
  }
  leerMesas()
  {
    this.mesasService.leer().then(mesas => { this.todasLasMesas = mesas; console.log('Todas las mesas: ', this.todasLasMesas) });
  }

  /**Funcion para agregar minutos a un timeStamp
  * @param timeStamp TimeStamp
  * @param minutosAAgregar Minutos a agregar
  * @returns TimeStamp con los minutos agregados
  */
  sumarMinutos(timeStamp, minutosASumar): number
  {
    let nuevoHorario = timeStamp + (minutosASumar * 60);
    return nuevoHorario;
  }
  restarMinutos(timeStamp, minutosARestar): number
  {
    let nuevoHorario = timeStamp - (minutosARestar * 60);
    return nuevoHorario;
  }

  modificarReserva()
  {
    console.log("Modificando Reserva-------");
    let stringISO = this.reservaForm.controls['date'].value;
    let date = this.getDateObject();
    let hora = date.getHours().toString() + ':' + date.getMinutes().toString();
    let fecha = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    let timeStamp = this.toTimeStamp(date);
    this.reserva.mesa = this.reservaForm.get("mesa").value;
    this.reserva.fecha = fecha;
    this.reserva.hora = hora;
    this.reserva.timeStamp = timeStamp;
    this.reserva.stringISO = stringISO;
    this.reservaService
      .actualizar(this.reserva)
      .then(() =>
      {
        this.presentToast("Modificación exitosa", 2000);
        console.log("Modificado correctamente.");
      })
      .catch(() => this.presentToast("No se pudo modificar", 2000));
  }

  borrarReserva()
  {
    console.log("Baja de reserva------");
    if (this.reserva)
    {
      this.reserva.isActive = false;
      this.reservaService
        .actualizar(this.reserva)
        .then(() =>
        {
          this.presentToast("Baja realizada", 2000);
          this.reservaForm.reset();
        })
        .catch(() => this.presentToast("No se pudo realizar baja", 2000));
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

  getIsoLocalTime(date)
  {
    let isoLocalTime = date.getFullYear().toString() + '-';
    if ((date.getMonth() + 1) < 10)
    {
      isoLocalTime += '0' + (date.getMonth() + 1) + '-';
    } else
    {
      isoLocalTime += (date.getMonth() + 1) + '-';
    }
    if (date.getDate() < 10)
    {
      isoLocalTime += '0' + (date.getDate()) + 'T';
    }
    else
    {
      isoLocalTime += date.getDate() + 'T';
    }
    isoLocalTime += date.toLocaleTimeString();
    console.log('Mi ISOtimeString', isoLocalTime);
    return isoLocalTime;
  }

  async presentToast(message, duration)
  {
    const toast = await this.toastController.create({
      message,
      duration,
    });
    toast.present();
  }

}
