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
import { ClientesPipe } from './clientes.pipe';


import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import * as firebase from 'firebase';
firebase.initializeApp(environment.firebaseConfig);

import { ToolbarModule } from './toolbar/toolbar.module';
import { Usuario } from './clases/usuario';
import { LoginPipe } from './login.pipe';
import { Vibration } from '@ionic-native/vibration/ngx';


@NgModule({
  declarations: [AppComponent,SupervisorComponent, ClientesPipe, LoginPipe],
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
    Vibration,
    ToolbarModule,
    ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    BarcodeScanner,
    Usuario,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
