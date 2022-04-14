import React, { useState } from "react";
import "./weatherCard.css";

const WeatherCard = () => {
//   const [query, setQuery] = useState("");
//   const [weather, setWeather] = useState({});
  return (
    <div className="main-container">
   
      
        <div className="city">
          <div className="date"> {new Date().toDateString("en-US")}</div>
       

          <h2 className="city-name">
            <span>"weather-name"</span>
            <sup>"us"</sup>
          </h2>
          <div className="city-temp">
            {Math.round(10.5)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src="client/src/asset/cloud.jpeg"
              alt="weather description"
            />
            <p>"weather desc"</p>
          </div>
        </div>
      
    </div>
  );
};

export default WeatherCard;