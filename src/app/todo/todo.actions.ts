// Import NgRx
import { createAction, props } from '@ngrx/store';

// Creamos las Acciones
export const agregar_todo = createAction('[TODO] Agregar Todo', props<{ text: string }>() );
export const toggle_todo = createAction('[TODO] Toggle Todo', props<{ id: number }>());
export const edit_todo = createAction('[TODO] Editar Todo', props<{ id: number, text: string }>());
export const delete_todo = createAction('[TODO] Borrar Todo', props<{ id: number }>());
export const toggle_all_todo = createAction('[TODO] Toggle All Todo', props<{ complete: boolean }>());
export const clear_complete = createAction('[TODO] Clear Complete Todo');