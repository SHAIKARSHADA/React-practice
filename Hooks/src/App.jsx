import { useRef } from "react"

function App() {
  const divRef = useRef();


  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = "10"
    },5000)
  })

   const incomeTax = 20000

  return (<>
  <div>
    hi there, your income tax returns are this <div ref={divRef}>{incomeTax}</div>
  </div>
  </>)
}


useEffect
export default App