import { useState, useEffect} from 'react'


function App() {

  const [ todos,setTodos ] = useState([])

  useEffect( () => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then( async(res) => {
        const json = await res.json();
        setTodos(json.todos)
        console.log(json.todos);
      })
    },10000)
  },[])


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
      <h1>
        {title}
      </h1>
      <h2>
        {description}
      </h2>
    </div>
    
    </>
  )
}

export default App
