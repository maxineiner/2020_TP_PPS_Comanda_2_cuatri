import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Cliente } from '../clases/cliente';
import { Empleado, TipoEmpleado } from '../clases/empleado';
import { Jefe, TipoJefe } from '../clases/jefe';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuardService
{

  constructor(private router: Router) { }

  /**
   * Método para validar navegación según perfil del Usuario
   * @param route La ruta hacia la cual se desea navegar
   */
  canActivate(route: ActivatedRouteSnapshot): boolean
  {
    let activar: boolean = false;
    let ruta = route.url[0].path;
    // Sólo a modo de ejemplo
    let usuario = new Empleado();
    let perfil = this.getProfile(usuario);

    console.log(perfil);
    console.log(ruta);

    switch (ruta)
    {
      case "tab1":
        // Esto cambiaría con el servicio de Roles / Perfiles
        if (perfil == "Empleado" || perfil == TipoEmpleado.Bartender ||
          perfil == TipoEmpleado.Cocinero || perfil == TipoEmpleado.Mozo)
        {
          activar = true;
        }
        break;
      case "tab2":
        if (perfil == "Jefe" || perfil == TipoJefe.Supervisor || perfil == TipoJefe.Dueno)
        {
          activar = true;
        }
        break;
      case "tab3":
        if (perfil == "Cliente" || perfil == TipoEmpleado.Mozo)
        {
          activar = true;
        }
        break;
      // Acá se agregarían rutas restantes a validar
    }

    // Se puede navegar a una página definida para caso que no cumpla la validacion
    //this.router.navigate(["tabs"]);

    return activar;
  }

  getProfile(usuario: Usuario)
  {
    if (usuario instanceof Cliente)
    {
      return "Cliente";
    }

    if (usuario instanceof Empleado)
    {
      switch (usuario.tipo)
      {
        case TipoEmpleado.Mozo:
          return TipoEmpleado.Mozo;
          break;
        case TipoEmpleado.Bartender:
          return TipoEmpleado.Bartender;
          break;
        case TipoEmpleado.Cocinero:
          return TipoEmpleado.Cocinero;
          break;
        default:
          return "Empleado";
          break;
      }
    }

    if (usuario instanceof Jefe)
    {
      switch (usuario.tipo)
      {
        case TipoJefe.Supervisor:
          return TipoJefe.Supervisor;
          break;
        case TipoJefe.Dueno:
          return TipoJefe.Dueno;
          break;
        default:
          return "Jefe";
          break;
      }
    }

  }
}
