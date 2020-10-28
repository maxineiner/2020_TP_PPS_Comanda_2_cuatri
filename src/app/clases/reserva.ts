import { Cliente } from './cliente';
import { Mesa } from './mesa';

export class Reserva {
    public id: string;
    public mesa: Mesa;
    public cliente: Cliente;
    public pedido: any;//Tipo Pedido
    public isActive:boolean;
    public fecha:any;
    public hora:any;

    public constructor(init?: Partial<Reserva>) {
        if(init){
            Object.assign(this, init);
        }
    }

    public static CrearReserva(id: string, mesa: Mesa, cliente: Cliente,
        pedido: any) :Reserva {
        let reserva = new Reserva();
        
        reserva.id = id;
        reserva.mesa = mesa;
        reserva.cliente = cliente;
        reserva.pedido = pedido;
        

        return reserva;
    }


}