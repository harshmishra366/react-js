import React, { useContext } from 'react'
import Usercontext from '../context/UserContext'
function Profile(){
    
    const {User}=useContext(Usercontext)
    if(!User) return <div>please login</div>
    return <div>Welcome {User.Username}</div>
    
}
export default Profile