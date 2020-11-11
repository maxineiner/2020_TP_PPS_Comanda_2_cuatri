import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-pedido-slide',
  templateUrl: './pedido-slide.component.html',
  styleUrls: ['./pedido-slide.component.scss'],
})
export class PedidoSlideComponent implements OnInit
{
  @Input() productos: Producto[] = [];
  slidesOptions = {
    slidesPerView: 2.2,
    spaceBetween: -10,
    freeMode: true
  };

  constructor() { }

  ngOnInit() { }

}
