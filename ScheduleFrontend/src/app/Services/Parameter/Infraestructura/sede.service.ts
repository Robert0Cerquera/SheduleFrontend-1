import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sede } from '../../../models/M-Parameter/infraestructura/sede';

@Injectable({
  providedIn: 'root'
})
export class SedeService {
  private apiUrl = 'http://localhost:9000/base/api/v1/base/parameter/infraestructura/sede';

  constructor(private http: HttpClient) { }

  // Obtiene todas las sedes sin eliminar
  getSedesSinEliminar(): Observable<Sede[]> {
    return this.http.get<Sede[]>(`${this.apiUrl}/consultarRegistrosSinEliminar`);
  }

  // Crea una nueva sede
  createSede(sede: Sede): Observable<Sede> {
    return this.http.post<Sede>(this.apiUrl, sede);
  }

  // Actualiza una sede
  updateSede(sede: Sede): Observable<Sede> {
    return this.http.put<Sede>(`${this.apiUrl}/${sede.id}`, sede);
  }

  // Elimina visualmente una sede
  deleteSede(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
