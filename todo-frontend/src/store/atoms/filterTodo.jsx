import { todoAtom } from "./Addtodo"
import { selector } from 'recoil';


export const filterTodo = selector({
  key: "filterTodo",
  get: ({get}) => {
    const filterTodo = get(todoAtom);
  }
})