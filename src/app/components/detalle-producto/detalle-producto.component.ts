import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Imagen } from 'src/app/clases/imagen';
import { Producto } from 'src/app/clases/producto';
import { UIVisualService } from 'src/app/services/uivisual.service';
import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss'],
})
export class DetalleProductoComponent implements OnInit
{
  @Input() producto: Producto;

  constructor(private popoverController: PopoverController, private UIVisual: UIVisualService) { }

  ngOnInit() { }

  async verFoto(ev: any, foto: Imagen)
  {
    UIVisualService.verFoto(ev, foto);
  }

}
