export enum TipoMesa
{
    VIP = 'Vip',
    Discapacitados = 'Discapacitados',
    Normal = 'Normal'
}

export class Mesa
{
    id: string;
    numero: number;
    comensales: number;
    tipo: TipoMesa;
    foto: string;
    datosQR: DatosMesa;
    codigoQR: string;

    public static CrearMesa(id: string, numero: number, comensales: number, tipo: TipoMesa, 
                            foto: string, datosQR: DatosMesa, codigoQR: string)
    {
        let mesa = new Mesa();

        mesa.id = id;
        mesa.numero = numero;
        mesa.comensales = comensales;
        mesa.tipo = tipo;
        mesa.foto = foto;
        mesa.datosQR = datosQR;
        mesa.codigoQR = codigoQR;

        return mesa;
    }
}

export class DatosMesa
{
    isAvailable: boolean;
    cliente: any; // Cambiar a tipo cliente
    estadoPedido: string; // Cambiar a tipo Estado del pedido

    constructor(isAvailable: boolean, cliente: any, estadoPedido: string)
    {
        this.isAvailable = isAvailable;
        this.cliente = cliente;
        this.estadoPedido = estadoPedido;
    }
}

