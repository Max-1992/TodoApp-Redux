import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/models/todo.model';
import { FilterValid } from './filter.actions';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform( todos: Todo[], filter: FilterValid ): Todo[] {
      switch( filter ) {
        case 'pending':
            return todos.filter( todo => !todo.complete );
        case 'complete':
              return todos.filter( todo => todo.complete );
        default:
          return todos;
      }
  }

}
