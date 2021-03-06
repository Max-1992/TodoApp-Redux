import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../models/todo.model';
import { FilterValid } from '../../filter/filter.actions';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  public todos: Todo[] = [];
  public filter: FilterValid;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.todos = state.todos;
      this.filter = state.filter;
    });
  }

}
