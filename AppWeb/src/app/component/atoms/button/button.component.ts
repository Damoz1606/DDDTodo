import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() text?: string = '';
  @Input() type?: 'submit' | 'button' = 'button';

  @Output() onClick = new EventEmitter<any>();

  handleClick() {
    this.onClick.emit(null);
  }

}
