import { Injectable } from '@angular/core';
import { studentInterface } from '../student-model';
import { studentArray } from '../components/mock-student';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://localhost:5000/student';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getStudentFromService(): Observable<studentInterface[]> {
    return this.http.get<studentInterface[]>(this.apiUrl);
  }

  deleteStudentFromService(
    studentToBeDeleted: studentInterface
  ): Observable<studentInterface> {
    const url = `${this.apiUrl}/${studentToBeDeleted.id}`;
    return this.http.delete<studentInterface>(url);
  }

  addStudentFromService(
    studentToBeAdded: studentInterface
  ): Observable<studentInterface> {
    return this.http.post<studentInterface>(
      this.apiUrl,
      studentToBeAdded,
      this.httpOptions
    );
  }
}
