import {Component, Input, OnInit} from '@angular/core';
import {ToDo} from "../todo.model";

@Component({
  selector: 'adjutant-todo-period-container',
  templateUrl: './todo-period-container.component.html',
  styleUrls: ['./todo-period-container.component.css']
})
export class TodoPeriodContainerComponent implements OnInit {

  @Input()
  private todos: ToDo[];
  @Input()
  private  periodName: string;

  constructor() {
    this.periodName = 'Period 1';

    this.todos = [
      new ToDo('Task1', false),
      new ToDo('Task2', false),
      new ToDo('Task3', false),
    ];

  }

  ngOnInit() {}

}
