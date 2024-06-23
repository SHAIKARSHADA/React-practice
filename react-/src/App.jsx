function App() {
  return (<>

  <CardWrapper>
    hi there
    <TextComponent></TextComponent>
    <CardWrapper></CardWrapper>
  </CardWrapper>

  </>)
}

function TextComponent() {
  return <div>
    hello components
  </div>
}

function CardWrapper({children}) { 
  return(
    <div style={{
      border: "solid 1px black",
      padding: "40px"
    }}>
      {children}
     </div>
  )
}

export default App

