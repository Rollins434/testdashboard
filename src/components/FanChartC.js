import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import { format } from "date-fns";

// Register all components
Chart.register(...registerables, zoomPlugin);



const FanChartC = () => {
  // Define start and end dates
  const startDate = new Date("2024-10-05");
  const endDate = new Date("2024-10-10");

  // Function to generate date labels
  const generateLabels = (start, end) => {
    const labels = [];
    const currentDate = new Date(start);
    while (currentDate <= end) {
      labels.push(format(currentDate, "yyyy-MM-dd")); // Format date to "YYYY-MM-DD"
      currentDate.setDate(currentDate.getDate() + 1); // Increment the date by one day
    }
    return labels;
  };

  const labels = generateLabels(startDate, endDate);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Actual Data",
        data: [50, 55, 60, 62, 65, 68], // Adjusted data length to match labels
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        type: "time",
        time: {
          unit: "day",
        },
        // min: startDate.getTime(),
        // max: endDate.getTime(), 
        ticks: {
          callback: (value) => {
            const date = new Date(value);
            return format(date, "dd-MM-yyyy");
          },
        },
      },
    },
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
            speed: 0.1,
          },
          pinch: {
            enabled: true,
          },
          mode: "x",
          // limits: {
          //   x: {
          //     min: startDate.getTime(),
          //     max: endDate.getTime(),
          //   },
          // },
        },
        pan: {
          enabled: true, // Enable panning
          mode: "x", // Allow panning in the x direction
          onPanStart({ chart, point }) {
            const xMin = chart.scales.x.min; // Get current x-axis min
            const xMax = chart.scales.x.max; // Get current x-axis max

            // Prevent panning if outside the specified date range
            const chartPointTime = chart.scales.x.getValueForPixel(point.x);
            if (chartPointTime < xMin || chartPointTime > xMax) {
              return false; // Abort panning
            }
          },
          onPan({ chart }) {
            // Dynamically adjust x-axis limits based on the current panning
            const xMin = startDate.getTime();
            const xMax = endDate.getTime();
            chart.scales.x.min = xMin;
            chart.scales.x.max = xMax;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "800px", height: "600px" }}>
      <h2>Fan Chart with Multiple Models and Zoom</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default FanChartC;
