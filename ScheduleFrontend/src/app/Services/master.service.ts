import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  
  private url = "http://localhost:9000/schedule/api/v1/schedule";

  constructor( private http : HttpClient ) { }

  listData(route: string){
    return this.http.get(`${this.url}/${route}`)
  }

  postData(route : string , id : any, data : any): Observable<any>{
    const headers = {"Content-Type": 'application/json'};
    if (id){
      return this.http.put<any>(`${this.url}${route}`, data, {headers});
    }
    return this.http.post<any>(`${this.url}${route}`, data, {headers});

  }
  Delete(route : string, id : number){
    return this.http.delete(`${this.url}${route}/${id}`);
  }
  

}
