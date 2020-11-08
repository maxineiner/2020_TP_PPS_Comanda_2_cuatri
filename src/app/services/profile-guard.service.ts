import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../clases/cliente';
import { Empleado, TipoEmpleado } from '../clases/empleado';
import { Jefe, TipoJefe } from '../clases/jefe';
import { Usuario } from '../clases/usuario';
import { AuthService } from './auth.service';
import { RolesService } from './roles.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuardService implements CanActivate
{
  usuario: Usuario;

  constructor(private router: Router, private rolesService: RolesService) { }

  /**
  * Método para validar navegación según perfil del Usuario
  * @param route La ruta hacia la cual se desea navegar
  */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
  {
    this.usuario = AuthService.usuario;
    let activar: boolean = false;
    let ruta;
    // Sólo a modo de ejemplo
    console.log(state);


    if (state)
    {
      ruta = state.url;
      console.log(ruta);


      switch (ruta)
      {
        case "/home/inicio":
          activar = true;
          break;
        case "/home/tab1":
          // Esto cambiaría con el servicio de Roles / Perfiles
          // if (this.rolesService.isJefe(this.usuario))
          // {
          // Se deja habilitado el tab de testing para todos los usuarios
          activar = true;
          // }
          break;
        case "/home/tab2":
          if (this.rolesService.isCliente(this.usuario))
          {
            activar = true;
          }
          break;
        case "/home/tab3":
          if (this.rolesService.isEmpleado(this.usuario))
          {
            activar = true;
          }
          break;
        // Acá se agregarían rutas restantes a validar
      }
    }

    // Se puede navegar a una página definida para caso que no cumpla la validacion
    //this.router.navigate(["tabs"]);

    return activar;
  }







}
