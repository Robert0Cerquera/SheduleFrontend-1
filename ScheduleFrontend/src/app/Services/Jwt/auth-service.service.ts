// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

interface AuthResponse {
  jwt: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:9000/base/api/v1/auth/login'; // Ajusta la URL del backend
  private tokenSubject = new BehaviorSubject<string | null>(this.getToken()); // Inicializa con el token de localStorage si está presente
  public token$ = this.tokenSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  // Método para iniciar sesión
  login(username: string, password: string) {
    return this.http.post<AuthResponse>(`${this.apiUrl}`, { username, password })
      .subscribe(response => {
        this.tokenSubject.next(response.jwt); // Actualiza el token
        localStorage.setItem('token', response.jwt); // Guarda el token en localStorage
        this.router.navigate(['/dashboard']); // Redirige al home después de iniciar sesión
      }, error => {
        console.error('Error en el inicio de sesión', error);
      });
  }

  // Método para cerrar sesión
  logout() {
    this.tokenSubject.next(null); // Borra el token del BehaviorSubject
    localStorage.removeItem('token'); // Elimina el token de localStorage
    this.router.navigate(['/login']); // Redirige al login
  }

  // Método para obtener el token actual desde localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!this.getToken(); // Devuelve true si hay un token
  }
}
