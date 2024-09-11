import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = "http://localhost:9000/base/api/v1/base/security/usuario"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    // Establecer las fechas actuales para creación y actualización
    const userToCreate = {
      ...user,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    return this.http.post<User>(this.apiUrl, userToCreate);
  }

  updateUser(id: number, user: User): Observable<User> {
    // Establecer la fecha actual para la actualización
    const userToUpdate = {
      ...user,
      updatedAt: new Date().toISOString()
    };
    return this.http.put<User>(`${this.apiUrl}/${id}`, userToUpdate);
  }

  deleteUser(id: number): Observable<void> {
    // Para mantener el registro en lugar de eliminarlo, establecer la fecha de eliminación
    return this.http.patch<void>(`${this.apiUrl}/${id}`, { deletedAt: new Date().toISOString() });
  }
}
