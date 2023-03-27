import React from 'react'
import "./styles/navbar.css"
import surface from '../static/surface1.svg'
import landing from '../static/landing.svg'
const Navbar = () => {
  return (
    <div id='navbar'>
        <img style={{
          width:'100%'
        }}src={landing} alt="" />
    </div>
  )
}

export default Navbar