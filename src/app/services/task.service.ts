import { Injectable } from '@angular/core';
import { taskArray } from '../mock-task';
import { taskInterface } from '../task-model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/task';
  constructor(private http: HttpClient) {}

  getTaskFromService(): Observable<taskInterface[]> {
    return this.http.get<taskInterface[]>(this.apiUrl);
  }

  deleteTaskFromService(
    taskTobeDeleted: taskInterface
  ): Observable<taskInterface> {
    const url = `${this.apiUrl}/${taskTobeDeleted.id}`;
    return this.http.delete<taskInterface>(url);
  }

  addTaskFromService(task: taskInterface): Observable<taskInterface> {
    return this.http.post<taskInterface>(this.apiUrl, task, httpOptions);
  }
}
