import { useEffect, useState } from 'react'

import './App.css'
import { Themeprovider } from './context/Theme'
import ThemeBtn from './components/Btn'
import Card from './components/Card'

function App() {
 const [thememode,Setthememode]=useState("light")
  const lightmode=()=>{
  Setthememode("light")
 }
 const darkmode=()=>{
  Setthememode("dark")
 }
 useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(thememode)

 },[thememode])
  return (
    <>
    <Themeprovider value={{thememode,lightmode,darkmode}}>
     <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card/>
                    </div>
                </div>
            </div>
            </Themeprovider>
      
    </>
  )
}

export default App
