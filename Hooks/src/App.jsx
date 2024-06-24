import { useRef,useEffect } from "react"

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


// the useRef is used  to get the DOM elements like we did in the DOM in javascript but here by we use React hook useRef that is same as 
// collecting an id and gives you 


// useEffect(() => {
//   setTimeout(() => {
//     document.getElementById("incomeTaxDiv").innerHTML = "10"
//   },5000)
// })

// return(
// <>
//   <div>
//     hi there, your income tax returns are this <div id="incomeTaxDiv">{incomeTax}</div>
//   </div>
// </>)
export default App