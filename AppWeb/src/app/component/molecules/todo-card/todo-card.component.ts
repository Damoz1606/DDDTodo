import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RQDelete } from 'src/services/DTOs/RQDelete';
import { RQIsDone } from 'src/services/DTOs/RQIsDone';
import { RSToDo } from 'src/services/DTOs/RSToDo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent {
  @Input() value: RSToDo = { id: '', description: '', isDone: false };
  @Input() isLoading: boolean = false;

  @Output() onStateChange: EventEmitter<RQIsDone> = new EventEmitter<RQIsDone>();
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  text: string = '';

  constructor() {
    this.text = `${`${this.value.title} ` || '...'}${this.value.description}`
  }

  handleChange(event: any) {
    this.onStateChange.emit({
      id: this.value.id,
      isDone: event.checked
    })
  }

  handleDelete() {
    this.onDelete.emit(this.value.id);
  }

  handleClick() {
    this.onClick.emit(this.value);
  }

}
