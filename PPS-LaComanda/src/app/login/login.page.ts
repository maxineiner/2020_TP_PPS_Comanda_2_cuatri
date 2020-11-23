import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ComplementosService } from "../servicios/complementos.service"
import { AuthService } from "../servicios/auth.service";
import { Usuario } from "../clases/usuario";
import { timer } from 'rxjs';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	email: string;
	password: string;
	pickedName = null;
	listaUsuarios = [
		{ id: 1, correo: "duenio@duenio.com", clave: "111111", perfil: "Dueño" },
		{ id: 2, correo: "supervisor@supervisor.com", clave: "222222", perfil: "Supervisor" },
		{ id: 3, correo: "mozo@mozo.com", clave: "333333", perfil: "Mozo" },
		{ id: 4, correo: "cocinero@cocinero.com", clave: "444444", perfil: "Cocinero" },
		{ id: 5, correo: "metre@metre.com", clave: "555555", perfil: "Metre" },
		{ id: 6, correo: "bartender@bartender.com", clave: "666666", perfil: "BarTender" }
	]

	constructor(
		private authService: AuthService,
		private complementos: ComplementosService,
		public router: Router,

	) { }

	ngOnInit() {
		localStorage.removeItem('tieneCorreo');
		localStorage.removeItem('correoUsuario');
	}

	public onSubmitLogin() {
		this.authService.login(this.email, this.password).then((res: any) => {
				let audio = new Audio();
				audio.src = 'assets/audio/login/sonidoBotonSUCESS.mp3';
				audio.play();
				timer(1000).subscribe(() => {
					this.router.navigate(['/home']);
					localStorage.setItem('correoUsuario', res);
					localStorage.setItem('tieneCorreo', 'conCorreo');
					this.onClearAll();
				});
			}).catch(err => this.complementos.ngValidarError(err.code));
	}

	public onClearAll() {
		this.email = null;
		this.password = null;
	}

	pickerUser(pickedName) {
		this.listaUsuarios.forEach((user) => {
			if (user.correo === pickedName) {
				this.email = user.correo;
				this.password = user.clave;
				return;
			}
		})
	}

	registrarUsuario() {
		this.router.navigate(['/alta-cliente']);
	}
}
