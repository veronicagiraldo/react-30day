import React from 'react';
import day1 from './images/day1.jpg';
// import {Card } from 'react-materialize';
import './dayone.css';

class Dayone extends React.Component{
  render(){
    return(
      <div className="day1Container">
        <img class="responsive-img"src={day1} alt="day1"/>
      <div class="innerContainer">
      <h3>Day 1: Play the "keys"</h3>
      <a class="link" href="http://day1challenge.surge.sh/" target="_blank" rel="noopener noreferrer">Go to website</a>

      {/* <p>Using JavaScript features "audio", "transitions", "transitionsend", "addEventListener", "key" events </p> */}
      
   
  </div>
</div>
    )
  }
  
}
  
export default Dayone;