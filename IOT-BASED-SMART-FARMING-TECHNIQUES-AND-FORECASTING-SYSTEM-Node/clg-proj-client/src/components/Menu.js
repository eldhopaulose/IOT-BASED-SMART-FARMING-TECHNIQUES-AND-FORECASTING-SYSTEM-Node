import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Menu.css';

const sideMenu = () => {
  return (
    <Menu>
    <a className="menu-item" href="/">
      Home
    </a>
    <a className="menu-item" href="/WeatherPrediction">
    Forecasting
    </a>
    <a className="menu-item" href="/StoredData">
    Sensor data 
    </a>
   
  </Menu>
  );
};

export default sideMenu;
