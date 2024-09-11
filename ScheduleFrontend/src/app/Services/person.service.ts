import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Person } from '../models/person'; // Ajusta la ruta si es necesario

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrl = 'http://localhost:9000/base/api/v1/base/security/persona';

  constructor(private http: HttpClient) { }

  // Método para obtener todas las personas
  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  // Método para obtener una persona por ID
  getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/${id}`);
  }

  // Método para crear una nueva persona
  createPerson(persona: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, persona);
  }

  // Método para actualizar una persona
  updatePerson(person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.apiUrl}/${person.id}`, person);
  }

  // Método para eliminar una persona por ID
  deletePerson(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
