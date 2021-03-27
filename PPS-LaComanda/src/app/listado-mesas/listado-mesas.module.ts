import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoMesasPageRoutingModule } from './listado-mesas-routing.module';

import { ListadoMesasPage } from './listado-mesas.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoMesasPageRoutingModule,
    TranslateModule
  ],
  declarations: [ListadoMesasPage]
})
export class ListadoMesasPageModule {}
