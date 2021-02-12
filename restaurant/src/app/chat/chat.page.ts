import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Pedido } from '../clases/pedido';
import { Usuario } from '../clases/usuario';
import { PedidoService } from '../servicios/pedido.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NotificationService } from 'src/app/servicios/notification.service';
import { Notificacion } from 'src/app/clases/notificacion';
import { TipoUsuario } from '../enums/tipo-usuario.enum';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  @ViewChild(IonContent, { static: true }) content: IonContent;
  @Input() pedido: Pedido;
  @Input() receptor: string;
  @Input() user: Usuario;
  public msg: string;
  loading = false;
  index = null;
  public listaMensajes: any[];
  private desuscribir = new Subject<void>();

  constructor(
    private pedidos: PedidoService,
    private modal: ModalController, 
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.pedidos.obtenerPedido(this.pedido.id)
    .pipe(takeUntil(this.desuscribir))
    .subscribe(call => {
      this.loading = false;
      this.listaMensajes = call.mensajes;
    });
  }

  ngOnDestroy() {
    this.desuscribir.next();
    this.desuscribir.complete();
  }

  closeModal() {
    this.modal.dismiss();
  }

  sendMensaje() {
    if (this.msg.trim() !== '') {
      const message = {
        text: this.msg,
        created_at: new Date(),
        user: {
          id: this.user.id,
          nombre: this.user.nombre
        },
        destinatario: this.receptor
      };
      if (!this.listaMensajes) {
        this.listaMensajes = [];
      }
      if (this.user.perfil !== 'MOZO') {
        let notificacion = new Notificacion();
        notificacion.idPedido = this.pedido.id;
        notificacion.mensaje = 'Nuevo mensaje de cliente mesa nro ' + this.pedido.mesa.numero;
        notificacion.receptor = TipoUsuario.MOZO;
        this.notificationService.crearNotificacion(notificacion);
      }

      this.listaMensajes.push(message);
      this.pedido.mensajes = this.listaMensajes;
      this.content.scrollToBottom(0);
      this.pedidos.actualizarPedido(this.pedido);
      this.msg = '';
    }
  }

  updateScroll(index: any) {
    if (index !== this.index) {
      this.index = index;
      setTimeout(() => {
        this.content.scrollToBottom(0);
      }, 500);
    }
  }

  getFecha(fecha: any) {
    return fecha instanceof Date ? fecha : fecha.toDate();
  }

}
