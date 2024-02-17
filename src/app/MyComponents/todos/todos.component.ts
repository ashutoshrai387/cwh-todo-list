import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "This is title 1",
        desc: "This is description 1",
        active: true
      },
      {
        sno: 2,
        title: "This is title 2",
        desc: "This is description 2",
        active: true
      },
      {
        sno: 3,
        title: "This is title 3",
        desc: "This is description 3",
        active: true
      }
    ]
  }
}
