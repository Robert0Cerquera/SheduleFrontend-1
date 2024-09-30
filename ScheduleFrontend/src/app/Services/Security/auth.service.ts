// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const USERNAME = 'juanpgm';  // Define aquí el usuario
const PASSWORD = '12345';    // Define aquí la contraseña

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:9000/base/api/v1/base/security/usuario/validar/datos';

  constructor(private http: HttpClient) {}

  login(): Observable<boolean> {
    let params = new HttpParams()
      .set('user', USERNAME)
      .set('password', PASSWORD);
    return this.http.get<boolean>(this.loginUrl, { params });
  }
}
