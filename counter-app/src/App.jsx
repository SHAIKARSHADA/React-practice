import { useState } from "react";
function App() {

  const [todos, setTodos] = useState([{
    title: "go to gym",
    description: "go to gym at 8pm"
  },{
    title: "go to gym",
    description: "go to gym at 7pm"
  },{
    title: "go to gym",
    description: "go to gym at 9pm"
  }]);

  function addTodo() {
    setTodos([...todos,{
        title: "go to gym",
        description: "go to gym at 8pm"
    }])
  }

  return (
    <>
      <button onClick={addTodo}>add a random to do</button>
    {
      todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description}></Todo>
      })
    }
    </>
  )
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
