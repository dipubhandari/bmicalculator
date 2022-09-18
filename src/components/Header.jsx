import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
const Header = () => {
    const login = localStorage.getItem('login')
    console.log(login)
   function del(){
    localStorage.removeItem('login')
   }
    return (
        <div>


            <li><Link to='/account'>Register</Link></li>
            {
                (login) ?

                    <li><Link onClick={del} to='/login'>Logout</Link></li>
                    :
                    <li><Link to='/login'>Login</Link></li> 
                   

            }


        </div>
    )
}

export default Header