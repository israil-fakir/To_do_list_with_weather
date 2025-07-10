import React, { useEffect, useState } from 'react';

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const city = 'Dhaka'; // You can make this dynamic later
  const apiKey = '722c687809ac31415f06369058b07fa6'; // Replace with your actual key

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then(data => {
        setWeather({
          temp: data.main.temp,
          desc: data.weather[0].description,
          humidity: data.main.humidity,
        });
      })
      .catch(err => console.error('Weather fetch error:', err));
  }, []);

  return (
    <div className="text-sm text-blue-600 mt-4" id="weather">
      {weather ? (
        <>
          <p>📍Dhaka</p>
          <p>🌡️ Temp: {weather.temp}°C</p>
          <p>🌤️ {weather.desc}</p>
          <p>💧 Humidity: {weather.humidity}%</p>
        </>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
}

export default WeatherWidget;
