import { async, TestBed } from '@angular/core/testing';
import { TaskFeatureShellModule } from './task-feature-shell.module';

describe('TaskFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TaskFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TaskFeatureShellModule).toBeDefined();
  });
});
