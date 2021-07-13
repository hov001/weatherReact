import React from "react";
import './Weather.css'

function Weather({weekDey, imgURL, temp}) {
    return (
        <div className="weather-block">
            <h2>{weekDey}</h2>
            <img src={imgURL} alt={imgURL} />
            <p>{temp}</p>
        </div>
    )
}

export default Weather