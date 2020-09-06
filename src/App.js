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
            <div className="col-xs-3">{daily.day}</div>
            <div className="col-xs-3">
                <img
                  className="card-img-top"
                  src={daily.img}
                  alt="Image"
                  style={{ width: "20rem", margin: "7" }}
                ></img>
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
