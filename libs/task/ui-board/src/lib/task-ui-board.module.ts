import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskBoardComponent } from './task-board/task-board.component';
import { TaskBoardFilterComponent } from './task-board-filter/task-board-filter.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
  ],
  declarations: [TaskBoardComponent, TaskBoardFilterComponent],
  exports: [TaskBoardComponent, TaskBoardFilterComponent]
})
export class TaskUiBoardModule {}
