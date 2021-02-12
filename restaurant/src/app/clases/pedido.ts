import { Producto } from './producto';
import { EstadoPedido } from '../enums/estado-pedido.enum';

export class Pedido {
    public juegos?: {  
        ahorcado: { descuento?: number,  cantidadIntentos?: number, nombre?: string },
        piedraPapelTijera: { descuento?: number,  cantidadIntentos?: number, nombre?: string },
        agilidadAritmetica: { descuento?: number,  cantidadIntentos?: number, nombre?: string }
    } = {  //No quitar, si no, rompe al crear pedido
        ahorcado: { descuento: 0,  cantidadIntentos: 1, nombre: 'Ahorcado' },
        piedraPapelTijera: { descuento: 5,  cantidadIntentos: 1, nombre: 'Piedra Papel o Tijera' },
        agilidadAritmetica: { descuento: 0, cantidadIntentos: 1, nombre: 'Agilidad Aritmética' }
    };
    public id?: string;
    public productos?: [{ cantidad?: number, fotos?: any, producto?: Producto, terminado?: boolean, entregado?: boolean }?] = [];
    public tieneDescuento?: boolean;
    public usuario?: { id: string, nombre: string };
    public mesa?: { id: string, numero: number };
    public estado?: EstadoPedido = EstadoPedido.PENDIENTE;
    public fechaAlta: Date = new Date();
    public fechaModificado: Date = null;
    public fechaBaja: Date = null;
    public mensajes?: {
        text: string,
        created_at: any,
        user: {
            id: string,
            nombre: string
        },
        destinatario: string
    }[];
    public propina?: {satisfaccion: string, porcentaje: number};
    public encuesta?: {
        calidad: number,
        servicio: number,
        limpieza: number,
        comentarios?: string
    };

}
