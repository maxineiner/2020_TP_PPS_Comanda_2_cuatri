import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private auth: AngularFireAuth) { }

	login(email: string, password: string) {
		return this.auth.signInWithEmailAndPassword(email, password).then(user => user.user.email);
	}

	registrarUsuario(email: string, contraseña: string) {
		return this.auth.createUserWithEmailAndPassword(email, contraseña).then(user => user);
	}

	mandarCorreoElectronico(email: string) {
		setTimeout(() => {
			this.auth.sendPasswordResetEmail(email);
		}, 3000);
	}

	logout(){
		return this.auth.signOut();
	}
}
