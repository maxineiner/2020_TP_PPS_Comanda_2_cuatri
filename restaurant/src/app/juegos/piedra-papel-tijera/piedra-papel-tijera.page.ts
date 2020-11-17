import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Pedido } from 'src/app/clases/pedido';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { UtilsService } from 'src/app/servicios/utils.service';
import { VibrationService } from 'src/app/servicios/vibration.service';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.page.html',
  styleUrls: ['./piedra-papel-tijera.page.scss'],
})
export class PiedraPapelTijeraPage implements OnInit {

  @Input() pedido: Pedido;
  descuento;
  constructor(
    private utilsService: UtilsService,
    public alertCtrl: AlertController,
    private vibrationService: VibrationService,
    private modalCtrl: ModalController,
    private pedidoService:PedidoService
  ) { }

  ngOnInit() {
    this.descuento = true;
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  OpcionElegida(opcionUsuario: string) {
    var opcionesPosible = ['piedra', 'papel', 'tijera'];
    var indiceAleatorio: number = Math.round(Math.random() * (2 - 0) + 0);
    if (opcionUsuario == opcionesPosible[indiceAleatorio]) {
      if(this.pedido.juegos.piedraPapelTijera.cantidadIntentos === 0)
      {
        this.pedido.juegos.piedraPapelTijera.cantidadIntentos = 1;
        this.pedido.juegos.piedraPapelTijera.descuento = 5;
        this.pedidoService.actualizarPedido(this.pedido).finally(() => {
          this.utilsService.presentAlert("¡Felicidades!","Se ha ganado un descuento del 5%","");
      });
      }
      else
      {
        this.utilsService.presentAlert("¡Felicidades!","Ha ganado","");
      }
      //this.estadisticas.usuario.ppt.puntuacion += 1;
      //this.estadisticas.CargarEstadisticasUsuario('piedraPapelTijera',this.estadisticas.usuario.ppt.puntuacion);
      //this.OpenDialog("Partida ganada", "Felicidades!");
    }
    else {
      if(this.pedido.juegos.piedraPapelTijera.cantidadIntentos === 0)
      {
        this.utilsService.presentAlert("¡Perdiste!","Ha perdido la oportunidad de ganar el descuento.","Pero puede seguir jugando.");
        this.pedido.juegos.piedraPapelTijera.cantidadIntentos = 1;
      }
      else
      {
        this.utilsService.presentAlert("¡Perdiste!","Inténtelo de nuevo.","");
      }
      this.vibrationService.vibrar(100);
      //this.OpenDialog("Yo saque " + opcionesPosible[indiceAleatorio], "Perdiste!");
    }
  }

}
