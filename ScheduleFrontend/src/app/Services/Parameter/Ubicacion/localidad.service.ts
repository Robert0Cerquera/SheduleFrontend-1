import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Localidad } from '../../../models/Parameter/Ubicacion/localidad';

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {
  private apiUrl = 'http://localhost:9000/base/api/v1/base/parameter/ubicacion/localidad';

  constructor(private http: HttpClient) { }

  getLocalidades(): Observable<Localidad[]> {
    return this.http.get<Localidad[]>(this.apiUrl);
  }
  
  getLocalidadesSinEliminar(): Observable<Localidad[]> {
    return this.http.get<Localidad[]>(`${this.apiUrl}/consultarRegistrosSinEliminar`);
  }

  createLocalidad(localidad: Localidad): Observable<Localidad> {
    return this.http.post<Localidad>(this.apiUrl, localidad);
  }

  updateLocalidad(localidad: Localidad): Observable<Localidad> {
    return this.http.put<Localidad>(`${this.apiUrl}/${localidad.id}`, localidad);
  }

  deleteLocalidad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
