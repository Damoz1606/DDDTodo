import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/component/molecules/snack-bar/snack-bar.component';
import { TodoFormOrganismComponent } from 'src/app/component/organism/todo-form-organism/todo-form-organism.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  todos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  isLoading = true;

  constructor(private _snackBar: MatSnackBar,
    public dialog: MatDialog) {
    const interval = setInterval(() => {
      this.isLoading = false;
      clearInterval(interval);
    }, 3000)
  }

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

  openModal() {
    const dialogRef = this.dialog.open(TodoFormOrganismComponent, {
      data: {
        title: "Ejemplo"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
