import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ClienteAuth } from '../../clases/cliente';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit
{
  clienteAuth: ClienteAuth = new ClienteAuth

  // constructor(private authService: AuthService, private router: Router) { }
  constructor(private authService: AuthService) { }

  ngOnInit()
  {
  }

  async onRegister()
  {
    const user = await this.authService.onRegister(this.clienteAuth);

    if (user)
    {
      console.log('Cliente creado!!!');
      // this.router.navigateByUrl('/');
    }
  }

}
