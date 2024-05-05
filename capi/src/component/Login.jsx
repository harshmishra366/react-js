import React, { useContext } from 'react'
import Usercontext from '../context/UserContext'
function Login(){
    const handlesubmit= (e)=>{
        e.preventDefault()
        Setuser({Username,Password})

    }
    const {Setuser}=useContext(Usercontext)
    const[Username,SetUsername]=React.useState()
    const[Password,SetPassword]=React.useState()
   return(
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='username' value={Username}  onChange={(e)=>SetUsername(e.target.value)}/>
        <input type="password" placeholder='password' value={Password} onChange={(e)=>SetPassword(e.target.value)}/>
        <button onClick={handlesubmit}>Submit</button>

    </div>
   )
}
export default Login;