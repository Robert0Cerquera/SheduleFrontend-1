import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CentroFormacion } from '../../../models/M-Parameter/infraestructura/centro-formacion';

@Injectable({
  providedIn: 'root'
})
export class CentroFormacionService {
  private apiUrl = 'http://localhost:9000/base/api/v1/base/parameter/infraestructura/centro_formacion';

  constructor(private http: HttpClient) { }

  // Obtiene todos los centros de formación sin eliminar
  getCentrosFormacionSinEliminar(): Observable<CentroFormacion[]> {
    return this.http.get<CentroFormacion[]>(`${this.apiUrl}/consultarRegistrosSinEliminar`);
  }

  // Crea un nuevo centro de formación
  createCentroFormacion(centroFormacion: CentroFormacion): Observable<CentroFormacion> {
    return this.http.post<CentroFormacion>(this.apiUrl, centroFormacion);
  }

  // Actualiza un centro de formación existente
  updateCentroFormacion(centroFormacion: CentroFormacion): Observable<CentroFormacion> {
    return this.http.put<CentroFormacion>(`${this.apiUrl}/${centroFormacion.id}`, centroFormacion);
  }

  // Elimina visualmente un centro de formación
  deleteCentroFormacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
