import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ClienteLogin } from '../../clases/cliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit
{
  clienteLogin: ClienteLogin = new ClienteLogin

  // constructor(private authService: AuthService, private router: Router) { }
  constructor(private authService: AuthService) { }

  ngOnInit()
  {
  }

  async onLogin()
  {
    const clienteLogin = await this.authService.onLogin(this.clienteLogin);

    if (clienteLogin)
    {
      console.log('Cliente logueado!');
      // this.router.navigateByUrl('/home');
    }
  }
}