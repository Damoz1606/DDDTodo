import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RSToDo } from 'src/services/DTOs/RSToDo';

@Component({
  selector: 'app-todo-show',
  templateUrl: './todo-show.component.html',
  styleUrls: ['./todo-show.component.css']
})
export class TodoShowComponent {

  body?: RSToDo;

  constructor(public dialogRef: MatDialogRef<TodoShowComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: RSToDo) {
      if(!!data) {
        this.body = data;
      }
  }
}
