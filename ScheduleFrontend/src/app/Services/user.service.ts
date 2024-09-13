import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { User } from '../models/user'
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = "http://localhost:9000/base/api/v1/base/usuario/"
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id:number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}${id}`);
  }

  createUser(User: User): Observable<User> {
    return this.http.post<User>(this.apiUrl,User);
  }

  updateUser(id:number, User: User): Observable<User>{
    return this.http.put<User> (`${this.apiUrl}${id}`, User);
  }

  deleteUser(id:number): Observable <void> {
    return this.http.delete<void> (`${this.apiUrl}${id}`);
  }
}