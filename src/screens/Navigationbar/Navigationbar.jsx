import React from 'react'

import './navigate.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


import {navlink} from '../../Display/navlink'






function createlinks(){
    return(
navlink.map((li,index)=>(
    <Nav.Link key={index} href={li.id} >{li.name}</Nav.Link>
)))
}



function Navigationbar() {
    
    return (
        <div id="home"  >
       <Navbar bg="dark"   className="navigation__container"  expand="md">   
    <Navbar.Brand href="#home">Nisha PortFolio</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Collapse style={{justifyContent:"flex-end",marginRight:"1rem",borderColor:"none"}}>
   
         <Nav className="links" style={{margin:'0 1 rem'}}>
             {createlinks()}
         </Nav>
             
              </Navbar.Collapse>
              </Navbar>
        </div>
    );
}

export default Navigationbar;
