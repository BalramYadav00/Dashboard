import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { generateRandomColorsWithoutRepetition } from "./CustomComponents";
import { returnArr } from "./CustomComponents";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

var initialData = {
  labels,
  datasets: [
    {
      label: "New Data",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: ["#FFFFFF"],
      backgroundColor: ["#12A676"],
      // lineTension: 0.5,
      pointStyle: "hidden",
    },
  ],
};

export function LineChart() {
  const chartRef = React.useRef(null);
  const [data, setData] = useState(initialData);

  React.useEffect(() => {
    if (chartRef && chartRef.current) {
      const myChart = new ChartJS(chartRef.current, {
        type: "bar",
        data: data,
        options: {
          responsive: true,
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: xAxis.toUpperCase(),
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: yAxis.toUpperCase(),
              },
            },
          },
          plugins: {
            legend: {
              display: false,
              position: "top",
              labels: {
                display: false, // Set this to false to hide legend labels
              },
            },
          },
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [data]);

  const xData = ["Country", "Topic", "Region"];
  const yData = ["Intensity", "Likelihood", "Relevance"];

  const [xAxis, setxAxis] = useState("country");
  const [yAxis, setyAxis] = useState("intensity");

  useEffect(() => {
    const newdata = JSON.parse(localStorage.getItem("mainData"));
    let newObj = returnArr(newdata, xAxis, yAxis);
    setData({
      labels: Object.keys(newObj),
      datasets: [
        {
          ...data.datasets[0], // Keep other properties of the dataset
          data: Object.values(newObj),
        },
      ],
    });
    console.log(newObj);
  }, [xAxis, yAxis]);
  console.log(xAxis, yAxis);
  return (
    <div className="relative basis-3/4 items-center justify-center flex flex-col  m-4 rounded-lg shadow-md">
      <div className="flex flex-row space-x-4 mb-4">
        <select
          className="appearance-none shadow-lg  bg-white border-2 border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
          onChange={(e) => setxAxis(e.target.value.toLowerCase())}
        >
          {xData.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <label className="pt-2"> Vs </label>
        <select
          className="appearance-none shadow-lg bg-white border-2 border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
          onChange={(e) => setyAxis(e.target.value.toLowerCase())}
        >
          {yData.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      {/* <Line options={options} data={data} /> */}
      <canvas className="" ref={chartRef} />
    </div>
  );
}
