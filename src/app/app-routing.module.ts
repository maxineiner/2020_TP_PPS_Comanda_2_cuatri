import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'menu-producto',
    loadChildren: () => import('./pages/menu-producto/menu-producto.module').then(m => m.MenuProductoPageModule)
  },
  {
    path: 'menu-empleado',
    loadChildren: () => import('./pages/menu-empleado/menu-empleado.module').then(m => m.MenuEmpleadoPageModule)
  },
  {
    path: 'menu-mesa',
    loadChildren: () => import('./pages/menu-mesa/menu-mesa.module').then(m => m.MenuMesaPageModule)
  },
  {
    path: 'menu-jefe',
    loadChildren: () => import('./pages/menu-jefe/menu-jefe.module').then(m => m.MenuJefePageModule)
  },
  {
    path: 'qr-ingreso-local',
    loadChildren: () => import('./pages/qr-ingreso-local/qr-ingreso-local.module').then(m => m.QrIngresoLocalPageModule)
  },
  {
    path: 'carta',
    loadChildren: () => import('./pages/carta/carta.module').then(m => m.CartaPageModule)
  },
  {
    path: 'menu-pedidos',
    loadChildren: () => import('./pages/menu-pedidos/menu-pedidos.module').then(m => m.MenuPedidosPageModule)
  },
  {
    path: 'menu-reserva',
    loadChildren: () => import('./pages/menu-reserva/menu-reserva.module').then(m => m.MenuReservaPageModule)
  },
  //TODO: add paths
  /*
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  */
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
