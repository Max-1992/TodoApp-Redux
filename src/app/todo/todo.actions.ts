import { Action } from '@ngrx/store';


// Definir acciones
export const AGREGAR_TODO = "[TODO] Agregar Todo";
export const TOGGLE_TODO = "[TODO] Toggle Todo";
export const EDIT_TODO = "[TODO] Editar Todo";
export const DELETE_TODO = "[TODO] Borrar Todo";
export const TOGGLE_ALL_TODO = "[TODO] Toggle All Todo";
export const CLEAR_COMPLETE = "[TODO] Clear Complete Todo";

// Creamos las Acciones
export class AgregarTodoAction implements Action {
    readonly type =  AGREGAR_TODO;

    constructor( public text: string ) {
    }

}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor( public id: number ) {
    }

}

export class EditTodoAction implements Action {
    readonly type =  EDIT_TODO;

    constructor( public id: number, public text: string ) {
    }

}

export class DeleteTodoAction implements Action {
    readonly type =  DELETE_TODO;

    constructor( public id: number ) {
    }

}

export class ToggleAllAction implements Action {
    readonly type = TOGGLE_ALL_TODO;

    constructor( public complete: boolean ) {
    }

}

export class ClearCompleteAction implements Action {
    readonly type = CLEAR_COMPLETE;

}

// Exportar los tipos de acciones.
export type Actions = AgregarTodoAction |
                      ToggleTodoAction |
                      EditTodoAction |
                      DeleteTodoAction |
                      ToggleAllAction |
                      ClearCompleteAction;