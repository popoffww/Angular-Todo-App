import { Injectable } from '@angular/core';

export interface Todo {
  completed: boolean;
  id: number;
  title: string;
  date?: any;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  public todos: Todo[] = [];

  onToggle(id: number) {
    // Находим индекс того туду, который необходимо изменить
    const idx = this.todos.findIndex(t => t.id === id);

    // Массиву тудус по индексу меняем поле completed на противоположное
    this.todos[idx].completed = !this.todos[idx].completed;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  newTodo(todo: Todo) {
    this.todos.push(todo);
  }

  constructor() { }
}
