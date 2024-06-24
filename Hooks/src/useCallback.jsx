import {useState, memo, useCallback } from "react"

function useSomething() {
  
}

function App() {
  const [count, setCount] = useState(0);

  const inputFunction = useCallback(() => {
    console.log("hi there");
  },[])

  return <div>
    <ButtonComponent inputFunction={inputFunction}/>
    <button onClick={() => setCount(count+1)}>Click me {count}</button>
  </div>
}

const ButtonComponent = memo(({inputFunction}) => {
  console.log("Child Render")

  return <div>
    <button>Button clicked</button>
  </div>
})
export default App;