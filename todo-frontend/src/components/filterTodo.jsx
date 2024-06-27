import {   useRecoilValue, useSetRecoilState } from "recoil";
import { filterAtom } from "../store/atoms/filter"
import { filterTodoAtom } from "../store/atoms/filterTodo";




export default function FilterTodo() {
  const setFilter = useSetRecoilState(filterAtom);
  const filteredTodos = useRecoilValue(filterTodoAtom)

  return(
    <>
    <div>
      {console.log(filteredTodos)}
      <input type="text" onChange={(e) => { setFilter(e.target.value)}} placeholder="filter"/>
    <div>{filteredTodos.map(todo => {return <div key={todo.id}><h1>{todo.title}</h1><h2>{todo.description}</h2></div>})}</div> 
    </div> 
    </>
  )
}