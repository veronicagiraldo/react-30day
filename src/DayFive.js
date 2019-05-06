import React from 'react';
import day5 from './images/day5.jpg';
import './dayone.css';


class DayFive extends React.Component{
  render(){
    return(
      <div className="day1Container">
        <img class="responsive-img"src={day5} alt="day5"/>
      <div class="innerContainer">
      <h3>Day 5: Flex Panels: Let's Take It All In</h3>
      <a class="link" href="http://day5challenge.surge.sh" target="_blank" rel="noopener noreferrer">Go to website</a>      
  </div>
</div>
    )
  }
  
}
  
export default DayFive;