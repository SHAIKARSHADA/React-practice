import {useRef} from 'react';

export default function AddTodo() {

  const [ titleRef,descRef ] = useRef();

  return(
    <>
      <div>
        <input  type="text" ref={titleRef}></input>
        <input type="text" ref={descRef}></input>
        <button onClick={() => {}}>Add Todo</button>
      </div>
    </>
  )
}