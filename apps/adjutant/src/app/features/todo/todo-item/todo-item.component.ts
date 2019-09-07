import {Component, Input, OnInit} from '@angular/core';
import {ToDo} from "../todo.model";

@Component({
  selector: 'adjutant-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  private item: ToDo;

  constructor() {
    this.item = new ToDo('Task', false);
  }

  ngOnInit() {
  }

  complete(complete: boolean) {
    this.item.completed = complete;
  }

}
