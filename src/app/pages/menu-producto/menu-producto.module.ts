import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuProductoPageRoutingModule } from './menu-producto-routing.module';

import { MenuProductoPage } from './menu-producto.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuProductoPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [MenuProductoPage]
})
export class MenuProductoPageModule {}
