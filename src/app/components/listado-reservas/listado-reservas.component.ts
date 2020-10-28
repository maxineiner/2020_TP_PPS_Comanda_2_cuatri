import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Reserva } from 'src/app/clases/reserva';

@Component({
  selector: 'app-listado-reservas',
  templateUrl: './listado-reservas.component.html',
  styleUrls: ['./listado-reservas.component.scss'],
})
export class ListadoReservasComponent implements OnInit {

  @Input() reservas: Reserva[] = [];
  @Output() elegirReserva: EventEmitter<Reserva> = new EventEmitter<Reserva>();

  constructor(private loadingController: LoadingController) { }

  ngOnInit() {this.presentLoading('Cargando reservas...', 2000);}

  seleccionarReserva(reserva: Reserva)
  {
    this.elegirReserva.emit(reserva);
  }

  async presentLoading(message, duration) 
  {
    const loading = await this.loadingController.create({
      message,
      duration,
      spinner: 'crescent'
    });
    await loading.present();
  }

}
