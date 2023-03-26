import React from 'react'
import "./styles/navbar.css"
import surface from '../static/surface1.svg'
const Navbar = () => {
  return (
    <div id='navbar'>
        <div>
             <h3>CreativeProxies</h3>
             <p>Pricing</p>
             <p>Explore Tools</p>
             <p>Resources</p>
             <p>FAQs</p>
             <p>Blogs</p>
        </div>
        <div>
            <p className='blue'> <img src={surface} alt="" /> Join Discord</p>
            <p> | Login</p>
            <button id='started'>Get Started</button>
        </div>
    </div>
  )
}

export default Navbar