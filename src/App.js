import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/Body';
import { useState } from 'react';

function App() {

  const [tick, setTick] = useState(false)

  const darkFunction = () => {
    setTick(prev => !prev)
  }

  const wee = {
    backgroundColor: tick? 'rgba(0, 0, 0, 0.9)' : "#fff",
    color: tick? "white" : "black"
  }

  
  return (
    <div className="App" style={wee}>
      <Navbar toggleChange={darkFunction} darkMode={tick} />
      <Body darkMode={tick}  />
    </div>
  );
}

export default App;
