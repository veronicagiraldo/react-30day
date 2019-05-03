import React from 'react';
import day2 from './images/day2.jpg'
import './dayone.css';


class DayTwo extends React.Component{
  render(){
    return(
      <div className="day1Container">
        <img class="responsive-img"src={day2} alt="day2"/>
      <div class="innerContainer">
      <h3>Day 2: What time is it?</h3>
      <a class="link" href="http://day2challenge.surge.sh/" target="_blank" rel="noopener noreferrer">Go to website</a>

      {/* <p>Using JavaScript features "audio", "transitions", "transitionsend", "addEventListener", "key" events </p> */}
      
  </div>
</div>
    )
  }
  
}
  
export default DayTwo;