import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
//SERVICIOS
import { PedidoService } from 'src/app/servicios/pedido.service';
import { PropinaService } from 'src/app/servicios/propina.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { UtilsService } from 'src/app/servicios/utils.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { VibrationService } from 'src/app/servicios/vibration.service';
//PAGES
import { EncuestaPage } from './encuesta/encuesta.page';
import { ListaProductoPage } from './lista-producto/lista-producto.page';
import { PedidoDetallePage } from './pedido-detalle/pedido-detalle.page';
import { ChatPage } from 'src/app/chat/chat.page';
import { AhorcadoPage } from 'src/app/juegos/ahorcado/ahorcado.page';
//CLASES
import { Pedido } from 'src/app/clases/pedido';
import { Usuario } from 'src/app/clases/usuario';
import { EstadoPedido } from 'src/app/enums/estado-pedido.enum';
import { JuegosPage } from 'src/app/juegos/juegos.page';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit, OnDestroy {

  usuario: Usuario;
  pedido: Pedido;
  private desuscribir = new Subject<void>();

  constructor(
    private utilsService: UtilsService,
    private authService: AuthService,
    private pedidoService: PedidoService,
    private barcodeScanner: BarcodeScanner,
    private propinas: PropinaService,
    private vibrationService: VibrationService
  ) { }

  ngOnInit() {
    this.authService.currentUser().then((response: firebase.User) => {
      this.authService.obtenerDetalle(response).subscribe(datos => {
        this.usuario = datos;
        this.obtenerPedido();
      });
    });
  }

  ngOnDestroy() {
    this.desuscribir.next();
    this.desuscribir.complete();
  }

  obtenerPedido() {
    this.utilsService.presentLoading();
    this.pedidoService.obtenerPedidosActivos(this.usuario).subscribe(pedidos => {
      this.utilsService.dismissLoading();
      if (pedidos && pedidos.length > 0) { // Si tiene pedidos en cursos
     console.log(this.pedido);
        this.pedido = pedidos[0];
      }
    });
  }

  guardarComida(pedido: Pedido) {
    console.log("GuardarComida()",pedido);
    this.utilsService.presentLoading();
    this.pedidoService.actualizarPedido(pedido)
    .catch(error => alert(error.message))
    .finally(() => {
      this.utilsService.dismissLoading();
    });
  }

  agregarComida() {
    //const callback = (p: Pedido) => this.guardarComida(p);
    this.utilsService.presentModal(ListaProductoPage, { pedido: this.pedido });
  }

  verDetalle() {
    const callback = (p: Pedido) => this.pagarPedido(p);
    this.utilsService.presentModal(PedidoDetallePage, { pedido: this.pedido, callback });
  }

  pagarPedido(pedido: Pedido) {
    pedido.estado = EstadoPedido.PAGANDO;
    this.utilsService.presentLoading();
    this.pedidoService.actualizarPedido(pedido).finally(() => {
      this.utilsService.dismissLoading();
      this.atras();
      this.utilsService.presentToast('Procesando pago con el mozo...', 'toast-info');
    });
  }

  guardarEncuesta(pedido: Pedido) {
    this.utilsService.presentLoading();
    this.pedidoService.actualizarPedido(pedido)
    .catch(error => alert(error.message))
    .finally(() => {
      this.utilsService.dismissLoading();
      this.utilsService.presentToast('Guardando encuesta...', 'toast-info');
    });
  }

  atras(): void {
    this.utilsService.showLoadingAndNavigate('clientes');
  }
  irAJuegos() {
    this.utilsService.presentModal(JuegosPage, { pedido: this.pedido });
  }

  verEncuesta() {
    const callback = (p: Pedido) => this.guardarEncuesta(p);
    this.utilsService.presentModal(EncuestaPage, { pedido: this.pedido, callback });
  }

  calcularTotal() {
    return this.pedido?.productos.reduce((a, b) => a + b.cantidad * b.producto.precio, 0);
  }

  calcularPropina() {
    try {
      return this.calcularTotal() * (this.pedido.propina.porcentaje / 100);
    } catch (error) {
      return 0;
    }
  }

  calcularDescuentoJuego() {
    try {
       return (this.pedido.juegos.ahorcado.descuento * this.calcularTotal()) / 100;
    } catch (error) {
      return 0;
    }
  }

  calcularDescuentoJuego1() {
    try {
       return (this.pedido.juegos.piedraPapelTijera.descuento * this.calcularTotal()) / 100;
    } catch (error) {
      return 0;
    }
  } 

  calcularDescuentoJuego2() {
    try {
       return (this.pedido.juegos.agilidadAritmetica.descuento * this.calcularTotal()) / 100;
    } catch (error) {
      return 0;
    }
  } 

  calcularTotalFinal() {
          return this.calcularTotal() + this.calcularPropina() - this.calcularDescuentoJuego() - this.calcularDescuentoJuego1() - this.calcularDescuentoJuego2();
  }

  chatear(destinatario: string) {
    this.utilsService.presentModal(ChatPage, { pedido: this.pedido, receptor: destinatario, user: this.usuario });
  }

  escanearQR(): void {
    this.barcodeScanner.scan({ formats: 'QR_CODE' }).then((data) => {
      if (data && !data.cancelled) {
        this.propinas.obtenerPropina(data.text)
        .pipe(takeUntil(this.desuscribir))
        .subscribe(prop => {
          if (prop.porcentaje) {
            this.pedido.propina = {
              porcentaje: prop.porcentaje,
              satisfaccion: prop.satisfaccion
            };

            this.utilsService.presentLoading();
            this.pedidoService.actualizarPedido(this.pedido).finally(() => {
              this.utilsService.dismissLoading();
            });
          } else {
            // No existe QR de propina
            this.vibrationService.vibrar(500);
            this.utilsService.presentAlert('Lo sentimos', '', 'El código escaneado no existe');
          }
        });
      }
    }, (err) => this.utilsService.handleError(err));
  }
}
