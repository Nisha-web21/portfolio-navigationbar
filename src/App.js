import React from "react"
import Navigationbar from './screens/Navigationbar/Navigationbar.jsx'
import './App.css'

import Header from './screens/header/Header'
import Aboutme from "./screens/Aboutme/Aboutme.jsx";
import Technologies from "./screens/Technologies/Technologies.jsx";
import Portfolio from "./screens/Portfolio/Portfolio.jsx";
import Contacts from "./screens/Contacts/Contacts.jsx";




function App() {
  return (
    <div >
    <Navigationbar/>
    <br/>
    <br/>
    
      
  <Header/>
  <Aboutme/>
  <Technologies/>
  <Portfolio/>
  <Contacts/>
    </div>);
}

export default App;
