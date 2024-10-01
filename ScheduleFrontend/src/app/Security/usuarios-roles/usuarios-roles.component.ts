import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../../models/M-Security/persona';
import { Usuario } from '../../models/M-Security/usuario';

@Injectable({
  providedIn: 'root'
})
export class PersonaUsuarioService {
  private apiPersonaUrl = 'http://localhost:9000/base/api/v1/base/security/persona';
  private apiUsuarioUrl = 'http://localhost:9000/base/api/v1/base/security/usuario';

  constructor(private http: HttpClient) {}

  // Persona CRUD
  createPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.apiPersonaUrl, persona);
  }

  updatePersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.apiPersonaUrl}/${persona.id}`, persona);
  }

  // Usuario CRUD
  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUsuarioUrl, usuario);
  }

  updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUsuarioUrl}/${usuario.id}`, usuario);
  }
  
  getUsuariosSinEliminar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUsuarioUrl}/consultarRegistrosSinEliminar`);
  }

  getPersonasSinEliminar(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.apiPersonaUrl}/consultarRegistrosSinEliminar`);
  }
}
