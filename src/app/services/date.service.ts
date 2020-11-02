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
}
