import React from 'react'
import './aboutme.css'
import Nishapic from '../../images/Nishapic.JPG'

function Aboutme() {
    return (
       
           <div className="about_container" id="about-me">
            <div>
           <img src={Nishapic} alt="nishaimg"/>
           </div>
           <div className="about_text">
              <h1> ABOUT ME</h1>
              <p> I want to be a Web Developer..Looking for a position to start my Career
              in Web Development.Completed my Full Stack Web Development Course just now</p>
           </div>
        </div>
    )
}

export default Aboutme
