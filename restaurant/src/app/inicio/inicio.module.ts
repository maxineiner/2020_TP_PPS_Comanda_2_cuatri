import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { ClientesAnonimosComponent } from '../altas/clientes-anonimos/clientes-anonimos.component';
import { ClientesRegistradosComponent } from '../altas/clientes-registrados/clientes-registrados.component';
import { Usuario } from '../clases/usuario';
// import { LoginComponent } from 'login/login.component';
import { MesasComponent } from '../altas/mesas/mesas.component';
import { Mesa } from '../clases/mesa';
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';
import { ConfiguracionPage } from '../home/configuracion/configuracion.page';
import { ConfiguracionPageModule } from '../home/configuracion/configuracion.module';
//import { HomeComponent } from '../home/home.component';
//import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    FormsModule,
    ConfiguracionPageModule,
    //BrowserModule
  ],
  declarations: [
    InicioPage,
    ClientesAnonimosComponent,
    ClientesRegistradosComponent,
    
    // LoginComponent,
    MesasComponent,
    MenuPrincipalComponent,
    //HomeComponent
  ],
  providers:[Usuario,Mesa]
})
export class InicioPageModule {}
