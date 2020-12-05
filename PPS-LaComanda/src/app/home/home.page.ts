import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/servicios/auth.service';
import { DatabaseService } from 'src/app/servicios/database.service';
import { ComplementosService } from 'src/app/servicios/complementos.service';
import { FmcService } from 'src/app/servicios/fmc.service';
import { Subscription } from 'rxjs'

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
	public listaUsuarios = [];
	public listaEspera = [];
	public listaPedidos = [];
	public listaProductos = [];
	public listaConsultas = [];
	public listaReservas = [];
	public splash = false;
	public uidUsuario: string;
	public infoUsuario: any;
	public flagMenu: string = '';
	public flagFunc: string = '';
	public arraySubs = new Subscription();

	constructor(private router: Router, private bd: DatabaseService, public complemento: ComplementosService, private auth: AuthService, private fmc: FmcService) { }

	ngOnInit() {
		this.splash = true;
		this.listaUsuarios = [];
		this.listaEspera = [];
		this.listaPedidos = [];
		this.listaConsultas = [];
		this.listaReservas = [];
		this.uidUsuario = localStorage.getItem('uidUsuario');
		this.bd.obtenerPorId('usuarios', this.uidUsuario).onSnapshot(snap => {
			const user: any = snap.data() as any;
			user['id'] = snap.id;
			this.infoUsuario = user;
			this.fmc.usuario = this.infoUsuario;
			this.fmc.fechasubscripcion = Date.now();
			console.log(this.infoUsuario)
			switch (this.infoUsuario) {
				case "Dueño":
				case "Supervisor":
					this.arraySubs.add(this.bd.obtenerTodosTiempoReal('usuarios').onSnapshot(snap => {
						this.listaUsuarios = snap.docs.map(dato => {
							const x: any = dato.data() as any;
							x['id'] = dato.id;
							return { ...x };
						}).filter(x => x.estado === false);
					}));
					this.arraySubs.add(this.bd.obtenerTodosTiempoReal('reservas').onSnapshot(snap => {
						this.listaReservas = snap.docs.map(dato => {
							const x: any = dato.data() as any;
							x['id'] = dato.id;
							return { ...x };
						}).filter(x => x.estado === false);
					}));
					this.arraySubs.add(this.fmc.subscribirseNotificaciones('nuevoCliente'));
					this.arraySubs.add(this.fmc.subscribirseNotificaciones('nuevaReserva'));
					break;
				case "Mozo":
					this.arraySubs.add(this.bd.obtenerTodosTiempoReal('consultas').onSnapshot(datos => {
						this.listaConsultas = datos.docs.map(dato => {
							const x: any = dato.data() as any;
							x['id'] = dato.id;
							return { ...x };
						}).filter(x => x.estado === false);
					}));
					this.arraySubs.add(this.bd.obtenerTodosTiempoReal('pedidos').onSnapshot(datos => {
						this.listaPedidos = datos.docs.map(dato => {
							const x: any = dato.data() as any;
							x['id'] = dato.id;
							return { ...x };
						});
					}));
					this.arraySubs.add(this.fmc.subscribirseNotificaciones('nuevaConsulta'));
					this.arraySubs.add(this.fmc.subscribirseNotificaciones('pedido'));
					break;
				case "BarTender":
				case "Cocinero":
					this.arraySubs.add(this.bd.obtenerTodosTiempoReal('pedidos').onSnapshot(datos => {
						this.listaPedidos = datos.docs.map(dato => {
							const x: any = dato.data() as any;
							x['id'] = dato.id;
							return { ...x };
						}).filter(x => x.estado == "EnPreparacion")
					}));
					this.arraySubs.add(this.fmc.subscribirseNotificaciones('pedidoaPreparar'));
					break;
				case "Metre":
					this.arraySubs.add(this.bd.obtenerTodosTiempoReal('listaEspera').onSnapshot(datos => {
						this.listaEspera = datos.docs.map(dato => {
							const x: any = dato.data() as any;
							x['id'] = dato.id;
							return { ...x };
						});
					}));
					this.arraySubs.add(this.fmc.subscribirseNotificaciones('nuevoListaEspera'));
					break;
				case "Cliente":
				case "Anonimo":
					this.arraySubs.add(this.bd.obtenerTodosTiempoReal('consultas').onSnapshot(datos => {
						this.listaConsultas = datos.docs.map(dato => {
							const x: any = dato.data() as any;
							x['id'] = dato.id;
							return { ...x };
						});
					}));
					if (this.infoUsuario.estadoMesa !== false) {
						this.flagMenu = 'ClienteMesaAsignada';
					} else {
						this.flagMenu = null;
					}
					this.arraySubs.add(this.fmc.subscribirseNotificaciones('avisoReserva'));
					this.arraySubs.add(this.bd.obtenerTodosTiempoReal('reservas').onSnapshot(ref => {
						let aux: Array<any> = ref.docs.map(x => {
							const y: any = x.data() as any;
							y['id'] = x.id;
							return { ...y };
						}).filter(x => x.cliente === this.infoUsuario.id && x.estado === true && x.fecha <= (Date.now() + 24 * 60 * 60 * 1000));
						this.fmc.gestionReserva(aux[0]).subscribe(subs => {
							if (subs) {
								this.complemento.presentToastConMensajeYColor('Ya se ha confirmado su precencia para su reserva. puede proceder', 'primary');
							}
						})
					}));
					break;
			}
			setTimeout(() => {
				this.cargarProductos();
				this.splash = false;
				console.log('fin de init');
			}, 2000);
		});
	}

	ejecutarFunc(funcion: string) {
		if (funcion === 'cerrarSesion') {
			this.cerrarSesion();
		} else {
			this.flagFunc = funcion;
			setTimeout(() => {
				this.flagFunc = '';
			}, 1000);
		}
	}

	cargarProductos() {
		this.listaProductos = [];
		this.arraySubs.add(this.bd.obtenerTodos('productos').subscribe(datos => {
			this.listaProductos = datos.map(snap => {
				const x: any = snap.payload.doc.data() as any;
				x['id'] = snap.payload.doc.id;
				return { ...x };
			})
		}));
	}

	cerrarSesion() {
		this.auth.logout().then(() => {
			localStorage.removeItem('uidUsuario');
			localStorage.removeItem('tieneCorreo');
		}).then(() => {
			this.desubscribirse();
			this.complemento.playAudio('error');
			this.router.navigate(['/login']);
		});
	}

	desubscribirse() {
		this.arraySubs.unsubscribe();
	}
}
