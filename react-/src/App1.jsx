import { useState } from 'react';

let id = 5;


function App() {
  
  const [todos,setTodos] = useState([ {
    "id": 1,
    "title": "Introduction to JavaScript",
    "description": "This course covers the basics of JavaScript, including syntax, variables, and control structures."
},
{   "id": 2,
    "title": "Advanced CSS Techniques",
    "description": "Learn advanced CSS techniques to create responsive and visually appealing web designs."
},
{   "id": 3,
    "title": "Python for Data Science",
    "description": "An in-depth look at using Python for data analysis, visualization, and machine learning."
},
{   "id": 4,
    "title": "Web Development Bootcamp",
    "description": "A comprehensive bootcamp that teaches you how to build full-stack web applications using modern technologies."
},])
  

function addTodo() {
  setTodos([...todos,{
    id:id++,
    title: Math.random(),
    description: Math.random()
  }])

} 

  return (
    <>
      <button onClick={addTodo}>add Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
    </>
  )
}



function Todo({title,description}) {

  return <>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </>
}

export default App
