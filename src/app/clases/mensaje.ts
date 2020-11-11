import { Usuario } from './usuario';

export class Mensaje
{
    id: string;
    texto: string;
    usuario: Usuario;
    fecha: string;
    chatId: string;
    mesa?: number;

    public static CrearMensaje(id: string, texto: string, usuario: Usuario,
        fecha: string, chatId: string, mesa?: number)
    {
        let mensaje = new Mensaje();

        mensaje.id = id;
        mensaje.texto = texto;
        mensaje.usuario = usuario;
        mensaje.fecha = fecha;
        mensaje.chatId = chatId;
        mensaje.mesa = mesa;

        return mensaje;
    }
}