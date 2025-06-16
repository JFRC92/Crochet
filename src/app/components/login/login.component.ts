import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, LogoComponent,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = { email: '', password: '', rememberMe: false };
  showPassword = false;
  isSubmitting = false;
  showErrorMessage = false;
  errorMessage = '';

  constructor(private router: Router) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onLogin(): void {
    this.isSubmitting = true;
    this.showErrorMessage = false;

    setTimeout(() => {
      // Simulación de login local
      if (
        this.loginData.email === 'test@email.com' &&
        this.loginData.password === '123456'
      ) {
        // Redirige a la ruta que desees, por ejemplo, al dashboard
        this.router.navigate(['/dashboard']);
      } else {
        this.showErrorMessage = true;
        this.errorMessage = 'Credenciales inválidas. Prueba con test@email.com / 123456';
      }
      this.isSubmitting = false;
    }, 1000);
  }
}

