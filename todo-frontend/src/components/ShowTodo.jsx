import { useRecoilValue } from "recoil"
import { todoAtom } from "../store/atoms/todo"

export default function ShowTodo() {
  const todos = useRecoilValue(todoAtom);


  return(
  <> 
    <div>
          {todos.map(todo => {return <div key={todo.id}><h1>{todo.title}</h1><h2>{todo.description}</h2></div>})}
    </div>
  </>
  )
}