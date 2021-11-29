import React from "react"
import Navigationbar from './screens/Navigationbar/Navigationbar.jsx'
import './App.css'
import Particles from "react-tsparticles";
import Header from './screens/header/Header'
import Aboutme from "./screens/Aboutme/Aboutme.jsx";




function App() {
  return (
    <div >
    <Navigationbar/>
    <Header/>

  <Particles />
  <Aboutme/>
    </div>);
}

export default App;
