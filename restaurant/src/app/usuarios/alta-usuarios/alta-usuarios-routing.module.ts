import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltaUsuariosPage } from './alta-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: AltaUsuariosPage
  }, 
  {
    path: 'clientes',
    loadChildren: () => import('../../clientes/clientes.module').then( m => m.ClientesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltaUsuariosPageRoutingModule {}
