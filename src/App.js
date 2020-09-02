import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import sunImg from "./sun.png";
import sunAndCloud from "./sunAndCloud.png";
import sunAndRain from "./sunAndRain.jp.jpg";

function App() {
  const [dailyWeather, setDailyWeather] = useState([
    {
      day: "Monday",
      forecast: "Sunny",
      img: sunImg,
    },
    {
      day: "Tuesday",
      forecast: "Sunny",
      img: sunImg,
    },
    {
      day: "Wednesday",
      forecast: "Cloudy with Sun",
      img: sunAndCloud,
    },
    {
      day: "Thursday",
      forecast: "Sunny",
      img: sunImg,
    },
    {
      day: "Wednesday",
      forecast: "Cloudy with Sun",
      img: sunAndCloud,
    },
    {
      day: "Thursday",
      forecast: "Cloudy with Sun",
      img: sunAndCloud,
    },
    {
      day: "Friday",
      forecast: "Cloudy with Sun",
      img: sunAndCloud,
    },
    {
      day: "Saturday",
      forecast: "Rain",
      img: sunAndRain,
    },
    {
      day: "Sunday",
      forecast: "Sunny",
      img: sunImg,
    },
  ]);

  return (
    <>
      <div className="heading">
        <h1>Weather</h1>
      </div>     

<div class="scrollmenu">
  <div class="scrolls">
{dailyWeather.map((weather) => (
          <div key={weather.day} style={{ margin: "0 auto" }}>
            <a className="col-sm-1">{weather.day}</a>
            <div className="col-sm-1">
              <img
                className="card-img-top"  
                src={weather.img} 
                alt="Image"
                style={{ width: "8rem", margin: "0" }}
              ></img>
            </div>
          </div>
        ))} 
</div>
</div>

     
    </>
  );
}

export default App;
