import { selector } from 'recoil';
import { todoAtom } from '../store/atoms/todo';
import { filterAtom } from '../store/atoms/filter';

export const filterTodoAtom = selector({
  key: "filterTodoAtom",
  get: ({get}) => {
    const todos = get(todoAtom);
    const filter = get(filterAtom);

  return todos.filter(todo => todo.title.include(filter) || todo.description.include(filter))
  }
})
