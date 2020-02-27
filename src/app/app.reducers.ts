import { Todo } from './todo/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { TodoReducer } from './todo/todo.reducer';
import { FilterReducer } from './filter/filter.reducer';
import { FilterValid } from './filter/filter.actions';

export interface AppState {

    todos: Todo[];
    filter: FilterValid;

}

export const REDUCERS: ActionReducerMap<AppState> = {
    todos: TodoReducer,
    filter: FilterReducer
}