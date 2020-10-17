import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.page.html',
  styleUrls: ['./registro-producto.page.scss'],
})
export class RegistroProductoPage implements OnInit {

  ngOnInit() {
  }


  confirmaClave;
  EstadoRegistro;

  registroForm: FormGroup;
   constructor(private fb: FormBuilder) {
    this.crearForm();
  }



  crearForm() {
    this.registroForm = this.fb.group({
       alias: ['', Validators.required ],
       correo: ['', Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')],
       clave: ['', Validators.required, Validators.minLength ],
    });
    
  }

  registrar(){
    console.log();
  }

  onSubmit(f){
    console.log(f);
  }
   ver(correo){
    console.log(correo);
   }









}
