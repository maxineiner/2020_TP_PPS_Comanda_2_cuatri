import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Cliente } from '../clases/cliente';
import { Empleado } from '../clases/empleado';
import { Jefe } from '../clases/jefe';
import { ClienteService } from './cliente.service';
import { EmpleadoService } from './empleado.service';
import { JefeService } from './jefe.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  public isLogged: boolean = false
  constructor(public afAuth: AngularFireAuth,
    private clienteService: ClienteService,
    private empleadoService: EmpleadoService,
    private jefeService: JefeService)
  {
    //afAuth.authState.subscribe(user => this.isLogged = user);
  }

  //TODO: fix to accept other type of users
  async onLogin(cliente: Cliente)
  {
    try
    {
      const credential = await this.afAuth.signInWithEmailAndPassword(cliente.email, cliente.password);
      this.isLogged = true;
      return credential;
    } catch (error)
    {
      console.log('Login failed', error);
    }
  }

  onRegisterCliente(cliente: Cliente)
  {
    return new Promise<any>((resolve, reject) =>
    {
      this.afAuth.createUserWithEmailAndPassword(cliente.email, cliente.password)
        .then(response =>
        {
          cliente.password = null;
          this.clienteService.crear(cliente, response.user.uid);
          resolve(response);
        },
          error => reject(error));
    });
  }

  onRegisterEmpleado(empleado: Empleado)
  {
    return new Promise<any>((resolve, reject) =>
    {
      this.afAuth.createUserWithEmailAndPassword(empleado.email, empleado.password)
        .then(response =>
        {
          empleado.password = null;
          this.empleadoService.crear(empleado, response.user.uid);
          resolve(response);
        },
          error => reject(error));
    });
  }

  onRegisterJefe(jefe: Jefe)
  {
    return new Promise<any>((resolve, reject) =>
    {
      this.afAuth.createUserWithEmailAndPassword(jefe.email, jefe.password)
        .then(response =>
        {
          jefe.password = null;
          this.jefeService.crear(jefe, response.user.uid);
          resolve(response);
        },
          error => reject(error));
    });
  }

  onLogout()
  {
    try
    {
      this.afAuth.signOut();
      this.isLogged = false;
    } catch (error)
    {
      console.log('Logout failed', error);
    }
  }
}