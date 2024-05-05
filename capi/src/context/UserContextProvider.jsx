import React from 'react'
import Usercontext from './UserContext'
const UserProvider=({children})=>{
    const [User,Setuser]=React.useState(null)
    return(
        <Usercontext.Provider value={{User,Setuser}}>
            {children}
        </Usercontext.Provider>
    )

}
export default UserProvider