import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

import { UsuariosPage } from './usuarios.page';

const routes: Routes = [
  { 
    path: 'home', component: HomeComponent
  /* canActivate: [AuthGuard] */},
  {
    path: '',
    component: UsuariosPage
  },
  {
    path: 'alta-usuarios',
    loadChildren: () => import('./alta-usuarios/alta-usuarios.module').then(m => m.AltaUsuariosPageModule)
  },
  {
    path: 'editar-usuario',
    loadChildren: () => import('./editar-usuario/editar-usuario.module').then( m => m.EditarUsuarioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosPageRoutingModule {}
