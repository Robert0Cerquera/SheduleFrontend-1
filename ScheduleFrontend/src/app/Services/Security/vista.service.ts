import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vista } from '../../models/M-Security/vista';

@Injectable({
  providedIn: 'root'
})
export class VistaService {
  private apiUrl = 'http://localhost:9000/base/api/v1/base/security/vista';

  constructor(private http: HttpClient) { }

  getVistas(): Observable<Vista[]> {
    return this.http.get<Vista[]>(this.apiUrl);
  }

  getVistasSinEliminar(): Observable<Vista[]> {
    return this.http.get<Vista[]>(`${this.apiUrl}/consultarRegistrosSinEliminar`);
  }

  createVista(vista: Vista): Observable<Vista> {
    return this.http.post<Vista>(this.apiUrl, vista);
  }

  updateVista(vista: Vista): Observable<Vista> {
    return this.http.put<Vista>(`${this.apiUrl}/${vista.id}`, vista);
  }

  deleteVista(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
