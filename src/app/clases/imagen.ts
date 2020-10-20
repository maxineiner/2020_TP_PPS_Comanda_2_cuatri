export class Imagen
{
    id: string;
    url: string;
    base64: string;
    nombre: string;
    descripcion: string;
    tipo:string;
    fecha: string;

    public Imagen()
    {
    }

    public static CrearImagen(id: string, base64: string, url: string, usuario: string, 
                            nombreUsuario: string,fecha: string, tipo: string)
    {
        let imagen = new Imagen();

        imagen.id = id;
        imagen.base64 = base64;
        imagen.url = url;
        imagen.nombre = usuario;
        imagen.descripcion = nombreUsuario;
        imagen.fecha = fecha;
        imagen.tipo = tipo;
        
        return imagen;
    }
}