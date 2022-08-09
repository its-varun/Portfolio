import React from 'react'
import './Bottom.css'
function Bottom() {
  return (
    <div className="bottom" >
        <div className='bottom_container'>
            <div className='box'>
                <i class="fa-solid fa-envelope"></i>
                <span className='text'>
                    varunkansal2111@gmail.com
                </span>
            </div>
            <div className='box'>
                <i class="fa-solid fa-mobile"></i>
                <span className='text'>
                    +91 8699344136
                </span>
            </div>

        </div>
        <div className='icons'>
            <i style={{marginRight:"10px"}} class="fa-brands fa-whatsapp"></i>
            <i style={{marginRight:"10px"}} class="fa-brands fa-instagram"></i>
            <i style={{marginRight:"10px"}} class="fa-brands fa-twitter"></i>
            <i style={{marginRight:"10px"}} class="fa-brands fa-github"></i>
            <i style={{marginRight:"10px"}} class="fa-brands fa-linkedin-in"></i>
        </div>
    </div>
  )
}

export default Bottom