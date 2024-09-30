import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ciudad } from '../../../models/Parameter/Ubicacion/ciudad'; // Ajusta la ruta del modelo según la estructura del proyecto

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  private apiUrl = 'http://localhost:9000/base/api/v1/base/parameter/ubicacion/ciudad';

  constructor(private http: HttpClient) { }

  getCiudades(): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(this.apiUrl);
  }

  getCiudadesByDepartamento(departamentoId: number): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(`${this.apiUrl}?departamentoId=${departamentoId}`);
  }

  getCiudadById(id: number): Observable<Ciudad> {
    return this.http.get<Ciudad>(`${this.apiUrl}/${id}`);
  }

  createCiudad(ciudad: Ciudad): Observable<Ciudad> {
    return this.http.post<Ciudad>(this.apiUrl, ciudad);
  }

  updateCiudad(ciudad: Ciudad): Observable<Ciudad> {
    return this.http.put<Ciudad>(`${this.apiUrl}/${ciudad.id}`, ciudad);
  }

  deleteCiudad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
