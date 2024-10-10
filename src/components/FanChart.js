import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

const FanChart = () => {
  const data = {
    labels: Array.from({ length: 20 }, (_, i) => i + 1), // Labels from 1 to 20
    datasets: [
      {
        label: 'Actual Data',
        data: [50, 55, 60, 62, 65, 68, 70, 75, 78, 80], // Actual data from 1 to 10
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Forecast Mean',
        data: [null, null, null, null, null, null, null, null, null, 80, 82, 85, 88, 90, 92, 94, 96, 98, 100, 102], // Forecast mean starts smoothly from 10
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: false,
        borderDash: [5, 5],
      },
      {
        label: 'Forecast Upper Bound',
        data: [null, null, null, null, null, null, null, null, null, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140], // Upper bound for funnel effect
        borderColor: 'rgba(255, 99, 132, 0.5)',
        fill: '+1',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Forecast Lower Bound',
        data: [null, null, null, null, null, null, null, null, null, 70, 75, 76, 78, 80, 82, 84, 86, 88, 90, 92], // Lower bound for funnel effect
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
    },
  };

  useEffect(() => {
    return () => {
      Chart.unregister();
    };
  }, []);

  return (
    <div>
      <h2>Fan Chart with Smooth Forecast Transition</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default FanChart;
