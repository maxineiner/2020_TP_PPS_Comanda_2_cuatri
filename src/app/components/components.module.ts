import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash/splash.component';
import { HeaderComponent } from './header/header.component';
import { FormMesasComponent } from './form-mesas/form-mesas.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoMesasComponent } from './listado-mesas/listado-mesas.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    SplashComponent,
    HeaderComponent,
    FormMesasComponent,
    ListadoMesasComponent,
    FormProductoComponent,
    ListadoProductosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [
    SplashComponent,
    ListadoProductosComponent,
    FormProductoComponent,
    HeaderComponent,
    FormMesasComponent,
    ListadoMesasComponent
  ]
})
export class ComponentsModule { }
