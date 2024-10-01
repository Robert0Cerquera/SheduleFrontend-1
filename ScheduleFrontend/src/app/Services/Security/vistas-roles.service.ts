import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VistasRoles } from '../../models/M-Security/vistas-roles';


@Injectable({
  providedIn: 'root'
})
export class VistasRolesService {
  private apiUrl = 'http://localhost:9000/base/api/v1/base/security/vistas_roles';

  constructor(private http: HttpClient) { }

  getVistasRoles(): Observable<VistasRoles[]> {
    return this.http.get<VistasRoles[]>(this.apiUrl);
  }

  getVistasRolesSinEliminar(): Observable<VistasRoles[]> {
    return this.http.get<VistasRoles[]>(`${this.apiUrl}/consultarRegistrosSinEliminar`);
  }

  createVistasRoles(vistasRoles: VistasRoles): Observable<VistasRoles> {
    return this.http.post<VistasRoles>(this.apiUrl, vistasRoles);
  }

  updateVistasRoles(vistasRoles: VistasRoles): Observable<VistasRoles> {
    return this.http.put<VistasRoles>(`${this.apiUrl}/${vistasRoles.id}`, vistasRoles);
  }

  deleteVistasRoles(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
