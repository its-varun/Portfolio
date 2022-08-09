import React from 'react'
import './Card.css'
function Card({Name,content,color,link}) {
  return (
    <>
       <div className='body'>
        
            <div className="courses-container">
                <div className="course" >
                    <div className="course-preview" style={{backgroundColor:`${color}`}}>
                        <h2></h2>
                        
                    </div>
                    <div className="course-info">
                        <h4>{Name}</h4>
                        <p>{content}</p>
                        <a target="_blank" href={link}><button className="btn"  style={{backgroundColor:`${color}`}}>Visit</button></a>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Card