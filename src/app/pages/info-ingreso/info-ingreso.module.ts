import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoIngresoPageRoutingModule } from './info-ingreso-routing.module';

import { InfoIngresoPage } from './info-ingreso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoIngresoPageRoutingModule
  ],
  declarations: [InfoIngresoPage]
})
export class InfoIngresoPageModule {}
