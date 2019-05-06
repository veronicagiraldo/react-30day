import React from 'react';
import day4 from './images/day4-img.jpg';
import './dayone.css';


class DayFour extends React.Component{
  render(){
    return(
      <div className="day1Container">
        <img class="responsive-img"src={day4} alt="day4"/>
      <div class="innerContainer">
      <h3>Day 4: Array Cardio - practice </h3>
      <a class="link" href="http://day4challenge.surge.sh" target="_blank" rel="noopener noreferrer">Go to website</a>      
  </div>
</div>
    )
  }
  
}
  
export default DayFour;