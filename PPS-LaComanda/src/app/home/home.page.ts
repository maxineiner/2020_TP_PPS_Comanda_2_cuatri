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
import { firebaseErrors } from '../../assets/scripts/errores';


@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	listaUsuarios = [];
	listaEspera = [];
	listaPedidos = [];
	listaProductos = [];
	listaConsultas = [];
	pathImagenesEncuesta = ['A', 'B', 'C'];
	pathImagen = [];
	uidUsuario: string;
	infoUsuario: any;
	contadorMozoConsulta = 0;
	contadorMozoPedidoPagado = 0;
	contadorMozoPedidoPendiente = 0;
	contadorMozoCuentaPagada = 0;
	respuestaConsulta: string;
	consulta: string;
	contadorInterno;
	propina;
	gradoSatisfaccion;
	gradoSatisfaccionRes;
	lEsperaCantidad: string = null;
	lEsperaTipo: string = null;
	mostrarProductos: boolean = false;
	mostrarCuentaBoton = false;
	mostrarEncuestaBoton = false;
	mostrarCuentaDiv = false;
	mostrarEncuestaDiv = false;
	mensajeEscanearMesa = false;
	banderaQrMesa = false;
	deplegarConsultaMozo: boolean = false;
	banderaMostrarPedidos = false;
	banderaMostrarConsultas = false;
	mostrarPedidoPagado: boolean = false;
	mostrarPedidoPreparado: boolean = false;
	banderaMostrarCuentasPagadas = false;
	mostrarBotonConsulta = false;
	mostrarConsultaRealizada = false;
	mostrarBotonServido: boolean = false;
	splash = false;
	jsonCuenta = {
		id: null,
		pedidos: [],
		propina: this.propina,
		precioTotal: 0
	}
	jsonEncuesta = {
		preguntaUno: 0,
		preguntaDos: 0,
		fotos: [],
	}
	informarEstadoMesa = {
		mesa: "",
		seAsignoMesa: "no",
	};

	constructor(private router: Router, private qr: BarcodeScanner, private camera: Camera, private menu: MenuController,
		public alertController: AlertController, private bd: DatabaseService, public complemento: ComplementosService,
		private auth: AuthService, private st: AngularFireStorage) { }

	ngOnInit() {
		this.splash = true;
		this.contadorInterno = -1;
		this.jsonEncuesta.fotos[0] = 'https://i.imgur.com/zH3i014.png';
		this.jsonEncuesta.fotos[1] = 'https://i.imgur.com/zH3i014.png';
		this.jsonEncuesta.fotos[2] = 'https://i.imgur.com/zH3i014.png';
		this.listaUsuarios = [];
		this.listaEspera = [];
		this.listaPedidos = [];
		this.listaConsultas = [];
		this.uidUsuario = localStorage.getItem('uidUsuario');
		this.bd.obtenerPorIdPromise('usuarios', this.uidUsuario).then(snap => {
			const user: any = snap.data() as any;
			this.infoUsuario = user;
			return this.infoUsuario;
		}).then(user => {
			console.log(user)
			switch (user.perfil) {
				case "Dueño":
				case "Supervisor":
					this.bd.obtenerTodosTiempoReal('usuarios').onSnapshot(snap => {
						this.listaUsuarios = snap.docs.map(dato => {
							const x: any = dato.data() as any;
							x['id'] = dato.id;
							return { ...x };
						}).filter(x => x.estado === false);
					});
					break;
				case "Mozo":
					this.bd.obtenerTodosTiempoReal('consultas').onSnapshot(datos => {
						this.listaConsultas = datos.docs.map(dato => {
							const x: any = dato.data() as any;
							x['id'] = dato.id;
							return { ...x };
						});
					});
					this.bd.obtenerTodosTiempoReal('pedidos').onSnapshot(datos => {
						this.listaPedidos = datos.docs.map(dato => {
							const x: any = dato.data() as any;
							x['id'] = dato.id;
							return { ...x };
						});
						console.log(this.listaPedidos);
					});
					break;
				case "BarTender":
					this.bd.obtenerTodosTiempoReal('pedidos').onSnapshot(datos => {
						this.listaPedidos = datos.docs.map(dato => {
							const x: any = dato.data() as any;
							x['id'] = dato.id;
							return { ...x };
						}).filter(x => x.estado == "Pendiente" || x.estado == "EnPreparacion")
					});
					break;
				case "Cocinero":
					this.bd.obtenerTodosTiempoReal('pedidos').onSnapshot(datos => {
						this.listaPedidos = datos.docs.map(dato => {
							const x: any = dato.data() as any;
							x['id'] = dato.id;
							return { ...x };
						}).filter(x => x.estado == "Pendiente" || x.estado == "EnPreparacion")
					});
					break;
				case "Metre":
					this.bd.obtenerTodosTiempoReal('listaEspera').onSnapshot(datos => {
						this.listaEspera = datos.docs.map(dato => {
							const x: any = dato.data() as any;
							x['id'] = dato.id;
							return { ...x };
						});
					});
					break;
				case "Cliente":
				case "Anonimo":
					if (this.infoUsuario.estadoMesa === false) {
						this.bd.obtenerPorId('listaEspera', this.uidUsuario).subscribe(snap => {
							const x: any = snap.payload.data() as any;
							this.listaEspera.push({ ...x });
						});
					} else {
						let fb2 = this.bd.obtenerTodosTiempoReal('consultas').onSnapshot(datos => {
							this.listaConsultas = datos.docs.map(dato => {
								const x: any = dato.data() as any;
								x['id'] = dato.id;
								return { ...x };
							}).filter(x => x.mesa === this.infoUsuario.estadoMesa);
						});
						this.informarEstadoMesa.mesa = this.infoUsuario.estadoMesa;
						this.informarEstadoMesa.seAsignoMesa = 'si';
					}
					break;
			}
		}).then(() => {
			this.cargarProductos();
			this.splash = false;
			console.log('fin de init');
		});
	}

	cargarProductos() {
		this.listaProductos = [];
		let fb = this.bd.obtenerTodos('productos').subscribe(datos => {
			this.listaProductos = datos.map(snap => {
				const x: any = snap.payload.doc.data() as any;
				x['id'] = snap.payload.doc.id;
				return { ...x };
			})
		})
	}

	cerrarSesion() {
		this.auth.logout().then(() => {
			this.uidUsuario = "";
			this.infoUsuario = null;
			localStorage.removeItem('uidUsuario');
			localStorage.removeItem('tieneCorreo');
		}).then(() => {
			this.complemento.playAudio('error');
			this.router.navigate(['/login']);
		})
	}

	//EXCLUSIVO DE DUEÑO / SUPERVISOR 
	organizarUsuario(usuario, estado) {
		let asuntoCorreo: string = 'Habilitacion de cuenta para la comanda'
		let mensajeCorreo: string = '';
		this.bd.obtenerPorIdPromise('usuarios', usuario.id).then(user => {
			const x: any = user.data() as any;
			if (estado == null) {
				x.estado = estado;
				this.bd.actualizar('usuarios', x, usuario.id);
				mensajeCorreo = '<i>Tu registro ha sido rechazado. no podrias loguearte con esta cuenta</i>'
			} else {
				x.estado = estado;
				this.bd.actualizar('usuarios', x, usuario.id);
				mensajeCorreo = '<i>Tu registro ha sido aceptado. ya puedes loguearte con esta cuenta</i>'
			}
			this.auth.mandarEmail(usuario.correo, asuntoCorreo, mensajeCorreo);
		});
	}

	//EXCLUSIVO CLIENTES REG / ANON
	listaEsperaQRCliente(cantidad, tipo) {
		this.qr.scan().then(data => {
			this.splash = true;
			if (data.text === 'listaEspera') {
				this.bd.obtenerPorIdPromise('usuarios', this.uidUsuario).then(snap => {
					const x: any = snap.data() as any;
					if (!x.estadoMesa) {
						let y = {
							idCliente: this.uidUsuario,
							nombre: this.infoUsuario.nombre,
							fechaDeEntrada: Date.now(),
							comensales: cantidad,
							tipo: tipo
						}
						return this.bd.crearConId('listaEspera', y, this.uidUsuario);
					}
				}).then(data => {
					this.complemento.presentToastConMensajeYColor('Ya se encuentra en la lista de espera. por favor, aguarde a que el metre le asigne una mesa.', 'primary');
				}).catch(err => this.complemento.presentToastConMensajeYColor(firebaseErrors(err), 'danger')).finally(() => {
					this.splash = false;
				});
			}
		});
	}

	mostrarEncuestaLista() {
		this.mostrarCuentaDiv = false;
		this.mostrarEncuestaDiv = true;
		this.mostrarProductos = false;
		this.mostrarConsultaRealizada = false;
	}

	mostrarCuentaLista() {
		this.splash = true;
		this.mostrarCuentaDiv = true;
		this.mostrarEncuestaDiv = false;
		this.mostrarProductos = false;
		this.bd.obtenerTodosCampoValor('pedidos', 'cliente', this.uidUsuario).toPromise().then(snaps => {
			let ref = snaps.docs.find(doc => doc.data().estado !== 'Pagado');
			if (ref !== undefined) {
				const x: any = ref.data() as any;
				x['id'] = ref.id;
				this.jsonCuenta.id = x.id;
				this.jsonCuenta.pedidos = x.productos;
				this.jsonCuenta.precioTotal = x.precioTotal;
				this.splash = false;
			}
		});
	}

	qrMesa() {
		localStorage.setItem("mesa", this.informarEstadoMesa.mesa);
		this.qr.scan().then(data => {
			this.splash = true;
			return this.bd.obtenerPorIdPromise('mesas', data.text).then(snap => {
				const x: any = snap.data() as any;
				x['id'] = snap.id;
				if (x.id === data.text && x.cliente === this.uidUsuario) {
					this.mostrarCuentaDiv = false;
					this.mostrarEncuestaDiv = false;
					this.mensajeEscanearMesa = true;
					this.mostrarConsultaRealizada = false;
					this.mostrarBotonConsulta = true;
					this.mostrarProductos = true;
					this.bd.obtenerTodosPromise('pedidos').then(datos => {
						datos.forEach(dato => {
							const y: any = dato.data() as any;
							console.log(x);
							console.log(y);
							if (x.id === y.mesa) {
								if (y.estado === 'Servido') {
									this.banderaQrMesa = true;
									if (this.banderaQrMesa == true) {
										this.complemento.presentToastConMensajeYColor("Podra acceder a la encuesta y a la cuenta", "success");
										this.mostrarCuentaBoton = true;
										this.mostrarEncuestaBoton = true;
									}
								} else if (y.estado == 'Pendiente') {
									this.complemento.presentToastConMensajeYColor("Su pedido esta esperando confirmacion de un mozo.", "primary");
								} else if (y.estado == 'EnPreparacion') {
									this.complemento.presentToastConMensajeYColor('Su pedido esta en preparacion, tiempo aprox ' + y.tiempoTotal + ' segundos', "primary");
								} else if (y.estado == 'Preparado') {
									this.complemento.presentToastConMensajeYColor("Su pedido ya esta listo. Enseguida se le llevara a la mesa.", "primary");
								} else if (y.estado == 'Servido-A') {
									this.mostrarBotonServido = true;
									this.complemento.presentToastConMensajeYColor("El mozo a llevado su pedido a la mesa. Confirma la recepcion.", "primary");
								} else if (y.estado == 'Pagado') {
									this.complemento.presentToastConMensajeYColor("Ya esta todo pagado. en unos momento el Mozo le dara de alta", "primary");
								}
							} else {
								this.complemento.presentToastConMensajeYColor('La mesa ' + x.numero + ' no es la misma del pedido.', "danger");
							}
						});
					})
				} else {
					this.complemento.presentToastConMensajeYColor('La mesa ' + x.numero + ' en estado ' + x.estado + ' no le corresponde, vuelva a escanear el qr ', "danger");
				}
			});
		}).catch(err => this.complemento.presentToastConMensajeYColor(firebaseErrors(err), 'danger')).finally(() => {
			this.splash = false;
		});;
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
			this.complemento.presentToastConMensajeYColor(firebaseErrors(err), 'danger');
		});
	}

	confirmarRecepcionPedido() {
		this.splash = true;
		this.bd.obtenerTodosCampoValor('pedidos', 'cliente', this.uidUsuario).toPromise().then(snap => {
			const x: any = snap.docs[0].data() as any;
			x.estado = 'Servido';
			return this.bd.actualizar('pedidos', x, snap.docs[0].id);
		}).then(() => {
			this.mostrarBotonServido = false;
			this.complemento.presentToastConMensajeYColor("Su recepcion del pedido fue registrada", "success");
		}).catch(err => {
			this.complemento.presentToastConMensajeYColor(firebaseErrors(err), 'danger');
		}).finally(() => this.splash = false);
	}

	pagarCuenta() {
		this.splash = true;
		this.bd.obtenerPorIdPromise('pedidos', this.jsonCuenta.id).then(pedidoRef => {
			const x: any = pedidoRef.data() as any;
			x.estado = 'Pagado';
			return this.bd.actualizar('pedidos', x, this.jsonCuenta.id)
		}).catch(err => this.complemento.presentToastConMensajeYColor(firebaseErrors(err), 'danger')).finally(() => {
			this.mostrarCuentaBoton = false;
			this.mostrarEncuestaBoton = false;
			this.splash = false;
			this.complemento.presentToastConMensajeYColor("Su pago esta por ser confirmado, gracias por utilizarnos!", "success");
		})
	}

	consultarMozo() {
		this.splash = true;
		this.bd.obtenerPorIdPromise('mesas', this.infoUsuario.estadoMesa).then(mesaRef => {
			let consulta = {
				cliente: this.infoUsuario.nombre,
				mesa: mesaRef.data().numero,
				fecha: Date.now(),
				descripcion: this.consulta,
				estado: false
			}
			return consulta
		}).then(consulta => {
			return this.bd.crear('consultas', consulta)
		}).then(() => {
			this.cancelarConsulta();
			this.complemento.presentToastConMensajeYColor("Su consulta se realizo con exito,espere a que un mozo se acerce.", "success");
		}).catch(err => this.complemento.presentToastConMensajeYColor(firebaseErrors(err), 'danger')).finally(() => this.splash = false);
	}

	desplegarConsulta() {
		this.deplegarConsultaMozo = true;
	}

	cancelarConsulta() {
		this.consulta = "";
		this.deplegarConsultaMozo = false;
	}

	botonMostrarConsulta(numeroMesa) {
		this.mostrarCuentaDiv = false;
		this.mostrarEncuestaDiv = false;
		this.mostrarProductos = false;
		this.mostrarConsultaRealizada = true;
	}

	//EXCLUSIVO DE METRE
	comprobarMesas(item) {
		localStorage.setItem('itemListaDeEspera', JSON.stringify(item));
		this.router.navigate(['/listado-mesas']);
	}

	//EXCLUSIVO DE MOZO
	consultaConExito(consulta) {
		this.splash = true;
		consulta.estado = true;
		consulta['respuesta'] = this.respuestaConsulta;
		this.bd.actualizar('consultas', consulta, consulta.id).then(() => {
			this.complemento.presentToastConMensajeYColor('La consulta fue resuelta con exito!', 'success');
		}).catch(err => {
			this.complemento.presentToastConMensajeYColor(firebaseErrors(err), 'danger');
		}).finally(() => this.splash = false);
	}

	liberarMesa(pedido) {
		this.splash = true;
		this.bd.obtenerPorIdPromise('mesas', pedido.mesa).then(refMesa => {
			const x: any = refMesa.data() as any;
			x.estado = 'Libre',
				x.cliente = null
			return this.bd.actualizar('mesas', x, pedido.mesa);
		}).then(() => {
			return this.bd.obtenerPorIdPromise('usuarios', pedido.cliente).then(userRef => {
				const x: any = userRef.data() as any;
				x.estadoMesa = false;
				return this.bd.actualizar('usuarios', x, pedido.cliente).then(() => {
					this.complemento.presentToastConMensajeYColor("La mesa a sido liberada", "success");
				});
			});
		}).then(() => {
			return this.modificarEstadoPedido(pedido, 'Finalizado');
		}).catch(err => {
			this.complemento.presentToastConMensajeYColor(firebaseErrors(err), 'danger');
		}).finally(() => this.splash = false);
	}

	mostrarPedidos() {
		this.banderaMostrarPedidos = true;
		this.banderaMostrarConsultas = false;
		this.mostrarPedidoPagado = false
		this.banderaMostrarCuentasPagadas = false;
	}

	mostrarConsultas() {
		this.banderaMostrarPedidos = false;
		this.banderaMostrarConsultas = true;
		this.mostrarPedidoPagado = false;
		this.banderaMostrarCuentasPagadas = false;
	}

	mostrarPedidosPreparados() {
		this.banderaMostrarPedidos = false;
		this.banderaMostrarConsultas = false;
		this.mostrarPedidoPreparado = true;
		this.banderaMostrarCuentasPagadas = false;
	}



	mostrarCuentasPagadas() {
		this.banderaMostrarPedidos = false;
		this.banderaMostrarConsultas = false;
		this.mostrarPedidoPagado = false;
		this.banderaMostrarCuentasPagadas = true;
	}

	modificarEstadoPedido(pedido, estado) {
		if (pedido.estado !== 'Finalizado') {
			this.splash = true;
			pedido.estado = estado;
			this.bd.actualizar('pedidos', pedido, pedido.id).then(() => {
				this.complemento.presentToastConMensajeYColor('Estado de pedido modificado.', 'success')
			}).catch(err => {
				this.complemento.presentToastConMensajeYColor(firebaseErrors(err), 'danger');
			}).finally(() => {
				this.splash = false
				this.cancelarConsulta();
			});
		}
	}

	//FUNCIONES ESPECIFICAS DE BARTENDER / COCINERO
	elaborarPedido(pedido: any) {
		console.log(pedido);
		this.splash = true;
		pedido.productos.forEach(p => {
			if (this.infoUsuario.perfil === 'Cocinero' && (p.tipo === 'Plato' || p.tipo === 'Postre')) {
				p.estado = true;
			} else if (this.infoUsuario.perfil === 'BarTender' && p.tipo === 'Bebida') {
				p.estado = true;
			}
		})
		console.log(pedido.productos);
		if (pedido.productos.every(p => p.estado === true)) {
			pedido.estado = 'Preparado';
			return this.bd.actualizar('pedidos', pedido, pedido.id).then(() => {
				this.complemento.presentToastConMensajeYColor("Todos los Productos del pedido preparados", "success");
			}).catch(err => {
				this.complemento.presentToastConMensajeYColor(firebaseErrors(err), 'danger');
			}).finally(() => {
				this.splash = false;
			});
		} else {
			this.bd.actualizar('pedidos', pedido, pedido.id).then(() => {
				this.complemento.presentToastConMensajeYColor("Productos de sector preparados", "success");
			}).catch(err => {
				this.complemento.presentToastConMensajeYColor(firebaseErrors(err), 'danger');
			}).finally(() => {
				this.splash = false;
			});
		}
	}

	//EXCLUSIVO DE ENCUESTAS
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

	cambioRango(event) {
		this.gradoSatisfaccion = event.detail.value;
	}
	cambioRangoRes(event) {
		console.log(event.detail.value);
		this.gradoSatisfaccionRes = event.detail.value;
	}

	verEncuestas() {
		this.router.navigate(['encuestas']);
	}

	enviarEncuesta() {
		this.jsonEncuesta.preguntaUno = this.gradoSatisfaccion;
		this.jsonEncuesta.preguntaDos = this.gradoSatisfaccionRes;
		this.bd.crear('encuestas', this.jsonEncuesta).then(() => {
			this.complemento.presentToastConMensajeYColor('¡Su encuesta se finalizo con exito!', 'success');
			this.mostrarEncuestaDiv = false;
			this.contadorInterno = -1;
			this.jsonEncuesta.fotos[0] = 'https://i.imgur.com/zH3i014.png';
			this.jsonEncuesta.fotos[1] = 'https://i.imgur.com/zH3i014.png';
			this.jsonEncuesta.fotos[2] = 'https://i.imgur.com/zH3i014.png';
		});
	}
}
