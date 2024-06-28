import { RecoilRoot, useRecoilValueLoadable } from "recoil"
import { todoAtomFamily } from "./store/atoms/atom5"





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
//   state : hasValue,loading,hasError  
// }   useRecoilvalueLoadable

function Todo({id}) {
  const todo = useRecoilValueLoadable(todoAtomFamily(id));

  if(todo.state === "loading") {
    return <div>
      loading...
    </div>
  } else if (todo.state === "hasValue")  {
    return <>
    <h2>{todo.contents.title}</h2>
    <h3>{todo.contents.description}</h3>
  </>
  } else if (todo.state === "hasError") {
    return<>
      <div>
        Error in the backend
      </div>
    </>
  }
  
}