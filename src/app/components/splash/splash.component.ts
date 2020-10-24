import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit
{

  constructor(public viewCtrl: ModalController, public splashScreen: SplashScreen)
  {
    this.splashScreen.hide();
    setTimeout(() =>
    {

      this.viewCtrl.dismiss()
    }, 5000);
  }

  ngOnInit() { }

}
