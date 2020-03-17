import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { agregar_todo } from '../todo.actions';



@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  public inputText: FormControl;

  constructor( public store: Store<AppState> ) { }

  ngOnInit() {
    this.inputText = new FormControl('', Validators.required)
  }

  addTodo() {

    if( this.inputText.valid) {
      // Capturamos el valor de la tarea ingresada y creamos una instancia de nuetra acción.
      const todoText = this.inputText.value;
      const action = agregar_todo({ text: todoText });

      // Llamamos al método dispatch para disparar nuestro reducer y generar un cambio de Estado.
      this.store.dispatch( action );

      // Reseteamos nuestro formulario.
      this.inputText.reset();
    }

    return false;
   
  }

}
