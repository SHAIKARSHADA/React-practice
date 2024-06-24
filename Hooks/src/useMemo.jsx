import { useState, useMemo } from "react"


function App() {
  const [count, setCount] = useState(0);
  const [sum,setSum] = useState(0);


  let sumton = useMemo(()=> {
  let sumton  = 0
  console.log("memo got called");
    for(let i = 0; i<=sum; i++) {
      sumton += i;
  }
  return sumton
    },[sum])


  return <>
    <div>
      <input type="text" placeholder="n" onChange={(e) => setSum(e.target.value)}/>
      <p>sum from {sum} to {sumton}</p>
      <button onClick={() => setCount(count+1)}>Counter {count}</button>
    </div>
  </>
}

export default App