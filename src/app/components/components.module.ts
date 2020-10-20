import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash/splash.component';
import { ListadoProductosComponent } from "./listado-productos/listado-productos.component";
import { FormProductoComponent } from "./form-producto/form-producto.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    SplashComponent,
    ListadoProductosComponent,
    FormProductoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    SplashComponent,
    ListadoProductosComponent,
    FormProductoComponent
  ]
})
export class ComponentsModule { }
