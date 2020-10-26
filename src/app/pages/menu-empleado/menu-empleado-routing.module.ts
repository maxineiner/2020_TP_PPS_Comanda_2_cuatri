import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuEmpleadoPage } from './menu-empleado.page';

const routes: Routes = [
  {
    path: '',
    component: MenuEmpleadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuEmpleadoPageRoutingModule {}
