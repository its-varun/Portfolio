import React from 'react'
import person from './images/person.jpg';
import './Main.css'
import Navbar from './Navbar';
import Bottom from './Bottom';
import { Link } from 'react-router-dom';
import Pdf from "./pdf/Resume.pdf"

function Main() {
    return (
        <>
            <Navbar/>
            <div className='main_holder'>
                <div className='holder'>

                    <div className='content'>
                        <h1 className='greetings'>Hello,</h1>
                        <p className='below_greeting'>a bit about me :</p>
                        <div className='circle_container'>
                            <a href={Pdf} target="_blank" style={{textDecoration:"none"}}>
                                <div className="circle one">
                                    My Resume
                                </div>
                            </a>
                            <Link to="/project" style={{textDecoration:"none"}}>
                                <div className="circle two">
                                    My Project
                                </div>
                            </Link>
                            <Link to="contact" style={{textDecoration:"none"}}>
                                <div className="circle three">
                                    Contact Me
                                </div>
                            </Link>
                        </div>
                        <div>
                            <div className='para'>
                                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story and let your users get to know you.
                            </div>
                        </div>
                    </div>
                    <div className='info'>
                        <img src={person} alt="..." className='photo' />
                        <h1 className="name" >Varun Kansal</h1>
                    </div>
                </div>
            </div>
            <Bottom/>
        </>
    )
}

export default Main