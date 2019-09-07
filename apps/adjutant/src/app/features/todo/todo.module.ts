import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { TodoContainerComponent } from './todo-container/todo-container.component';
import {RouterModule} from "@angular/router";
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoPeriodContainerComponent } from './todo-period-container/todo-period-container.component';

@NgModule({
  declarations: [TodoContainerComponent, TodoItemComponent, TodoPeriodContainerComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: TodoContainerComponent}
    ])
  ]
})
export class TodoModule { }
