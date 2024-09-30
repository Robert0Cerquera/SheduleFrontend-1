// services/Parameter/Ubicacion/pais.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../../../models/Parameter/Ubicacion/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl = 'http://localhost:9000/base/api/v1/base/parameter/ubicacion/pais';

  constructor(private http: HttpClient) { }

  getPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.apiUrl);
  }

  getPaisSinEliminar(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.apiUrl+"/consultarRegistrosSinEliminar");
  }
  createPais(pais: Pais): Observable<Pais> {
    return this.http.post<Pais>(this.apiUrl, pais);
  }

  updatePais(pais: Pais): Observable<Pais> {
    return this.http.put<Pais>(`${this.apiUrl}/${pais.id}`, pais);
  }

  deletePais(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
