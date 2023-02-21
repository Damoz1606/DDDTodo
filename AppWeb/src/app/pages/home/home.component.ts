import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/component/molecules/snack-bar/snack-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  todos = [1,2,3,4,5,6,7,8,9,10];

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      data: {
        message: 'Hola',
        title: 'Ejemplo',
        severity: 'info'
      }
    });
  }
}
