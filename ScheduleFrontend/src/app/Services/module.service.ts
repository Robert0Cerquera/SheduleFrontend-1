import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
  

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private apiUrl = 'https://localhost:44375/ModulesControllers'; // URL de la API

  constructor(private http: HttpClient) {}

  // Método GET para obtener todos los módulos
  getModules(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Método POST para crear un nuevo módulo
  createModule(module: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, module, { headers });
  }

  // Método PUT para actualizar un módulo existente
  updateModule(id: number, module: any): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<void>(`${this.apiUrl}/${id}`, module, { headers });
  }

  // Método DELETE para eliminar un módulo
  deleteModule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  }
