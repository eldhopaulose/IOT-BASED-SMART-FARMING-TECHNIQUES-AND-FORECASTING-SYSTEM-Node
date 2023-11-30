import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Prediction from './prediction';
import { WiDaySunny, WiRain, WiCloudy, WiSnow } from 'react-icons/wi';


const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await axios.get('http://api.weatherapi.com/v1/forecast.json?key=9a65815ddf3742e0897174509231103&q=9.8616,76.5957&days=13');
      setWeatherData(response.data);
    };

    fetchWeatherData();
  }, []);

  const getWeatherIcon = (code) => {
    switch (code) {
      case 1000:
        return <WiDaySunny size={72} />;
      case 1063:
      case 1180:
      case 1183:
        return <WiRain size={72} />;
      case 1003:
      case 1006:
      case 1009:
        return <WiCloudy size={72} />;
      case 1114:
      case 1117:
      case 1210:
      case 1213:
        return <WiSnow size={72} />;
      default:
        return <WiDaySunny size={72} />;
    }
  };

  const getCardClass = (code) => {
    switch (code) {
      case 1000:
        return 'bg-warning text-dark';
      case 1063:
      case 1180:
      case 1183:
        return 'bg-primary text-white';
      case 1003:
      case 1006:
      case 1009:
        return 'bg-info text-white';
      case 1114:
      case 1117:
      case 1210:
      case 1213:
        return 'bg-secondary text-white';
      default:
        return 'bg-warning text-dark';
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mb-5">3 Day Weather Forecast</h1>
      <div className="row justify-content-center">
        {weatherData && (
          weatherData.forecast.forecastday.map((day) => (
            <div className="col-lg-3 col-md-6 mb-4" key={day.date}>
              <div className={`card border-0 ${getCardClass(day.day.condition.code)}`}>
                <div className="card-body">
                  <h5 className="card-title">{day.date}</h5>
                  <p className="card-text">{day.day.avgtemp_c}°C</p>
                  <div className="d-flex justify-content-center align-items-center">
                    {getWeatherIcon(day.day.condition.code)}
                    <p className="ml-2 mb-0">{day.day.condition.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Prediction/>
    </div>
  );
};

export default Weather;
