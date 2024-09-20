import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Person } from '../models/person'; 

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrl = 'http://localhost:9000/base/api/v1/base/security/persona';

  constructor(private http: HttpClient) { }

  // Método para obtener todas las personas
  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Manejo de errores
  private handleError(error: any) {
    console.error('Error al obtener personas', error);
    return throwError('Error al comunicarse con el servidor, por favor intente nuevamente.');
  }

  // Otros métodos (getPersonById, createPerson, etc.)...
}
