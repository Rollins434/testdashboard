import React from 'react'
import "./navbar.scss"
import LogoutButton from './Logout'

const Navbar = () => {
  return (
    <div className="navbar">
     <div>
      Logo
     </div>
      <div>
        <h2>Name</h2>
        <LogoutButton/>
      </div>
    </div>
  )
}

export default Navbar