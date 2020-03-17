// Import NgRx
import { createAction, props } from '@ngrx/store';

// Creamos las Acciones
export const set_filter = createAction('[FILTER] Set Filter', props<{ filter: FilterValid }>());


// Permite tipar los filtros aceptados en nuestor pyload.
export type FilterValid = 'todos' | 'complete' | 'pending';