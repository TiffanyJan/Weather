import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import sunImg from "./sunshine.png";
import sunAndCloud from "./cloudySun.jpg";
import sunAndRain from "./sunWithRain.png";


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
  <div class="container-fluid">
    <h1>Weather</h1>
    <div class="row flex-row flex-nowrap">
      
        <div class="col-xs-3">
        {dailyWeather.map((daily) => (
          <div key={daily.day} style={{ margin: "0 auto" }}>
            <div className="row mt-2">{daily.day}</div>
            <div className="row mt-2">
                <img
                  className="card-img-top"
                  src={daily.img}
                  alt="Image"
                  style={{ width: "20rem", margin: "10", float:"center" }}
                ></img>
            </div>
            <div className="row mt-2">
              {daily.forecast}
            </div>
          </div>
        ))}
        </div>
    </div>
</div>

     
    </>
  );
}

export default App;
