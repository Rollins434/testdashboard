import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import 'chartjs-adapter-date-fns';
import { format } from 'date-fns'; // Import date-fns for formatting

// Register all components
Chart.register(...registerables, zoomPlugin);

const FanChart = () => {
  const today = new Date();

  // Generate actual data dates (last 9 days)
  const actualDays = Array.from({ length: 10 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (8 - i)); // Create dates from today back to 9 days ago
    return date;
  });
console.log("actual",actualDays)
  // Start the forecast from the next day after actuals
  const forecastDays = Array.from({ length: 11 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i + 1); // Create dates from tomorrow to 11 days ahead
    return date;
  });

  // Combine actual and forecast days into a single labels array
  const labels = [...actualDays, ...forecastDays];

  // Adjust the data for each dataset, maintaining nulls for forecasts until after actuals
  const data = {
    labels,
    datasets: [
      {
        label: 'Actual Data',
        data: [50, 55, 60, 62, 65, 68, 70, 75, 78], // Actual data values
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Model A - Forecast Mean',
        data: [
          null, null, null, null, null, null, null, null, null,null, // Nulls for actuals
          80, 82, 85, 88, 90, 92, 94, 96, 98, 100, 102 // Forecast starts immediately after actuals
        ],
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: false,
        borderDash: [5, 5],
      },
      {
        label: 'Model A - Upper Bound',
        data: [
          null, null, null, null, null, null, null, null, null,null, // Nulls for actuals
          90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140 // Upper bound for Model A
        ],
        borderColor: 'rgba(255, 99, 132, 0.5)',
        fill: '+1',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Model A - Lower Bound',
        data: [
          null, null, null, null, null, null, null, null, null,null, // Nulls for actuals
          70, 75, 76, 78, 80, 82, 84, 86, 88, 90, 92 // Lower bound for Model A
        ],
        borderColor: 'rgba(54, 162, 235, 0.5)',
        fill: '-1',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'Model B - Forecast Mean',
        data: [
          null, null, null, null, null, null, null, null, null,null, // Nulls for actuals
          85, 87, 90, 93, 95, 97, 99, 101, 103, 105, 107 // Forecast Mean for Model B
        ],
        borderColor: 'rgba(255, 206, 86, 1)',
        fill: false,
        borderDash: [5, 5],
      },
      {
        label: 'Model B - Upper Bound',
        data: [
          null, null, null, null, null, null, null, null, null, // Nulls for actuals
          95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145 // Upper bound for Model B
        ],
        borderColor: 'rgba(255, 159, 64, 0.5)',
        fill: '+1',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
      },
      {
        label: 'Model B - Lower Bound',
        data: [
          null, null, null, null, null, null, null, null, null, // Nulls for actuals
          75, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98 // Lower bound for Model B
        ],
        borderColor: 'rgba(54, 162, 235, 0.5)',
        fill: '-1',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        type: 'time', // Use time scale
        time: {
          unit: 'day',
        },
        ticks: {
          callback: (value) => {
            const date = new Date(value); // Convert value back to Date
            return format(date, 'dd-MM-yyyy'); // Format date to DD-MM-YYYY
          },
        },
      },
    },
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true, // Enable zooming with mouse wheel
          },
          pinch: {
            enabled: true, // Enable pinch-to-zoom on touch devices
          },
          mode: 'xy', // Allow zooming in both directions
        },
        pan: {
          enabled: true, // Enable panning
          mode: 'xy', // Allow panning in both directions
        },
      },
    },
  };

  useEffect(() => {
    // Cleanup Chart.js registry
    return () => {
      Chart.unregister();
    };
  }, []);

  return (
    <div style={{width:"800px",height:"600px"}}>
      <h2>Fan Chart with Multiple Models and Zoom</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default FanChart;
