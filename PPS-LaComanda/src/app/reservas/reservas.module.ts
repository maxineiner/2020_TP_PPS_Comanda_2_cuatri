import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReservasPageRoutingModule } from './reservas-routing.module';
import { ReservasPage } from './reservas.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReservasPageRoutingModule,
    TranslateModule,
  ],
  declarations: [ReservasPage]
})
export class ReservasPageModule {}
