import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import Pdf from "./pdf/Resume.pdf"

function Navbar() {
  return (
    <div className='container' >
        <div className='nav_holder'>
            <Link to="/"className='nav'>
                HOME
            </Link>
            <Link to="/project"className='nav'>
                PROJECTS
            </Link>
            <a href={Pdf} target="_blank" className='nav'>
                RESUME
            </a>
            <Link to="/contact"className='nav'>
                CONTACT
            </Link>
        </div>
    </div>
  )
}

export default Navbar