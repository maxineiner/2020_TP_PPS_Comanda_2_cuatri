import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { from } from 'rxjs';
import { Storage } from '@ionic/storage';

const LNG_KEY = 'SELECTED_LANGUAGE';
const FLAG_KEY = 'SELECTED_FLAG';

@Injectable({
  providedIn: 'root'
})
export class LenguajesService {

  selected= '';

  constructor(private translate: TranslateService, private storage: Storage) { }

  initLang(){
    this.translate.addLangs(['es','en','fr','ru','al','po']);
    this.translate.setDefaultLang('es');
    this.storage.get(LNG_KEY).then(val => {

      let lang = 'es';
      if(val){
        lang = val;
      }

      this.setLang(lang);
      this.selected = lang; 
    });
    this.storage.get(FLAG_KEY).then(val => {
      if(!val){
        this.setFlag('ar');
      }
    })
  }

  getLang(){
    return [
      {text: 'lenguajes.paises.AR', value: 'es'},
      {text: 'lenguajes.paises.CH', value: 'es'},
      {text: 'lenguajes.paises.PE', value: 'es'},
      {text: 'lenguajes.paises.PA', value: 'es'},
      {text: 'lenguajes.paises.ME', value: 'es'},
      {text: 'lenguajes.paises.CR', value: 'es'},
      {text: 'lenguajes.paises.UR', value: 'es'},
      {text: 'lenguajes.paises.ES', value: 'es'},
      {text: 'lenguajes.paises.EU', value: 'en'},
      {text: 'lenguajes.paises.CA', value: 'en'},
      {text: 'lenguajes.paises.AU', value: 'en'},
      {text: 'lenguajes.paises.NZ', value: 'en'},
      {text: 'lenguajes.paises.FI', value: 'en'},
      {text: 'lenguajes.paises.FR', value: 'fr'},
      {text: 'lenguajes.paises.BE', value: 'fr'},
      {text: 'lenguajes.paises.BF', value: 'fr'},
      {text: 'lenguajes.paises.UC', value: 'ru'},
      {text: 'lenguajes.paises.RU', value: 'ru'},
      {text: 'lenguajes.paises.AL', value: 'al'},
      {text: 'lenguajes.paises.BR', value: 'po'},
      {text: 'lenguajes.paises.PO', value: 'po'},
    ];
  }

  setLang(lang){
    this.translate.use(lang);
    this.selected = lang;
    this.storage.set(LNG_KEY,lang)
  }

  selectLang(lang){
    let aux : any = this.getLang().filter((a)=> a.text === lang);
    this.setLang(aux[0].value);
  }

  setFlag(flag){
    return this.storage.set(FLAG_KEY,flag);
  }

  getFlag(){
    return this.storage.get(FLAG_KEY);
  }
}
