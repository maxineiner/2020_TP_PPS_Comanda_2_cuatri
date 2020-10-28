import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuReservaPage } from './menu-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: MenuReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuReservaPageRoutingModule {}
