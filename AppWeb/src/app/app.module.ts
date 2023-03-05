import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppComponent } from './pages/app/app.component';
import { DevComponent } from './pages/dev/dev.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './component/atoms/button/button.component';
import InputTextComponent from './component/atoms/input-text/input-text.component';
import { TodoCardComponent } from './component/molecules/todo-card/todo-card.component';
import { SnackBarComponent } from './component/molecules/snack-bar/snack-bar.component';
import { FloatingComponent } from './component/atoms/floating/floating.component';
import { TodoFormOrganismComponent } from './component/organism/todo-form-organism/todo-form-organism.component';
import { ButtonToggleComponent } from './component/atoms/button-toggle/button-toggle.component';
import { InputTextAreaComponent } from './component/atoms/input-text-area/input-text-area.component';
import { TodoShowComponent } from './component/organism/todo-show/todo-show.component';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DevComponent,
    TodoCardComponent,
    ButtonComponent,
    InputTextComponent,
    SnackBarComponent,
    FloatingComponent,
    TodoFormOrganismComponent,
    ButtonToggleComponent,
    InputTextAreaComponent,
    TodoShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatRippleModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
