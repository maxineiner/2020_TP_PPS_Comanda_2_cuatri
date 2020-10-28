import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuReservaPageRoutingModule } from './menu-reserva-routing.module';

import { MenuReservaPage } from './menu-reserva.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuReservaPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [MenuReservaPage]
})
export class MenuReservaPageModule {}
