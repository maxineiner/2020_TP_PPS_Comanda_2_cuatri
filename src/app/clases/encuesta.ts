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
    fecha: string;

    public constructor(init?: Partial<Encuesta>)
    {
        if (init)
        {
            Object.assign(this, init);
        }
    }
}