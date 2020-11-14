import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Cliente, EstadoAceptacion } from 'src/app/clases/cliente';
import { Mensaje } from 'src/app/clases/mensaje';
import { MensajesService, MetadataMensaje } from 'src/app/services/mensajes.service';
import { RolesService } from 'src/app/services/roles.service';
import { UIVisualService } from 'src/app/services/uivisual.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit, DoCheck
{
  mensajes: Mensaje[] = [];

  constructor(private platform: Platform, private mensajeService: MensajesService,
    private router: Router, private UIVisual: UIVisualService, private rolService: RolesService) 
  {
    this.platform.backButton.subscribeWithPriority(10, () =>
    {
      this.router.navigate(["/home/inicio"]);
    });
  }

  ngDoCheck(): void
  {

  }

  ngOnInit() 
  {
    console.log("INIT");
    UIVisualService.loading();
    this.mensajeService.leer().then(mensajes =>
    {
      const mensajesClientes = mensajes.sort(this.ordenarConsultas);
      console.log(mensajesClientes);

      for (const mensaje of mensajesClientes) 
      {
        let usuario = (<Cliente>mensaje.usuario);

        if (!this.mensajes.find(m => m.chatId == mensaje.chatId) &&
          usuario.estado == EstadoAceptacion.Aceptado || usuario.estado == EstadoAceptacion.Anonimo)
        {
          this.mensajes.push(mensaje);
        }
      }
      console.log(this.mensajes);
    });
  }

  responder(mensaje: Mensaje)
  {
    console.log(mensaje);

    let infoMensaje: MetadataMensaje = {
      chatId: mensaje.chatId,
      mesa: mensaje.mesa
    };

    UIVisualService.verChat(infoMensaje);
  }

  ordenarConsultas(mensajeA: Mensaje, mensajeB: Mensaje): number
  {

    if (Date.parse(mensajeA.fecha) < Date.parse(mensajeB.fecha))
    {
      return 1;
    }
    else if (Date.parse(mensajeA.fecha) > Date.parse(mensajeB.fecha))
    {
      return -1;
    }
    else
    {
      return 0;
    }
  }


}
