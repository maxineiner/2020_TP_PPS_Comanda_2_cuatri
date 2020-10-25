import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/servicios/utils.service';
import { MesaService } from 'src/app/servicios/mesa.service';
import { Mesa } from 'src/app/clases/mesa';
import { EditarMesaPage } from './editar-mesa/editar-mesa.page';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.page.html',
  styleUrls: ['./mesas.page.scss'],
})
export class MesasPage implements OnInit {
  listaMesas: any;

  constructor(
    public mesaService: MesaService,
    private utilsService: UtilsService,
    private location:Location
  ) { }

  ngOnInit() {
    this.obtenerMesas();
  }

  public volver(): void {
    this.location.back();
  }

  obtenerMesas() {
    this.utilsService.presentLoading();
    this.mesaService.obtenerMesas().subscribe(mesas => {
      this.utilsService.dismissLoading();
      console.log(mesas);
      this.listaMesas = mesas;
    }, error => console.log(error));
  }

  agregarMesa() {
    this.utilsService.showLoadingAndNavigate('mesas/alta-mesa');
  }

  editarMesa(mesa: Mesa) {
    const callback = (m: Mesa) => this.mesaService.actualizarMesa(m);
    this.utilsService.presentModal(EditarMesaPage, { mesa, callback });
  }

  eliminarMesa(mesa: Mesa) {
    const callback = () => this.mesaService.borrarMesa(mesa);
    this.utilsService.presentAlertConfirm('Atención', '¿Estás seguro que deseas borrar esta mesa?', callback);
  }

}
