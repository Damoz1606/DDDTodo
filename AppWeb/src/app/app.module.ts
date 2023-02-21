import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './pages/app/app.component';
import { DevComponent } from './pages/dev/dev.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoCardComponent } from './component/todo-card/todo-card.component';
import { ButtonComponent } from './component/atoms/button/button.component';
import { InputTextComponent } from './component/atoms/input-text/input-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DevComponent,
    TodoCardComponent,
    ButtonComponent,
    InputTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
