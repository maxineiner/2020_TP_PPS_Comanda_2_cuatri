import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesAnonimosComponent } from '../altas/clientes-anonimos/clientes-anonimos.component';
import { ClientesRegistradosComponent } from '../altas/clientes-registrados/clientes-registrados.component';
import { MesasComponent } from '../altas/mesas/mesas.component';
import { SupervisorComponent } from '../altas/supervisor/supervisor.component';
// import { LoginComponent } from '../login/login.component';
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
    path: 'altaDueñoSupervisor',
    component: SupervisorComponent
  },
  {
    path: 'alta-usuarios',
    loadChildren: () => import('../usuarios/alta-usuarios/alta-usuarios.module').then(m => m.AltaUsuariosPageModule)
  },
  {
    path: "AltaClientesRegistrados",
    component: ClientesRegistradosComponent
  },
  {
    path: "AltaClientesAnonimos",
    component: ClientesAnonimosComponent
  },
  {
    path: "AltaMesas",
    component: MesasComponent
  },
  {
    path: "login",
    loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: "menu",
    component: MenuPrincipalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule { }
