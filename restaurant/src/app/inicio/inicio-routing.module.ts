import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesAnonimosComponent } from '../altas/clientes-anonimos/clientes-anonimos.component';
import { ClientesRegistradosComponent } from '../altas/clientes-registrados/clientes-registrados.component';
import { SupervisorComponent } from '../altas/supervisor/supervisor.component';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
    path: 'altaDueñoSupervisor',
    component:SupervisorComponent
  },
  {
    path:"AltaClientesRegistrados",
    component:ClientesRegistradosComponent
  },
  {
    path:"AltaClientesAnonimos",
    component:ClientesAnonimosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
