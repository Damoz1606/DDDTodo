import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RQDelete } from 'src/services/DTOs/RQDelete';
import { RQIsDone } from 'src/services/DTOs/RQIsDone';
import { RQToDo } from 'src/services/DTOs/RQToDo';
import { RSToDo } from 'src/services/DTOs/RSToDo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos()
  {
    return this.http.get<RSToDo[]>(`${environment.apiURL}`);
  }

  postTodo(todo: RQToDo) {
    return this.http.post<string>(`${environment.apiURL}`, todo);
  }

  putTodoState(id: string, todo: RQIsDone) {
    return this.http.put(`${environment.apiURL}/status/${id}`, todo);
  }

  deleteTodo(id: string) {
    return this.http.delete(`${environment.apiURL}/${id}`);
  }
}
