import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/students';

  constructor(private http: HttpClient) {}

  addStudent(student: any): Observable<any> {
    return this.http.post(this.apiUrl, student);
  }
}
