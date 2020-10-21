import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { ClientesAnonimosComponent } from '../altas/clientes-anonimos/clientes-anonimos.component';
import { ClientesRegistradosComponent } from '../altas/clientes-registrados/clientes-registrados.component';
import { Usuario } from '../clases/usuario';
import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    FormsModule
  ],
  declarations: [
    InicioPage,
    ClientesAnonimosComponent,
    ClientesRegistradosComponent,
    LoginComponent
  ],
  providers:[Usuario]
})
export class InicioPageModule {}
