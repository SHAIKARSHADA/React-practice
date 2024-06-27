function App() {
  return(
    <>
      <Count/>
    </>
  ) 
}

function Count() {  
  return <>
    <CountRenderer />
    <Buttons />
  </>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return (
  <>
  <RecoilRoot>
    {count}
  </RecoilRoot>
  </>
  )
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  return(<>
  <RecoilRoot>
  <button onClick={() => {setCount(count+1) }}>
    Increase
  </button>
  <button onClick={() => {setCount(count+1) }}>
    Decrease
  </button>
  </RecoilRoot>
  </>)
}
export default App
