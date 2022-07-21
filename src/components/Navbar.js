import React from 'react';
import logo from '../logo.svg';
import { Button } from 'react-bootstrap';
import kenya from './images/kenya.jpeg'

function Navbar({toggleChange, darkMode}) {
  return (
    <>
      <div className="Nav">
        
        <div className="Icon">
          <img src={kenya} alt="react icon" className="img" />
          <h2>fun facts </h2>
        </div>
        <div className="toggle">
          <Button variant="dark" onClick={toggleChange}> {darkMode? 'Ligt Mode' : 'Dark Mode' }</Button>
        </div>
      </div>
    </>
  )
}

export default Navbar