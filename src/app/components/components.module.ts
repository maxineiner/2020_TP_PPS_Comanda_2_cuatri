import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash/splash.component';
import { HeaderComponent } from './header/header.component';
import { FormMesasComponent } from './form-mesas/form-mesas.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ListadoMesasComponent } from './listado-mesas/listado-mesas.component';



@NgModule({
  declarations: [
    SplashComponent,
    HeaderComponent,
    FormMesasComponent,
    ListadoMesasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    SplashComponent,
    HeaderComponent,
    FormMesasComponent,
    ListadoMesasComponent
  ]
})
export class ComponentsModule { }
