import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";

function CardHolder({ weatherData }) {
  function extractData(data) {
    const icons = [];
    for (let i = 0; i < 5; i++) {
      const time = data[i].dt_txt.split(" ");
      icons.push({
        key: data[i].dt,
        icon: data[i].weather[0].icon,
        description: data[i].weather[0].description,
        temp: data[i].main.temp,
        time: time[1],
      });
    }
    return icons;
  }

  function generateCards() {
    const cardData = extractData(weatherData.list);
    return cardData.map((data) => {
      return <WeatherCard key={data.key} data={data} />;
    });
  }

  return <div style={{ display: "inline-block" }}>{generateCards()}</div>;
}

export default CardHolder;
