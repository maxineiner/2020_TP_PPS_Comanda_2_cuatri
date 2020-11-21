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
		setTimeout(() => {
			this.splash = false;
		}, 4000);
		this.contadorInterno = -1;
		this.jsonEncuesta.fotos[0] = 'https://i.imgur.com/zH3i014.png';
		this.jsonEncuesta.fotos[1] = 'https://i.imgur.com/zH3i014.png';
		this.jsonEncuesta.fotos[2] = 'https://i.imgur.com/zH3i014.png';
		this.tieneCorreo = localStorage.getItem('tieneCorreo');
		if (this.tieneCorreo == 'conCorreo') {
			this.correoUsuario = localStorage.getItem('correoUsuario');
			this.firestore.collection('usuarios').get().subscribe((querySnapShot) => {
				querySnapShot.forEach(datos => {
					if (datos.data().correo == this.correoUsuario) {
						this.perfilUsuario = datos.data().perfil;
						this.infoUsuario = datos.data();
						if (this.perfilUsuario == 'Dueño' || this.perfilUsuario == 'Supervisor') {
							let fb = this.firestore.collection('usuarios');
							fb.valueChanges().subscribe(datos => {
								this.listaUsuarios = [];
								datos.forEach((dato: any) => {
									if (dato.estado == 'esperando') {
										this.listaUsuarios.push(dato);
									}
								});
							})
						}
						else if (this.perfilUsuario == 'Mozo') {
							let fb = this.firestore.collection('listaEspera');
							fb.valueChanges().subscribe(datos => {
								this.listaEspera = [];
								datos.forEach((dato: any) => {
									if (dato.consulta == 'realizoConsulta') {
										this.listaEspera.push(dato);
									}
								});
								this.contadorMozoConsulta = this.listaEspera.length;
							})
							this.correoCliente = this.correoUsuario;
							let fb2 = this.firestore.collection('pedidos');
							fb2.valueChanges().subscribe(datos => {
								this.listaPedidos = [];
								this.listaPedidosFinalizados = [];
								this.listaCuentasPagadas = [];
								datos.forEach((dato: any) => {
									if (dato.estadoPedido == 'enEspera') {
										this.listaPedidos.push(dato);
									}
									else if (dato.estadoBartender == 'finalizado' && dato.estadoChef == 'finalizado' && dato.estadoPedido == 'enPreparacion')
									{
										this.listaPedidosFinalizados.push(dato);
									}
									else if (dato.estadoPedido == 'pagado') {
										this.listaCuentasPagadas.push(dato);
									}
								})
								this.contadorMozoPedidoPendiente = this.listaPedidos.length;
								this.contadorMozoPedidoFinalizado = this.listaPedidosFinalizados.length;
								this.contadorMozoCuentaPagada = this.listaCuentasPagadas.length;
							})
						}
						else if (this.perfilUsuario == 'Cocinero') {
							this.infoUsuario = datos.data();
							let fb = this.firestore.collection('pedidos');
							fb.valueChanges().subscribe(datos => {
								this.listaPedidoCocinero = [];
								datos.forEach((dato: any) => {
									if ((dato.estadoChef == 'enProceso' || dato.estadoChef == 'enPreparacion') && (dato.estadoPedido == "pendiente" || dato.estadoPedido == "enPreparacion"))
									{
										this.listaPedidoCocinero.push(dato);
									}
								});
							})
						}
						else if (this.perfilUsuario == 'BarTender') {
							this.infoUsuario = datos.data();
							let fb = this.firestore.collection('pedidos');
							fb.valueChanges().subscribe(datos => {
								this.listaPedidoBartender = [];
								datos.forEach((dato: any) => {
									if ((dato.estadoBartender == 'enProceso' || dato.estadoBartender == 'enPreparacion') && (dato.estadoPedido == "pendiente" || dato.estadoPedido == "enPreparacion"))
									{
										this.listaPedidoBartender.push(dato);
									}
								});
							})
						}
						else if (this.perfilUsuario == 'Metre') {
							this.infoUsuario = datos.data();
							let fb = this.firestore.collection('listaEspera');
							fb.valueChanges().subscribe(datos => {
								this.listaEspera = [];
								datos.forEach((dato: any) => {
									if (dato.estadoMesa == 'enEspera') {
										this.listaEspera.push(dato);
									}
								});
							})
						}
						else if (this.perfilUsuario == 'Cliente') {
							this.correoCliente = this.correoUsuario;
							let fb = this.firestore.collection('listaEspera');
							fb.valueChanges().subscribe(datos => {
								this.listaEspera = [];
								datos.forEach((datoCl: any) => {
									if (datoCl.estadoMesa == 'mesaAsignada' && datoCl.nombreUsuario == this.infoUsuario.nombre) {
										this.informarEstadoMesa.mesa = datoCl.mesa;
										this.informarEstadoMesa.seAsignoMesa = "si";
										console.log(datoCl.consultaMozo);
										if (datoCl.consultaMozo != '') {
											console.log("estoy aca tambien");
											this.listaEspera.push(datoCl);
										}
									}
								});
							})
							let fb2 = this.firestore.collection('pedidos');
							fb2.valueChanges().subscribe(datos => {
								datos.forEach((datoCl: any) => {
									if (datoCl.estadoPedido == "finalizado" && datoCl.mesa == this.informarEstadoMesa.mesa) {
										this.presentAlert();
									}
								});
							})
						}
					}
				})
			})
		}
		else {
			let variable = localStorage.getItem('nombreAnonimo');
			this.perfilUsuario = "Anonimo";
			this.firestore.collection('usuarios').get().subscribe((querySnapShot) => {
				querySnapShot.forEach((doc) => {
					if (doc.data().nombre == variable && doc.data().perfil == this.perfilUsuario) {
						this.nombreAnonimo.nombre = doc.data().nombre;
						this.nombreAnonimo.foto = doc.data().foto;
						this.nombreAnonimo.perfil = doc.data().perfil;
					}
				})
			})
			let fb = this.firestore.collection('listaEspera');
			fb.valueChanges().subscribe(datos => {
				this.listaEspera = [];
				datos.forEach((datoCl: any) => {
					if (datoCl.estadoMesa == 'mesaAsignada' && datoCl.nombreUsuario == this.nombreAnonimo.nombre) {
						this.informarEstadoMesa.mesa = datoCl.mesa;
						this.informarEstadoMesa.seAsignoMesa = "si";
						if (datoCl.consultaMozo != '') {
							this.listaEspera.push(datoCl);
						}
					}
				});
			})
			let fb2 = this.firestore.collection('pedidos');
			fb2.valueChanges().subscribe(datos => {
				datos.forEach((datoCl: any) => {
					if (datoCl.estadoPedido == "finalizado" && datoCl.mesa == this.informarEstadoMesa.mesa) {
						this.presentAlert();
					}
				});
			})
		}
		this.cargarProductos();
	}

	organizarUsuario(usuario, estado) {
		let indice = this.listaUsuarios.indexOf(usuario);
		this.listaUsuarios.splice(indice, 1);
		this.firestore.collection('usuarios').get().subscribe((querySnapShot) => {
			querySnapShot.forEach((doc) => {
				if (doc.data().correo == usuario.correo) {
					if (estado == "rechazado") {
						usuario.estado = estado;
						this.bd.actualizar('usuarios', usuario, doc.id);
						this.listaUsuarios = [];
					}
					else {
						if (doc.data().perfil == "Cliente") {
							usuario.estado = estado;
							this.bd.actualizar('usuarios', usuario, doc.id);
							this.auth.registrarUsuario(usuario.correo, usuario.contrasenia);
							this.listaUsuarios = [];
						}
						else {
							usuario.estado = estado;
							this.bd.actualizar('usuarios', usuario, doc.id);
							this.listaUsuarios = [];
						}
					}
					this.listaUsuarios = [];
				}
			})
		})
	}

	listaEsperaQRCliente() {
		let auxiliar;
		/*this.barcodeScanner.scan().then(barcodeData => {
			auxiliar = barcodeData.text;
			this.firestore.collection('usuarios').get().subscribe((querySnapShot) => {
				querySnapShot.forEach((doc) => {
					if (doc.data().correo == this.correoCliente) {
						switch (auxiliar) {
							case "enEspera":
								this.usuarioMesa.nombreUsuario = doc.data().nombre;
								this.usuarioMesa.estadoMesa = "enEspera";
								this.usuarioMesa.perfilUsuario = doc.data().perfil;
								this.bd.crear('listaEspera', this.usuarioMesa);
								break;
							default:
								this.firestore.collection('listaMesas').get().subscribe((qSnapSh => {
									qSnapSh.forEach((mesa) => {
										if (mesa.data().numero == auxiliar) {
											this.complemento.presentToastConMensajeYColor(`La mesa se encuentra ${mesa.data().estado} por favor, solicite al metre para asignarle una mesa.`, 'danger');
										}
									})
								}))
								break;
						}
					}
					this.listaEspera = [];
				})
			})
		}).catch(err => {
			console.log('Error', err);
		});*/
	}

	listaEsperaQRAnonimo() {
		let auxiliar;
		/*this.barcodeScanner.scan().then(barcodeData => {
			auxiliar = barcodeData.text;
			this.firestore.collection('usuarios').get().subscribe((querySnapShot) => {
				querySnapShot.forEach((doc) => {
					if (doc.data().nombre == this.nombreAnonimo.nombre) {
						switch (auxiliar) {
							case "enEspera":
								this.usuarioMesa.nombreUsuario = doc.data().nombre;
								this.usuarioMesa.estadoMesa = "enEspera";
								this.usuarioMesa.perfilUsuario = doc.data().perfil;
								this.bd.crear('listaEspera', this.usuarioMesa);
								break;
							default:
								this.firestore.collection('listaMesas').get().subscribe((qSnapSh => {
									qSnapSh.forEach((mesa) => {
										if (mesa.data().numero == auxiliar) {
											this.complemento.presentToastConMensajeYColor(`La mesa se encuentra ${mesa.data().estado} por favor, solicite al metre para asignarle una mesa.`, 'danger');
										}
									})
								}))
								break;
						}
					}
					this.listaEspera = [];
				})
			})
		}).catch(err => {
			console.log('Error', err);
		});*/
	}

	cerrarSesion() {
		this.auth.logout().then(() => {
			this.correoUsuario = "";
			localStorage.removeItem('tieneCorreo');
			localStorage.removeItem('correoUsuario');
			this.router.navigate(['/login']);
		})
	}

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
		/*this.barcodeScanner.scan().then(barcodeData => {
			auxiliar = barcodeData.text;
			switch (auxiliar) {
				case "Excelente":
					this.propina = "Excelente -> 20%";
					this.jsonCuenta.precioTotal = this.jsonCuenta.precioTotal * 0.2 + this.jsonCuenta.precioTotal;
					break;
				case "Muy bien":
					this.propina = "Muy bien -> 15%";
					this.jsonCuenta.precioTotal = this.jsonCuenta.precioTotal * 0.15 + this.jsonCuenta.precioTotal;
					break;
				case "Bien":
					this.propina = "Bien -> 10%";
					this.jsonCuenta.precioTotal = this.jsonCuenta.precioTotal * 0.1 + this.jsonCuenta.precioTotal;
					break;
				case "Regular":
					this.propina = "Regular -> 5%";
					this.jsonCuenta.precioTotal = this.jsonCuenta.precioTotal * 0.05 + this.jsonCuenta.precioTotal;
					break;
				case "Malo":
					this.propina = "Malo -> 0%";
					break;
			}
		}).catch(err => {
			console.log('Error', err);
		})*/
	}
	
	mostrarCuentaLista() {
		this.mostrarCuentaDiv = true;
		this.mostrarEncuestaDiv = false;
		this.mostrarProductos = false;
		this.splash = true;
		setTimeout(() => {
			this.splash = false;
		}, 5000);

		this.firestore.collection('pedidos').get().subscribe((querySnapShot) => {
			querySnapShot.forEach((doc) => {
				if (doc.data().mesa == this.informarEstadoMesa.mesa)
				{
					doc.data().platosPlato.forEach(element => {
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
					doc.data().platosPostre.forEach(element => {
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

					doc.data().platosBebida.forEach(element => {
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
					this.jsonCuenta.precioTotal = doc.data().precioTotal;
				}
			})
		})
	}

	pagarCuenta() {
		let auxPedido;
		let auxLisEsp;
		this.firestore.collection('pedidos').get().subscribe((querySnapShot) => {
			querySnapShot.forEach((doc) => {
				if (doc.data().mesa == this.informarEstadoMesa.mesa) {
					auxPedido = doc.data();
					auxPedido.estadoPedido = "pagado"
					this.bd.actualizar("pedidos", auxPedido, doc.id);
					this.firestore.collection('listaEspera').get().subscribe((querySnapShot) => {
						querySnapShot.forEach((docDos) => {
							if (this.informarEstadoMesa.mesa == docDos.data().mesa) {
								this.informarEstadoMesa.mesa = "";
								this.informarEstadoMesa.seAsignoMesa = "no";
								this.firestore.collection('listaEspera').doc(docDos.id).delete();
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
		/*this.barcodeScanner.scan().then(barcodeData => {
			auxMesa = JSON.parse(barcodeData.text);
			let auxMesaString = auxMesa.toString();
			this.firestore.collection('listaMesas').get().subscribe((querySnapShot) => {
				querySnapShot.forEach((doc) => {
					if (doc.data().numero == auxMesaString)
					{
						if (this.informarEstadoMesa.mesa == auxMesaString) {
							this.mostrarCuentaDiv = false;
							this.mostrarEncuestaDiv = false;
							this.mensajeEscanearMesa = true;
							this.mostrarConsultaRealizada = false;
							this.mostrarBotonConsulta = true;
							this.mostrarProductos = true;
							let fb = this.firestore.collection('pedidos');
							fb.valueChanges().subscribe(datos => {
								datos.forEach((dato: any) => {
									if (this.informarEstadoMesa.mesa == dato.mesa)
									{
										if (dato.estadoPedido == 'finalizado') {
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
										else if (dato.estadoPedido == 'enProceso') {
											this.complemento.presentToastConMensajeYColor("Su pedido esta pendiente del mozo", "primary");
										}
										else if (dato.estadoPedido == 'enPreparacion') {
											this.complemento.presentToastConMensajeYColor(`Su pedido esta en preparacion, tiempo aprox ${dato.tiempoTotal}minutos`, "primary");
										}
									}
								});
							})
						}
						else {
							this.complemento.presentToastConMensajeYColor(`La mesa ${auxMesaString} en estado ${doc.data().estado} no le corresponde, vuelva a escanear el qr `, "primary");
						}
					}
				})
			})
		}).catch(err => {
			console.log('Error', err);
		});*/
	}

	cargarProductos() {
		let fb = this.firestore.collection('productos');
		fb.valueChanges().subscribe(datos => {
			this.listaProductos = [];
			datos.forEach((dato: any) => {
				this.listaProductos.push(dato);
			});
		})
	}

	consultarMozo(numeroMesa) {
		let auxConsulta;
		this.firestore.collection('listaEspera').get().subscribe((querySnapShot) => {
			querySnapShot.forEach(dato => {
				if (dato.data().mesa == numeroMesa) {
					auxConsulta = dato.data();
					auxConsulta.consulta = "realizoConsulta";
					auxConsulta.consultaDescripcion = this.consulta;
					this.bd.actualizar('listaEspera', auxConsulta, dato.id);
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
		this.firestore.collection('pedidos').get().subscribe((querySnapShot) => {
			querySnapShot.forEach(dato => {
				if (dato.data().mesa == mesa) {
					auxPedido = dato.data();
					auxPedido.estadoChef = "enProceso";
					auxPedido.estadoBartender = "enProceso";
					auxPedido.estadoPedido = "pendiente";
					this.bd.actualizar('pedidos', auxPedido, dato.id);
					this.cancelarConsulta();
				}
			})
		});
	}

	cancelarPedido(mesa) {
		let auxPedido;
		this.firestore.collection('pedidos').get().subscribe((querySnapShot) => {
			querySnapShot.forEach(dato => {
				if (dato.data().mesa == mesa) {
					auxPedido = dato.data();
					auxPedido.estadoPedido = "cancelado";
					this.bd.actualizar('pedidos', auxPedido, dato.id);
					this.cancelarConsulta();
				}
			})
		});
	}

	enviarPedidoFinalizado(mesa) {
		let auxPedido;
		this.firestore.collection('pedidos').get().subscribe((querySnapShot) => {
			querySnapShot.forEach(dato => {
				if (dato.data().mesa == mesa) {
					auxPedido = dato.data();
					auxPedido.estadoPedido = "finalizado";
					this.bd.actualizar('pedidos', auxPedido, dato.id);
				}
			})
		});
	}

	elaborarPedido(mesa, estadoPedido, perfil) {
		let auxPedido;
		this.firestore.collection('pedidos').get().subscribe((querySnapShot) => {
			querySnapShot.forEach(dato => {
				if (dato.data().mesa == mesa) {
					if (perfil == "BarTender" && estadoPedido == "enPreparacion") {
						auxPedido = dato.data();
						auxPedido.estadoBartender = estadoPedido;
						auxPedido.estadoPedido = estadoPedido;
						this.bd.actualizar('pedidos', auxPedido, dato.id);
						this.cancelarConsulta();
					}
					else if (perfil == "BarTender" && estadoPedido == "finalizado") {
						auxPedido = dato.data();
						auxPedido.estadoBartender = estadoPedido;
						this.bd.actualizar('pedidos', auxPedido, dato.id);
						this.cancelarConsulta();
					}
					if (perfil == "Cocinero" && estadoPedido == "enPreparacion") {
						auxPedido = dato.data();
						auxPedido.estadoChef = estadoPedido;
						auxPedido.estadoPedido = estadoPedido;
						this.bd.actualizar('pedidos', auxPedido, dato.id);
						this.cancelarConsulta();
					}
					else if (perfil == "Cocinero" && estadoPedido == "finalizado") {
						auxPedido = dato.data();
						auxPedido.estadoChef = estadoPedido;
						this.bd.actualizar('pedidos', auxPedido, dato.id);
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
		this.firestore.collection('pedidos').get().subscribe((querySnapShot) => {
			querySnapShot.forEach(dato => {
				if (mesa == dato.data().mesa) {
					this.firestore.collection('listaMesas').get().subscribe((querySnapShot) => {
						querySnapShot.forEach(datoMesa => {
							if (mesa == datoMesa.data().numero) {
								auxMesa = datoMesa.data();
								auxMesa.estado = "desocupada";
								this.bd.actualizar("listaMesas", auxMesa, datoMesa.id);
								this.firestore.collection('pedidos').doc(dato.id).delete();
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
		this.firestore.collection('listaEspera').get().subscribe((querySnapShot) => {
			querySnapShot.forEach(dato => {
				if (dato.data().mesa == espera.mesa) {
					auxListaEspera = dato.data();
					auxListaEspera.consulta = 'noRealizo';
					auxListaEspera.consultaMozo = consultaMozo;
					this.bd.actualizar('listaEspera', auxListaEspera, dato.id);
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
