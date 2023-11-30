import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Prediction() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/pd').then(response => {
      setData(JSON.parse(response.data.data));
    });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Prediction</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="text-center">Date</th>
            <th className="text-center">Rain Intensity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.Date}>
              <td className="text-center">{item.Date}</td>
              <td className={`text-center ${item['Rain Intensity'] ? 
                (item['Rain Intensity'] === 'High' ? 'text-danger' : 
                (item['Rain Intensity'] === 'Moderate' ? 'text-warning' : 
                (item['Rain Intensity'] === 'Light' ? 'text-info' : ''))) : 'text-success'}`}>
                {item['Rain Intensity'] ? item['Rain Intensity'] : 'not raining'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Prediction;
