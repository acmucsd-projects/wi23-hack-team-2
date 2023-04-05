import React from "react";
import "./style.css";

/*
      <div className="wrapper">Build-a-Schedule
            <nav className="navlinks">
              <a href="/">Create</a>
              <a href="/view">View</a>
            </nav>
            <div className="elmo-logo"><img src="./triton-elmo.svg" alt="Triton Elmo"/></div>
        </div>


        <nav className="navlinks">
              <a href="/">Create</a>
              <a href="/view">View</a>
        </nav>

*/

const Header = () => {
  return (
    <div className="header">
      <div className="align-left">
        <ul>
            <li>Build-a-Schedule</li>
        </ul>
        
      </div>
      <div className="align-right">
          <img src="https://static.overlay-tech.com/assets/6498267d-3158-4b54-8e09-3a9e6174470b.png" alt="Triton Elmo"/>
      </div>
    </div>


      
  );


};

export default Header;