import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { todoAtomFamily } from "./store/atoms/atom3"
import { useEffect } from "react";


export default function App() {
  return (
    <>
    <RecoilRoot>
      <UpdateTodo/>
      <Todo id={1}/>
      <Todo id={2}/>
      <Todo id={2}/>
      <Todo id={2}/>
      <Todo id={2}/>
      <Todo id={2}/>
      <Todo id={2}/>
      
    </RecoilRoot>
    </>
  )
}


function UpdateTodo() {
  const updateState = useSetRecoilState(todoAtomFamily(2));
   
  useEffect(() => {
    setTimeout(() => {
      updateState({
        id:2,
        title: "title has changed",
        description: "description has changed"
      })
    },5000)
  },[])

  return <><div></div></>

}

function Todo({id}) {
  const currentTodo = useRecoilValue(todoAtomFamily(id));
  return(
    <>
      {currentTodo.title}<br/>
      {currentTodo.description}<br/>
    </>
  )


}