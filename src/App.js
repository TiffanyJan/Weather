import {React,useState} from 'react';
import './App.css';
import sunImg from "./sun.png";
import sunAndCloud from "./sunAndCloud.png";
import sunAndRain from "./sunAndRain.jp.jpg";

function App() {

  const [dailyWeather,setDailyWeather]=useState([
   {
     day:"Monday",
     forecast:"Sunny",
     img:sunImg,
   },
   {
     day:"Tuesday",
     forecast:"Sunny",
     img:sunImg,
   },
   {
     day:"Wednesday",
     forecast:"Cloudy with Sun",
     img:sunAndCloud,
   },
   {
     day:"Thursday",
     forecast:"Sunny",
     img:sunImg,
   },
   {
    day:"Wednesday",
    forecast:"Cloudy with Sun",
    img:sunAndCloud,
  },   {
    day:"Thursday",
    forecast:"Cloudy with Sun",
    img:sunAndCloud,
  },
  {
    day:"Friday",
    forecast:"Cloudy with Sun",
    img:sunAndCloud,
  },
  {
    day:"Saturday",
    forecast:"Rain",
    img:sunAndRain,
  },
  {
    day:"Sunday",
    forecast:"Sunny",
    img:sunImg,
  }
  ]);


  return (
    <>
    <div className="heading">
    <h1>Weather</h1>
    </div>
     <div className="row mt-2">

     </div>
     </>
  );
}

export default App;
