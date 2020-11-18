import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Cliente } from 'src/app/clases/cliente';
import { Empleado } from 'src/app/clases/empleado';
import { Usuario } from 'src/app/clases/usuario';
import { ClienteService } from 'src/app/services/cliente.service';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-popover-usuarios',
  templateUrl: './popover-usuarios.component.html',
  styleUrls: ['./popover-usuarios.component.scss'],
})
export class PopoverUsuariosComponent implements OnInit
{
  empleados: Empleado[] = EmpleadoService.empleados;
  clientes: Cliente[] = ClienteService.clientes;
  @Input() modo: string;
  usuarioSeleccionado: Usuario;

  constructor(private popoverController: PopoverController) { }

  ngOnInit() 
  {
    console.log(this.modo);
  }

  seleccionar(usuario)
  {
    console.log(usuario);

    this.usuarioSeleccionado = usuario;
    this.popoverController.dismiss(this.usuarioSeleccionado);
  }

}
