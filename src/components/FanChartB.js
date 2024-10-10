import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import 'chartjs-adapter-date-fns';
import { format } from 'date-fns'; // Import date-fns for formatting

// Register all components
Chart.register(...registerables, zoomPlugin);

const FanChartB = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [dayInterval, setDayInterval] = useState(30); // Default is 30 days
  const today = new Date();

  // Generate actual data dates (October 1 to today)
  const actualDays = Array.from({ length: 10 }, (_, i) => {
    const date = new Date(today.getFullYear(), selectedMonth, 1); // Start from the first day of the selected month
    date.setDate(date.getDate() + i); // Create dates for the next 10 days (up to 10th)
    return date;
  }).filter(date => date <= today); // Ensure dates are not in the future

  // Start the forecast from the next day after actuals
  const forecastDays = Array.from({ length: dayInterval }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i + 1); // Forecast starts from the next day
    return date;
  }).filter(date => date > today); // Only include future dates

  // Combine actual and forecast days into a single labels array
  const labels = [...actualDays, ...forecastDays];

  // Adjust the data for each dataset, maintaining nulls for forecasts until after actuals
  const data = {
    labels,
    datasets: [
      {
        label: 'Actual Data',
        data: [50, 55, 60, 62, 65, 68, 70, 75, 78, 80], // Actual data values
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Model A - Forecast Mean',
        data: [
          null, null, null, null, null, null, null, null, null, null, // Nulls for actuals
          80, 82, 85, 88, 90, 92, 94, 96, 98, 100, 102 // Forecast starts immediately after actuals
        ],
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: false,
        borderDash: [5, 5],
      },
      {
        label: 'Model A - Upper Bound',
        data: [
          null, null, null, null, null, null, null, null, null, null, // Nulls for actuals
          90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140 // Upper bound for Model A
        ],
        borderColor: 'rgba(255, 99, 132, 0.5)',
        fill: '+1',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Model A - Lower Bound',
        data: [
          null, null, null, null, null, null, null, null, null, null, // Nulls for actuals
          70, 75, 76, 78, 80, 82, 84, 86, 88, 90, 92 // Lower bound for Model A
        ],
        borderColor: 'rgba(54, 162, 235, 0.5)',
        fill: '-1',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'Model B - Forecast Mean',
        data: [
          null, null, null, null, null, null, null, null, null, null, // Nulls for actuals
          85, 87, 90, 93, 95, 97, 99, 101, 103, 105, 107 // Forecast Mean for Model B
        ],
        borderColor: 'rgba(255, 206, 86, 1)',
        fill: false,
        borderDash: [5, 5],
      },
      {
        label: 'Model B - Upper Bound',
        data: [
          null, null, null, null, null, null, null, null, null, null, // Nulls for actuals
          95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145 // Upper bound for Model B
        ],
        borderColor: 'rgba(255, 159, 64, 0.5)',
        fill: '+1',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
      },
      {
        label: 'Model B - Lower Bound',
        data: [
          null, null, null, null, null, null, null, null, null, null, // Nulls for actuals
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
          onZoom: function (event) {
            const { chart } = event;
            const { x } = chart.scales;
            const actualStartDate = new Date(actualDays[0]);
            const forecastEndDate = new Date(forecastDays[forecastDays.length - 1]);
  
            // Constrain zoom limits
            x.min = Math.max(x.min, actualStartDate);
            x.max = Math.min(x.max, forecastEndDate);
  
            chart.update();
          },
        },
        pan: {
          enabled: true, // Enable panning
          mode: 'y', // Allow panning in both directions
          onPan: function (event) {
            const { chart } = event;
            const { x } = chart.scales;
            const actualStartDate = new Date(actualDays[0]);
            const forecastEndDate = new Date(forecastDays[forecastDays.length - 1]);
  
            // Constrain pan limits
            x.min = Math.max(x.min, actualStartDate);
            x.max = Math.min(x.max, forecastEndDate);
  
            chart.update();
          },
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
    <div style={{ width: "800px", height: "600px" }}>
      <h2>Fan Chart with Multiple Models and Zoom</h2>
      <label>
        Select Month:
        <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
          ))}
        </select>
      </label>
      <label>
        Day Interval:
        <select value={dayInterval} onChange={(e) => setDayInterval(e.target.value)}>
          <option value={30}>30 Days</option>
          <option value={60}>60 Days</option>
        </select>
      </label>
      <Line data={data} options={options} />
    </div>
  );
};

export default FanChartB;
