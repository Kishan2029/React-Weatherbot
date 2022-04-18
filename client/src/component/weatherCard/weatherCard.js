import React, { useState } from "react";
import "./weatherCard.css";

const WeatherCard = (props) => {
//   const [query, setQuery] = useState("");
//   const [weather, setWeather] = useState({});
console.log("Props:",props);
  return (
    <div className="main-container">
   
      
        <div className="city">
          <div className="date"> {new Date().toDateString("en-US")}</div>
       

          <h2 className="city-name">
            <span>{props.city}</span>
            <sup>"us"</sup>
          </h2>
          <div className="city-temp">
            {Math.round(props.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={props.weather_imgurl}
              alt="weather description"
            />
            <p>{props.weather_desc}</p>
          </div>
        </div>
      
    </div>
  );
};

export default WeatherCard;