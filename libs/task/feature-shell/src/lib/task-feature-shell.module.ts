import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskOverviewComponent } from './task-overview/task-overview.component';
import { TaskUiBoardModule } from '@adjutant/task/ui-board';
import { SharedHeaderModule } from '@adjutant/shared/header';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    TaskUiBoardModule,
    SharedHeaderModule,
    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: TaskOverviewComponent} 
    ])
  ],
  declarations: [TaskOverviewComponent]
})
export class TaskFeatureShellModule {}
