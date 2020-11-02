import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoMesaPage } from './info-mesa.page';

const routes: Routes = [
  {
    path: '',
    component: InfoMesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoMesaPageRoutingModule {}
