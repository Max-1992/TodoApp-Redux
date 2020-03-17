import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import * as actions from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  public completado: boolean =  false;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
  }

  toggleAll() {
    this.completado = !this.completado;
    const action = actions.toggle_all_todo({ complete: this.completado });  
    this.store.dispatch( action );
  }

}
