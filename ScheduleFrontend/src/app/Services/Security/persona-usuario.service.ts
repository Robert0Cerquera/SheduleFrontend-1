import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Persona } from '../../models/M-Security/persona';
import { Usuario } from '../../models/M-Security/usuario';

@Injectable({
  providedIn: 'root'
})
export class PersonaUsuarioService {
  private personaApiUrl = 'http://localhost:9000/base/api/v1/base/security/persona';
  private usuarioApiUrl = 'http://localhost:9000/base/api/v1/base/security/usuario';

  constructor(private http: HttpClient) {}

  // Obtener todas las personas
  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.personaApiUrl);
  }

  // Obtener todas las personas sin eliminar
  getPersonasSinEliminar(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.personaApiUrl}/consultarRegistrosSinEliminar`);
  }

  // Crear una nueva persona y usuario asociados
  createPersonaUsuario(persona: Persona, usuarioName: string, contrasenia: string): Observable<{ persona: Persona, usuario: Usuario }> {
    return new Observable((observer) => {
      this.http.post<Persona>(this.personaApiUrl, persona).subscribe(
        (createdPersona) => {
          const usuario: Usuario = {
            id: createdPersona.id,
            usuarioName,
            contrasenia,
            personaId: createdPersona,
            state: createdPersona.state,
            createdAt: createdPersona.createdAt,
            updatedAt: createdPersona.updatedAt
          };

          this.http.post<Usuario>(this.usuarioApiUrl, usuario).subscribe(
            (createdUsuario) => {
              observer.next({ persona: createdPersona, usuario: createdUsuario });
              observer.complete();
            },
            (error) => observer.error(error)
          );
        },
        (error) => observer.error(error)
      );
    });
  }

  // Actualizar una persona y usuario asociados
  updatePersonaUsuario(persona: Persona, usuario: Usuario): Observable<{ persona: Persona, usuario: Usuario }> {
    return forkJoin({
      persona: this.http.put<Persona>(`${this.personaApiUrl}/${persona.id}`, persona),
      usuario: this.http.put<Usuario>(`${this.usuarioApiUrl}/${usuario.id}`, usuario)
    });
  }

  // Eliminar una persona y usuario
  deletePersonaUsuario(id: number): Observable<void> {
    return new Observable((observer) => {
      // Primero elimina el usuario
      this.http.delete<void>(`${this.usuarioApiUrl}/${id}`).subscribe(
        () => {
          // Luego elimina la persona
          this.http.delete<void>(`${this.personaApiUrl}/${id}`).subscribe(
            () => {
              observer.next();
              observer.complete();
            },
            (error) => observer.error(error)
          );
        },
        (error) => observer.error(error)
      );
    });
  }
}
