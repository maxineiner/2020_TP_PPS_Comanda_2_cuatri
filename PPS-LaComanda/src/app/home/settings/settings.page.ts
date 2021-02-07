import { Component, OnInit } from '@angular/core';
import { LenguajesService } from '../../servicios/lenguajes.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  lang : string = '';
  langList : any[]= [
    {text: 'lenguajes.paises.AR', value: 'ar'},
      {text: 'lenguajes.paises.CH', value: 'ch'},
      {text: 'lenguajes.paises.PE', value: 'pe'},
      {text: 'lenguajes.paises.PA', value: 'pa'},
      {text: 'lenguajes.paises.ME', value: 'mx'},
      {text: 'lenguajes.paises.CR', value: 'cr'},
      {text: 'lenguajes.paises.UR', value: 'uy'},
      {text: 'lenguajes.paises.ES', value: 'es'},

      {text: 'lenguajes.paises.EU', value: 'us'},
      {text: 'lenguajes.paises.CA', value: 'ca'},
      {text: 'lenguajes.paises.AU', value: 'au'},
      {text: 'lenguajes.paises.NZ', value: 'nz'},
      {text: 'lenguajes.paises.FI', value: 'ph'},

      {text: 'lenguajes.paises.FR', value: 'fr'},
      {text: 'lenguajes.paises.BE', value: 'bj'},
      {text: 'lenguajes.paises.BF', value: 'bf'},

      {text: 'lenguajes.paises.UC', value: 'ua'},
      {text: 'lenguajes.paises.RU', value: 'ru'},

      {text: 'lenguajes.paises.AL', value: 'de'},

      {text: 'lenguajes.paises.BR', value: 'br'},
      {text: 'lenguajes.paises.PO', value: 'pt'},
  ];
  

  constructor(private languageService: LenguajesService) { }

  ngOnInit() {
    this.languageService.getFlag().then(val => {
      this.lang = val
    });
  }
  changeLang(event){
    console.log(event);
    this.languageService.setFlag(event.value);
    this.languageService.selectLang(event.text);
    this.lang = event.value;
  }


}
