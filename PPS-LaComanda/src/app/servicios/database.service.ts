import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";

@Injectable({
	providedIn: 'root'
})
export class DatabaseService {

	constructor(private firestore: AngularFirestore) { }

	public crear(collection: string, data: any) {
		return this.firestore.collection(collection).add(data);
	}

	public obtenerPorId(coleccion: string, id: string) {
		return this.firestore.collection(coleccion).doc(id).snapshotChanges();
	}

	public obtenerTodos(coleccion: string) {
		return this.firestore.collection(coleccion).snapshotChanges();
	}

	public actualizar(coleccion: string, data: any, id: string) {
		return this.firestore.collection(coleccion).doc(id).set(data);
	}

	public obtenerUsuariosBD(coleccion: string, email: string) {
		let auxPerfil: string;
		let auxPerfilDos: string = "";
		this.firestore.collection(coleccion).get().subscribe((querySnapShot) => {
			querySnapShot.forEach(datos => {
				if (datos.data().correo == email) {
					auxPerfil = datos.data().perfil;
					console.log(auxPerfil);
					return auxPerfil;
				}
			});
		});
	}


}
