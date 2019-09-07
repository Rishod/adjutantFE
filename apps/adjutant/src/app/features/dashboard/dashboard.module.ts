import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { SharedModule } from "../../shared/shared.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [DashboardContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: DashboardContainerComponent}
    ])
  ]
})
export class DashboardModule { }
