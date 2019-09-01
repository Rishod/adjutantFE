import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {SharedModule} from "./shared/shared.module";
import {ThemeModule} from "./theme/theme.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import { routers } from "./app-routers";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,

    SharedModule,
    RouterModule.forRoot(routers),
    ThemeModule.forRoot(),
    CoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
