import { FilterValid, set_filter } from './filter.actions';
import { createReducer, on } from '@ngrx/store';

const initialState: FilterValid = 'todos';

const _FilterReducer = createReducer(initialState, 
        on(set_filter, (state, { filter }) => filter )
    );

export function FilterReducer( state, action ) {
    return _FilterReducer(state, action);
}