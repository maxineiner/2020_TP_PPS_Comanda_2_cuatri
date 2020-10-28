import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash/splash.component';
import { HeaderComponent } from './header/header.component';
import { FormMesasComponent } from './form-mesas/form-mesas.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoMesasComponent } from './listado-mesas/listado-mesas.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { PipesModule } from '../pipes/pipes.module';
import { DetalleMesaComponent } from './detalle-mesa/detalle-mesa.component';

// Usuarios
import { FormEmpleadosComponent } from './form-empleados/form-empleados.component';
import { ListadoEmpleadosComponent } from './listado-empleados/listado-empleados.component';
import { DetalleEmpleadoComponent } from './detalle-empleado/detalle-empleado.component';
import { FormReservaComponent } from './form-reserva/form-reserva.component';
import { ListadoReservasComponent } from './listado-reservas/listado-reservas.component';

import { FormJefesComponent } from './form-jefes/form-jefes.component';
import { ListadoJefesComponent } from './listado-jefes/listado-jefes.component';
import { DetalleJefeComponent } from './detalle-jefe/detalle-jefe.component';
import { ListadoPedidosComponent } from './listado-pedidos/listado-pedidos.component';
import { FormPedidoComponent } from './form-pedido/form-pedido.component';
import { DetallePedidoComponent } from './detalle-pedido/detalle-pedido.component';

@NgModule({
  declarations: [
    SplashComponent,
    HeaderComponent,
    // Mesa
    DetalleMesaComponent,
    FormMesasComponent,
    ListadoMesasComponent,
    // Productos
    FormProductoComponent,
    ListadoProductosComponent,
    //Reservas
    FormReservaComponent,
    ListadoReservasComponent,
    // Usuarios
    FormEmpleadosComponent,
    ListadoEmpleadosComponent,
    DetalleEmpleadoComponent,
    FormJefesComponent,
    ListadoJefesComponent,
    DetalleJefeComponent,
    //Pedidos
    ListadoPedidosComponent,
    FormPedidoComponent,
    DetallePedidoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [
    SplashComponent,
    HeaderComponent,
    // Mesa
    FormMesasComponent,
    DetalleMesaComponent,
    ListadoMesasComponent,
    //Reservas
    FormReservaComponent,
    ListadoReservasComponent,
    // Producto
    ListadoProductosComponent,
    FormProductoComponent,
    // Usuarios
    FormEmpleadosComponent,
    ListadoEmpleadosComponent,
    DetalleEmpleadoComponent,
    FormJefesComponent,
    ListadoJefesComponent,
    DetalleJefeComponent,
    //Pedidos
    ListadoPedidosComponent,
    FormPedidoComponent,
    DetallePedidoComponent
  ]
})
export class ComponentsModule { }