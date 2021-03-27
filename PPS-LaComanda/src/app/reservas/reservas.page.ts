import { Component, OnInit } from '@angular/core';
import { ComplementosService } from 'src/app/servicios/complementos.service';
import { DatabaseService } from 'src/app/servicios/database.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { firebaseErrors } from 'src/assets/scripts/errores';
import { FmcService } from 'src/app/servicios/fmc.service';


@Component({
	selector: 'app-reservas',
	templateUrl: './reservas.page.html',
	styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {
	public usuario: any = null;
	public splash: boolean = false;
	public listaReservas: Array<any> = [];
	public miFormulario: FormGroup = this.formBuilder.group({
		fecha: [null, Validators.required],
		tipoMesa: [null, Validators.required],
		comensales: [null, [Validators.required, Validators.min(1), Validators.max(99)]]
	});
	public fechaValorActual: string;
	public fechaValorMinimo: string;
	public fechaValorMaximo: string;
	public flagNumMesa: any = null;
	constructor(private router: Router, private bd: DatabaseService, private formBuilder: FormBuilder,
		private fmc: FmcService, private complemetos: ComplementosService) { }

	validation_messages = {
		'fecha': [
			{ type: 'required', message: 'reservas.mensajes.FECHA_REQUERIDA' },
		],
		'tipoMesa': [
			{ type: 'required', message: 'reservas.mensajes.TIPO_REQUERIDO' },
		],
		'comensales': [
			{ type: 'required', message: 'reservas.mensajes.CANTIDAD_COMENSALES_REQUERIDO' },
			{ type: 'min', message: 'reservas.mensajes.CANTIDAD_COMENSALES_MAYOR' },
			{ type: 'max', message: 'reservas.mensajes.CANTIDAD_COMENSALES_MENOR' },
		]
	};

	ngOnInit() {
		let d = new Date();
		this.fechaValorMinimo = new Date(d.getTime() - (d.getTimezoneOffset() * 60000)).toISOString();
		this.fechaValorMaximo = new Date((d.getTime() - (d.getTimezoneOffset() * 60000)) + (1 * 365 * 24 * 60 * 60 * 1000)).toISOString();
		this.bd.obtenerTodosTiempoReal('reservas').onSnapshot(snaps => {
			this.listaReservas = snaps.docs.map(doc => {
				const x: any = doc.data() as any;
				return { ...x };
			});
		});
	}

	Ifecha($event) {
		let fecha = new Date($event.detail.value);
		this.fechaValorActual = fecha.toISOString();
		this.miFormulario.controls.fecha.setValue(fecha.getTime());
	}

	ITipo($event) {
		this.miFormulario.controls.tipoMesa.setValue($event.detail.value);
	}

	cargarReserva() {
		this.splash = true;
		let auxMesas: Array<any> = [];
		let fechaAntes: number = this.miFormulario.value.fecha - (40 * 60 * 1000);
		let fechaDespues: number = this.miFormulario.value.fecha + (40 * 60 * 1000);
		if (this.miFormulario.valid) {
			if (this.miFormulario.value.fecha > (Date.now() + (40 * 60 * 1000))) {
				if (this.listaReservas.length == 0) {
					this.bd.obtenerTodosPromise('mesas').then(snaps => {
						auxMesas = snaps.docs.map(x => {
							const y: any = x.data() as any; y['id'] = x.id; return { ...y };
						}).filter(x => x.comensales === this.miFormulario.value.comensales && x.tipo === this.miFormulario.value.tipoMesa);
						if (auxMesas.length > 0) {
							this.flagNumMesa = auxMesas[0].numero;
							return this.crearReserva(this.flagNumMesa, this.miFormulario.value.fecha);
						} else {
							this.complemetos.presentToastConMensajeYColor('reservas.mensajes.NO_ENCONTRO_MESA', 'danger');
						}
					}).then(ref => {
						this.fmc.enviarNotificacion('nuevaReserva', 'reservas.mensajes.RESERVA_PARA_CONFIRMAR', 'Grupo');
						this.complemetos.presentToastConMensajeYColor('reservas.mensajes.RESERVA_CARGADA', 'success')
					}).finally(() => this.splash = false);
				} else {
					if (this.listaReservas.findIndex(x => x.cliente === localStorage.getItem('uidUsuario') && (x.fecha >= fechaAntes && x.fecha <= fechaDespues)) === -1) {
						this.bd.obtenerTodosPromise('mesas').then(snaps => {
							auxMesas = snaps.docs.map(x => {
								const y: any = x.data() as any; y['id'] = x.id; return { ...y };
							}).filter(x => x.comensales === this.miFormulario.value.comensales && x.tipo === this.miFormulario.value.tipoMesa);
							if (auxMesas.length > 0) {
								auxMesas.forEach(x => {
									if (this.listaReservas.findIndex(y => y.mesa === x.numero && (x.fecha >= fechaAntes && x.fecha <= fechaDespues)) === -1) {
										this.flagNumMesa = x.numero;
									}
								});
								if (this.flagNumMesa !== null) {
									return this.crearReserva(this.flagNumMesa, this.miFormulario.value.fecha);
								} else {
									this.complemetos.presentToastConMensajeYColor('reservas.mensajes.MESAS_CUMPLEN_CON_REQUISITOS ', 'danger');
								}
							} else {
								this.complemetos.presentToastConMensajeYColor('reservas.mensajes.NO_ENCONTRO_MESA', 'danger');
							}
						}).then(ref => {
							this.fmc.enviarNotificacion('nuevaReserva', 'reservas.mensajes.RESERVA_PARA_CONFIRMAR', 'Grupo');
							this.complemetos.presentToastConMensajeYColor('reservas.mensajes.RESERVA_CARGADA', 'success')
						}).finally(() => this.splash = false);
					} else {
						this.splash = false;
						this.complemetos.presentToastConMensajeYColor('reservas.mensajes.YA_TIENES', 'danger');
					}
				}
			} else {
				this.splash = false;
				this.complemetos.presentToastConMensajeYColor('reservas.mensajes.FECHA_INVALIDA', 'danger');
			}
		}
	}

	crearReserva(mesa, fecha) {
		let reservaJson = {
			fecha: fecha,
			cliente: localStorage.getItem('uidUsuario'),
			mesa: mesa,
			estado: false,
		}
		console.log(reservaJson);
		return this.bd.crear('reservas', reservaJson);
	}

}
