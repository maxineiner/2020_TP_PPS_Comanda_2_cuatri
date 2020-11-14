import { Injectable } from '@angular/core';
import { Cliente } from '../clases/cliente';
import { Empleado } from '../clases/empleado';
import { Jefe } from '../clases/jefe';
import { Usuario } from '../clases/usuario';
import { ClienteService } from './cliente.service';
import { EmpleadoService } from './empleado.service';
import { JefeService } from './jefe.service';
import { UIVisualService } from './uivisual.service';

// Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

// Providers
import { GooglePlus } from '@ionic-native/google-plus/ngx';

//
import { Platform } from '@ionic/angular';
import { environment } from '../../environments/environment';

export enum LoginProvider
{
  Email = "Email",
  Google = "Google",
  Facebook = "Facebook",
  Github = "Github",
  Twitter = "Twitter"
}

interface AuthData
{
  idToken: any,
  accessToken: any
}

@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  public isLogged: boolean = false
  public static usuario: Usuario = null

  constructor(
    private platform: Platform,
    private afAuth: AngularFireAuth,
    private clienteService: ClienteService,
    private empleadoService: EmpleadoService,
    private jefeService: JefeService,
    private UIVisual: UIVisualService,
    private google: GooglePlus)
  {
    //afAuth.authState.subscribe(user => this.isLogged = user);
  }

  async login(usuario: Usuario, provider: LoginProvider)
  {
    console.log(provider);

    try
    {
      let credential;
      let params;

      params = (this.platform.is('android')) ?
        { 'webClientId': environment.webGoogleId, 'scope': 'email profile' } :
        params = {};

      switch (provider)
      {
        case LoginProvider.Email:
          credential = await this.afAuth.signInWithEmailAndPassword(usuario.email, usuario.password);
          break;
        case LoginProvider.Facebook:
          const fbAuth = await this.afAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
          break
        case LoginProvider.Google:
          if (this.platform.is('capacitor'))
          {
            const googleAuth = await this.google.login({});
            console.log(googleAuth);
            // const googleCredential = googleAuth.accessToken ?
            //   firebase.auth.GoogleAuthProvider.credential
            //     (
            //       googleAuth.idToken,
            //       googleAuth.accessToken
            //     ) :
            //   firebase.auth.GoogleAuthProvider.credential(googleAuth.idToken);
            // console.log(googleCredential);
            // credential = await this.afAuth.signInWithCredential(googleCredential);
          }
          else
          {
            const googleAuth = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
            credential = googleAuth;
          }

          break;
        case LoginProvider.Github:
          const githubAuth = await this.afAuth.signInWithPopup(new firebase.auth.GithubAuthProvider());
          credential = githubAuth;
          break
        case LoginProvider.Twitter:
          const twitterAuth = await this.afAuth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
          credential = twitterAuth;
          break
      }

      console.log(credential);

      if (credential)
      {
        this.isLogged = true;
        return credential.user.uid;
      }

    } catch (error)
    {
      console.log('Login failed', error);
      UIVisualService.presentToast(error);
    }
  }

  async onLogin(usuario: Usuario)
  {
    try
    {
      const credential = await this.afAuth.signInWithEmailAndPassword(usuario.email, usuario.password);
      this.isLogged = true;
      return credential.user.uid;
    } catch (error)
    {
      console.log('Login failed', error);
    }
  }

  async onLoginAnonymously()
  {
    try
    {
      const credential = await this.afAuth.signInAnonymously();
      this.isLogged = true;
      return credential.user.uid;
    } catch (error)
    {
      console.log('Login Anonymously failed', error);
    }
  }

  async onLoginTesting(email: string, password: string)
  {
    try
    {
      const credential = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.isLogged = true;
      return credential.user.uid;
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
      AuthService.usuario = null;
    } catch (error)
    {
      console.log('Logout failed', error);
    }
  }
}