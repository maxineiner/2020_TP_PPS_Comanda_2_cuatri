import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuMesaPageRoutingModule } from './menu-mesa-routing.module';

import { MenuMesaPage } from './menu-mesa.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuMesaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MenuMesaPage]
})
export class MenuMesaPageModule {}
