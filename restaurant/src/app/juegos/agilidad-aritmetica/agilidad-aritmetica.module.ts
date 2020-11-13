import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgilidadAritmeticaPageRoutingModule } from './agilidad-aritmetica-routing.module';

import { AgilidadAritmeticaPage } from './agilidad-aritmetica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgilidadAritmeticaPageRoutingModule
  ],
  declarations: [AgilidadAritmeticaPage]
})
export class AgilidadAritmeticaPageModule {}
