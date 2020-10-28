import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuJefePage } from './menu-jefe.page';

const routes: Routes = [
  {
    path: '',
    component: MenuJefePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuJefePageRoutingModule {}
