import React from 'react';
import './App.css';
import Dayone from './Dayone';
import DayTwo from './DayTwo';
import Home from './Home';
import Foot from './Foot';
import DayThree from './DayThree';
import DayFour from './DayFour';
import DayFive from './DayFive';

function App() {
  return (
    <div className="App">
     
       <Home />
         <Dayone />
         <DayTwo />
         <DayThree />
         <DayFour />
         <DayFive />
      <Foot />
    </div>
  );
}

export default App;
