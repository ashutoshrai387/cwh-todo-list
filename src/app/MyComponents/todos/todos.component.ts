import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string | null = null;
  todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    if (typeof window !== 'undefined') { // Check if window is defined
      this.localItem = localStorage.getItem('todos');
      if (this.localItem === null) {
        this.todos = [];
      } else {
        this.todos = JSON.parse(this.localItem);
      }
    }
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.saveToLocalStorage();
    }
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    if (typeof window !== 'undefined') { // Check if window is defined
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}