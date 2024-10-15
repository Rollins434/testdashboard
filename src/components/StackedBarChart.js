import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register the required Chart.js components
Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const StackedBarChart = () => {
  // Sample data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [30, 50, 40, 70, 60],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Dataset 2',
        data: [20, 40, 50, 60, 80],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Dataset 3',
        data: [40, 60, 70, 90, 100],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  // Chart options to enable stacking
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Stacked Bar Chart Example',
      },
    },
    scales: {
      x: {
        stacked: true, // Enable stacking on x-axis
      },
      y: {
        stacked: true, // Enable stacking on y-axis
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default StackedBarChart;
