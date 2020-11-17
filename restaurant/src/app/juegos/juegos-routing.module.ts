import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegosPage } from './juegos.page';

const routes: Routes = [
  {
    path: '',
    component: JuegosPage
  }, 
  {
    path: 'ahorcado',
    loadChildren: () => import('./ahorcado/ahorcado.module').then( m => m.AhorcadoPageModule)
  },
  {
    path: 'piedraPapelTijera',
    loadChildren: () => import('./ahorcado/ahorcado.module').then( m => m.AhorcadoPageModule)
  },  {
    path: 'agilidad-aritmetica',
    loadChildren: () => import('./agilidad-aritmetica/agilidad-aritmetica.module').then( m => m.AgilidadAritmeticaPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegosPageRoutingModule {}
