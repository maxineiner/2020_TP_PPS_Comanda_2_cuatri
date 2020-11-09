import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesPendientesPageRoutingModule } from './clientes-pendientes-routing.module';

import { ClientesPendientesPage } from './clientes-pendientes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesPendientesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ClientesPendientesPage]
})
export class ClientesPendientesPageModule { }
