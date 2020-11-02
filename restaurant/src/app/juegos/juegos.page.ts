import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../servicios/utils.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit {

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
  }

  IrAhorcado(){
    this.utilsService.showLoadingAndNavigate('ahorcado');
  }

}
