import { Component, Input, OnInit } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { Pedido } from 'src/app/clases/pedido';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { UtilsService } from 'src/app/servicios/utils.service';
import { VibrationService } from 'src/app/servicios/vibration.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.page.html',
  styleUrls: ['./ahorcado.page.scss'],
})
export class AhorcadoPage {

    @Input() pedido: Pedido;

  readonly LETRAS = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "Ñ", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"];

readonly PALABRAS = ["AREPA", "RABAS", "MILANESA"];

botones: Array<{ letra: string, estado: string }>;

palabraAdivinadaPorAhora: string;
palabraAAdivinar: string;
fallos: Array<string>;
numFallos: number;
numAciertos: number;
cantidadIntentos: number = 0;

constructor(private pedidoService: PedidoService, private utilsService: UtilsService,  
            public navCtrl: NavController, public alertCtrl: AlertController, 
            private modalCtrl: ModalController, private vibrationService: VibrationService) {
    this.inicializar();
}

inicializar(): void {
    
    this.numFallos = 0;
    this.numAciertos = 0;
    this.fallos = [];
    this.botones = [];
    let numero = Math.floor(Math.random() * this.PALABRAS.length);
    this.palabraAAdivinar = this.PALABRAS[numero];

    this.generarPalabraAdivinadaPorAhora();
    this.inicializarBotones();
}

inicializarBotones(): void {
    for (let i = 0; i < this.LETRAS.length; i++) {
        this.botones.push({ letra: this.LETRAS[i], estado: "boton-no-pulsado-aun" });
    }
}

generarPalabraAdivinadaPorAhora(): void {

    this.palabraAdivinadaPorAhora = "";
    for (let i = 0; i < this.palabraAAdivinar.length; i++) {
        this.palabraAdivinadaPorAhora += "-";
    }
}

botonClicked(boton: { letra: string, estado: string}): void {

    if (!this.letraAcertada(boton.letra)) {
        if (this.numFallos < 5) {
            this.aumentarFallos(boton.letra);
        } else {
            this.mostrarMensajeDePerder();
        }
        boton.estado = "boton-letra-no-acertada";
    } else {
        if (this.numAciertos == this.palabraAAdivinar.length) {
            this.mostrarMensajeDeGanar();
        }
        boton.estado = "boton-letra-acertada";
    }
}

letraAcertada(letra: string): boolean {

    let letraAcertada = false;
    let longitud = this.palabraAAdivinar.length;

    for (let i = 0; i < longitud; i++) {
        if (letra == this.palabraAAdivinar[i]) {
            this.palabraAdivinadaPorAhora =
                (i == 0 ? "" : this.palabraAdivinadaPorAhora.substr(0, i)) +
                letra +
                this.palabraAdivinadaPorAhora.substr(i + 1);
            letraAcertada = true;
            this.numAciertos++;
        }
    }
    return letraAcertada;
}

aumentarFallos(letra: string): void {
    this.fallos.push(letra);
    this.numFallos++;
}

async mostrarMensajeDePerder() {
    const alert = await this.alertCtrl.create({
        animated: true,
        backdropDismiss: true,
        cssClass: 'my-custom-class',
        header: 'Ha Perdido',
        message: '¡Lo siento! Pulse Ok para jugar otra vez.',
        buttons: [{
            text: 'Ok',
            handler: () => {
                this.vibrationService.vibrar(500);
                this.pedido.juegos.ahorcado.cantidadIntentos = 1;
                this.pedidoService.actualizarPedido(this.pedido);
                this.inicializar();
            }
        }]
    });
    await alert.present();
}

async mostrarMensajeDeGanar() {
    const alert = await this.alertCtrl.create({
        animated: true,
        backdropDismiss: true,
        cssClass: 'my-custom-class',
        header: 'Ha Ganado',
        message: '¡Felicidades! Pulse Ok para jugar otra vez.',

        buttons: [{
            text: 'Ok',
            handler: () => {
                
                if (this.pedido.juegos.ahorcado.cantidadIntentos === 0) {
                    this.pedido.juegos.ahorcado.cantidadIntentos = 1;
                    this.pedido.juegos.ahorcado.descuento = 10;
                    this.pedidoService.actualizarPedido(this.pedido).finally(() => {
                    this.utilsService.presentAlert('Ganaste', '', 'Obtuviste un 10% de descuento es tu pedido');

                });
            }
                this.inicializar();
            }
        }]
    });
   await alert.present();
}

dismiss() {
    this.modalCtrl.dismiss();
  }

}
