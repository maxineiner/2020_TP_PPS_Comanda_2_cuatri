import { Encuesta } from './encuesta';
import { Imagen } from './imagen';

export enum EstadoLugar
{
    EXCELENTE = "Excelente",
    BUENO = "Bueno",
    REGULAR = "Regular",
    MALO = "Malo",
    PESIMO = "Pésimo"
}

export enum Ubicaciones
{
    BACHA = "Bacha",
    DEPOSITO = "Depósito",
    HELADERAS = "Heladeras",
    MESADAS = "Mesadas"
}

export enum Turno
{
    DIA = "Día",
    NOCHE = "Noche"
}

export class EncuestaEmpleado extends Encuesta
{
    horario: Turno;
    conformidad: number;
    comentario: string;
    relevoAHorario: boolean;
    ordenLugar: EstadoLugar;
    limpiezaLugar: EstadoLugar;
    lugaresBuenEstado: Ubicaciones[];
    foto: Imagen;
}