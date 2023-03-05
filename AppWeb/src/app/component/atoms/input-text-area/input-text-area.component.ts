import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.css']
})
export class InputTextAreaComponent {
  @Input() name: string = "input"
  @Input() required: boolean = false;
  @Input() placeholder: string = "";
  @Input() label: string = "";
  @Input() error: string = "The field is required";
  @Input() disabled: boolean = false;

  @Input() value: string = '';
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();


  inputFormControl = new FormControl('', [Validators.required, Validators.email]);

  handleChange: any = (event: any) => {
    this.onChange.emit({ name: this.name, value: event });
  }
}
