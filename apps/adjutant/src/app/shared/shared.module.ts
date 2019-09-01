import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbButtonModule, NbCardModule, NbContextMenuModule, NbIconModule, NbLayoutModule, NbMenuModule, NbMenuService,
  NbSearchModule,
  NbSelectModule,
  NbSidebarModule, NbUserModule
} from "@nebular/theme";
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {NbSecurityModule} from "@nebular/security";
import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page/page.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

const ANGULAR_MODULES = [
  CommonModule,
  // BrowserModule,
  // BrowserAnimationsModule,
];

const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbSecurityModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
  NbCardModule
];

const COMPONENTS = [
  HeaderComponent,
  HeaderMenuComponent,
  PageComponent
];

@NgModule({
  declarations: [...COMPONENTS, PageComponent, HeaderMenuComponent],
  imports: [...ANGULAR_MODULES, ...NB_MODULES],
  exports: [...ANGULAR_MODULES, ...NB_MODULES, ...COMPONENTS]
})
export class SharedModule { }
