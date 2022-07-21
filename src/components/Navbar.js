import React from 'react';
import logo from '../logo.svg';
import { Button } from 'react-bootstrap';

function Navbar() {
  return (
    <>
      <div>
        <Button variant="primary">Primary</Button>
        <Button variant="success">Success</Button>
        <div className="Icon">
          <img src={logo} alt="react icon" />
          <h2>fun facts</h2>
        </div>
        <div className="toggle">
          <h3>Light</h3>
          <input type="checkbox" role="switch" />
          <h3>dark</h3>
        </div>
      </div>
    </>
  )
}

export default Navbar