import React from 'react'
import DevIcon from "devicon-react-svg";
import {techs} from './techs.js'
import './technologies.css'

function Technologies() {
    return (
        <div className="technologies_container" id="technologies">
<div>
<h1 style={{textAlign:"center"}}>Technologies </h1>
</div>

<div className="tech_cards_container">
{techs.map((t,idx)=>{
    return(
        // eslint-disable-next-line react/jsx-key
        <div key={idx} className="tech_card">
<DevIcon className="tech_icon" icon={t.icon}/>
<span style={{margin:"5px" ,fontSize:"5rem"}}>{t.name}</span>
        </div>
    )
})}


</div>
          
     
        </div>
    )
}

export default Technologies
