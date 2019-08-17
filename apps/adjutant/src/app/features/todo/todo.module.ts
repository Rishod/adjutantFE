import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { TodoContainerComponent } from './todo-container/todo-container.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [TodoContainerComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: TodoContainerComponent}
    ])
  ]
})
export class TodoModule { }
