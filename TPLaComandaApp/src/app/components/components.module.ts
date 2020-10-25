import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ButtonFlotatingComponent } from './button-flotating/button-flotating.component';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash/splash.component';


@NgModule({
    declarations: [
      ButtonFlotatingComponent,
      SplashComponent
    ],
    exports: [
      ButtonFlotatingComponent,
      SplashComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ]
  })
  export class ComponentsModule { }



