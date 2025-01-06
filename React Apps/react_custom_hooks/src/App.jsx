import './App.css'
import Counter from './components/Counter'
import TodoItem from './components/TodoItem'
import useCounterHook from './custom_hooks/useCounterHook'

function App() {
  return (
    <>
    <Counter />
    <TodoItem />
    </>
  )
}

export default App
