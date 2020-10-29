import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Imagen } from 'src/app/clases/imagen';
import { Producto } from 'src/app/clases/producto';
import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss'],
})
export class DetalleProductoComponent implements OnInit
{
  @Input() producto: Producto;

  constructor(private popoverController: PopoverController) { }

  ngOnInit() { }

  async presentPopover(ev: any, foto: Imagen)
  {
    console.log(ev);

    const popover = await this.popoverController.create({
      component: FotoComponent,
      animated: true,
      event: ev,
      translucent: false,
      componentProps: {
        img: foto
      }
    });

    await popover.present();
  }

}
