import React from 'react';
import './App.css';
import Dayone from './Dayone';
import DayTwo from './DayTwo';
import Home from './Home';
import Foot from './Foot';
import DayThree from './DayThree';

function App() {
  return (
    <div className="App">
     
       <Home />
         <Dayone />
         <DayTwo />
         <DayThree />
      <Foot />
    </div>
  );
}

export default App;
