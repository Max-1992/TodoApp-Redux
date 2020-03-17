// Import NgRx
import { createReducer, on } from '@ngrx/store';

// Import Actions
import * as actions from './todo.actions';

// Import Model
import { Todo } from './models/todo.model';

const todo1 = new Todo('App para node.js')

// Definimos el Estado inicial de nuestra aplicación.
const initialState: Todo[] = [todo1];

// Create private Reducer
const _TodoReducer = createReducer(initialState,
    
        on(actions.agregar_todo, (state, { text }) => {
            const todo = new Todo( text );
            return [ ...state, todo ];
        }),
        on(actions.toggle_todo, (state, { id }) => {
             // Vamos a mapear nuestro array para verificar que elemento hace match.
             return state.map( todoEdit => {
                // Validaremos si un elmento se encuentra dentro de nuestro array.
                if ( todoEdit.id === id ) {
                    // Una vez encontrado el elemento vamos a crear un nuevo array y devolverlo modificando los campos de nuestro interes.
                    return {
                        ...todoEdit,
                        complete: !todoEdit.complete    
                    };
                } else {
                    return todoEdit;
                };
            });
        }),
        on(actions.edit_todo, (state, { id, text } ) => {
            return state.map( todoEdit => {
                if( todoEdit.id === id ) {
                    return {
                        ...todoEdit,
                        text: text
                    }
                } else {
                    return todoEdit;
                }
            });
        }),
        on(actions.delete_todo, (state, { id } ) => state.filter( todo => todo.id !== id )),
        on(actions.toggle_all_todo, (state, { complete } ) => {
            return state.map( todo => {
                return {
                    ...todo,
                    complete: complete
                }
            });
        }),
        on(actions.clear_complete, state => state.filter( todo => !todo.complete ))
    
    );

export function TodoReducer( state, action ) {
    return _TodoReducer(state, action);
}