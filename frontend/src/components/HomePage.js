import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route, Link, Redirect, } from "react-router-dom";
import LouresOpenImage from "../../public/images/LouresOpen.jpg"; 
import FpddImage from "../../public/images/FPDD_LOGO_CORES.png"; 
import wdsfImage from "../../public/images/wdsf.png"; 

//This is the component for the home page, everything is done from here
export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (       
    <Router>
      <Routes>
          <Route exact path = "/home" element = {
            <div id="mainComponent">
              <div className = 'topPage'>                                      
                <header>
                  <nav id="navbar">
                    <ul>

                    <li id = "about">
                        <a href="#"> About </a>
                        <ul className="dropdown" id="aboutDropdown">
                          <li><a href="#">Event</a></li>
                          <li><a href="#">Place</a></li>
                          <li><a href="#">Where to stay</a></li>
                          <li><a href="#">Others</a></li>
                        </ul>
                      </li>


                      <li id = "competitions" >
                        <a href="#"> Competitions </a>
                        <ul className="dropdown" id="compDropdown">
                          <li><a href="#">WDSF</a></li>
                          <li><a href="#">National</a></li>
                        </ul>
                      </li>

                      <li id= "contacts" >
                        <a href="#">Contacts</a>
                      </li>

                      <li id="ticketsButton"> 
                        <button>Tickets</button>
                      </li>

                    </ul>
                  </nav>
                </header>
                <h1>Loures Open Championship</h1>
              </div>
          
              <div id= 'box'> 
                <div id="topBox">
                  <img src={LouresOpenImage} alt="Loures Open logo"  id="louresImg"/>
                  <p id='info'>
                    28/02 =={'>'} 31/02/2025
                    m ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisl risus, commodo 
                    in dolor et, venenatis dapibus tortor. Fusce dui tortor,
                    condimentum finibus sagittis non, faucibus ut ligula. Sed congue, nisi viver
                  </p>/*se for preciso ponho um div com cenas mais interativas*/
                  
                </div>         
                
                <hr id="hr"/>

                <div id="sponsorWrap">
                  <a href="https://fpdd.pt/novo/">
                    <img src={FpddImage} alt="FPDD logo"  id="fpddImg"/>
                  </a>

                  <a href="https://www.worlddancesport.org/">
                    <img src={wdsfImage} alt="WDSF logo"  id="wdsfImg"/>
                  </a>

                  <a href="https://www.worlddancesport.org/">
                    <img src={wdsfImage} alt="WDSF logo"  id="wdsfImg2"/>
                  </a>

                  <a href="https://www.worlddancesport.org/">
                    <img src={wdsfImage} alt="WDSF logo"  id="wdsfImg3"/>
                  </a>

                </div>

              </div>
            </div>
          }/>
      </Routes>
    </Router>


    );
  }
}