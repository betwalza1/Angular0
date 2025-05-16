import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

  login(): void {
    this.auth.login();
    this.router.navigate(['/dashboard']);
  }
}
