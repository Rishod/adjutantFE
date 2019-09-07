import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adjutant-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  tabs = [
    {
      title: 'Dashboard',
      route: '/dashboard',
      icon: 'home-outline'
    },

    {
      title: 'Projects',
      route: '/projects',
      icon: 'briefcase-outline'

    },

    {
      title: 'To-Do',
      route: '/task',
      icon: 'checkmark-square-2-outline'
    },

    {
      title: 'Calendar',
      route: '/calendar',
      icon: 'calendar-outline'
    },

    {
      title: 'Notebooks',
      route: '/notebook',
      icon: 'book-outline'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
