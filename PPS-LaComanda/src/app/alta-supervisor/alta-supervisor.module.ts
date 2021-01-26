import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AltaSupervisorPageRoutingModule } from './alta-supervisor-routing.module';
import { AltaSupervisorPage } from './alta-supervisor.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltaSupervisorPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [AltaSupervisorPage]
})
export class AltaSupervisorPageModule {}
