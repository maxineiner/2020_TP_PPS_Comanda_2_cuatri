import { AfterViewChecked, Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Mensaje } from 'src/app/clases/mensaje';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, AfterViewChecked
{
  @Input() mensajes: Mensaje[] = [];
  @Input() mensaje: Mensaje;
  @Input() idUsuario: string;

  @ViewChild(IonContent, { read: IonContent, static: false }) content: IonContent;

  constructor(private mensajesService: MensajesService) { }

  ngOnInit() 
  {
    this.scrollToBottomOnInit();
  }


  ngAfterViewChecked(): void
  {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    if (this.mensaje)
    {
      this.scrollToBottomOnInit();
      this.cargarMensaje();
    }
  }

  cargarMensaje()
  {
    console.log(this.mensaje);
    this.mensajes.push(this.mensaje);
    this.mensajesService.crear(this.mensaje);
    this.mensaje = null;
  }

  scrollToBottomOnInit()
  {
    console.log("SCROLLING");
    setTimeout(() =>
    {
      this.content.scrollToBottom(100);
    }, 1000);
  }

}
