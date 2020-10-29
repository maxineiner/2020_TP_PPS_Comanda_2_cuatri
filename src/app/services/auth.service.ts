import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ClienteLogin } from '../clases/cliente';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  public isLogged: boolean = false
  constructor(public afAuth: AngularFireAuth)
  {
    //afAuth.authState.subscribe(user => this.isLogged = user);
  }

  async onLogin(clienteLogin: ClienteLogin)
  {
    try
    {
      const credential = await this.afAuth.signInWithEmailAndPassword(clienteLogin.email, clienteLogin.password);
      this.isLogged = true;
      return credential;
    } catch (error)
    {
      console.log('Login failed', error);
    }
  }

  async onRegister(clienteLogin: ClienteLogin)
  {
    try
    {
      const credential = await this.afAuth.createUserWithEmailAndPassword(clienteLogin.email, clienteLogin.password);
      this.isLogged = false;
      return credential;
    } catch (error)
    {
      console.log('Register failed', error);
    }
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