import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AhorcadoPageRoutingModule } from './ahorcado-routing.module';

import { AhorcadoPage } from './ahorcado.page';
import { ToolbarModule } from 'src/app/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolbarModule,
    AhorcadoPageRoutingModule
  ],
  declarations: [AhorcadoPage]
})
export class AhorcadoPageModule {}
