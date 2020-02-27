import { Component, OnInit } from '@angular/core';
import { FilterValid, SetFilterAction } from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../models/todo.model';
import { ClearCompleteAction } from '../todo.actions';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  public filterValid: FilterValid[] = ['todos', 'complete', 'pending'];
  public filterActual: FilterValid;
  public pending: number;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.filterActual = state.filter;
      this.numPending( state.todos );
    })
  }

  cambiarFilter( filter: FilterValid ) {
    const action: SetFilterAction = new SetFilterAction( filter );
    this.store.dispatch( action );
  }

  numPending( todos: Todo[] ) {
    this.pending = todos.filter( todo => !todo.complete ).length;
  }

  clearComplete() {
    const action: ClearCompleteAction = new ClearCompleteAction();
    this.store.dispatch( action );
  }


}
