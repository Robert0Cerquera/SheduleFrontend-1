import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuariosRoles } from '../../models/M-Security/usuarios-roles';

@Injectable({
  providedIn: 'root'
})
export class UsuariosRolesService {
  private apiUrl = 'http://localhost:9000/base/api/v1/base/security/usuarios_roles';

  constructor(private http: HttpClient) { }

  getUsuariosRoles(): Observable<UsuariosRoles[]> {
    return this.http.get<UsuariosRoles[]>(this.apiUrl);
  }

  getUsuariosRolesSinEliminar(): Observable<UsuariosRoles[]> {
    return this.http.get<UsuariosRoles[]>(`${this.apiUrl}/consultarRegistrosSinEliminar`);
  }

  createUsuariosRoles(usuariosRoles: UsuariosRoles): Observable<UsuariosRoles> {
    return this.http.post<UsuariosRoles>(this.apiUrl, usuariosRoles);
  }

  updateUsuariosRoles(usuariosRoles: UsuariosRoles): Observable<UsuariosRoles> {
    return this.http.put<UsuariosRoles>(`${this.apiUrl}/${usuariosRoles.id}`, usuariosRoles);
  }

  deleteUsuariosRoles(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
