import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { SupervisorComponent } from './altas/supervisor/supervisor.component';
//import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';



import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import * as firebase from 'firebase';
firebase.initializeApp(environment.firebaseConfig);

import { Usuario } from './clases/usuario';
import { Vibration } from '@ionic-native/vibration/ngx';
import { HomeComponent } from './home/home.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { InicioPageModule } from './inicio/inicio.module';
import { EncuestaPageModule } from './clientes/pedidos/encuesta/encuesta.module';
import { PedidosPageModule } from './clientes/pedidos/pedidos.module';


@NgModule({
  declarations: [AppComponent,SupervisorComponent,HomeComponent],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule, 
     AngularFireAuthModule, 
     AngularFireDatabaseModule,
     HttpClientModule,
     AngularFirestoreModule,
     AngularFireStorageModule,
     CommonModule,
    FormsModule,
    ToolbarModule,
    InicioPageModule,
    ReactiveFormsModule,
    PedidosPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Vibration,
    BarcodeScanner,
    Usuario,
    Vibration,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
