import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionPageRoutingModule } from './configuracion-routing.module';

import { ConfiguracionPage } from './configuracion.page';
import { ToolbarModule } from 'src/app/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionPageRoutingModule,
    ToolbarModule
  ],
  declarations: [ConfiguracionPage]
})
export class ConfiguracionPageModule {}
