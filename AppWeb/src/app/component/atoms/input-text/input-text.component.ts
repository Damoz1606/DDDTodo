import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export default class InputTextComponent {

  @Input() name: string = "input"
  @Input() required: boolean = false;
  @Input() placeholder: string = "";
  @Input() label: string = "";
  @Input() type: 'text' | 'number' | 'email' | 'password' = 'text';
  @Input() step: string | number = 1;
  @Input() max: number = Infinity;
  @Input() min: number = -Infinity;
  @Input() error: string = "The field is required";

  @Input() value: string = '';
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();


  inputFormControl = new FormControl('', [Validators.required, Validators.email]);

  handleChange: any = (event: any) => {
    this.onChange.emit({ name: this.name, value: event });
  }

}
