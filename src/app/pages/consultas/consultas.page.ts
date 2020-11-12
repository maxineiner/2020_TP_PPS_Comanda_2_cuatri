import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { MensajesService } from 'src/app/services/mensajes.service';
import { UIVisualService } from 'src/app/services/uivisual.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit
{

  constructor(private platform: Platform, private mensajeService: MensajesService,
    private router: Router, private UIVisual: UIVisualService) 
  {
    this.platform.backButton.subscribeWithPriority(10, () =>
    {
      this.router.navigate(["/home/inicio"]);
    });
  }

  ngOnInit() 
  {
    UIVisualService.loading();
    this.mensajeService.leer();
  }

}
