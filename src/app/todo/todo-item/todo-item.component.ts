import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('textInputRef', {static: false}) textInputRef: ElementRef;

  checkInput: FormControl;
  textInput: FormControl;
  edit: boolean;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.checkInput = new FormControl(this.todo.complete);
    this.textInput = new FormControl(this.todo.text, Validators.required);

    this.checkInput.valueChanges.subscribe( checkValue => {
        const id  = this.todo.id;
        const action: ToggleTodoAction = new ToggleTodoAction( id );
        this.store.dispatch( action );
    });
  }

  editTodo() {
    this.edit = true;
    setTimeout( () => {
      this.textInputRef.nativeElement.select()
    }, 1)
  }

  finishEdit() {
    this.edit = false;

    if( this.textInput.valid && this.textInput.value !== this.todo.text ) { 
      const action: EditTodoAction = new EditTodoAction( this.todo.id, this.textInput.value );
      this.store.dispatch( action );
    }
  }

  deleteTodo() {
    const action: DeleteTodoAction = new DeleteTodoAction( this.todo.id );
    this.store.dispatch( action ); 
  }

}
