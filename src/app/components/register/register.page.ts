import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Cliente } from '../../clases/cliente';
import { UIVisualService } from "src/app/services/uivisual.service"
import { ModalController } from '@ionic/angular';
import { CodigoQRService } from 'src/app/services/codigo-qr.service';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit
{
  cliente: Cliente = new Cliente

  constructor(private authService: AuthService, private UIVisual: UIVisualService,
    private modalController: ModalController, private codigoQRService: CodigoQRService) { }

  ngOnInit()
  {
  }

  async onRegister()
  {
    if (this.cliente && !this.cliente.id)
    {
      this.authService
        .onRegisterCliente(this.cliente)
        .then(() =>
        {
          UIVisualService.presentToast('Alta exitosa')
          this.cerrar();
          this.presentLoginModal();
        })
        .catch(() => UIVisualService.presentToast('No se pudo realizar el alta'))
    }
    else
    {
      UIVisualService.presentToast('Cliente existente')
    }
  }

  async onScanDNI()
  {
    let barcodeQR: string
    this.codigoQRService.escanear("Escanee su DNI", "PDF_417").then(obj =>
    {
      barcodeQR = obj.text
      let barcodeQRData = barcodeQR.split("@")

      this.cliente.apellido = barcodeQRData[1]
      this.cliente.nombre = barcodeQRData[2]
      this.cliente.dni = barcodeQRData[4]

      console.log(this.cliente)
    })
  }

  cerrar()
  {
    this.modalController.dismiss();
  }

  async presentLoginModal()
  {
    const modal = await this.modalController.create({
      component: LoginPage,
    });

    await modal.present();

  }
}
