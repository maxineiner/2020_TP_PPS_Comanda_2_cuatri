import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ComponentsModule } from './components/components.module';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { ProductoService } from "./services/producto.service";
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: 
  [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProductoService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
