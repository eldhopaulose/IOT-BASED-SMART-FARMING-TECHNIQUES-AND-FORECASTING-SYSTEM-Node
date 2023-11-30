import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from "../components/Cards";
import Weather from "./Weather";

function Home() {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    axios
      .get("https://nodeumcu-clientserver.onrender.com/api/data")
      .then((response) => {
        setSensorData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
console.log(sensorData)
  return (
    <div className="container">
      <div className="row">
        <div className="mb-3">
          <Weather />
        </div>
        {sensorData.map((data, index) => (
          <div className="col-lg-12 col-md-12 mb-12 mt-5" key={index}>
            <Card  data={data} />
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default Home
