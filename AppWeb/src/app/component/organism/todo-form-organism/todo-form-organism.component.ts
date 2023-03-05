import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RQToDo } from 'src/services/DTOs/RQToDo';

@Component({
  selector: 'app-todo-form-organism',
  templateUrl: './todo-form-organism.component.html',
  styleUrls: ['./todo-form-organism.component.css']
})
export class TodoFormOrganismComponent {

  @Input() title: string = '';
  @Output() onSubmit = new EventEmitter<any>();

  hint: string = "";
  todoBody: RQToDo = {
    description: ""
  }

  constructor(public dialogRef: MatDialogRef<TodoFormOrganismComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (!!data) {
      this.title = data.title;
      if (data.todo) {
        this.todoBody.title = data.todo.title;
        this.todoBody.description = data.todo.description;
      }
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }

  handleChange(event: any) {
    this.todoBody = {
      ...this.todoBody,
      [event.name]: event.value
    }
  }

  handleSubmit() {
    this.dialogRef.close(this.todoBody);
  }
}
