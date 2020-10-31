import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ClienteAuth } from '../clases/cliente';
import { ClienteService } from './cliente.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  public isLogged: boolean = false
  constructor(public afAuth: AngularFireAuth, private clienteService: ClienteService)
  {
    //afAuth.authState.subscribe(user => this.isLogged = user);
  }

  async onLogin(clienteAuth: ClienteAuth)
  {
    try
    {
      const credential = await this.afAuth.signInWithEmailAndPassword(clienteAuth.email, clienteAuth.password);
      this.isLogged = true;
      return credential;
    } catch (error)
    {
      console.log('Login failed', error);
    }
  }

  onRegister(clienteAuth: ClienteAuth)
  {
    return new Promise<any>((resolve, reject) =>
    {
      this.afAuth.createUserWithEmailAndPassword(clienteAuth.email, clienteAuth.password)
        .then(response =>
        {
          clienteAuth.password = null;
          this.clienteService.registrar(clienteAuth, response.user.uid);
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