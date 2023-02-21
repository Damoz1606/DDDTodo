import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {
  @Input() label?: string = '';
  @Input() placeholder?: string = '';
  @Input() value?: string = '';
  @Input() hint?: string = '';
  @Input() required?: boolean = false;
  @Input() type?: 'text' | 'number' | 'email' | 'password' = 'text';
  @Input() step?: string | number;
  @Input() max?: string | number;
  @Input() min?: string | number;
  @Input() fullWidth?: boolean = false;
}
