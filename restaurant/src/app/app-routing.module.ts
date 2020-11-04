import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ClientesAnonimosComponent } from './altas/clientes-anonimos/clientes-anonimos.component';
import { ClientesRegistradosComponent } from './altas/clientes-registrados/clientes-registrados.component';
import { SupervisorComponent } from './altas/supervisor/supervisor.component';
import { HomeComponent } from './home/home.component';
import { InicioPage } from './inicio/inicio.page';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'inicio', component: InicioPage }, 
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then(m => m.ProductosPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'mesas',
    loadChildren: () => import('./mesas/mesas.module').then(m => m.MesasPageModule)
  },
  {
    path: 'propinas',
    loadChildren: () => import('./propinas/propinas.module').then(m => m.PropinasPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./notificaciones/notificaciones.module').then(m => m.NotificacionesPageModule)
  },
  {
    path: 'altaDueñoSupervisor',
    component:SupervisorComponent
  },
  {
    path: 'alta-usuarios',
    loadChildren: () => import('./usuarios/alta-usuarios/alta-usuarios.module').then( m => m.AltaUsuariosPageModule)
  },
  {
    path: 'pendientes',
    loadChildren: () => import('./home/pendientes/pendientes.module').then( m => m.PendientesPageModule)
  },
  {
    path: 'editar-usuario',
    loadChildren: () => import('./usuarios/editar-usuario/editar-usuario.module').then( m => m.EditarUsuarioPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'clientes-espera',
    loadChildren: () => import('./home/clientes-espera/clientes-espera.module').then(m => m.ClientesEsperaPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./home/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'mozo',
    loadChildren: () => import('./mozo/mozo.module').then( m => m.MozoPageModule)
  },
  {
    path: 'ahorcado',
    loadChildren: () => import('./juegos/ahorcado/ahorcado.module').then( m => m.AhorcadoPageModule)
  },
  {
    path: 'juegos',
    loadChildren: () => import('./juegos/juegos.module').then( m => m.JuegosPageModule)
  },
  {
    path: 'ahorcado',
    loadChildren: () => import('./juegos/ahorcado/ahorcado.module').then( m => m.AhorcadoPageModule)
  },  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },




  /*
  {
    //path: 'finalizados',
    //loadChildren: () => import('./finalizados/finalizados.module').then( m => m.FinalizadosPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  
  {
    path: 'encuesta',
    loadChildren: () => import('./encuesta/encuesta.module').then( m => m.EncuestaPageModule)
  }*/

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
