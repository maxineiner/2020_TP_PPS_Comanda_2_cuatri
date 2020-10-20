enum TipoProducto {
    Comida,
    Bebida
  }
export class Producto {
    public id: string;
    public nombre: string;
    public descripcion: string;
    public fotos: Array<any>;
    public minutosDeElaboracion: string;
    public precio: number;
    public tipo: string;
    public codigoQr: string;
    public isActive:boolean;

    public constructor(init?: Partial<Producto>) {
        if(init){
            Object.assign(this, init);
        }        
    }

    

    public static CrearProducto(id: string, nombre: string, descripcion: string,
        fotos: Array<any>, minutosDeElaboracion: string,precio: number,tipo: string,
        codigoQr: string) :Producto {
        let producto = new Producto();
        
        producto.id = id;
        producto.nombre = nombre;
        producto.descripcion = descripcion;
        producto.fotos = fotos;
        producto.minutosDeElaboracion = minutosDeElaboracion;
        producto.precio = precio;
        producto.tipo = tipo;
        producto.codigoQr = codigoQr;
        

        return producto;
    }


}