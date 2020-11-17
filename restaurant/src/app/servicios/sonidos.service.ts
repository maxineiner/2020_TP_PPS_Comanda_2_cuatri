import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SonidosService {

  constructor() { 

  }
  sonido = true;
  Reproducir(tipo)
  {
    if(this.ConfigurarAudio())
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

  ConfigurarAudio()
  {
    if(localStorage.getItem("audio")==undefined)
    {
      localStorage.setItem("audio","true");
      this.sonido = true;
      return true;
    }
    else
    {
      var audio = localStorage.getItem("audio");
      switch(audio)
      {
        case "true":
          this.sonido = true;
        return true;
        case "false":
          this.sonido = false;
        return false;
      }
    }
  }

  ActivarSonido(){
    if(!this.sonido)
    {
      localStorage.setItem("audio","true");
      this.sonido = true;
    }
  }

  DesactivarSonido()
  {
    if(this.sonido)
    {
      localStorage.setItem("audio","false");
      this.sonido = false;
    }
  }
}
