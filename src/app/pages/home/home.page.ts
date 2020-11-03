import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clases/cliente';
import { IAuthenticable } from 'src/app/clases/IAuthenticable';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit
{
  // Código de prueba
  usuario: IAuthenticable = new Cliente();

  constructor(private rolService: RolesService) { }

  ngOnInit()
  {
  }


}
