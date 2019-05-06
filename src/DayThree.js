import React from 'react';
import day3 from './images/day3.jpg';
import './dayone.css';


class DayThree extends React.Component{
  render(){
    return(
      <div className="day1Container">
        <img class="responsive-img"src={day3} alt="day3"/>
      <div class="innerContainer">
      <h3>Day 3: Change the picture frame with spacing, blur, and color</h3>
      <a class="link" href="http://day3challenge.surge.sh/" target="_blank" rel="noopener noreferrer">Go to website</a>      
  </div>
</div>
    )
  }
  
}
  
export default DayThree;