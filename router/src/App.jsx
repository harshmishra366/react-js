import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './Input/Head/Head'
import Home from './Input/Home/Home'
import Footer from './Input/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      < Head/> 
      < Outlet/>
      < Footer/>
   </>
  )
}

export default App
