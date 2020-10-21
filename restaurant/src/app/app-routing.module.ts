import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ClientesAnonimosComponent } from './altas/clientes-anonimos/clientes-anonimos.component';
import { ClientesRegistradosComponent } from './altas/clientes-registrados/clientes-registrados.component';
import { SupervisorComponent } from './altas/supervisor/supervisor.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
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
    path: 'editar-usuario',
    loadChildren: () => import('./usuarios/editar-usuario/editar-usuario.module').then( m => m.EditarUsuarioPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
