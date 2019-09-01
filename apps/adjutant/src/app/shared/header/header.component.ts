import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbMenuService, NbThemeService} from "@nebular/theme";
import {map, takeUntil} from "rxjs/internal/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'adjutant-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly = false;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  constructor(private menuService: NbMenuService,
              private themeService: NbThemeService) {
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

}
