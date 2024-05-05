import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProvider from './context/UserContextProvider'
import Profile from './component/Profile'
import Login from './component/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserProvider>
      <div className='p-4 text-gray-400 text-lg'>
       Context Api
      </div>
      <Login/>
   
      <Profile/>
      </UserProvider>
    </>
  )
}

export default App
