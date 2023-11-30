import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaThermometerThreeQuarters, FaTint, FaCloudRain, FaWind, FaCloud } from "react-icons/fa";

function WeatherInfo(props) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/weather")
      .then((response) => setWeatherData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      {weatherData && (
        <div style={{marginTop:"5rem"}} className="card p-5">
          <div className="card-body">
            <h2 className="card-title">{weatherData.city}</h2>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="card h- mt-3">
                  <div className="card-body">
                    <h5 className="card-title">
                      <FaThermometerThreeQuarters /> Temperature
                    </h5>
                    <p className="card-text">{weatherData.temp}°K</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-3">
                <div className="card ">
                  <div className="card-body">
                    <h5 className="card-title">
                      <FaTint /> Humidity
                    </h5>
                    <p className="card-text">{weatherData.hum}%</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 mt-md-0">
                <div className="card mt-3">
                  <div className="card-body">
                    <h5 className="card-title">
                      <FaCloudRain /> Raining
                    </h5>
                    <p className="card-text">
                      {weatherData.raining !== "Unknown"
                        ? `It is currently raining in ${weatherData.city}`
                        : `It is not currently raining in ${weatherData.city}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 mt-1">
                <div className="card h-100 mt-4">
                  <div className="card-body">
                    <h5 className="card-title">
                      <FaWind /> Wind
                    </h5>
                    <p className="card-text">
                      The wind in {weatherData.city} is currently blowing at{" "}
                      {weatherData.windSpeed} meters per second from the{" "}
                      {weatherData.compassDir}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-2">
                <div className="card h-100 mt-4">
                  <div className="card-body">
                    <h5 className="card-title">
                      <FaCloud /> Conditions
                    </h5>
                    <p className="card-text">{weatherData.conditions}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherInfo;
