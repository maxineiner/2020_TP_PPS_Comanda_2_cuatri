import { Usuario } from './usuario';

export enum TipoEncuesta
{
    CLIENTE = "Cliente",
    EMPLEADO = "Empleado",
    SUPERVISOR = "Supervisor"
}

export class Encuesta
{
    id: string;
    usuario: Usuario;
    tipo: TipoEncuesta;
}