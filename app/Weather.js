"use client";
import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '4f9975eeb1bebf59b882de989b8bb9bc';

  const getWeather = async () => {
    try {
      setError('');
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError('Could not fetch weather data. Please check the location and try again.');
    }
  };

  return (
    <div className = "weather-contain-all"
    
    style={{
       backgroundImage: `url('/bg-image.jpg')`,
       height: '100vh',
       backgroundSize: 'cover',
       backgroundPosition: 'center' }}>
      
      <div className="title-container" style={{ textAlign: 'center', fontSize: '40px', color: 'black', fontWeight: 'bold'  }}>
        <h1>Weather App</h1>
      </div>


      {/* FORM STYLE */}
      <div className="form-style"
      style = {{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh', 
        flexDirection: 'column',

      }}
      >
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}

          //INPUT BOX STYLE
          style={{ padding: '20px', borderRadius: '5px', border: 'none', color:'black', fontSize: '16px' }}
        />


        <div className = "button-style"
        style={{ padding: '10px', 
        borderRadius: '5px',
         border: 'none', 
         backgroundColor:'#1D3557',
          color: 'white', 
          margin: '20px' }}>
        <button onClick={getWeather}>Get Weather</button>
        </div>


        
        {error && <p style={{ color: 'orange', backgroundColor: '#1D3557', padding: '0.5rem' }}>{error}</p>}
        {weatherData && (
          <div style={{ marginTop: '20px', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '30px', borderRadius: '10px', margin: '10px' }}>
            <h2 style={{fontSize: '20px'}}>Weather Detail</h2>
            <h2>City: {weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp} °C</p>
            <p>Humidity: {weatherData.main.humidity} %</p>
            <p>Min Temp: {weatherData.main.temp_min} °C</p>
            <p>Max Temp: {weatherData.main.temp_max} °C</p>
          </div>
      )}
    </div>
    </div>
  );
};

export default Weather;
