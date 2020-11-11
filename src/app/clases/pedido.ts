import { Cliente } from './cliente';
import { Mesa } from './mesa';
import { Producto } from './producto';

export enum EstadoPedido
{
    RESERVADO = "Reservado", // Estado de reserva
    ASIGNADO = "Asignado", // Pedido con mesa asignada sin productos
    SOLICITADO = "Solicitado", // Cliente solicita pedido 
    EN_PROGRESO = "En progreso", // Recibido por cocina y barra
    ENTREGADO = "Entregado", // Recibido en mesa
    CERRADO = "Cerrado", // Cobrado
}

export class Pedido
{
    id: string;
    productos: Producto[];
    cliente: Cliente;
    mesa: Mesa;
    valorTotal: number;
    fechaInicio: number;
    fechaFin: number;
    estado: EstadoPedido;
    isActive: boolean;
    productosListos: number[]; // Indices de productos listos

    constructor()
    {
        this.fechaInicio = 0;
        this.fechaFin = 0;
        this.productos = [];
        this.productosListos = [];
    }

    public static CrearPedido(id: string, cliente: Cliente, mesa: Mesa,
        productos: Producto[], productosListos: number[],
        fechaInicio: number, fechaFin: number, valorTotal: number,
        estado: EstadoPedido, isActive: boolean)
    {
        let pedido = new Pedido();

        pedido.id = id;
        pedido.cliente = cliente;
        pedido.mesa = mesa;
        pedido.productos = productos ? productos : [];
        pedido.valorTotal = valorTotal;
        pedido.fechaInicio = fechaInicio;
        pedido.fechaFin = fechaFin;
        pedido.estado = estado;
        pedido.isActive = isActive;
        pedido.productosListos = productosListos ? productosListos : [];

        return pedido
    }

    public calcularTotal()
    {
        this.valorTotal = 0;

        if (this.productos)
        {
            this.productos.forEach(producto =>
            {
                this.valorTotal = this.valorTotal + producto.precio;
            });
        }
        return this.valorTotal;
    }

    public cambiarEstado()
    {
        switch (this.estado)
        {
            case EstadoPedido.RESERVADO:
                this.estado = EstadoPedido.ASIGNADO;
                break;
            case EstadoPedido.ASIGNADO:
                this.estado = EstadoPedido.SOLICITADO;
                break;
            case EstadoPedido.SOLICITADO:
                this.estado = EstadoPedido.EN_PROGRESO;
                break;
            case EstadoPedido.EN_PROGRESO:
                this.estado = EstadoPedido.ENTREGADO;
                break;
            case EstadoPedido.ENTREGADO:
                this.estado = EstadoPedido.CERRADO;
                break;
        }
    }

    public pedidoTerminado()
    {
        if (this.productosListos.length == this.productosListos.length)
        {
            return true;
        }
        return false;
    }

}