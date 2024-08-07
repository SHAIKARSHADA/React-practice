import { useState, useContext } from "react"
import { CountContext } from "./components/context";




function App() {

  const [ count, setCount ] = useState(0);


  //wrap anyone that wants to use the teleported value inside a provider

// useContext is an api so whenever you use you have to wrap that in to an Provider so remember that when ever doing it 
  return(
    <>
    <CountContext.Provider value={count}> 
      <Count setCount={setCount}/>
    </CountContext.Provider>
    
    </>
  ) 
}


function Count({setCount}) {  
  return <>
    <CountRenderer />
    <Buttons  setCount={setCount}/>
  </>


}

function CountRenderer() {
  const count = useContext(CountContext);
  return <>
    {count}
  </>
}

function Buttons({ setCount}) {
  const count = useContext(CountContext);
  return(<>
  <button onClick={() => { setCount(count+1)}}>
    Increase
  </button>
  <button onClick={() => { setCount(count-1)}}>
    Decrease
  </button>
  </>)
}

export default App