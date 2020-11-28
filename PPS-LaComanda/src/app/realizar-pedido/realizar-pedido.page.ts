import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatabaseService } from "../servicios/database.service";
import { ComplementosService } from "../servicios/complementos.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-realizar-pedido',
  templateUrl: './realizar-pedido.page.html',
  styleUrls: ['./realizar-pedido.page.scss'],
})
export class RealizarPedidoPage implements OnInit {
  pedidoEnFormatoJSON = {
    productos: [],
    precioTotal: 0,
    cliente: "",
    mesa: "",
    estado: "Pendiente",
    tiempoTotal: 0,
  };
  listaCantidades = [];
  listaProductos = [];
  listaProductosTipoPlato = [];
  listaProductosTipoBebida = [];
  listaProductosTipoPostre = [];
  tipoPlatoPedido: string = null;
  contadorPlatos = 0;
  contadorBebidas = 0;
  contadorPostres = 0;
  contadorVecesQueConfirmaPedido;
  variabledesplegarPedido: boolean;
  mostrarBebida = false;
  mostrarPlatoPrincipal = false;
  mostrarPostre = false;

  constructor(private firestore: AngularFirestore,
    private bd: DatabaseService,
    private complementos: ComplementosService,
    private router: Router) { }

  ngOnInit() {
    this.bd.obtenerTodosPromise('productos').then(snap => {
      this.listaProductos = snap.docs.map(ref => {
        const x: any = ref.data() as any;
        x['id'] = ref.id;
        return { ...x };
      });
      return this.listaProductos;
    }).then(prods => {
      this.listaProductosTipoPlato = prods.filter(p => p.tipo === 'Plato');
      this.listaProductosTipoBebida = prods.filter(p => p.tipo === 'Bebida');
      this.listaProductosTipoPostre = prods.filter(p => p.tipo === 'Postre');
      this.contadorPlatos = 0;
      this.contadorBebidas = 0;
      this.contadorPostres = 0;
      this.contadorVecesQueConfirmaPedido = 0;
      this.variabledesplegarPedido = false;
      let mesa = localStorage.getItem("mesa");
      let user = localStorage.getItem("uidUsuario");
      this.pedidoEnFormatoJSON.cliente = user;
      this.pedidoEnFormatoJSON.mesa = mesa;
    });
  }

  cargarJSONPedidosPlatos(producto) {
    let index = this.pedidoEnFormatoJSON.productos.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      this.pedidoEnFormatoJSON.productos[index].cantidad++;
      this.pedidoEnFormatoJSON.productos[index].tiempo += producto.tiempo;
      this.pedidoEnFormatoJSON.productos[index].precio += producto.precio;
    } else {
      let prodObj = {
        id: producto.id,
        nombre: producto.nombre,
        cantidad: 1,
        tipo: producto.tipo,
        tiempo: producto.tiempo,
        precio: producto.precio,
        estado: false
      }
      this.pedidoEnFormatoJSON.productos.push(prodObj);
      if (producto.tipo === 'Plato') {
        this.contadorPlatos++;
      } else if (producto.tipo === 'Bebida') {
        this.contadorBebidas++;
      } else {
        this.contadorPostres++;
      }
    }
    this.calcularPrecioyTiempo();
    console.log(this.pedidoEnFormatoJSON);
  }

  removerJSONPedidosPlatos(producto) {
    let index = this.pedidoEnFormatoJSON.productos.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      this.pedidoEnFormatoJSON.productos[index].precio -= producto.precio;
      this.pedidoEnFormatoJSON.productos[index].tiempo -= producto.tiempo;
      this.pedidoEnFormatoJSON.productos[index].cantidad--;
      if (this.pedidoEnFormatoJSON.productos[index].cantidad == 0) {
        this.pedidoEnFormatoJSON.productos.splice(index, 1);
        if (producto.tipo === 'Plato') {
          this.contadorPlatos--;
        } else if (producto.tipo === 'Bebida') {
          this.contadorBebidas--;
        } else {
          this.contadorPostres--;
        }
      }
    }
    this.calcularPrecioyTiempo();
    console.log(this.pedidoEnFormatoJSON);
  }


  calcularPrecioyTiempo() {
    this.pedidoEnFormatoJSON.precioTotal = this.pedidoEnFormatoJSON.productos.reduce((total, prod) => { return total += parseInt(prod.precio) }, 0);
    this.pedidoEnFormatoJSON.tiempoTotal = this.pedidoEnFormatoJSON.productos.reduce((total, prod) => { return total += parseInt(prod.tiempo) }, 0);
  }

  desplegarPedido() {
    this.variabledesplegarPedido = true;
    this.mostrarBebida = false;
    this.mostrarPlatoPrincipal = false;
    this.mostrarPostre = false;
  }

  desplegarInversoPedido() {
    this.variabledesplegarPedido = false;
  }

  confirmarPedido() {
    if (this.contadorVecesQueConfirmaPedido == 0 && this.pedidoEnFormatoJSON.precioTotal > 0) {
      this.bd.crear('pedidos', this.pedidoEnFormatoJSON).then(() => {
        this.complementos.presentToastConMensajeYColor("Pedido generado con éxito. Será redirigido al menú!", "success")
        this.contadorVecesQueConfirmaPedido = 1;
        this.router.navigate(['/home']);
      })
    }
    else if (this.contadorVecesQueConfirmaPedido == 0 && this.pedidoEnFormatoJSON.precioTotal == 0) {
      this.complementos.presentToastConMensajeYColor("¡Debe cargar productos!", "warning")
    }
    else {
      this.complementos.presentToastConMensajeYColor("¡Su orden ya fue cargada!", "warning")
    }
  }

  cancelarPedido() {
    if (this.contadorVecesQueConfirmaPedido == 0) {
      this.pedidoEnFormatoJSON.tiempoTotal = 0;
      this.pedidoEnFormatoJSON.precioTotal = 0;
      this.contadorPlatos = 0;
      this.contadorBebidas = 0;
      this.contadorPostres = 0;
      this.complementos.presentToastConMensajeYColor("¡El pedido fue cancelado!", "success")
    }
    else {
      this.complementos.presentToastConMensajeYColor("¡No puede cancelar un pedido ya enviado!", "warning")
    }
  }

  divMostrarBebida() {
    this.mostrarBebida = !this.mostrarBebida;
  }

  divMostrarPostre() {
    this.mostrarPostre = !this.mostrarPostre;
  }

  divMostrarPlatoPrincipal() {
    this.mostrarPlatoPrincipal = !this.mostrarPlatoPrincipal;
  }

}
