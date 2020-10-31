import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoMesaPageRoutingModule } from './info-mesa-routing.module';

import { InfoMesaPage } from './info-mesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoMesaPageRoutingModule
  ],
  declarations: [InfoMesaPage]
})
export class InfoMesaPageModule {}
