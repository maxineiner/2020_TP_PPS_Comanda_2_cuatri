import { Component, OnInit, Input } from "@angular/core";
import { Pedido } from "src/app/clases/pedido";
import { PedidoService } from "src/app/servicios/pedido.service";
import {
  NavController,
  AlertController,
  ModalController,
} from "@ionic/angular";
import { VibrationService } from "src/app/servicios/vibration.service";
import { UtilsService } from "src/app/servicios/utils.service";

@Component({
  selector: "app-agilidad-aritmetica",
  templateUrl: "./agilidad-aritmetica.page.html",
  styleUrls: ["./agilidad-aritmetica.page.scss"],
})
export class AgilidadAritmeticaPage implements OnInit {
  @Input() pedido: Pedido;

  nuevoJuego: JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor: any;
  empezar: false;

  constructor(
    private modalCtrl: ModalController,
    private vibrationService: VibrationService,
    public alertCtrl: AlertController,
    private pedidoService: PedidoService,
    private utilsService: UtilsService
  ) {
    this.ocultarVerificar = true;
    this.nuevoJuego = new JuegoAgilidad();
    this.Tiempo = -1;
    console.info("Inicio agilidad");
  }

  ngOnInit() {
    this.Tiempo = 10;
    this.ocultarVerificar = false;
    this.nuevoJuego.generarOperacion();
    this.repetidor = setInterval(() => {
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if (this.Tiempo == 0) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar = true;
      }
    }, 900);
  }

  verificar() {
    this.Tiempo = 0;
    clearInterval(this.repetidor);
    this.nuevoJuego.verificar()
      ? this.mostrarMensajeDeGanar()
      : this.mostrarMensajeDePerder();
    this.ocultarVerificar = true;
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  async mostrarMensajeDePerder() {
    const alert = await this.alertCtrl.create({
      animated: true,
      backdropDismiss: true,
      cssClass: "my-custom-class",
      header: "Ha Perdido",
      message: "¡Lo siento! Pulse Ok para jugar otra vez.",
      buttons: [
        {
          text: "Ok",
          handler: () => {
            this.vibrationService.vibrar(500);
            this.pedido.juegos.agilidadAritmetica.cantidadIntentos = 1;
            this.pedidoService.actualizarPedido(this.pedido);
          },
        },
      ],
    });
    await alert.present();
  }

  async mostrarMensajeDeGanar() {
    const alert = await this.alertCtrl.create({
      animated: true,
      backdropDismiss: true,
      cssClass: "my-custom-class",
      header: "Ha Ganado",
      message: "¡Felicidades! Pulse Ok para jugar otra vez.",

      buttons: [
        {
          text: "Ok",
          handler: () => {
            if (this.pedido.juegos.agilidadAritmetica.cantidadIntentos === 0) {
              this.pedido.juegos.agilidadAritmetica.cantidadIntentos = 1;
              this.pedido.juegos.agilidadAritmetica.descuento = 10;
              this.pedidoService.actualizarPedido(this.pedido).finally(() => {
                this.utilsService.presentAlert(
                  "Ganaste",
                  "",
                  "Obtuviste un 10% de descuento es tu pedido"
                );
              });
            }
          },
        },
      ],
    });
    await alert.present();
  }
}

export abstract class Juego {
  public nombre = "Sin Nombre";
  public jugador: string;
  public gano = false;
  public puntos = 0;

  constructor(
    nombre?: string,
    gano?: boolean,
    jugador?: string,
    puntos?: number
  ) {
    if (nombre) this.nombre = nombre;

    if (gano) this.gano = gano;
    if (jugador) this.jugador = jugador;
    else this.jugador = "natalia natalia";

    if (puntos) this.puntos = puntos;
  }

  public abstract verificar(): boolean;

  public retornarAyuda() {
    return "NO hay Ayuda definida";
  }
}

export class JuegoAgilidad extends Juego {
  operadores: Array<string>;
  primerNumero: number;
  segundoNumero: number;
  operador: string;
  resultadoOperacion: number;
  numeroIngresado: number;

  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    super("Agilidad Aritmetica", gano, jugador);

    this.operadores = ["+", "-", "*", "/"];
  }

  public generarOperacion() {
    this.gano = false;
    this.primerNumero = Math.floor(Math.random() * 100 + 0);
    this.segundoNumero = Math.floor(Math.random() * 100 + 0);
    let aux = Math.floor(Math.random() * (4 - 0)) + 0;
    this.operador = this.operadores[aux];
    if (this.segundoNumero == 0 && this.operador == "/") {
      this.generarOperacion();
    }
    this.devolverResultado();

    console.info(
      "numero uno:" +
        this.primerNumero +
        "   --  numero dos:" +
        this.segundoNumero +
        "  --  operador:" +
        this.operador +
        "   -- Resultado: " +
        this.resultadoOperacion
    );
  }

  public devolverResultado() {
    switch (this.operador) {
      case "+":
        this.resultadoOperacion = Math.round(
          this.primerNumero + this.segundoNumero
        );
        break;

      case "-":
        this.resultadoOperacion = this.primerNumero - this.segundoNumero;
        break;

      case "*":
        this.resultadoOperacion = this.primerNumero * this.segundoNumero;
        break;

      case "/":
        this.resultadoOperacion = this.primerNumero / this.segundoNumero;
        break;
    }
  }

  public verificar() {
    if (this.numeroIngresado == this.resultadoOperacion) {
      this.gano = true;
    }
    if (this.gano) {
      return true;
    } else {
      return false;
    }
  }
}
