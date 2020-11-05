import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoIngresoPage } from './info-ingreso.page';

const routes: Routes = [
  {
    path: '',
    component: InfoIngresoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoIngresoPageRoutingModule {}
