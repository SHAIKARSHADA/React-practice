import { useState, useEffect } from 'react'
import axios from "axios";
function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
    .then((res) => {
      console.log(res);
      setTodos(res.data.todos)
    })
  }, [])
  

  //using the axios and getting the data and then rendering it in the React todo with using
  // useEffect is used for doing side effects like fetching an data and other stuff which is not re rendering 
   

  return (
    <>  
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
    </>
  )
}

function Todo({title,description}) {
  return (
    <>
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
    </>
  )
}

export default App1
