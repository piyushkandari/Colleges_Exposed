import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Login from '../components/Login/login'
import Logout from '../components/Login/logout'

const login = () => {

    const session = useSession()    
    console.log("session: ", session);

    if(session.data == null ) {
        return(
            // <div  className=' container bg-slate-100 items-center
            // justify-center text-center py-56'>
            //     <button onClick={signIn} >login</button>
            // </div>
            <Login />
        ) 
    }

    return(
        // <div className=' container bg-slate-100 items-center
        // justify-center text-center h-screen py-56'  >
        //     <h1>Hello {session?.data?.user?.name}</h1>
        //     <div><Link href={'/'}> Redirect to the main page !</Link></div>
        //     <button onClick={signOut}>
        //         Sign out 
        //         </button>
        // </div>

        <Logout />
    )

return (

    <Login />

);

    
}

export default login
