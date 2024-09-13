import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Vista } from '../models/vista'; // Ajusta la ruta si es necesario

@Injectable({
  providedIn: 'root'
})
export class VistaService {

  private apiUrl = 'http://localhost:9000/base/api/v1/base/security/vista';

  constructor(private http: HttpClient) { }

  // Método para obtener todas las vistas
  getVistas(): Observable<Vista[]> {
    return this.http.get<Vista[]>(this.apiUrl);
  }

  // Método para obtener una vista por ID
  getVistaById(id: number): Observable<Vista> {
    return this.http.get<Vista>(`${this.apiUrl}/${id}`);
  }

  // Método para crear una nueva vista
  createVista(vista: Vista): Observable<Vista> {
    return this.http.post<Vista>(this.apiUrl, vista);
  }

  // Método para actualizar una vista
  updateVista(vista: Vista): Observable<Vista> {
    return this.http.put<Vista>(`${this.apiUrl}/${vista.id}`, vista);
  }

  // Método para eliminar una vista por ID
  deleteVista(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
