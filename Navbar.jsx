import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='nav'>
        <div >
            <h1 style={{margin:'5px'}}>
                DevDeakin
            </h1>
            
        </div>
        <div className='nav-items'>
          
            <a href='/home'className='link'>
                Login
            </a>
            <a href='/home' className='link'>
                SignUp
            </a>
        </div>
        
    </div>
  )
}

export default Navbar