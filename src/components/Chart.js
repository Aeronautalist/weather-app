import React from "react";
import { Bar } from "react-chartjs-2";

function Chart({ weatherData }) {
  const labels = weatherData.list.map((data) => {
    return data.dt_txt;
  });

  const temps = weatherData.list.map((data) => {
    return data.main.temp;
  });

  const state = {
    labels: labels,
    datasets: [
      {
        label: "Temperature",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: temps,
      },
    ],
  };

  return (
    <div>
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: "Temperature",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}

export default Chart;
