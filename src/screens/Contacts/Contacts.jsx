import React from 'react'
import "./contact.css"
import {navlink} from '../../Display/navlink'


function createlinks(){
   return( navlink.map((link,index)=>(
        <p key={index}>
        <a href={link.id}>{link.name}</a></p>
            
    )))
}

function Contacts() {
    var newDate=new Date().getFullYear();
    return (
        <div className="contact_me_container" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact_me_links">
            <div>
<p><a href="https://www.linkedin.com/in/nisha-susan-thomas-4aab41223/">LinkedIn</a></p>
<p><a href="https://www.google.com/gmail/">EmailTo:nishasthomas.pta@gmail.com</a></p>
<p>Location:Phoenix,Arizona,USA</p>
            </div>
            <div>
{createlinks()}
            </div>
        </div>
        <div style={{textAlign:"center"}}>Copyright&copy; {newDate}</div>
        </div>
    )
}

export default Contacts
