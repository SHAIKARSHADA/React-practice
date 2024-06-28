import { RecoilRoot, useRecoilStateLoadable, useRecoilValueLoadable } from "recoil"
import { todoAtomFamily } from "./store/atoms/atoms4"





export default function App() {
  return (
    <>
    <RecoilRoot>
    <Todo id={1}/>
       <Todo id={2}/>
        <Todo id={2}/>
        
         <Todo id={2}/>
          <Todo id={2}/>
           <Todo id={2}/>

    </RecoilRoot>
    </>
  )
}


// its gives {
//   cotents: if executed;
//   state : hasValue,loading,  
// }   useRecoilStateLoadable

function Todo({id}) {
  const [todo,setTodo] = useRecoilStateLoadable(todoAtomFamily(id));

  if(todo.state === "loading") {
    return <div>
      loading...
    </div>
  } else if (todo.state === "hasValue")  {
    return <>
    <h2>{todo.contents.title}</h2>
    <h3>{todo.contents.description}</h3>
  </>
  }

  
}