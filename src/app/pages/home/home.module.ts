import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MenuEmpleadoPage } from '../menu-empleado/menu-empleado.page';
import { MenuProductoPage } from '../menu-producto/menu-producto.page';
import { MenuPedidosPage } from '../menu-pedidos/menu-pedidos.page';
import { MenuClientePage } from '../menu-cliente/menu-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
