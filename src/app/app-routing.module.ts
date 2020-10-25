import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'menu-producto',
    loadChildren: () => import('./pages/menu-producto/menu-producto.module').then( m => m.MenuProductoPageModule)
  },  {
    path: 'menu-empleado',
    loadChildren: () => import('./pages/menu-empleado/menu-empleado.module').then( m => m.MenuEmpleadoPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
