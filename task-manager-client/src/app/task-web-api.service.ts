import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskWebApiService {

  private task: Observable<Task[]>;

  private apiUrlAllTask = "http://localhost:8080/task";
  private apiUrlAddTask = "http://localhost:8080/task";
  private apiUrlGetTaskById = "http://localhost:8080/task/";
  private apiUrlDeleteTask = "http://localhost:8080/task/";
  private apiUrlEditTask = "http://localhost:8080/task/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.task = this.getAllTask();
   }

   getAllTask (): Observable<Task[]> {
      return this.http.get<Task[]>(this.apiUrlAllTask);
   }

   getTaskById (id: string): Observable<Task[]> {
     return this.http.get<Task[]>(this.apiUrlGetTaskById + id);
   }

   addTask (task: Task): Observable<any> {
     return this.http.post(this.apiUrlAddTask, task, this.httpOptions);
   }

   editTask ( id: string, task: Task[]): Observable<any> {
     return this.http.put(this.apiUrlEditTask + id, task, this.httpOptions);
   }

   deleteTask(id: number): Observable<{}> {
     return this.http.delete(this.apiUrlDeleteTask + id);
   }
}
