import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Regional } from '../../../models/M-Parameter/infraestructura/regional';

@Injectable({
  providedIn: 'root'
})
export class RegionalService {
  private apiUrl = 'http://localhost:9000/base/api/v1/base/parameter/infraestructura/regional';

  constructor(private http: HttpClient) { }

  // Obtiene todas las regionales sin eliminar
  getRegionalesSinEliminar(): Observable<Regional[]> {
    return this.http.get<Regional[]>(`${this.apiUrl}/consultarRegistrosSinEliminar`);
  }

  // Crea una nueva regional
  createRegional(regional: Regional): Observable<Regional> {
    return this.http.post<Regional>(this.apiUrl, regional);
  }

  // Actualiza una regional existente
  updateRegional(regional: Regional): Observable<Regional> {
    return this.http.put<Regional>(`${this.apiUrl}/${regional.id}`, regional);
  }

  // Elimina visualmente una regional
  deleteRegional(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
