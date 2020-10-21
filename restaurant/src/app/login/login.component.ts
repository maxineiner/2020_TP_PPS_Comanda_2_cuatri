import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../clases/usuario';
import { AuthService } from '../servicios/auth.service';
import { UtilsService } from '../servicios/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private usuario: Usuario = new Usuario();
  constructor(
    private authService: AuthService,
    private router: Router,
    private utils: UtilsService,
    //private imgService: ImagenesService
  ) { }

  ngOnInit() {
    this.usuario.correo = "";
    this.usuario.clave = "";
  }

  async OnLogin() {
    if(this.ValidarCorreo(this.usuario.correo))
    {
      this.utils.presentLoadingAuto(2000);
      var resultado = await this.authService.signIn(this.usuario);
      if (resultado) {
        console.log(resultado);
        //this.router.navigateByUrl('menuPrincipal');
      }
      else {
        this.utils.presentAlert("Algo salio mal!", "", "Error al iniciar sesion.");
      }
    }
    else
    {
      this.utils.presentAlert("Correo inválido!","","Verifique que el correo esté bien escrito.");
    }
  }

  onInicioRapido(e) {
    console.log(e);
  }
  InicioRapido(tipoUsuario) {
    console.log(tipoUsuario);
    switch (tipoUsuario) {
      case "DUEÑO":
        this.usuario.correo = "dueño@dueño.com";
        this.usuario.clave = "111111";
        break;
      case "SUPERVISOR":
        this.usuario.correo = "supervisor@supervisor.com";
        this.usuario.clave = "111111";
        break;
      case "MOZO":
        this.usuario.correo = "mozo@mozo.com";
        this.usuario.clave = "111111";
        break;
      case "METRE":
        this.usuario.correo = "metre@metre.com";
        this.usuario.clave = "111111";
        break;
      case "COCINERO":
        this.usuario.correo = "cocinero@cocinero.com";
        this.usuario.clave = "111111";
        break;
      case "BARTENDER":
        this.usuario.correo = "bartender@bartender.com";
        this.usuario.clave = "111111";
        break;
      case "CLIENTE_REGISTRADO":
        this.usuario.correo = "cliente@cliente.com";
        this.usuario.clave = "111111";
        break;
      default:
        console.log("No se reconoce a " + tipoUsuario + " como usuario.")
        break;
    }
  }

  Limpiar() {
    this.usuario.correo = "";
    this.usuario.clave = "";
  }

  ValidarCorreo(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
      return (true)
    }
    return (false)
  }
}