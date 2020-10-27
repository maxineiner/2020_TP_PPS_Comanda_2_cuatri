import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPedidosPage } from './menu-pedidos.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPedidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPedidosPageRoutingModule {}
