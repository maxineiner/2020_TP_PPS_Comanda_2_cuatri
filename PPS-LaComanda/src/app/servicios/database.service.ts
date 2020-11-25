import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";

@Injectable({
	providedIn: 'root'
})
export class DatabaseService {

	constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) { }

	public crear(collection: string, data: any) {
		return this.firestore.collection(collection).add(data);
	}

	public crearConId(collection: string, data: any,id:any){
		return this.firestore.collection(collection).doc(id).set(data); 
	}

	public actualizar(coleccion: string, data: any, id: string) {
		return this.firestore.collection(coleccion).doc(id).set(data,{merge: true});
	}

	public eliminar(coleccion: string, data: any, id: string){
		return this.firestore.collection(coleccion).doc(id).delete();
	}

	public obtenerPorId(coleccion: string, id: string) {
		return this.firestore.collection(coleccion).doc(id).snapshotChanges();
	}

	public obtenerTodos(coleccion: string) {
		return this.firestore.collection(coleccion).snapshotChanges();
	}

	public obtenerUsuariosBD(coleccion: string, email: string) {
		return this.firestore.collection(coleccion, ref => ref.where("correo","==", email)).get();
	}

	public subirImagen(ruta:string, data:any){
		return this.storage.ref(ruta).putString(data,'data_url').then(data => data.downloadURL);
	}
}
