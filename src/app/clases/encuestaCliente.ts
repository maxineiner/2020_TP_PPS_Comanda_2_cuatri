import { Encuesta } from './encuesta';
import { Imagen } from './imagen';

export enum Calidad
{
    EXCELENTE = "Excelente",
    BUENO = "Bueno",
    REGULAR = "Regular",
    MALO = "Malo",
    PESIMO = "Pésimo"
}

export enum Destacado
{
    ATENCION = "Atención",
    PRECIO = "Precio",
    COMIDA = "Comida",
    ACCESIBILIDAD = "Accesibilidad"
}

export class EncuestaCliente extends Encuesta
{
    comensales: number;
    satisfaccion: number;
    retorno: boolean;
    servicio: Calidad;
    sabor: Calidad;
    destacado: Destacado[];
    fotos: Imagen[];
}