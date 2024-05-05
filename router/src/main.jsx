import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Input/Home/Home.jsx'
import About from './Input/About/About.jsx'
import User from './Input/User/User.jsx'
// const router= createBrowserRouter(
//   [
//    {
//     path:'/',
//     element: <App/>,
//     children:[{
//       path:'',
//       element:<Home/>
//     },
//   {
//     path:'about',
//     element:<About/>
//   }]

    
//    }

//   ]
// )
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='user/:userid' element={<User/>}/>

  


    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <RouterProvider router={router} />
  </React.StrictMode>,
)
