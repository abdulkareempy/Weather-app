import React from "react";
import Chart from "./Chart";
import FancyCard from "./card/FancyCard"; 
import "../App.css";
// import from ""
function Weather(props) {
    // console.log("daily", daily);
    return (
      <>
        <div className="weather-wrapper">
            {/* <h2>Temp : {temp}*C</h2>
            <h4>Weather: {main}</h4>
            <img src={`http://openweathermap.org/img/wn/01n@2x.png`} /> */}
            <FancyCard props={props}/>
        </div>
        {/* <Chart dailyData={daily} /> */}
        </>
      ); 
}

export default Weather;




