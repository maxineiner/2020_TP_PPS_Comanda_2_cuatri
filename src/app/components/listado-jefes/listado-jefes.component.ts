import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Jefe } from 'src/app/clases/jefe';


@Component({
  selector: 'app-listado-jefes',
  templateUrl: './listado-jefes.component.html',
  styleUrls: ['./listado-jefes.component.scss'],
})
export class ListadoJefesComponent implements OnInit
{
  @Input() jefes: Jefe[] = [];
  @Output() seleccionarJefe: EventEmitter<Jefe> = new EventEmitter<Jefe>();
  loadingTime = 2000;

  constructor(private loadingController: LoadingController)
  { }

  ngOnInit() 
  {
    this.presentLoading('Cargando jefes...');
  }

  /**
   * Método para enviar jefe seleccionado
   * @param jefe Jefe seleccionado
   */
  seleccionarJefeDelListado(jefe: Jefe)
  {
    this.seleccionarJefe.emit(jefe);
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
