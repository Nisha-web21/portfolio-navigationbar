import React from 'react'
import './header.css'
import Typed  from "react-typed";


function Header() {
    return (
        <div className="main-info">
            <h1>I am Nisha Susan Thomas</h1>
            <Typed
                strings={[
                    'Find About Me']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop />
                   
        
        </div>
    )
}

export default Header
