import { useState } from 'react';

import Headers from './components/Headers'

function App() {
  
  

  return (
    <>
      <HeadersWithButton/>
      <Headers title={"shaik"}/>
      <Headers title={"shaik"}/>
      <Headers title={"shaik"}/>
      <Headers title={"shaik"}/>
      <Headers title={"shaik"}/>
      <Headers/>
      <Headers/>
      <Headers/>
    </>
  )
}

function HeadersWithButton() {


  const[ title, setTitle ] = useState("harkirat");

  function updateTitle() {
    setTitle("My Name is " + Math.random());
  }

 return <>
  <button onClick={updateTitle}>Update the title</button>
  <Headers title={title}></Headers>
  </>
}

export default App
