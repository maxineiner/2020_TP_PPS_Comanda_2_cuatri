import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuProductoPage } from './menu-producto.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: MenuProductoPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule

  ],
  exports: [RouterModule],
})
export class MenuProductoPageRoutingModule {}
