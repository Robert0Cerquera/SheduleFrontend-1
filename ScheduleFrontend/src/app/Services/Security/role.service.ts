import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../../models/Security/role'; // Asegúrate de ajustar la ruta del modelo

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private apiUrl = 'http://localhost:9000/base/api/v1/base/security/role';

  constructor(private http: HttpClient) { }

  // Método para obtener todos los roles
  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiUrl);
  }

  // Método para obtener un rol por ID
  getRoleById(id: number): Observable<Role> {
    return this.http.get<Role>(`${this.apiUrl}/${id}`);
  }

  // Método para crear un nuevo rol
  createRole(role: Role): Observable<Role> {
    return this.http.post<Role>(this.apiUrl, role);
  }

  // Método para actualizar un rol
  updateRole(role: Role): Observable<Role> {
    return this.http.put<Role>(`${this.apiUrl}/${role.id}`, role);
  }

  // Método para eliminar un rol por ID (soft delete)
  deleteRole(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
