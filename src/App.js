import React from 'react';
import './App.css';
import Dayone from './Dayone';
import DayTwo from './DayTwo';
import Home from './Home';
import Foot from './Foot';

function App() {
  return (
    <div className="App">
     
       <Home />
         <Dayone />
         <DayTwo />
      <Foot />
    </div>
  );
}

export default App;
