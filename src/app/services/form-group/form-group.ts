import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormGroupService {
  constructor(private http: HttpClient) { }

  login(formData: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/login', formData);
  }

  register(formData: any, csrf: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/register', formData, { headers: { 'X-CSRF-TOKEN': typeof csrf === 'object' ? csrf.token : csrf } });
  }

  logout(): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/logout', {});
  }
}
