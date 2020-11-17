import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Platform } from '@ionic/angular';

interface Sound
{
  key: string;
  asset: string;
  isNative: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AudioService
{
  private sounds: Sound[] = [];
  private audioPlayer: HTMLAudioElement = new Audio();
  private forceWebAudio: boolean = true;

  constructor(private platform: Platform, private nativeAudio: NativeAudio) 
  {
    this.cargarAssets();
  }

  preload(key: string, asset: string): Promise<any> 
  {
    console.log(asset);

    return new Promise<any>((resolve, reject) =>
    {
      if (this.platform.is('capacitor') || this.platform.is('cordova') && !this.forceWebAudio)
      {
        this.nativeAudio.preloadSimple(key, asset);

        this.sounds.push({
          key: key,
          asset: asset,
          isNative: true
        });
      }
      else 
      {
        let audio = new Audio();
        audio.src = asset;

        this.sounds.push({
          key: key,
          asset: asset,
          isNative: false
        });
      }
      resolve;
    });
  }


  play(key: string): void
  {

    console.log(key);
    let soundToPlay: Sound = this.sounds.find((sound) => 
    {
      return sound.key === key;
    });

    console.log(soundToPlay);

    if (soundToPlay.isNative)
    {
      this.nativeAudio.play(soundToPlay.key)
        .then((res) =>
        {
          console.log(res);
        },
          (err) =>
          {
            console.log(err);
          });
    }
    else 
    {
      this.audioPlayer.src = soundToPlay.asset;
      this.audioPlayer.play();
    }

  }

  cargarAssets()
  {
    this.preload("cierre", '/assets/audio/cierre_app.mp3');
    this.preload("inicio", '/assets/audio/inicio_app.mp3');
  }
}
