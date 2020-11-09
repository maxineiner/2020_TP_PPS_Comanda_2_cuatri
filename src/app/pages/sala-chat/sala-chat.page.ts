import { Component, DoCheck, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Mensaje } from 'src/app/clases/mensaje';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-sala-chat',
  templateUrl: './sala-chat.page.html',
  styleUrls: ['./sala-chat.page.scss'],
})
export class SalaChatPage implements OnInit, DoCheck
{
  usuario: Usuario = AuthService.usuario;
  mensaje: Mensaje;
  mensajes: Mensaje[];
  textoAuxiliar: string;

  constructor(private mensajeService: MensajesService, private modalController: ModalController) 
  {
    this.mensajeService.leer()
      .then(mensajes => this.mensajes = mensajes.filter(mensaje => mensaje.chatId == this.usuario.id));
  }

  ngOnInit()
  {
  }

  ngDoCheck(): void
  {
    this.mensajes = MensajesService.mensajes.filter(mensaje => mensaje.id == this.usuario.id);
  }

  enviar()
  {
    this.mensaje = new Mensaje();

    if (this.textoAuxiliar)
    {
      this.mensaje = Mensaje.CrearMensaje('0', this.textoAuxiliar, this.usuario,
        new Date().toUTCString(), this.usuario.id);
      this.textoAuxiliar = null;
    }
  }

  cerrar()
  {
    this.modalController.dismiss();
  }



}
