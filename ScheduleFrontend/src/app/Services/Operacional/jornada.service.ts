import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jornada } from '../../models/M-Operacional/jornada';


@Injectable({
  providedIn: 'root'
})
export class JornadaService {
  private apiUrl = 'http://localhost:9000/base/api/v1/base/operational/gestion_horario/jornada';

  constructor(private http: HttpClient) { }

  getJornadas(): Observable<Jornada[]> {
    return this.http.get<Jornada[]>(this.apiUrl);
  }

  getJornadasSinEliminar(): Observable<Jornada[]> {
    return this.http.get<Jornada[]>(`${this.apiUrl}/consultarRegistrosSinEliminar`);
  }

  createJornada(jornada: Jornada): Observable<Jornada> {
    return this.http.post<Jornada>(this.apiUrl, jornada);
  }

  updateJornada(jornada: Jornada): Observable<Jornada> {
    return this.http.put<Jornada>(`${this.apiUrl}/${jornada.id}`, jornada);
  }

  deleteJornada(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
