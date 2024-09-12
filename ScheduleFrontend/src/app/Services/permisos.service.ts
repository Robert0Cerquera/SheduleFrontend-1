import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PermisosService {

  private apiUrl = ' http://localhost:9000/base/api/v1/base/security/usuario/validar/permisos?User=miguelatm '; // Coloca aquí la URL de tu backend

  constructor(private http: HttpClient) {}

  getPermisos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
