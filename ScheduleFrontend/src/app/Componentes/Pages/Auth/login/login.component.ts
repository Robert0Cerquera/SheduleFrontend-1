// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../Services/Jwt/auth-service.service'; // Importa el AuthService
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = ''; // Para almacenar mensajes de error

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService // Inyecta el AuthService
  ) {
    // Inicializa el formulario con validaciones
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Llama al método login del AuthService con las credenciales del usuario
      this.authService.login(username, password);

      // Si hay algún error, lo manejas aquí, por ejemplo:
      this.authService.token$.subscribe({
        error: (error) => {
          this.errorMessage = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
        }
      });
    }
  }
}
