import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:9000/base/api/v1/base/security/usuario';

  constructor(private http: HttpClient) {}

  login(user: string, password: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/validar/datos?user=${user}&password=${password}`);
  }

  getPermisos(user: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/validar/permisos?user=${user}`);
  }
}