import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService
{

  constructor() { }

  /**
   * convierte un objeto Date a timeStamp
   * @param date 
   */
  toTimeStamp(date: Date)
  {
    return date.getTime() / 1000;
  }

  toDate(timeStamp)
  {
    let date = new Date(timeStamp * 1000);
    return date;
  }

  /**
   * Convierte fecha en formato ISO a objeto Date con fecha local
   * @param stringISO Fecha en formato ISO string
   */
  getDateObject(stringISO: string)
  {
    let timeStamp = Date.parse(stringISO);

    let fecha = new Date(timeStamp);

    let anio = fecha.getFullYear();
    let mes = fecha.getMonth();
    let dia = fecha.getDate();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();

    let newDate = new Date(anio, mes - 1, dia, horas, minutos, 0, 0);
    return newDate;
  }

  /**Funcion para agregar minutos a un timeStamp
 * @param timeStamp TimeStamp
 * @param minutosAAgregar Minutos a agregar
 * @returns TimeStamp con los minutos agregados
 */
  sumarMinutos(timeStamp, minutosASumar): number
  {
    let nuevoHorario = timeStamp + (minutosASumar * 60);
    return nuevoHorario;
  }

  restarMinutos(timeStamp, minutosARestar): number
  {
    let nuevoHorario = timeStamp - (minutosARestar * 60);
    return nuevoHorario;
  }

  /**
   * Obtiene fecha local en formato ISO string
   * @param date 
   */
  getIsoLocalTime(date)
  {
    let isoLocalTime = date.getFullYear().toString() + '-';
    if ((date.getMonth() + 1) < 10)
    {
      isoLocalTime += '0' + (date.getMonth() + 1) + '-';
    } else
    {
      isoLocalTime += (date.getMonth() + 1) + '-';
    }
    if (date.getDate() < 10)
    {
      isoLocalTime += '0' + (date.getDate()) + 'T';
    }
    else
    {
      isoLocalTime += date.getDate() + 'T';
    }
    isoLocalTime += date.toLocaleTimeString();
    console.log('Mi ISOtimeString', isoLocalTime);
    return isoLocalTime;
  }
}
