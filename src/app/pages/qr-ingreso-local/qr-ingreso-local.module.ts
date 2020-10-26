import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrIngresoLocalPageRoutingModule } from './qr-ingreso-local-routing.module';

import { QrIngresoLocalPage } from './qr-ingreso-local.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrIngresoLocalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [QrIngresoLocalPage]
})
export class QrIngresoLocalPageModule {}
