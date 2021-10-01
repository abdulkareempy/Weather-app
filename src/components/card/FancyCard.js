import React from 'react'
import "./card.css"

function FancyCard({icon}) {
    console.log("received this icon",icon)
    return (
        <div className="fancy-card">
            <div className="icon">
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"/>
        </div>
        <div className="content">
            <h3>Weather App</h3>
            <p>Expected Raining this morining</p>
        </div>
        </div>
    )
}

export default FancyCard
