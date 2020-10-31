import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/clases/reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-menu-reserva',
  templateUrl: './menu-reserva.page.html',
  styleUrls: ['./menu-reserva.page.scss'],
})
export class MenuReservaPage implements OnInit
{

  opcion: string = 'Listado';
  listado: Reserva[];
  reservaElegida: Reserva;

  constructor(private reservaService: ReservaService) { }

  ngDoCheck(): void
  {

  }

  ngOnInit()
  {
    console.log("INIT");
    this.reservaService.leer().then(data =>
    {
      console.log(data);
      this.listado = data;
    });
  }

  seleccionarOpcion(event)
  {
    console.log(event.detail.value);
    this.opcion = event.detail.value;
  }

  elegirReserva(event)
  {
    console.log(event);
    this.reservaElegida = event;
  }

}
