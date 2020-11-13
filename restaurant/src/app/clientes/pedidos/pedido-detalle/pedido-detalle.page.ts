import { Component, OnInit, Input } from "@angular/core";
import { Pedido } from "src/app/clases/pedido";
import { ModalController } from "@ionic/angular";
import { ProductoService } from "src/app/servicios/producto.service";
import { Producto } from "src/app/clases/producto";

@Component({
  selector: "app-pedido-detalle",
  templateUrl: "./pedido-detalle.page.html",
  styleUrls: ["./pedido-detalle.page.scss"],
})
export class PedidoDetallePage implements OnInit {
  @Input() pedido: Pedido;
  @Input() callback: any;

  pedidoClone: Pedido;

  constructor(
    private modalCtrl: ModalController,
    public productoService: ProductoService
  ) {}

  ngOnInit() {
    //Clono el objeto de productos
    this.pedidoClone = JSON.parse(JSON.stringify(this.pedido));

    //Me traigo la lista de productos y se los asocio al pedido de clonado, para obtener las fotos.
    this.pedidoClone.productos.forEach((element) => {
      this.productoService
        .obtenerProductos()
        .subscribe((result: Producto[]) => {
          result.forEach((product) => {
            if (element.producto.id === product.id) {
              element.producto = product;
            }
          });
        });
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  pagarPedido() {
    this.callback(this.pedido);
    this.dismiss();
  }

  calcularTotal() {
    return this.pedido.productos.reduce(
      (a, b) => a + b.cantidad * b.producto.precio,
      0
    );
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
      return (
        (this.pedido.juegos.ahorcado.descuento * this.calcularTotal()) / 100
      );
    } catch (error) {
      return 0;
    }
  }

  calcularDescuentoJuego2() {
    try {
      return (
        (this.pedido.juegos.agilidadAritmetica.descuento * this.calcularTotal()) / 100
      );
    } catch (error) {
      return 0;
    }
  }

  calcularTotalFinal() {
    return (
      this.calcularTotal() +
      this.calcularPropina() -
      this.calcularDescuentoJuego() -
      this.calcularDescuentoJuego2()
    );
  }
}
