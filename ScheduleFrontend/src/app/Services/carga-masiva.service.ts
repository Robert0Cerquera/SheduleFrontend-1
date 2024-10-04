import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargaMasivaService {

  private apiUrl = 'http://localhost:9000/base/api/carga-masiva/usuarios';

  constructor(private http: HttpClient) {}

  subirArchivo(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    const headers = new HttpHeaders();
    headers.append('enctype', 'multipart/form-data');

    return this.http.post(this.apiUrl, formData, { headers });
  }
}
