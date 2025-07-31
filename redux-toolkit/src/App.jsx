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
      <h2 className="text-3xl font-bold text-center text-gray-800 underline decoration-indigo-500 decoration-2 underline-offset-4 mb-8">
        Todo App using Redux Toolkit
      </h2>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
