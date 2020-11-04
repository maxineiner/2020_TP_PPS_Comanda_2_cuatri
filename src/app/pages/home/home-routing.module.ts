import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'menu-producto',
        loadChildren: () => import('../menu-producto/menu-producto.module').then(m => m.MenuProductoPageModule)
      },
      {
        path: 'menu-cliente',
        loadChildren: () => import('../menu-cliente/menu-cliente.module').then(m => m.MenuClientePageModule)
      },
      {
        path: 'menu-empleado',
        loadChildren: () => import('../menu-empleado/menu-empleado.module').then(m => m.MenuEmpleadoPageModule)
      },
      {
        path: 'menu-mesa',
        loadChildren: () => import('../menu-mesa/menu-mesa.module').then(m => m.MenuMesaPageModule)
      },
      {
        path: 'menu-jefe',
        loadChildren: () => import('../menu-jefe/menu-jefe.module').then(m => m.MenuJefePageModule)
      },
      {
        path: 'qr-ingreso-local',
        loadChildren: () => import('../qr-ingreso-local/qr-ingreso-local.module').then(m => m.QrIngresoLocalPageModule)
      },
      {
        path: 'carta',
        loadChildren: () => import('../carta/carta.module').then(m => m.CartaPageModule)
      },
      {
        path: 'menu-pedidos',
        loadChildren: () => import('../menu-pedidos/menu-pedidos.module').then(m => m.MenuPedidosPageModule)
      },
      {
        path: 'menu-reserva',
        loadChildren: () => import('../menu-reserva/menu-reserva.module').then(m => m.MenuReservaPageModule)
      },
      {
        path: 'lista-de-espera',
        loadChildren: () => import('../lista-de-espera/lista-de-espera.module').then(m => m.ListaDeEsperaPageModule)
      },
      {
        path: '',
        redirectTo: '/home/tab1',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
