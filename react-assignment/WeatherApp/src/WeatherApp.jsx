import { useState, useEffect } from "react";
import './WeatherApp.css';
import loadingGif from "./assets/loading-7528_512.gif";
function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [formData, setFormData] = useState({ city: "" });
  const [loading, setLoading] = useState(true);

  const API_KEY = "6e9df62fd7e08b9719056844b147c2db";

  useEffect(() => {
    fetchWeather("Delhi");
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchWeather = async (city) => {
    try {
      const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const currentWeatherResponse = await fetch(currentWeatherUrl);
      if (!currentWeatherResponse.ok) {
        setFormData({ city: "" });
        setLoading(false);
        alert("No weather found.");
        throw new Error("No weather found.");
      } else {
        const currentWeatherData = await currentWeatherResponse.json();
        setWeatherData(currentWeatherData);
        setFormData({ city: "" });
        setLoading(false);
        console.log(currentWeatherData);
      }
    } catch (error) {
        alert(`Oops! Something went wrong. Please try again. error: ${error.message}`);
        setLoading(false);
      console.error("Error fetching weather data:", error);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetchWeather(formData.city);
  }

  return (
    <div className="container">
          {loading && (
        <div className="loading-overlay">
          <img src={loadingGif} alt="Loading..." className="loading-gif" />
        </div>
      )}
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          placeholder="Enter City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <button type="submit">Search</button>
      </form>
      {weatherData && (
        <div className="weather">
          <h2>{weatherData.name}</h2>
          <div className="description">
            <p><b>Description:</b> {weatherData.weather[0].description}</p>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt="icon"
              className="icon"
            />
          </div>
          <p><b>Temp:</b> {weatherData.main.temp}°C</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
