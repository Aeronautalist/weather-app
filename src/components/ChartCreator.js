import React, { useState, useEffect } from "react";
import * as weatherApi from "../api/weatherApi";
import Chart from "./Chart";
import CardHolder from "./CardHolder";

function ChartCreator({ location }) {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    if (location) {
      weatherApi.getWeatherByLocation(location).then((data) => {
        console.log(data);
        setWeatherData(data);
      });
    }
  }, [location]);

  return (
    <div>
      {weatherData.length !== 0 ? (
        <div>
          <CardHolder weatherData={weatherData} />
          <Chart weatherData={weatherData} />
        </div>
      ) : (
        <h3>No location</h3>
      )}
    </div>
  );
}

export default ChartCreator;
