import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesPageRoutingModule } from './clientes-routing.module';

import { ClientesPage } from './clientes.page';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { EncuestaPageModule } from './pedidos/encuesta/encuesta.module';
import { PedidosPageModule } from './pedidos/pedidos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesPageRoutingModule,
    ToolbarModule,
    PedidosPageModule
  ],
  declarations: [ClientesPage]
})
export class ClientesPageModule {}
