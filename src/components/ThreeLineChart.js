import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import 'chartjs-adapter-date-fns';
import { format } from 'date-fns'; // Import date-fns for formatting

// Register all components
Chart.register(...registerables, zoomPlugin);

const ThreeLineChart = () => {
  const today = new Date();
const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1); // First day of the current month

const weeks = Array.from({ length: 5 }, (_, i) => {
  const date = new Date(startOfMonth);
  date.setDate(startOfMonth.getDate() + i * 7); // Set date spaced by 7 days (week intervals)
  return date;
});
  // Data for the three lines
  const data = {
    labels: weeks, // Using weeks as the x-axis labels
    datasets: [
      {
        label: 'Line A',
        data: [50, 55, 60, 65, 70], // Data for Line A (one point per week)
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: false,
      },
      {
        label: 'Line B',
        data: [45, 50, 55, 60, 65], // Data for Line B
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: false,
      },
      {
        label: 'Line C',
        data: [40, 45, 50, 55, 60], // Data for Line C
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
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
        type: 'time',
        time: {
          unit: 'week',
          stepSize: 1,  // Set x-axis to 'week'
        },
        ticks: {
          callback: (value, index) => {
            const date = new Date(value);  // Convert the timestamp to a Date object
            
            // Return a custom label: you can return both day of the month + month name
            const day = date.getDate();
            const month = date.toLocaleString('default', { month: 'short' });  // Get short month name (e.g., 'Oct')
            
            return `${day} ${month}`;  // Example: '7 Oct', '14 Oct', etc.
          },
        }
        
      },
    },
    // plugins: {
    //   zoom: {
    //     zoom: {
    //       wheel: {
    //         enabled: true, // Enable zooming with mouse wheel
    //       },
    //       pinch: {
    //         enabled: true, // Enable pinch-to-zoom on touch devices
    //       },
    //       mode: 'xy', // Allow zooming in both directions
    //     },
    //     pan: {
    //       enabled: true, // Enable panning
    //       mode: 'xy', // Allow panning in both directions
    //     },
    //   },
    // },
  };

  useEffect(() => {
    // Cleanup Chart.js registry
    return () => {
      Chart.unregister();
    };
  }, []);

  return (
    <div style={{ width: '800px', height: '600px' }}>
      <h2>Three Line Chart - Weekly Ticks & Month Labels</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ThreeLineChart;
