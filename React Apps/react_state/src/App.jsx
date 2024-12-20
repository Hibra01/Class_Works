import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{id: 2, name: "Hello"}])
  const [inp, setInp] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (inp ==="") {
      return
    }
    setTodos([...todos, {id: Math.random(), name: inp}])
    setInp("")
  }

  function handleDelete(todo){
    setTodos(todos.filter((a) => a.id != todo.id))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' value={inp} onChange={(e) => setInp(e.target.value)} />
        <button>Add</button>
      </form>

      <ul>
        {
          todos.map((x, i) =>(
            <li  key={i}>
              {x.name}
              <button onClick={() => handleDelete(x)}>Delete</button>
              <button>Edit</button>
            </li>
           ) )
        }
      </ul>
    </>
  )
}

export default App
