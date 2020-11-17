import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ModalController } from '@ionic/angular';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit
{

  constructor(public viewCtrl: ModalController, public splashScreen: SplashScreen,
    public audioService: AudioService)
  {
    this.audioService.play('inicio');
    this.splashScreen.hide();
    setTimeout(() =>
    {

      this.viewCtrl.dismiss()
    }, 5000);
  }

  ngOnInit() { }

}
