import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment.prod';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'; 
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

firebase.initializeApp(environment.firebaseConfig);

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { IonicStorageModule } from '@ionic/storage';

export function HttpLoaderFactory(http: HttpClient){   return new TranslateHttpLoader(http,'/assets/i18n/','.json'); }


@NgModule({
	declarations: [AppComponent,],
	entryComponents: [],
	imports: [
		BrowserModule,
		FormsModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFireAuthModule,
		AngularFirestoreModule,
		AngularFireStorageModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
			  provide: TranslateLoader,
			  useFactory: HttpLoaderFactory,
			  deps: [HttpClient]
			}
		  }),
		IonicStorageModule.forRoot()
	],
	providers: [
		StatusBar,
		SplashScreen,
		Camera,
		BarcodeScanner,
		Vibration,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
