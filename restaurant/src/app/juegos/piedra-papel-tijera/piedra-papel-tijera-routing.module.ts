import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiedraPapelTijeraPage } from './piedra-papel-tijera.page';

const routes: Routes = [
  {
    path: '',
    component: PiedraPapelTijeraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiedraPapelTijeraPageRoutingModule {}
