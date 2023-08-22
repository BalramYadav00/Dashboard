import React, {useEffect} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Chart, Doughnut } from "react-chartjs-2";

import { generateRandomColorsWithoutRepetition } from "./CustomComponents";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "#F37B5C",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 2,
    },
  ],
};
function countTopicOccurrences(data) {
    const topicCounts = {};
    data.forEach(item => {
      let topic = item.country;
      topic = topic === "" ? "Unknown Source": topic
      if (topicCounts[topic]) {
        topicCounts[topic]++;
      } else {
        topicCounts[topic] = 1;
      }
    });
    return topicCounts;
  }

export default function DoughnutChat() {
    const newdata = JSON.parse(localStorage.getItem('mainData'));
    const arr = countTopicOccurrences(newdata)
    const keyArr = Object.keys(arr)
     data.labels = keyArr
     data.datasets[0].data = Object.values(arr)
    const colors = generateRandomColorsWithoutRepetition(data.labels.length)
    data.datasets[0].backgroundColor = colors
    data.datasets[0].borderColor = Array(data.labels.length).fill("#FFFFFF")
    console.log(data)

    useEffect(() => {
      // Create the doughnut chart
      const ctx = document.getElementById('donutChart').getContext('2d');
      const donutChart = new ChartJS(ctx, {
        type: 'doughnut',
        data: data,
        options: {
          cutout: 100,
          plugins: {
            legend: {
              display: false, // Hide the legend
            },
            tooltip: {
              enabled: true, // Hide tooltips (label names)
            },
          },
        },
      });
  
      return () => {
        // Clean up the chart when the component unmounts
        donutChart.destroy();
      };
    }, [data]);
    // console.log(newdata)
  return <div className=" font-sans basis1/4  m-4   p-4 shadow-md flex flex-col rounded-xl">
    <p className="font-mono text-xl font-semibold text-gray-600">Data from 600+ resource</p>
    {/* <Doughnut options={{}} data={data} /> */}
    <canvas className="m-10" id="donutChart"></canvas>
  </div>
}
