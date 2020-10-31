import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ClienteAuth } from '../../clases/cliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit
{
  clienteAuth: ClienteAuth = new ClienteAuth

  // constructor(private authService: AuthService, private router: Router) { }
  constructor(private authService: AuthService) { }

  ngOnInit()
  {
  }

  async onLogin()
  {
    const clienteAuth = await this.authService.onLogin(this.clienteAuth);

    if (clienteAuth)
    {
      console.log('Cliente logueado!');
      // this.router.navigateByUrl('/home');
    }
  }
}