import React from "react";
import { FaTemperatureHigh, FaTint, FaSeedling, FaFlask } from "react-icons/fa";
import {Link } from "react-router-dom";
import Soil from '../pages/Soil'

function SensorDataCards({ data }) {
  function getAlertClass(value, min, max) {
    if (value < min) {
      return {
        className: "bg-danger text-white text-decoration-non",
        message: "Low",
      };
    } else if (value > max) {
      return {
        className: "bg-warning text-white text-decoration-none",
        message: "High",
      };
    } else {
      return {
        className: "bg-success text-white text-decoration-non",
        message: "Normal",
      };
    }
  }

  return (
    <div>
      <div className="row text-decoration-none">
        <div className="col-md-6 mx-auto mb-4">
          <div
            className={`card ${
              getAlertClass(data.temperature, 20, 30).className
            }`}
          >
            <div className="card-body">
              <h5 className="card-title">
                <FaTemperatureHigh /> Temperature
              </h5>
              <p className="card-text">{data.temperature} °C</p>
              <p className="card-text">
                {getAlertClass(data.temperature, 20, 30).message} temperature
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div
            className={`card ${getAlertClass(data.humidity, 40, 60).className}`}
          >
            <div className="card-body">
              <h5 className="card-title">
                <FaTint /> Humidity
              </h5>
              <p className="card-text">{data.humidity} %</p>
              <p className="card-text">
                {getAlertClass(data.humidity, 40, 60).message} humidity
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6 mb-4">
          <div
            className={`card ${
              getAlertClass(data.soil_moisture, 10, 40).className
            }`}
          >
            <Link className={`card ${getAlertClass(data.soil_moisture, 10, 30).className}`}  to="/Soil">
            <div className="card-body">
              
              <h5 className="card-title">
                <FaSeedling /> Soil Moisture
              </h5>
              <p className="card-text">{data.soil_moisture}</p>
              <p className="card-text">
                {getAlertClass(data.soil_moisture, 10, 70).message} soil
                moisture
              </p>
            </div>
            </Link>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <Link className={`card ${getAlertClass(data.ph, 6, 7).className}`}  to="/Ph">
          <div className={`card ${getAlertClass(data.ph, 6, 7).className}`}>
            <div className="card-body">
              <h5 className="card-title">
                <FaFlask /> pH
              </h5>
              <p className="card-text">{data.ph}</p>
              <p className="card-text">
                {getAlertClass(data.ph, 6, 7).message} pH
              </p>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-6 mb-4">
          <Link className={`card ${getAlertClass(data.N, 240, 480).className}`}  to="/N">
          <div className={`card ${getAlertClass(data.N, 240, 480).className}`}>
            <div className="card-body">
              <h5 className="card-title">
                <FaFlask /> N
              </h5>
              <p className="card-text">{data.N}</p>
              <p className="card-text">
                {getAlertClass(data.N, 240, 480).message} N
              </p>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-6 mb-4">
          <Link className={`card ${getAlertClass(data.P, 11 , 22 ).className}`}  to="/P">
          <div className={`card ${getAlertClass(data.P, 11, 22 ).className}`}>
            <div className="card-body">
              <h5 className="card-title">
                <FaFlask /> P
              </h5>
              <p className="card-text">{data.P}</p>
              <p className="card-text">
                {getAlertClass(data.P, 11, 22 ).message} P
              </p>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md mb-4">
          <Link className={`card ${getAlertClass(data.K, 110, 280).className}`}  to="/K">
          <div className={`card ${getAlertClass(data.K, 110, 280).className}`}>
            <div className="card-body">
              <h5 className="card-title">
                <FaFlask /> k
              </h5>
              <p className="card-text">{data.K}</p>
              <p className="card-text">
                {getAlertClass(data.K, 110, 280).message} K
              </p>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SensorDataCards;
