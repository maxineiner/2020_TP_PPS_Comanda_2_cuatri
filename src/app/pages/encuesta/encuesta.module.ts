import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { EncuestaPageRoutingModule } from './encuesta-routing.module';

import { EncuestaPage } from './encuesta.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncuestaPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [EncuestaPage]
})
export class EncuestaPageModule { }
