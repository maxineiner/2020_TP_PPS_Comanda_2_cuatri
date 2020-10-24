import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SonidosService {

  constructor() { }

  Reproducir(tipo)
  {

    var audio = new Audio();
    switch(tipo)
    {
      case 'iniciar':
        audio.src = "assets/sonidos/iniciar.mp3";
        audio.play();
      break;
      case 'cerrar':
        audio.src = "assets/sonidos/cerrar.mp3";
        audio.play();
      break;
      case 'pulso':
        audio.src = "assets/sonidos/pulso.mp3";
        audio.play();
      break;
    }
  }
}
