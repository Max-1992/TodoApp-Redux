import { Actions, AGREGAR_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_ALL_TODO, CLEAR_COMPLETE } from './todo.actions';
import { Todo } from './models/todo.model';

const todo1 = new Todo('App para node.js')

// Definimos el Estado inicial de nuestra aplicación.
const initialState: Todo[] = [todo1];

// Definimos el Reducer del Modulo de Todo.
export const TodoReducer = ( state = initialState, action: Actions ): Todo[] => {

    switch ( action.type ) {
        case AGREGAR_TODO:
            const todo = new Todo( action.text );
            return [ ...state, todo ]; // Recordemos el concepto de mantener la inmutabilidad de los datos.
        case TOGGLE_TODO:
            // Vamos a mapear nuestro array para verificar que elemento hace match.
            return state.map( todoEdit => {
                // Validaremos si un elmento se encuentra dentro de nuestro array.
                if ( todoEdit.id === action.id ) {
                    // Una vez encontrado el elemento vamos a crear un nuevo array y devolverlo modificando los campos de nuestro interes.
                    return {
                        ...todoEdit,
                        complete: !todoEdit.complete    
                    };
                } else {
                    return todoEdit;
                };
            });
        case EDIT_TODO:
            return state.map( todoEdit => {
                if( todoEdit.id === action.id ) {
                    return {
                        ...todoEdit,
                        text: action.text
                    }
                } else {
                    return todoEdit;
                }
            });
        case DELETE_TODO:
            return state.filter( todo => todo.id !== action.id );
        case TOGGLE_ALL_TODO:
                return state.map( todo => {
                    return {
                        ...todo,
                        complete: action.complete
                    }
                });
        
        case CLEAR_COMPLETE:
                return state.filter( todo => !todo.complete );
        default:
            return state
    }
}