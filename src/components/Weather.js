import React from "react";
import Chart from "./Chart";

function Weather({temp,main,icon,daily}) {
    console.log("daily",daily)
    return (
        <div>
            <h2>Temp : {temp}*C</h2>
            <h4>Weather: {main}</h4>
            <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            />
            <Chart dailyData={daily}/>
        </div>
    );
}

export default Weather;
