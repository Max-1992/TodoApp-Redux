import { Action } from '@ngrx/store';

// Definir acciones
export const SET_FILTER = "[FILTER] Set Filter";

// Creamos las Acciones
export class SetFilterAction implements Action {
    readonly type = SET_FILTER;

    constructor( public filter: FilterValid ) {}
}

// Permite tipar los filtros aceptados en nuestor pyload.
export type FilterValid = 'todos' | 'complete' | 'pending';

export type Actions = SetFilterAction;