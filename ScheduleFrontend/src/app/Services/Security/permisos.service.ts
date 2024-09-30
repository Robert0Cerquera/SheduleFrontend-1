// permisos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {
  private permisosUrl = 'http://localhost:9000/base/api/v1/base/security/usuario/validar/permisos';

  constructor(private http: HttpClient) {}

  getPermisos(user: string): Observable<any[]> {
    let params = new HttpParams().set('User', user);
    return this.http.get<any[]>(this.permisosUrl, { params });
  }
}
