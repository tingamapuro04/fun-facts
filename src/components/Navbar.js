import React from 'react';
import logo from '../logo.svg';
import Switch from "react-switch";

function Navbar() {
  return (
    <>
      <div className="Nav">
        
        <div className="Icon">
          <img src={logo} alt="react icon" className="img" />
          <h2>fun facts</h2>
        </div>
        <div className="toggle">
          <h3>Light</h3>
          <Switch />
          <h3>dark</h3>
        </div>
      </div>
    </>
  )
}

export default Navbar