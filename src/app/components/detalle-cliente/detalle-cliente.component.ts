import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clases/cliente';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.scss'],
})
export class DetalleClienteComponent implements OnInit
{
  @Input() cliente: Cliente;

  constructor() { }

  ngOnInit() { }

  //TODO: tomar foto del cliente
  sacarFoto()
  {
    console.log("Sacar foto");
  }
}