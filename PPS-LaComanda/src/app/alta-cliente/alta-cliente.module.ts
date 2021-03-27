import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AltaClientePageRoutingModule } from './alta-cliente-routing.module';
import { AltaClientePage } from './alta-cliente.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AltaClientePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [AltaClientePage]
})
export class AltaClientePageModule {}
