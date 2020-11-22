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
import { FacebookCurrentAccessTokenResponse, FacebookLoginResponse } from '@capacitor-community/facebook-login';
import { Plugins } from '@capacitor/core';
import { Twitter } from '@capacitor-community/twitter';
//
import { Platform } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { FacebookData, FacebookPicture, LoginProvider, TwitterAuth } from '../interfaces/IProviders';
import { Imagen } from '../clases/imagen';

const { FacebookLogin } = Plugins;
const FACEBOOK_PERMISSIONS = ['public_profile', 'email'];
const twitter = new Twitter();



export const USERS_TEST =
{
  cliente: {
    mail: "cliente@mail.com",
    password: "111111"
  },
  supervisor: {
    mail: "supervisor@mail.com",
    password: "111111"
  },
  mozo: {
    mail: "mozo@mail.com",
    password: "111111"
  },
  cocinero: {
    mail: "cocinero@mail.com",
    password: "111111"
  },
  bartender: {
    mail: "bartender@mail.com",
    password: "111111"
  },
  duenio: {
    mail: "duenio@mail.com",
    password: "111111"
  },

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

  async onLogin(usuario: Usuario, provider: LoginProvider): Promise<firebase.auth.UserCredential>
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
            console.log(`Facebook userId is ${fbAuth.accessToken.userId}`);
            console.log(`Facebook permissions are ${fbAuth.accessToken.permissions}`);
            // Login successful.
            const facebookCredential = firebase.auth.FacebookAuthProvider.credential(fbAuth.accessToken.token);

            console.log("FB CREDENTIAL");
            console.log(facebookCredential.providerId);
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
          if (this.platform.is('capacitor'))
          {
            console.log("TWITTER LOGIN");
            const twitterAuth: TwitterAuth = await twitter.login();

            console.log("TWITTER AUTH");
            console.log(`Twitter access token is ${twitterAuth.authToken}`);
            console.log(`Twitter secret token is ${twitterAuth.authTokenSecret}`);
            // Login successful.
            const twitterCredential = firebase.auth.TwitterAuthProvider.credential(twitterAuth.authToken, twitterAuth.authTokenSecret);

            console.log("TWITTER CREDENTIAL");
            console.log(twitterCredential.idToken);
            console.log(twitterCredential.providerId);
            console.log(twitterCredential.accessToken);
            credential = await this.afAuth.signInWithCredential(twitterCredential);
          }
          else
          {
            const twitterAuth = await this.afAuth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
            credential = twitterAuth;
          }
          break
      }

      console.log("CREDENCIAL");
      console.log(credential.user.uid);
      console.log(credential.user.displayName);
      console.log(credential.user.email);
      console.log(credential.user.photoURL);

      if (credential && credential.additionalUserInfo.isNewUser)
      {
        console.log("Nuevo Usuario");

        await this.onRegisterWithCredential(credential, provider);
      }

      if (credential)
      {
        this.isLogged = true;
        return credential;
      }

    } catch (error)
    {
      console.log('Login failed', error);
      return null;
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

  async onLoginTesting(email: string, password: string): Promise<firebase.auth.UserCredential>
  {
    try
    {
      const credential = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.isLogged = true;
      return credential;
    } catch (error)
    {
      console.log('Login failed', error);
    }
  }

  async onRegisterWithCredential(credential: firebase.auth.UserCredential, provider: LoginProvider)
  {
    let usuario: Usuario = new Usuario();
    let nombre_apellido = credential.user.displayName.split(' ');

    console.log(nombre_apellido);
    console.log(credential);

    usuario.nombre = nombre_apellido[0];
    usuario.apellido = nombre_apellido[1];
    usuario.id = credential.user.uid;
    usuario.email = credential.user.email;

    switch (provider)
    {
      case LoginProvider.Facebook:
        console.log("Facebook Provider")
        const fbAuth: FacebookCurrentAccessTokenResponse = await FacebookLogin.getCurrentAccessToken();

        console.log(fbAuth.accessToken);
        let foto = await this.retrieveFacebookPicture(fbAuth);
        // usuario.foto = Imagen.CrearImagen(usuario.id, "_", foto.data.url, new Date().toISOString(), "_");

        // console.log(usuario);
        // this.clienteService.crear(<Cliente>usuario, usuario.id);
        break;
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

  private async retrieveFacebookPicture(facebookAuth: FacebookLoginResponse)
  {
    const response = await fetch(`https://graph.facebook.com/${facebookAuth.accessToken.userId}/picture?width=1024&height=1024&access_token=${facebookAuth.accessToken.token}`);

    console.log(response);
    const pictureData = await response.json();
    let picture = pictureData;
    console.log(picture);

    return picture;
  }

}