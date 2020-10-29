import { Component, Input, OnInit } from '@angular/core';
import { Imagen } from 'src/app/clases/imagen';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.scss'],
})
export class FotoComponent implements OnInit
{
  @Input() img: Imagen;

  constructor()
  {
  }

  ngOnInit() { }

}
