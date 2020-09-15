import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import sunImg from "./sunshine.png";
import sunAndCloud from "./cloudySun.jpg";
import sunAndRain from "./sunWithRain.png";
import cloudy from "./cloudy.jpg";
import thunderstorm from "./thunderstorm.png";
import drizzle from "./drizzle.jpeg";
import rain from "./rain.png";
import snow from "./snow.png";

function App() {

  useEffect(() => {
    getWeatherDetails()
    },[]);
    
    function getWeatherDetails() {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=51.5074&lon=0.1278&exclude=current,minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
      
        const convertEpochToDay = (dt) => {

          var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          var d = new Date(dt * 1000);
           var dayName = days[d.getDay()];

           return dayName
        }

        const weatherImage = (forecast) => {
          switch (forecast) {
            case "Clear":
              return sunImg;

            case "Clouds":
            return cloudy;

            case "Thunderstorm":
              return thunderstorm;

            case "Drizzle":
              return drizzle;

            case "Rain":
              return rain;

            case "Snow":
              return snow;
            
        }
      }

      let dailyArray = data.daily.map(daily => ({
            day: convertEpochToDay(daily.dt),
            forecast: (daily.weather[0].description),
            img: weatherImage(daily.weather[0].main),
          }))
          setDailyWeather(dailyArray)
          console.log(dailyArray)
        
        });
    }

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
                    style={{ width: "20rem", margin: "10", float: "center" }}
                  ></img>
                </div>
                <div className="row mt-2">{daily.forecast}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
