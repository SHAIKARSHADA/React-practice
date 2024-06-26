import { useState } from "react"




function App() {

  const [ count, setCount ] = useState(0);

  return(
    <>
    <Count/>
    <Button count={count} setCount={setCount}/>
    </>
  ) 
}


function Count({count}) {  
  return <>
    {count}
  </>


}

function Buttons({count, setCount}) {
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