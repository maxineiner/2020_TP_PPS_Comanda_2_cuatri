import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ClienteLogin } from '../../clases/cliente';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit
{
  clienteLogin: ClienteLogin = new ClienteLogin

  // constructor(private authService: AuthService, private router: Router) { }
  constructor(private authService: AuthService) { }

  ngOnInit()
  {
  }

  async onRegister()
  {
    const user = await this.authService.onRegister(this.clienteLogin);

    if (user)
    {
      console.log('Cliente created!!!');
      // this.router.navigateByUrl('/');
    }
  }

}
