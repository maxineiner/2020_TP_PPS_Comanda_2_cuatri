import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Cliente } from '../../clases/cliente';
import { UIVisualService } from "src/app/services/uivisual.service"
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit
{
  cliente: Cliente = new Cliente

  // constructor(private authService: AuthService, private router: Router) { }
  constructor(private authService: AuthService, private UIVisual: UIVisualService,
              private modalController: ModalController) { }

  ngOnInit()
  {
  }

  async onRegister()
  {
    if (this.cliente && !this.cliente.id)
    {
      this.authService
        .onRegisterCliente(this.cliente)
        .then(() => UIVisualService.presentToast('Alta exitosa'))
        .catch(() => UIVisualService.presentToast('No se pudo realizar el alta'))
      // this.router.navigateByUrl('/');
    }
    else
    {
      UIVisualService.presentToast('Cliente existente')
    }
  }

  cerrar()
  {
    this.modalController.dismiss();
  }
}
