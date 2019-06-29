import { async, TestBed } from '@angular/core/testing';
import { TaskUiBoardModule } from './task-ui-board.module';

describe('TaskUiBoardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TaskUiBoardModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TaskUiBoardModule).toBeDefined();
  });
});
