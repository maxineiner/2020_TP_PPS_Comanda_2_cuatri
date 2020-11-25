import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { HttpClient, HttpHeaders } from '@angular/common/http'
declare var Email: any;

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	public apiEmail = 'https://comanda-pgr-2020.herokuapp.com/email';
	constructor(private auth: AngularFireAuth, private http: HttpClient) { }

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

	mandarEmail(correo: string, subject: string, content: string) {
		let body = {
			destinatario: correo,
			asunto: subject,
			contenido: content,
		};
		let headers = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		}
		this.http.post(this.apiEmail, body, headers).subscribe(data =>{
			console.log(data);
		}).unsubscribe();
	}


}
