import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StoredData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/data').then(response => {
      setData(JSON.parse(response.data.data));
    });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Sensor Data</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Soil Moisture</th>
            <th>pH</th>
            <th>N</th>
            <th>P</th>
            <th>K</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.temperature}</td>
              <td>{item.humidity}</td>
              <td>{item.soil_moisture}</td>
              <td>{item.ph}</td>
              <td>{item.N}</td>
              <td>{item.P}</td>
              <td>{item.K}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StoredData;
