import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';
import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
    path: 'alta-usuarios',
    loadChildren: () => import('../usuarios/alta-usuarios/alta-usuarios.module').then(m => m.AltaUsuariosPageModule)
  },
  {
    path: "login",
    loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule { }
