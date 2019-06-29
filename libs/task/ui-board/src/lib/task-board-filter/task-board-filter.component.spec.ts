import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBoardFilterComponent } from './task-board-filter.component';

describe('TaskBoardFilterComponent', () => {
  let component: TaskBoardFilterComponent;
  let fixture: ComponentFixture<TaskBoardFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskBoardFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskBoardFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
