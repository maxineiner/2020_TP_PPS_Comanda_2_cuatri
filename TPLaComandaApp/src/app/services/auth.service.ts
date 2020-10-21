import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { UsuarioModel } from '../models/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
              private ngFireAuth: AngularFireAuth,
              private navCtrl: NavController,
              private afs: AngularFirestore
  ) { }

  async login(usuario: UsuarioModel) {

    return new Promise ( resolve =>
      { this.ngFireAuth.auth.signInWithEmailAndPassword(usuario.mail, usuario.password)
        .then((res) => {
          resolve(true);
        }).catch((error) => {
          resolve(false);
        });
    });
  }

  logout() {
    this.navCtrl.navigateRoot('/login', {animated: true});
  }

}
