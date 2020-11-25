import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
//import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FmcService {

  /*constructor(private platform: Platform, private firebaseNat: Firebase, private firestore: AngularFirestore) { }

  async getToken(usuarioUid){
  	let token;
  	if(this.platform.is('android')){
  		token = await this.firebaseNat.getToken();
  	}
  	return this.enviarTokenAFirestore(token, usuarioUid);
  }

  enviarTokenAFirestore(token, uid){
  	if(!token) return ;
  	const docData = {
  		token: token,
  		userId: uid
  	}
  	return this.firestore.collection('devices').doc(token).set(docData);
  }

  escucharNotificaciones(){
  	return this.firebaseNat.onNotificationOpen();
  }*/
}
