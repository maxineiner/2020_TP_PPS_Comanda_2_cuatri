import { Cliente } from './cliente';
import { Empleado } from './empleado';
import { Encuesta } from './encuesta';

export enum Comportamiento
{
    EXCELENTE = "Excelente",
    BUENO = "Bueno",
    REGULAR = "Regular",
    MALO = "Malo",
    PESIMO = "Pésimo"
}

export enum Conflictos
{
    CONSULTAS = "Consultas",
    USO_APP = "Uso de aplicación",
    PAGO = "Pago",
    RESERVAS = "Reservas",
    CODIGO_QR = "Código QR"
}

export enum Sexo
{
    MASCULINO = "Masculino",
    FEMENINO = "Femenino",
    OTRO = "Otro"
}

export class EncuestaSupervisor extends Encuesta
{
    nombre: string;
    apellido: string;
    idUsuario: string;
    dni: string;
    sexo: Sexo;
    comportamiento: Comportamiento;
    conflictosApp: Conflictos[];
    usoDeAplicacion: number;
    reclamo: boolean;
    comentario: string;

    constructor(init?: Partial<Encuesta>)
    {
        super(init);
        if (!init)
        {
            this.conflictosApp = [];
            this.reclamo = false;
        }
    }
}