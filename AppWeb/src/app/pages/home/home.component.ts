import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/component/molecules/snack-bar/snack-bar.component';
import { TodoFormOrganismComponent } from 'src/app/component/organism/todo-form-organism/todo-form-organism.component';
import { TodoShowComponent } from 'src/app/component/organism/todo-show/todo-show.component';
import { TodoService } from 'src/app/config/todo.service';
import { RQDelete } from 'src/services/DTOs/RQDelete';
import { RQIsDone } from 'src/services/DTOs/RQIsDone';
import { RQToDo } from 'src/services/DTOs/RQToDo';
import { RSToDo } from 'src/services/DTOs/RSToDo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos: RSToDo[] = [];
  notDoneTodo: RSToDo[] = [];
  doneTodo: RSToDo[] = [];

  constructor(private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private _todoService: TodoService) {
  }

  ngOnInit() {
    this.getAllTodo();
  }

  getAllTodo() {
    this._todoService.getTodos().subscribe({
      next: (response) => {
        this.todos = response;
        this.filterNotDoneTodo();
        this.filterDoneTodo();
      },
      error: (err) => {
        this.openSnackBar("Sorry, something went wrong", 'warn');
      }
    });
  }

  filterNotDoneTodo() {
    this.notDoneTodo = this.todos.filter(todo => !todo.isDone);
  }

  filterDoneTodo() {
    this.doneTodo = this.todos.filter(todo => todo.isDone);
  }

  postTodo(todo: RQToDo) {
    this._todoService.postTodo(todo).subscribe({
      next: (result) => {
        const newTodo: RSToDo = {
          description: todo.description,
          isDone: false,
          title: todo.title,
          id: result
        }
        this.todos.push(newTodo);
        this.filterNotDoneTodo();
        this.filterDoneTodo();
      },
      error: (err) => {
        if (err.error.text) {
          const newTodo: RSToDo = {
            description: todo.description,
            isDone: false,
            title: todo.title,
            id: err.error.text
          }
          this.todos.push(newTodo);
          this.filterNotDoneTodo();
          this.filterDoneTodo();
        } else {
          this.openSnackBar("Sorry, something went wrong", 'warn');
        }
      }
    });
  }

  putState(state: RQIsDone) {
    this._todoService.putTodoState(state.id, state)
      .subscribe({
        next: (result) => {
          this.todos = this.todos.map(value => {
            if (value.id === state.id) {
              value.isDone = state.isDone;
            }
            return value;
          })
          this.filterNotDoneTodo();
          this.filterDoneTodo();
        },
        error: (err) => {
          this.openSnackBar("Sorry, something went wrong", 'warn');
        }
      });
  }

  deleteTodo(id: string) {
    this._todoService.deleteTodo(id).subscribe({
      next: (result) => {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.filterNotDoneTodo();
        this.filterDoneTodo();
      },
      error: (err) => {
        this.openSnackBar("Sorry, something went wrong", 'warn');
      }
    });
  }

  openSnackBar(message: string, severity: 'info' | 'warn', title?: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      data: {
        message: message,
        title: title,
        severity: severity
      }
    });
  }

  openFormModal() {
    const dialogRef = this.dialog.open(TodoFormOrganismComponent, {
      data: {
        title: "What you're gonna do?"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.postTodo(result);
      }
    });
  }

  openTodoModal(data: RSToDo) {
    this.dialog.open(TodoShowComponent, {
      data: data
    });
  }
}
