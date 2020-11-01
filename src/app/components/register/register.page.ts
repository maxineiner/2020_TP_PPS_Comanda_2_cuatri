import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Cliente } from '../../clases/cliente';
import { ToastController } from '@ionic/angular'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit
{
  cliente: Cliente = new Cliente
  toastTime = 2000;

  // constructor(private authService: AuthService, private router: Router) { }
  constructor(private authService: AuthService, private toastController: ToastController) { }

  ngOnInit()
  {
  }

  async onRegister()
  {
    if (this.cliente && !this.cliente.id)
    {
      this.authService
        .onRegister(this.cliente)
        .then(() => this.presentToast('Alta exitosa'))
        .catch(() => this.presentToast('No se pudo realizar el alta'))
      // this.router.navigateByUrl('/');
    }
    else
    {
      this.presentToast('Cliente existente')
    }
  }

  //TODO: do this method generic for all components
  // Toast para notificaciones
  async presentToast(message: string, duration?: number)
  {
    if (duration === undefined || duration <= 0)
    {
      duration = this.toastTime
    }
    const toast = await this.toastController.create({
      message,
      duration: this.toastTime,
    })
    toast.present()
  }
}
