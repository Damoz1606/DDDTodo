import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormOrganismComponent } from './todo-form-organism.component';

describe('TodoFormOrganismComponent', () => {
  let component: TodoFormOrganismComponent;
  let fixture: ComponentFixture<TodoFormOrganismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFormOrganismComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFormOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
