import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { DatabaseService } from "./database.service"
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	public apiEmail = 'https://comanda-pgr-2020.herokuapp.com/email';
	constructor(private auth: AngularFireAuth, private bd: DatabaseService, private http: HttpClient) { }

	login(email: string, password: string) {
		return this.auth.signInWithEmailAndPassword(email, password).then(user => user.user.uid);
	}

	registrarUsuario(data) {
		return this.auth.createUserWithEmailAndPassword(data.correo, data.contrasenia).then(userRef => {
			console.log(data.foto.includes('iconLogoMovimiento.png'));
			if (!data.foto.includes('iconLogoMovimiento.png')) {
				let nombreFoto = "usuarios/" + Date.now() + "." + data.dni + ".jpg";
				return this.bd.subirImagen(nombreFoto, data.foto).then(url => {
					data.foto = url;
					return this.bd.crearConId('usuarios', data, userRef.user.uid);
				});
			} else {
				return this.bd.crearConId('usuarios', data, userRef.user.uid);
			}
		}).then(id => {
			this.logout();
			return id;
		});
	}

	registrarUsuarioAnonimo(data) {
		if (!data.foto.includes('iconLogoMovimiento.png')) {
			let nombreFoto = "usuarios/" + Date.now() + "." + data.dni + ".jpg";
			return this.bd.subirImagen(nombreFoto, data.foto).then(url => {
				data.foto = url;
				return this.bd.crear('usuarios', data);
			});
		} else {
			return this.bd.crear('usuarios', data);
		}
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
			contenido: content
		};
		let headers = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		}
		let subA = this.http.post(this.apiEmail, body, headers).subscribe(sub =>{
			console.log(sub);
		});
		setTimeout(()=>{
			subA.unsubscribe();
		},5000)
	}


}
