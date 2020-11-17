import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pedido } from '../clases/pedido';
import { UtilsService } from '../servicios/utils.service';
import { AhorcadoPage } from './ahorcado/ahorcado.page';
import { PiedraPapelTijeraPage } from './piedra-papel-tijera/piedra-papel-tijera.page';
import { AgilidadAritmeticaPage } from './agilidad-aritmetica/agilidad-aritmetica.page'

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit {

  @Input() pedido: Pedido;
  constructor(private utilsService: UtilsService, private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  IrAhorcado(){
    this.utilsService.presentModal(AhorcadoPage, { pedido: this.pedido });
  }

  IrPiedraPapelTijera(){
    this.utilsService.presentModal(PiedraPapelTijeraPage, { pedido: this.pedido });
  }

  IrAgilidadAritmetica(){
    this.utilsService.presentModal(AgilidadAritmeticaPage, { pedido: this.pedido });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
