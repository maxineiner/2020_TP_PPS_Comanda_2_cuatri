import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
// import './../../../assets/js/smtp.js';
declare let Email: any;

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private auth: AngularFireAuth) { }

	login(email: string, password: string) {
		return this.auth.signInWithEmailAndPassword(email, password).then(user => user.user.email);
	}

	registrarUsuario(email: string, contraseña: string) {
		return this.auth.createUserWithEmailAndPassword(email, contraseña);
	}

	registrarUsuarioAnonimo() {
		return this.auth.signInAnonymously().then(uCredential => {
			return uCredential.user.uid
		});
	}

	mandarCorreoElectronico(email: string) {
		setTimeout(() => {
			this.auth.sendPasswordResetEmail(email);
		}, 3000);
	}

	logout() {
		return this.auth.signOut();
	}

	mandarEmail(correo:string, subject:string, content: string) {
		Email.send({
			Host: 'smtp.elasticemail.com',
			Username: 'sebastianrilo@gmail.com',
			Password: '26F84F0385696622E97D97F7106679CC6F3A',
			To: correo,
			From: `noreply@comanda-pgr.firebaseapp.com`,
			Subject : subject,
			body: content,
		});
}


}
