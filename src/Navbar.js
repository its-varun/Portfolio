import React from 'react'
import "./Navbar.css"
// import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container' >
        <div className='nav_holder'>
            <p className='nav'>
                HOME
            </p>
            <p className='nav'>
                PROJECTS
            </p>
            <p className='nav'>
                RESUME
            </p>
            <p className='nav'>
                CONTACT
            </p>
        </div>
    </div>
  )
}

export default Navbar