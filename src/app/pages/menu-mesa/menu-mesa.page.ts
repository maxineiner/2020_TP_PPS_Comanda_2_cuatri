import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mesa } from 'src/app/clases/mesa';
import { MesaService } from 'src/app/services/mesa.service';

@Component({
  selector: 'app-menu-mesa',
  templateUrl: './menu-mesa.page.html',
  styleUrls: ['./menu-mesa.page.scss'],
})
export class MenuMesaPage implements OnInit, DoCheck {
  opcion: string = 'Listado';
  listado: Mesa[] = MesaService.mesas;
  mesaElegida: Mesa = new Mesa();
  

  constructor(private router: Router, private mesaService: MesaService) { }

  ngDoCheck(): void {
    this.listado = MesaService.mesas;
  }

  ngOnInit() 
  {
    console.log("INIT");

    this.mesaService.leer().then((mesas) =>{
      console.log(mesas);
      this.listado = mesas;
      console.log(this.listado);
    });
    this.mesaElegida = new Mesa();
  }

  seleccionarOpcion(event)
  {
    console.log(event.detail.value);
    this.opcion = event.detail.value;
  }

  elegirMesa(event)
  {
    console.log(event);
    this.mesaElegida = event;
  }

}
