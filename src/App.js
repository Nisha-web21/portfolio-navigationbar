import React from "react"
import Navigationbar from './screens/Navigationbar/Navigationbar.jsx'
import './App.css'
import Particles from "react-tsparticles";
import Header from './screens/header/Header'
import Aboutme from "./screens/Aboutme/Aboutme.jsx";
import Technologies from "./screens/Technologies/Technologies.jsx";




function App() {
  return (
    <div >
    <Navigationbar/>
    <br/>
    <br/>
      <Particles style={{height:"10%"}}/>
      
  <Header/>
  <Aboutme/>
  <Technologies/>
    </div>);
}

export default App;
