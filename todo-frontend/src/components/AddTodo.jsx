import {useRef} from 'react';
import { useRecoilState, } from 'recoil';
import { todoAtom } from '../store/atoms/todo';
import FilterTodo from './FilterTodo';

export default function AddTodo() {


  const descRef = useRef();
  const titleRef = useRef();

  const [todos,setTodos] = useRecoilState(todoAtom)

  function submit() {
    const addNewTodo = {
      title: titleRef.current.value,
      description: descRef.current.value,
      id: Math.random()*10000000 ,
      }
  setTodos([...todos,addNewTodo])
      titleRef.current.value = '';
      descRef.current.value = '';
}

  return(
    <>
      <div>
        <input  type="text" ref={titleRef} placeholder="Todo Title"></input>
        <br/>
        <br/>
        <input type="text" placeholder="Todo Description" ref={descRef}></input>
        <br/>
        <br/>
        <button onClick={() => { submit() }}>Add Todo</button>
        <FilterTodo/>
      </div>
    </>
  )
}