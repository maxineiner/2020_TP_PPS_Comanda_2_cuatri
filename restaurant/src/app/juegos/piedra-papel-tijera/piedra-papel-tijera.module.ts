import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiedraPapelTijeraPageRoutingModule } from './piedra-papel-tijera-routing.module';

import { PiedraPapelTijeraPage } from './piedra-papel-tijera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiedraPapelTijeraPageRoutingModule
  ],
  declarations: [PiedraPapelTijeraPage]
})
export class PiedraPapelTijeraPageModule {}
