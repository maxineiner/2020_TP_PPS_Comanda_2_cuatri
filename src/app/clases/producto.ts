export class Producto {
    public id: string;
    public nombre: string;
    public descripcion: string;
    public fotos: Array<any>;
    public tiempoDeElaboracion: string;
    public precio: number;
    public tipo: string;
    public codigoQr: string;
    public isActive:string;
    

    public static CrearProducto(id: string, nombre: string, descripcion: string,
        fotos: Array<any>, tiempoDeElaboracion: string,precio: number,tipo: string,
        codigoQr: string) :Producto {
        let producto = new Producto();
        
        producto.id = id;
        producto.nombre = nombre;
        producto.descripcion = descripcion;
        producto.fotos = fotos;
        producto.tiempoDeElaboracion = tiempoDeElaboracion;
        producto.precio = precio;
        producto.tipo = tipo;
        producto.codigoQr = codigoQr;
        

        return producto;
    }


}