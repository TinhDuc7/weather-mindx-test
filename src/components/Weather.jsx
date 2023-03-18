import React, { useState } from "react";
import { apiweather } from "../Api/ApiWeather";
import "./Weather.scss";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [icon, setIcon] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  const search = async (event) => {
    if (event.key === "Enter") {
      const data = await apiweather(city);
      setWeather(data);
      selectIcon(data.weather[0].main);

      setCity("");
    }
  };

  function selectIcon(x) {
    switch (x) {
      case "Clear":
        setIcon("https://cdn-icons-png.flaticon.com/512/6974/6974833.png");
        break;
      case "Rain":
        setIcon("https://cdn-icons-png.flaticon.com/512/3351/3351979.png");
        break;
      case "Snow":
        setIcon("https://cdn-icons-png.flaticon.com/512/642/642102.png");
        break;
      case "Clouds":
        setIcon("https://cdn-icons-png.flaticon.com/512/414/414825.png");
        break;
      case "Haze":
        setIcon("https://cdn-icons-png.flaticon.com/512/1197/1197102.png");
        break;
      case "Smoke":
        setIcon("https://cdn-icons-png.flaticon.com/512/4380/4380458.png");
        break;
      case "Mist":
        setIcon("https://cdn-icons-png.flaticon.com/512/4005/4005901.png");
        break;
      case "Drizzle":
        setIcon("https://cdn-icons-png.flaticon.com/512/3076/3076129.png");
        break;
      default:
    }
  }
  return (
    <div className="main-container">
      <h1>Weather app</h1>
      <input
        type="text"
        className="search"
        placeholder="Enter a name of national capital"
        value={city}
        onChange={handleChange}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="city">
          <div className="date"> {new Date().toDateString("en-US")}</div>

          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="info">
            <img
              className="weather-icon"
              src={icon}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
