import React from 'react'
import './aboutme.css'
import Nishapic from '../../images/Nishapic.JPG'

function Aboutme() {
    return (
        <div>
           <div className="about_container" id="about-me">
<img src={Nishapic} alt="nishaimg" width="10%" height="10%"/>
           </div>
           <div className="about_text">
              <h1> ABOUT ME</h1>
              <p> I want to be a Web Developer..Looking for a position to start my Career
              in Web Development.Completed my Udemy Course just now</p>
           </div>
        </div>
    )
}

export default Aboutme
