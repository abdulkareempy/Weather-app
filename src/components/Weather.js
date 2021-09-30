import React from "react";
import Chart from "./Chart";
import Particles from "react-tsparticles";
import particleConfig from "./config/particleConfig";
import "../App.css";
// import from ""
function Weather({ temp, main, icon, daily }) {
    console.log("daily", daily);
    return (
        <div className="particleWrapper">
        <Particles
          id="tsparticles"
         
          options={particleConfig}
        />
        <div className="weather-wrapper">
            <h2>Temp : {temp}*C</h2>
            <h4>Weather: {main}</h4>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        </div>
        <Chart dailyData={daily} />
    
        </div>
      ); 
}

export default Weather;




