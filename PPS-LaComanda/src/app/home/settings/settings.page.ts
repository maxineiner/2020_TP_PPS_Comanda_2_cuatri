import { Component, OnInit } from '@angular/core';
import { LenguajesService } from '../../servicios/lenguajes.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  langList : any[] = [];

  constructor(private languageService: LenguajesService) { }

  ngOnInit() {
    this.langList = this.languageService.getLang();
  }
  changeLang(event){
    console.log(event);
    this.languageService.setLang(event);
  }

}
