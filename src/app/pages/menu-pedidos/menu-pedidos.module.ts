import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPedidosPageRoutingModule } from './menu-pedidos-routing.module';

import { MenuPedidosPage } from './menu-pedidos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPedidosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MenuPedidosPage]
})
export class MenuPedidosPageModule { }
