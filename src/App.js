import React, { useState,Component } from "react";
import "./App.css";



function App() {
  // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  const api = {
    key: "b52b9eddd492159aad14f955a3637896",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState("");
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  };
  function getCurrentDate(separator = "/") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${year}`;
  }
  
  
  

  return (
    <div className="App">
      <div className="container">
        
        
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />

        {typeof weather.main != "undefined" ? (
          <div className="details">
            <div className="city">{weather.name}</div>
            <div className="date">{getCurrentDate()}</div>
            <div className="weather-details">
              <div className="detail">
                <div className="detail-description">Feel like</div>
                <div className="feels-like">{weather.main.feels_like}C</div>
              </div>
              <div className="detail">
                <div className="detail-description">Temparature</div>
                <div className="temp">{weather.main.temp}C</div>
              </div>
              <div className="detail">
                <div className="detail-description">Status</div>
                <div className="status">{weather.weather[0].main}</div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
