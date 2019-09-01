import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from "@nebular/theme";

@Component({
  selector: 'adjutant-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  items : NbMenuItem[] = [
    {
      title: 'Dashboard',
      link: '/',
      icon: 'home-outline'
    },

    {
      title: 'Projects',
      link: '/projects',
      icon: 'briefcase-outline'

    },

    {
      title: 'To-Do',
      link: '/task',
      icon: 'checkmark-square-2-outline'
    },

    {
      title: 'Calendar',
      link: '/calendar',
      icon: 'calendar-outline'
    },

    {
      title: 'Notebook',
      link: '/notebook',
      icon: 'book-outline'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
