import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from 'src/app/clases/usuario';
import { Cliente, EstadoAceptacion } from 'src/app/clases/cliente';
import { JefeService } from 'src/app/services/jefe.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit
{
  usuario: Usuario = new Usuario()

  // constructor(private authService: AuthService, private router: Router) { }
  constructor(private authService: AuthService,
    private router: Router,
    private jefeService: JefeService,
    private empleadoService: EmpleadoService,
    private clienteService: ClienteService,
    private modalController: ModalController) { }

  ngOnInit()
  {
  }

  async onLoginAnonymously()
  {
    const uid = await this.authService.onLoginAnonymously();

    if (uid)
    {
      console.log('Cliente anonimo logueado!');

      let cliente = Cliente.CrearCliente(uid, "Anónimo", " ", "0", "-", " ", true, EstadoAceptacion.Anonimo, false)
      console.log(cliente)

      AuthService.usuario = cliente;
      this.clienteService.crearAnonimo(cliente);

      this.cerrar();
      this.router.navigate(['/home'])
    }
  }

  async onLogin()
  {
    const uid = await this.authService.onLogin(this.usuario);

    if (uid)
    {
      console.log('Usuario logueado!');
      let cliente, empleado, jefe;
      let clientePromise, empleadoPromise, jefePromise;

      clientePromise = this.clienteService.leerPorID(uid).then(c => cliente = c)
      empleadoPromise = this.empleadoService.leerPorID(uid).then(c => empleado = c)
      jefePromise = this.jefeService.leerPorID(uid).then(c => jefe = c)

      await clientePromise, await empleadoPromise, await jefePromise

      console.log(cliente)
      console.log(empleado)
      console.log(jefe)

      if (cliente)
      {
        AuthService.usuario = cliente
      }
      else if (empleado)
      {
        AuthService.usuario = empleado
      }
      else if (jefe)
      {
        AuthService.usuario = jefe
      }
      else 
      {
        console.log("usuario no encontrado")
        // mostrar error en pantalla
      }
      console.log(AuthService.usuario)

      this.cerrar();
      this.router.navigate(['/home'])
    }
  }

  cerrar()
  {
    this.modalController.dismiss();
  }
}