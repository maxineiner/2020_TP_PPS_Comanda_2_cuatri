import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from 'src/app/clases/usuario';
import { JefeService } from 'src/app/services/jefe.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Jefe } from 'src/app/clases/jefe';

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
    private jefeService: JefeService,
    private empleadoService: EmpleadoService,
    private clienteService: ClienteService) { }

  ngOnInit()
  {
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
      // guardar usuario en localStorage

      // this.router.navigateByUrl('/home');
    }
  }
}