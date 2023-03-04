import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-floating',
  templateUrl: './floating.component.html',
  styleUrls: ['./floating.component.css']
})
export class FloatingComponent {
  @Input() icon: string = 'code';
  @Input() top?: string | 0 = 'none';
  @Input() bottom?: string | 0 = 'none';
  @Input() right?: string | 0 = 'none';
  @Input() left?: string | 0 = 'none';

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  handleClick() {
    this.onClick.emit(null);
  }

}
