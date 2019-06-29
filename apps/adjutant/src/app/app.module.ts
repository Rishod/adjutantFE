import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        {path: '', pathMatch: 'full', redirectTo: 'task'}, 
        {path: 'task', loadChildren: () => import('@adjutant/task/feature-shell').then(m => m.TaskFeatureShellModule)}
      ]
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
