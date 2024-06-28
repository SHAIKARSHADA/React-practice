import "./App.css"

function App() {

  const details = {
    name: "shaik",
    age: 19,
    place: "london",
  }

  return (
    <>
    <div className="container">
    <ComponentOne/>
    <ComponentTwo details={details}/>
    </div>
    </>
  )
}

export default App


function ComponentOne() {
  return(
  <>
  <div className="img-bg-container">
      <img className="img-box" src="https://picsum.photos/200/200"/>
  </div>
  </>
  )
}

function ComponentTwo({details}) {
  return(
    <>
    <div className="text-box">
        <div className="text-box1">
          <h3>{details.name}</h3>
          <h5>{details.age}</h5>
        </div>
        <h5>{details.place}</h5>
    </div>
    </> 
  )
}