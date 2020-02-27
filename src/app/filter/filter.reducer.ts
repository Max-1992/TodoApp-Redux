import { Actions, FilterValid, SET_FILTER } from './filter.actions';

const initialState: FilterValid = 'todos';

export const FilterReducer = ( state = initialState, action: Actions ): FilterValid => {

    switch ( action.type ) {
        case SET_FILTER:
            return action.filter;
    
        default:
            return state;
    }
}