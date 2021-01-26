import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';
import { ToastController, LoadingController } from '@ionic/angular';
import { timer } from 'rxjs';
import { stringify } from 'querystring';
import { async } from '@angular/core/testing';

@Injectable({
	providedIn: 'root'
})
export class ComplementosService {
	public flagSonidos: boolean = true;
	public splash: boolean = false;

	constructor(public toastController: ToastController, public loadingController: LoadingController, public vib: Vibration, private translate : TranslateService) { }

	playAudio(tipoAudio) {
		if (this.flagSonidos) {
			if (this.flagSonidos) {
				let audio = new Audio();
				if (tipoAudio === 'success') {
					audio.src = '../../assets/audio/login/sonidoBotonSUCESS.mp3';
				} else if (tipoAudio === 'error') {
					audio.src = '../../assets/audio/login/sonidoBotonBORRAR.mp3';
				} else if (tipoAudio === 'notification') {
					audio.src = '../../assets/audio/login/sonidoBotonNOTIFICATION.mp3';
				}
				audio.play();
			}
		}
	}

	toggleSonidos() {
		this.flagSonidos = !this.flagSonidos;
	}

	// Muestro el toast, mensaje de error. 
	async presentToast(msg) {
		console.log(msg);

		let translate = this.translate.get(msg).subscribe(async (res) => {
			console.log(res);
			let	toast = await this.toastController.create({
				message: res,
				position: 'bottom',
				duration: 2000,
				color: 'danger',
				buttons: [
					{
						text: 'X',
						role: 'cancel',
					}
				]
			});
			toast.present();
		})
		
		translate.unsubscribe();
	}

	// Valido absolutamente todos los posibles errores. 
	ngValidarError(err) {
		console.log(err);
		switch (err) {
			case 'auth/argument-error':
				err = 'servicios.mensajesError.CAMPOS';
				break;
			case 'auth/invalid-email':
				err = 'servicios.mensajesError.EMAIL';
				break;
			case 'auth/user-not-found':
				err = 'servicios.mensajesError.USUARIO';
				break;
			case 'auth/wrong-password':
				err = 'servicios.mensajesError.CONTRASENIA';
				break;
			default:
				err = 'servicios.mensajesError.DEFAULT';
				break;
		}
		
		this.presentToast(err);
	}



	// Muestro el toast, mensaje de error. 
	async presentToastConMensajeYColor(msg: string, color: string) {
		if (color === 'danger') {
			this.playAudio('error');
			this.vib.vibrate(1000);
		} else if ('success') {
			this.playAudio('success');
		} else {
			this.playAudio('notification');
		}
		let translate = this.translate.get(msg).subscribe(async (res) => {
			let toast = await this.toastController.create({
				message: res,
				position: 'bottom',
				duration: 3000,
				color: color,
				buttons: [
					{
						text: 'X',
						role: 'cancel',
					}
				]
			});
			toast.present();
		});
		
		translate.unsubscribe();
	}
}
