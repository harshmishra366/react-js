import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2 className='p-4 text-gray-900 bg-cyan-50 '>Redux Tool Kit</h2>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
