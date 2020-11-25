import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from "@angular/router";
import { MenuController, LoadingController, AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { AngularFirestore } from "@angular/fire/firestore";
import { DatabaseService } from '../servicios/database.service';
import { AuthService } from '../servicios/auth.service';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { ComplementosService } from '../servicios/complementos.service';
import { flatten } from '@angular/compiler';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireStorage } from "@angular/fire/storage"
import firebase from 'firebase/app';


@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	splash = true;
	perfilUsuario: any;
	coleccionRef;
	tieneCorreo: string;
	nombreAnonimo = {
		nombre: '',
		foto: '',
		perfil: '',
	};
	listaUsuarios = [];
	listaEspera = [];
	listaPedidos = [];
	constructor(private router: Router,
		private qr: BarcodeScanner,
		private menu: MenuController,
		private firestore: AngularFirestore,
		private bd: DatabaseService,
		public complemento: ComplementosService,
		private camera: Camera,
		private auth: AuthService,
		private st: AngularFireStorage,
		public alertController: AlertController,
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar) {
	}
	usuarioMesa = {
		mesa: "",
		estadoMesa: "",
		nombreUsuario: "",
		perfilUsuario: "",
		consulta: "noRealizo",
		consultaMozo: "",
		consultaDescripcion: "",
	}
	anonimoNombre;
	anonimoFoto;
	usuarioAnonimo: any;
	correoCliente;
	infoUsuario: any;
	correoUsuario: string;
	informarEstadoMesa = {
		mesa: "",
		seAsignoMesa: "no",
	};
	mostrarProductos: boolean = false;
	listaProductos = [];
	listaPedidoCocinero = [];
	listaPedidoBartender = [];
	listaPedidosFinalizados = [];
	contadorMozoConsulta = 0;
	contadorMozoPedidoFinalizado = 0;
	contadorMozoPedidoPendiente = 0;
	contadorMozoCuentaPagada = 0;
	listaCuentasPagadas = [];
	contadorInterno;
	pathImagenesEncuesta = [];
	pathImagen = [];
	mostrarCuentaBoton = false;
	mostrarEncuestaBoton = false;
	mostrarCuentaDiv = false;
	mostrarEncuestaDiv = false;
	propina;
	jsonCuenta = {
		pedidos: [],
		propina: this.propina,
		precioTotal: 0
	}
	mensajeEscanearMesa = false;
	banderaQrMesa = false;
	deplegarConsultaMozo: boolean = false;
	consulta: string;
	banderaMostrarPedidos = false;
	banderaMostrarConsultas = false;
	mostrarPedidoFinalizado: boolean = false;
	banderaMostrarCuentasPagadas = false;
	gradoSatisfaccion;
	gradoSatisfaccionRes;
	jsonEncuesta = {
		preguntaUno: 0,
		preguntaDos: 0,
		fotos: [],
	}
	consultaMozo: string;
	mostrarBotonConsulta = false;
	mostrarConsultaRealizada = false;

	ngOnInit() {
		this.contadorInterno = -1;
		this.jsonEncuesta.fotos[0] = 'https://i.imgur.com/zH3i014.png';
		this.jsonEncuesta.fotos[1] = 'https://i.imgur.com/zH3i014.png';
		this.jsonEncuesta.fotos[2] = 'https://i.imgur.com/zH3i014.png';
		this.tieneCorreo = localStorage.getItem('tieneCorreo');
		this.listaUsuarios = [];
		this.listaEspera = [];
		this.listaPedidos = [];
		this.listaPedidosFinalizados = [];
		this.listaCuentasPagadas = [];
		this.listaPedidoBartender = [];
		this.listaPedidoCocinero = [];
		if (this.tieneCorreo == 'conCorreo') {
			this.correoUsuario = localStorage.getItem('correoUsuario');
			this.bd.obtenerUsuariosBD('usuarios', this.correoUsuario).toPromise().then(snap => {
				const user: any = snap.docs[0].data();
				this.perfilUsuario = user.perfil;
				this.infoUsuario = user;
				return user;
			}).then(user => {
				console.log(user)
				switch (user.perfil) {
					case "Dueño":
					case "Supervisor":
						this.bd.obtenerTodos('usuarios').subscribe(datos => {
							console.log(datos[0].payload.doc.data());
							datos.forEach((dato: any) => {
								let x: any = dato.payload.doc.data();
								if (x.estado == 'esperando') {
									this.listaUsuarios.push(x);
								}
							});
							console.log(this.listaUsuarios);
						});
						break;
					case "Mozo":
						this.bd.obtenerTodos('listaEspera').subscribe(datos => {

							datos.forEach((dato: any) => {
								let x: any = dato.payload.doc.data();
								if (x.consulta == 'realizoConsulta') {
									this.listaEspera.push(x);
								}
							});
							this.contadorMozoConsulta = this.listaEspera.length;
						})
						this.correoCliente = this.correoUsuario;
						this.bd.obtenerTodos('pedidos').subscribe(datos => {
							datos.forEach((dato: any) => {
								let x: any = dato.payload.doc.data();
								if (x.estadoPedido == 'enEspera') {
									this.listaPedidos.push(x);
								}
								else if (x.estadoBartender == 'finalizado' && x.estadoChef == 'finalizado' && x.estadoPedido == 'enPreparacion') {
									this.listaPedidosFinalizados.push(x);
								}
								else if (x.estadoPedido == 'pagado') {
									this.listaCuentasPagadas.push(x);
								}
							})
							this.contadorMozoPedidoPendiente = this.listaPedidos.length;
							this.contadorMozoPedidoFinalizado = this.listaPedidosFinalizados.length;
							this.contadorMozoCuentaPagada = this.listaCuentasPagadas.length;
						});
						break;
					case "Bartender":
						this.bd.obtenerTodos('pedidos').subscribe(datos => {
							datos.forEach((dato: any) => {
								let x: any = dato.payload.doc.data();
								if ((x.estadoBartender == 'enProceso' || x.estadoBartender == 'enPreparacion') && (x.estadoPedido == "pendiente" || x.estadoPedido == "enPreparacion")) {
									this.listaPedidoBartender.push(x);
								}
							});
						});
						break;
					case "Cocinero":
						this.bd.obtenerTodos('pedidos').subscribe(datos => {
							datos.forEach((dato: any) => {
								let x: any = dato.payload.doc.data();
								if ((x.estadoChef == 'enProceso' || x.estadoChef == 'enPreparacion') && (x.estadoPedido == "pendiente" || x.estadoPedido == "enPreparacion")) {
									this.listaPedidoCocinero.push(x);
								}
							});
						});
						break;
					case "Metre":
						this.bd.obtenerTodos('listaEspera').subscribe(datos => {
							datos.forEach((dato: any) => {
								let x: any = dato.payload.doc.data();
								if (x.estadoMesa == 'enEspera') {
									this.listaEspera.push(x);
								}
							});
						});
						break;
					case "Cliente":
						this.bd.obtenerTodos('listaEspera').subscribe(datos => {
							datos.forEach((datoCl: any) => {
								let x: any = datoCl.payload.doc.data();
								if (x.estadoMesa == 'mesaAsignada' && x.nombreUsuario == this.infoUsuario.nombre) {
									this.informarEstadoMesa.mesa = x.mesa;
									this.informarEstadoMesa.seAsignoMesa = "si";
									console.log(x.consultaMozo);
									if (x.consultaMozo != '') {
										console.log("estoy aca tambien");
										this.listaEspera.push(x);
									}
								}
							});
						});
						let fb2 = this.bd.obtenerTodos('pedidos').subscribe(datos => {
							datos.forEach((datoCl: any) => {
								let x: any = datoCl.payload.doc.data();
								if (x.estadoPedido == "finalizado" && x.mesa == this.informarEstadoMesa.mesa) {
									this.presentAlert();
								}
							});
						});
						break;
				}
			}).then(() => {
				this.cargarProductos();
				console.log('fin de splash');
				console.log('fin de init');
				this.splash = false;
			});
		}
		else {
			let variable = localStorage.getItem('nombreAnonimo');
			this.perfilUsuario = "Anonimo";
			this.bd.obtenerTodos('usuarios').toPromise().then(querySnapShot => {
				querySnapShot.forEach((doc) => {
					let x: any = doc.payload.doc.data();
					if (x.nombre == variable && x.perfil == this.perfilUsuario) {
						this.nombreAnonimo.nombre = x.nombre;
						this.nombreAnonimo.foto = x.foto;
						this.nombreAnonimo.perfil = x.perfil;
					}
				});
				return this.nombreAnonimo;
			}).then(nombreAnonimo => {
				let fb = this.bd.obtenerTodos('listaEspera').subscribe(datos => {
					this.listaEspera = [];
					datos.forEach((datoCl: any) => {
						let x: any = datoCl.payload.doc.data();
						if (x.estadoMesa == 'mesaAsignada' && x.nombreUsuario == this.nombreAnonimo.nombre) {
							this.informarEstadoMesa.mesa = x.mesa;
							this.informarEstadoMesa.seAsignoMesa = "si";
							if (x.consultaMozo != '') {
								this.listaEspera.push(x);
							}
						}
					});
				});
			}).then(() => {
				let fb2 = this.bd.obtenerTodos('pedidos').subscribe(datos => {
					datos.forEach((datoCl: any) => {
						let x: any = datoCl.payload.doc.data();
						if (x.estadoPedido == "finalizado" && x.mesa == this.informarEstadoMesa.mesa) {
							this.presentAlert();
						}
					});
				})
			}).then(() => {
				this.cargarProductos();
				console.log('fin de init');
				this.splash = false;
			});
		}
	}

	organizarUsuario(usuario, estado) {
		let indice = this.listaUsuarios.indexOf(usuario);
		let asuntoCorreo: string = 'Habilitacion de cuenta para la comanda'
		let mensajeCorreo: string = '';
		this.listaUsuarios.splice(indice, 1);
		this.bd.obtenerTodos('usuarios').subscribe((querySnapShot) => {
			querySnapShot.forEach((doc) => {
				let x: any = doc.payload.doc;
				if (x.data().correo == usuario.correo) {
					if (estado == "rechazado") {
						usuario.estado = estado;
						this.bd.actualizar('usuarios', usuario, x.id);
						this.listaUsuarios = [];
						mensajeCorreo = '<i>Tu registro ha sido rechazado. no podrias loguearte con esta cuenta</i>'
					}
					else {
						if (x.data().perfil == "Cliente") {
							usuario.estado = estado;
							this.bd.actualizar('usuarios', usuario, x.id);
							this.auth.registrarUsuario(usuario.correo, usuario.contrasenia);
							this.listaUsuarios = [];
						}
						else {
							usuario.estado = estado;
							this.bd.actualizar('usuarios', usuario, x.id);
							this.listaUsuarios = [];
						}
						mensajeCorreo = '<i>Tu registro ha sido aceptado. ya puedes loguearte con esta cuenta</i>'
					}
					this.listaUsuarios = [];
					//this.auth.mandarEmail(usuario.correo, asuntoCorreo, mensajeCorreo);
				}
			})
		})
	}

	listaEsperaQRCliente() {
		let auxiliar;
		this.qr.scan().then(data => {
			if (data.text === 'listaEspera') {
				this.bd.obtenerUsuariosBD('usuarios', this.correoCliente).toPromise().then(snap => {
					let x = snap.docs[0].data();
					if (x.estadoMesa === 'aceptado') {
						this.usuarioMesa.nombreUsuario = x.nombre;
						this.usuarioMesa.estadoMesa = "enEspera";
						this.usuarioMesa.perfilUsuario = x.perfil;
						return this.bd.crear('listaEspera', this.usuarioMesa);
					}
				}).then(data => {
					this.complemento.presentToastConMensajeYColor('Ya se encuentra en la lista de espera. por favor, solicite al metre para asignarle una mesa.', 'primary');
				});
			}
		});
	}

	listaEsperaQRAnonimo() {
		let auxiliar;
		this.qr.scan().then(data => {
			if (data.text === 'listaEspera') {
				this.bd.obtenerUsuariosBD('usuarios', this.correoCliente).toPromise().then(snap => {
					let x = snap.docs[0].data();
					if (x.estadoMesa === 'aceptado') {
						this.usuarioMesa.nombreUsuario = x.nombre;
						this.usuarioMesa.estadoMesa = "enEspera";
						this.usuarioMesa.perfilUsuario = x.perfil;
						return this.bd.crear('listaEspera', this.usuarioMesa);
					}
				}).then(data => {
					this.complemento.presentToastConMensajeYColor('Ya se encuentra en la lista de espera. por favor, solicite al metre para asignarle una mesa.', 'primary');
				});
			}
		});
	}

	cerrarSesion() {
		this.auth.logout().then(() => {
			this.correoUsuario = "";
			localStorage.removeItem('tieneCorreo');
			localStorage.removeItem('correoUsuario');
			this.router.navigate(['/login']);
		})
	}

	/*inicializarPushNotifications(uid) {
		this.fmc.getToken(uid);
		this.fmc.escucharNotificaciones().pipe(
			tap(msg => {
				this.complemento.presentToastConMensajeYColor(msg.body, 'primary');
				})
			);
	}*/

	comprobarMesas(mesa) {
		localStorage.setItem('usuarioSelMesa', JSON.stringify(mesa));
		this.router.navigate(['/listado-mesas']);
	}

	mostrarEncuestaLista() {
		this.mostrarCuentaDiv = false;
		this.mostrarEncuestaDiv = true;
		this.mostrarProductos = false;
		this.mostrarConsultaRealizada = false;
	}

	darPropina() {
		let auxiliar;
		this.qr.scan().then(barcodeData => {
			auxiliar = barcodeData.text;
			switch (auxiliar) {
				case "Excelente":
					this.propina = "Excelente -> 20%";
					this.jsonCuenta.precioTotal = this.jsonCuenta.precioTotal * 1.2;
					break;
				case "Muy bien":
					this.propina = "Muy bien -> 15%";
					this.jsonCuenta.precioTotal = this.jsonCuenta.precioTotal * 1.15;
					break;
				case "Bien":
					this.propina = "Bien -> 10%";
					this.jsonCuenta.precioTotal = this.jsonCuenta.precioTotal * 1.1;
					break;
				case "Regular":
					this.propina = "Regular -> 5%";
					this.jsonCuenta.precioTotal = this.jsonCuenta.precioTotal * 1.05;
					break;
				case "Malo":
					this.propina = "Malo -> 0%";
					break;
			}
		}).catch(err => {
			console.log('Error', err);
		});
	}

	mostrarCuentaLista() {
		this.mostrarCuentaDiv = true;
		this.mostrarEncuestaDiv = false;
		this.mostrarProductos = false;
		this.splash = true;
		setTimeout(() => {
			this.splash = false;
		}, 5000);

		this.bd.obtenerTodos('pedidos').subscribe((querySnapShot) => {
			querySnapShot.forEach((doc) => {
				let x: any = doc.payload.doc.data();
				if (x.mesa == this.informarEstadoMesa.mesa) {
					x.platosPlato.forEach(element => {
						this.firestore.collection('productos').get().subscribe((querySnapShot) => {
							querySnapShot.forEach((docP) => {
								if (element == docP.data().nombre) {
									let jsonPedido = {
										precioUnitario: 0,
										nombreProducto: ""
									}
									jsonPedido.precioUnitario = docP.data().precio;
									jsonPedido.nombreProducto = element;
									this.jsonCuenta.pedidos.push(jsonPedido);
								}
							})
						});
					});
					x.platosPostre.forEach(element => {
						this.firestore.collection('productos').get().subscribe((querySnapShot) => {
							querySnapShot.forEach((docP) => {
								if (element == docP.data().nombre) {
									let jsonPedido = {
										precioUnitario: 0,
										nombreProducto: ""
									}
									jsonPedido.precioUnitario = docP.data().precio;
									jsonPedido.nombreProducto = element;
									this.jsonCuenta.pedidos.push(jsonPedido);
								}
							})
						});
					});

					x.platosBebida.forEach(element => {
						this.firestore.collection('productos').get().subscribe((querySnapShot) => {
							querySnapShot.forEach((docP) => {
								if (element == docP.data().nombre) {
									let jsonPedido = {
										precioUnitario: 0,
										nombreProducto: ""
									}
									jsonPedido.precioUnitario = docP.data().precio;
									jsonPedido.nombreProducto = element;
									this.jsonCuenta.pedidos.push(jsonPedido);
								}
							})

						});
					});
					this.jsonCuenta.precioTotal = x.precioTotal;
				}
			})
		})
	}

	pagarCuenta() {
		let auxPedido;
		let auxLisEsp;
		this.bd.obtenerTodos('pedidos').subscribe((querySnapShot) => {
			querySnapShot.forEach((doc) => {
				let x: any = doc.payload.doc;
				if (x.data().mesa == this.informarEstadoMesa.mesa) {
					auxPedido = x.data();
					auxPedido.estadoPedido = "pagado"
					this.bd.actualizar("pedidos", auxPedido, x.id);
					this.bd.obtenerTodos('listaEspera').subscribe((querySnapShot) => {
						querySnapShot.forEach((docDos) => {
							let y: any = docDos.payload.doc;
							if (this.informarEstadoMesa.mesa == y.data().mesa) {
								this.informarEstadoMesa.mesa = "";
								this.informarEstadoMesa.seAsignoMesa = "no";
								this.firestore.collection('listaEspera').doc(y.id).delete();
								this.mostrarCuentaBoton = false;
								this.mostrarEncuestaBoton = false;
								this.complemento.presentToastConMensajeYColor("Su pago esta por ser confirmado, gracias por utilizarnos!", "success");
							}
						})
					});
				}
			})
		});
	}

	qrMesa() {
		localStorage.setItem("mesa", this.informarEstadoMesa.mesa);
		let auxMesa;
		this.qr.scan().then(data => {
			this.bd.obtenerPorId('listaMesas', data.text).toPromise().then(snap => {
				let x: any = snap.payload;
				if (x.id === data.text && (x.cliente === this.correoUsuario || x.cliente === this.nombreAnonimo)) {
					this.mostrarCuentaDiv = false;
					this.mostrarEncuestaDiv = false;
					this.mensajeEscanearMesa = true;
					this.mostrarConsultaRealizada = false;
					this.mostrarBotonConsulta = true;
					this.mostrarProductos = true;
					this.bd.obtenerTodos('pedidos').subscribe(datos => {
						datos.forEach((dato: any) => {
							let y: any = dato.payload.doc.data()
							if (this.informarEstadoMesa.mesa == y.mesa) {
								if (y.estadoPedido == 'finalizado') {
									this.complemento.presentToastConMensajeYColor("Su pedido se finalizo con exito", "success");
									if (this.banderaQrMesa == true) {
										this.complemento.presentToastConMensajeYColor("Podra acceder a la encuesta y a la cuenta", "success");
										this.mostrarCuentaBoton = true;
										this.mostrarEncuestaBoton = true;
									}
									else {
										this.banderaQrMesa = true;
									}
								}
								else if (y.estadoPedido == 'enProceso') {
									this.complemento.presentToastConMensajeYColor("Su pedido esta pendiente del mozo", "primary");
								}
								else if (y.estadoPedido == 'enPreparacion') {
									this.complemento.presentToastConMensajeYColor('Su pedido esta en preparacion, tiempo aprox ' + y.tiempoTotal + ' minutos', "primary");
								}
							}
						});
					})
				}
				else {
					this.complemento.presentToastConMensajeYColor('La mesa ' + x.data().numero + ' en estado ' + x.data().estado + ' no le corresponde, vuelva a escanear el qr ', "primary");
				}
			});
		});
	}

	cargarProductos() {
		let fb = this.bd.obtenerTodos('productos').subscribe(datos => {
			this.listaProductos = [];
			datos.forEach((dato: any) => {
				this.listaProductos.push(dato.payload.doc.data());
			});
		})
	}

	consultarMozo(numeroMesa) {
		let auxConsulta;
		this.bd.obtenerTodos('listaEspera').subscribe((querySnapShot) => {
			querySnapShot.forEach(dato => {
				let x: any = dato.payload.doc;
				if (x.data().mesa == numeroMesa) {
					auxConsulta = x.data();
					auxConsulta.consulta = "realizoConsulta";
					auxConsulta.consultaDescripcion = this.consulta;
					this.bd.actualizar('listaEspera', auxConsulta, x.id);
					this.cancelarConsulta();
					this.complemento.presentToastConMensajeYColor("Su consulta se realizo con exito,espere a que el mozo se acerce.", "success");
				}
			})
		});
	}

	desplegarConsulta() {
		this.deplegarConsultaMozo = true;
	}

	cancelarConsulta() {
		this.consulta = "";
		this.deplegarConsultaMozo = false;
	}

	mostrarPedidos() {
		this.banderaMostrarPedidos = true;
		this.banderaMostrarConsultas = false;
		this.mostrarPedidoFinalizado = false
		this.banderaMostrarCuentasPagadas = false;
	}

	mostrarConsultas() {
		this.banderaMostrarPedidos = false;
		this.banderaMostrarConsultas = true;
		this.mostrarPedidoFinalizado = false;
		this.banderaMostrarCuentasPagadas = false;
	}

	mostrarPedidosFinalizados() {
		this.banderaMostrarPedidos = false;
		this.banderaMostrarConsultas = false;
		this.mostrarPedidoFinalizado = true;
		this.banderaMostrarCuentasPagadas = false;
	}


	enviarPedidos(mesa) {
		let auxPedido;
		this.bd.obtenerTodos('pedidos').subscribe((querySnapShot) => {
			querySnapShot.forEach(dato => {
				let x: any = dato.payload.doc;
				if (x.data().mesa == mesa) {
					auxPedido = x.data();
					auxPedido.estadoChef = "enProceso";
					auxPedido.estadoBartender = "enProceso";
					auxPedido.estadoPedido = "pendiente";
					this.bd.actualizar('pedidos', auxPedido, x.id);
					this.cancelarConsulta();
				}
			})
		});
	}

	cancelarPedido(mesa) {
		let auxPedido;
		this.bd.obtenerTodos('pedidos').subscribe((querySnapShot) => {
			querySnapShot.forEach(dato => {
				let x: any = dato.payload.doc;
				if (x.data().mesa == mesa) {
					auxPedido = x.data();
					auxPedido.estadoPedido = "cancelado";
					this.bd.actualizar('pedidos', auxPedido, x.id);
					this.cancelarConsulta();
				}
			})
		});
	}

	enviarPedidoFinalizado(mesa) {
		let auxPedido;
		this.bd.obtenerTodos('pedidos').subscribe((querySnapShot) => {
			querySnapShot.forEach(dato => {
				let x: any = dato.payload.doc;
				if (x.data().mesa == mesa) {
					auxPedido = x.data();
					auxPedido.estadoPedido = "finalizado";
					this.bd.actualizar('pedidos', auxPedido, x.id);
				}
			})
		});
	}

	elaborarPedido(mesa, estadoPedido, perfil) {
		let auxPedido;
		this.bd.obtenerTodos('pedidos').subscribe((querySnapShot) => {
			querySnapShot.forEach(dato => {
				let x: any = dato.payload.doc;
				if (x.data().mesa == mesa) {
					if (perfil == "BarTender" && estadoPedido == "enPreparacion") {
						auxPedido = x.data();
						auxPedido.estadoBartender = estadoPedido;
						auxPedido.estadoPedido = estadoPedido;
						this.bd.actualizar('pedidos', auxPedido, x.id);
						this.cancelarConsulta();
					}
					else if (perfil == "BarTender" && estadoPedido == "finalizado") {
						auxPedido = x.data();
						auxPedido.estadoBartender = estadoPedido;
						this.bd.actualizar('pedidos', auxPedido, x.id);
						this.cancelarConsulta();
					}
					if (perfil == "Cocinero" && estadoPedido == "enPreparacion") {
						auxPedido = x.data();
						auxPedido.estadoChef = estadoPedido;
						auxPedido.estadoPedido = estadoPedido;
						this.bd.actualizar('pedidos', auxPedido, x.id);
						this.cancelarConsulta();
					}
					else if (perfil == "Cocinero" && estadoPedido == "finalizado") {
						auxPedido = x.data();
						auxPedido.estadoChef = estadoPedido;
						this.bd.actualizar('pedidos', auxPedido, x.id);
						this.cancelarConsulta();
					}
				}
			})
		});
	}

	cambioRango(event) {
		this.gradoSatisfaccion = event.detail.value;
	}
	cambioRangoRes(event) {
		console.log(event.detail.value);
		this.gradoSatisfaccionRes = event.detail.value;
	}

	async presentAlert() {
		const alert = await this.alertController.create({
			cssClass: 'success',
			header: 'Su pedido se a completado',
			buttons: [
				{
					text: 'Cancelar',
					role: 'cancel',
					cssClass: 'success',
					handler: (bla) => {
						console.log("confirm cancel:blah");
					}
				},
				{
					text: 'Okey',
					cssClass: 'success',
					handler: (ok) => {
						console.log("Confirmar");
					}
				}
			]
		});
		await alert.present();
	}

	tomarTresFotografias() {
		if (this.jsonEncuesta.fotos.length <= 3) {
			const options: CameraOptions = {
				quality: 100,
				targetHeight: 600,
				targetWidth: 600,
				destinationType: this.camera.DestinationType.DATA_URL,
				encodingType: this.camera.EncodingType.JPEG,
				mediaType: this.camera.MediaType.PICTURE,
			}
			this.camera.getPicture(options).then((imageData) => {
				var base64Str = 'data:image/jpeg;base64,' + imageData;
				var storageRef = firebase.storage().ref();
				let obtenerMili = new Date().getTime();
				var nombreFoto = "encuestas/" + obtenerMili + ".jpg";
				var childRef = storageRef.child(nombreFoto);
				this.pathImagen.push(nombreFoto);
				childRef.putString(base64Str, 'data_url').then(function(snapshot) {
					this.pathImagen.array.forEach(element => {
						this.st.storage.ref(element).getDownloadURL().then((link) => {
							this.this.jsonEncuesta.fotos.push(link);
						});
					});
				})
			}, (Err) => {
				alert(JSON.stringify(Err));
			})
		}
	}

	verEncuestas() {
		this.router.navigate(['encuestas']);
	}

	enviarEncuesta() {
		this.jsonEncuesta.preguntaUno = this.gradoSatisfaccion;
		this.jsonEncuesta.preguntaDos = this.gradoSatisfaccionRes;
		this.bd.crear('encuestas', this.jsonEncuesta);
		this.complemento.presentToastConMensajeYColor('¡Su encuesta se finalizo con exito!', 'success');
		this.mostrarEncuestaDiv = false;
		this.contadorInterno = -1;
		this.jsonEncuesta.fotos[0] = 'https://i.imgur.com/zH3i014.png';
		this.jsonEncuesta.fotos[1] = 'https://i.imgur.com/zH3i014.png';
		this.jsonEncuesta.fotos[2] = 'https://i.imgur.com/zH3i014.png';
	}

	mostrarCuentasPagadas() {
		this.banderaMostrarPedidos = false;
		this.banderaMostrarConsultas = false;
		this.mostrarPedidoFinalizado = false;
		this.banderaMostrarCuentasPagadas = true;
	}

	liberarMesa(mesa) {
		let auxMesa;
		this.bd.obtenerTodos('pedidos').subscribe((querySnapShot) => {
			querySnapShot.forEach(dato => {
				let x: any = dato.payload.doc;
				if (mesa == x.data().mesa) {
					this.bd.obtenerTodos('listaMesas').subscribe((querySnapShot) => {
						querySnapShot.forEach(datoMesa => {
							let y: any = datoMesa.payload.doc;
							if (mesa == y.data().numero) {
								auxMesa = y.data();
								auxMesa.estado = "desocupada";
								this.bd.actualizar("listaMesas", auxMesa, y.id);
								this.firestore.collection('pedidos').doc(x.id).delete();
								this.complemento.presentToastConMensajeYColor("La mesa a sido liberada", "success");
							}
						})
					});
				}
			})
		});
	}

	consultaConExito(espera, consultaMozo) {
		let auxListaEspera;
		this.bd.obtenerTodos('listaEspera').subscribe((querySnapShot) => {
			querySnapShot.forEach(dato => {
				let x: any = dato.payload.doc;
				if (x.data().mesa == espera.mesa) {
					auxListaEspera = x.data();
					auxListaEspera.consulta = 'noRealizo';
					auxListaEspera.consultaMozo = consultaMozo;
					this.bd.actualizar('listaEspera', auxListaEspera, x.id);
					this.complemento.presentToastConMensajeYColor('La consulta fue completada con exito!', 'success');
				}
			})
		})
	}
	botonMostrarConsulta(numeroMesa) {
		this.mostrarCuentaDiv = false;
		this.mostrarEncuestaDiv = false;
		this.mostrarProductos = false;
		this.mostrarConsultaRealizada = true;
	}
	tomarFotosEncuesta() {
		const options: CameraOptions = {
			quality: 100,
			targetHeight: 600,
			targetWidth: 600,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE,
		}
		this.camera.getPicture(options).then((imageData) => {
			var base64Str = 'data:image/jpeg;base64,' + imageData;
			this.jsonEncuesta.fotos[this.contadorInterno] = base64Str;
			var storageRef = firebase.storage().ref();
			let obtenerMili = new Date().getTime();
			var nombreFoto = "fotosEncuesta/" + obtenerMili + "." + ".jpg";
			var childRef = storageRef.child(nombreFoto);
			this.pathImagenesEncuesta[this.contadorInterno] = nombreFoto;
			childRef.putString(base64Str, 'data_url').then(function(snapshot) { })
		}, (Err) => {
			alert(JSON.stringify(Err));
		})
	}

	manejadorEncuesta() {
		this.tomarFotosEncuesta();
		this.contadorInterno += 1;
	}
}
