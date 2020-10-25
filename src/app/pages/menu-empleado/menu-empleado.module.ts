import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuEmpleadoPageRoutingModule } from './menu-empleado-routing.module';

import { MenuEmpleadoPage } from './menu-empleado.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuEmpleadoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MenuEmpleadoPage]
})
export class MenuEmpleadoPageModule { }
