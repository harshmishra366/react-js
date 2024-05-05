import { useState,useEffect } from 'react'
import { useDispatch} from 'react-redux'
import './App.css'
import authservice from './appwite/auth'
import {login,logout} from './store/AuthSlice'
import {Outlet} from 'react-router-dom'
import { Header} from './component/index'

import { Footer} from './component/index'


function App() {
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authservice.userStatus()
      .then((userData) => {
        if (userData) {
          console.log('Dispatching login action');
          dispatch(login({ userData }));
        } else {
          console.log('Dispatching logout action');
          dispatch(logout());
        }
      })
      .finally(() => {
        setloading(false);
      });
  }, [dispatch]);
 return !loading ? (
  <div className='min-h-screen flex-wrap bg-gray-400 content-between'>
    <div className='w-full block'>
      <p>hi</p>
      <Header />
      
    <main>
      
     TODO:<Outlet/> 
    </main>
      <Footer />
    </div>
  </div>
 ): null
}

export default App
