import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import { DatabaseService } from 'src/app/servicios/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-mesas',
  templateUrl: './listado-mesas.page.html',
  styleUrls: ['./listado-mesas.page.scss'],
})
export class ListadoMesasPage implements OnInit {
  listadoMesas = [];

  constructor(    private firestore : AngularFirestore,
    private bd : DatabaseService,
    private router : Router
    ) { }

  ngOnInit() {
    let fb = this.firestore.collection('listaMesas'); 
    fb.valueChanges().subscribe(datos =>{           
      this.listadoMesas = [];
      datos.forEach( (dato:any) =>{
        if(dato.estado == 'desocupada') 
        {
          this.listadoMesas.push(dato);     
        }
      });
    })
  }

  asignarMesa(mesita)
  {
    let auxUs = localStorage.getItem('usuarioSelMesa');
    let auxUsJson = JSON.parse(auxUs);
    this.firestore.collection('listaMesas').get().subscribe((querySnapShot) => {
      querySnapShot.forEach(dato => {
        const x:any = dato.data();
        if(mesita.numero == x.numero)
        {
          mesita.estado = "ocupada";
          this.bd.actualizar('listaMesas',mesita,dato.id);
          this.firestore.collection('listaEspera').get().subscribe((querySnapShot) => {
            querySnapShot.forEach(datoU => {
              const y:any = dato.data();
              if(auxUsJson.nombreUsuario ==y.nombreUsuario)
              {
                auxUsJson.estadoMesa = "mesaAsignada";
                auxUsJson.mesa = mesita.numero;
                this.bd.actualizar('listaEspera',auxUsJson,datoU.id).then( end =>{
                  localStorage.removeItem('usuarioSelMesa');
                }
                )
              }
            })
          })   
        }
        this.listadoMesas = [];
      })
    })   
  }
}
