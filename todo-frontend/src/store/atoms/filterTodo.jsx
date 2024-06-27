
import { selector } from 'recoil';
import { filterAtom } from "./filter";
import { todoAtom } from './todo';


export const filterTodoAtom = selector({
  key: "filterTodoAtom",
  get: ({get}) => {
    const todos = get(todoAtom);
    const filter = get(filterAtom);

  return todos.filter(todo => todo.title.includes(filter) || todo.description.includes(filter))
  }
})
