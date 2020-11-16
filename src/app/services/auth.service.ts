import { Injectable } from '@angular/core';
import { Cliente } from '../clases/cliente';
import { Empleado } from '../clases/empleado';
import { Jefe } from '../clases/jefe';
import { Usuario } from '../clases/usuario';
import { ClienteService } from './cliente.service';
import { EmpleadoService } from './empleado.service';
import { JefeService } from './jefe.service';

// Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

// Providers
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { FacebookLoginResponse } from '@capacitor-community/facebook-login';
import { Plugins } from '@capacitor/core';

//
import { Platform } from '@ionic/angular';
import { environment } from '../../environments/environment';

const { FacebookLogin } = Plugins;
const FACEBOOK_PERMISSIONS = ['email'];

export enum LoginProvider
{
  Email = "Email",
  Google = "Google",
  Facebook = "Facebook",
  Github = "Github",
  Twitter = "Twitter"
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
    private google: GooglePlus)
  {
    //afAuth.authState.subscribe(user => this.isLogged = user);
  }

  async onLogin(usuario: Usuario, provider: LoginProvider)
  {
    console.log(provider);

    try
    {
      let credential: firebase.auth.UserCredential;
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
          if (this.platform.is('capacitor'))
          {
            console.log("FB LOGIN");
            const fbAuth = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS }) as FacebookLoginResponse;

            console.log("FB AUTH");
            console.log(`Facebook access token is ${fbAuth.accessToken.token}`);
            console.log(`Facebook access token is ${fbAuth.accessToken.userId}`);
            console.log(`Facebook access token is ${fbAuth.accessToken.permissions}`);
            // Login successful.
            const facebookCredential = firebase.auth.FacebookAuthProvider.credential(fbAuth.accessToken.token);

            console.log("FB CREDENTIAL");
            console.log(facebookCredential.idToken);
            console.log(facebookCredential.providerId);
            console.log(facebookCredential.accessToken);
            credential = await this.afAuth.signInWithCredential(facebookCredential);
          }
          else
          {
            const fbAuth = await this.afAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
            credential = fbAuth;
          }
          break
        case LoginProvider.Google:
          if (this.platform.is('capacitor'))
          {
            const googleAuth = await this.google.login(params);
            console.log(googleAuth);
            const googleCredential = googleAuth.accessToken ?
              firebase.auth.GoogleAuthProvider.credential
                (
                  googleAuth.idToken,
                  googleAuth.accessToken
                ) :
              firebase.auth.GoogleAuthProvider.credential(googleAuth.idToken);
            console.log(googleCredential);
            credential = await this.afAuth.signInWithCredential(googleCredential);
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

      console.log("CREDENCIAL");
      console.log(credential.user.uid);

      if (credential)
      {
        this.isLogged = true;
        return credential.user.uid;
      }

    } catch (error)
    {
      console.log('Login failed', error);
      return "Error: No se pudo iniciar sesión";
    }
  }

  async onLoginObsoleto(usuario: Usuario, provider: LoginProvider)
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