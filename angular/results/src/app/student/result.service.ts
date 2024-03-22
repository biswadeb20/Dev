import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private apiUrl = 'http://localhost:5000/students/'; 

  constructor(private http: HttpClient) { }

  getResult(rollNumber: string): Observable<any> {
    // Make the API call to fetch the result based on roll number and date of birth
    return this.http.get(`${this.apiUrl}${rollNumber}`);
  }
}
