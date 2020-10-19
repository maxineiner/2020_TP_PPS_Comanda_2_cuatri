import { Component, Input, OnInit } from '@angular/core';
import { DatosMesa, Mesa } from 'src/app/clases/mesa';
import { MesaService } from 'src/app/services/mesa.service';

enum OpcionForm
{
  ALTA = "Alta",
  MODIFICACION = "Modificación",
  BAJA = "Baja"
}


@Component({
  selector: 'app-form-mesas',
  templateUrl: './form-mesas.component.html',
  styleUrls: ['./form-mesas.component.scss'],
})
export class FormMesasComponent implements OnInit {
  @Input() opcion: OpcionForm;
  @Input() mesa: Mesa;
  popoverOptions = {
    header: 'Seleccione el tipo',
    translucent: true,
    cancelText: "Cerrar",
    okText: "Guardar"
  }

  constructor(private mesaService: MesaService) { }

  ngOnInit() 
  {
  }

  sacarFoto()
  {

  }

  crearMesa()
  {
    this.mesa.datosQR = new DatosMesa( true , null, "Sin pedido");
    console.log("Crear Mesa");
    if(this.mesa)
    {
      this.mesaService.crear(this.mesa);
    }
  }

  modificarMesa()
  {
    console.log("Modificar Mesa");
    console.log(this.mesa);
    this.mesa.foto = "_";
    if(this.mesa)
    {
      this.mesaService.actualizar(this.mesa);
    }
  }

  borrarMesa()
  {
    console.log("Baja de mesa");
    if(this.mesa)
    {
      this.mesa.foto = "_";
      this.mesa.datosQR.isAvailable = false;
      this.mesaService.actualizar(this.mesa);
      // BAJA FISICA NO USAR
      //this.mesaService.borrar(this.mesa);
    }
  }

  submit()
  {
    console.log(this.mesa);
  }
}
