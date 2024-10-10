import React from 'react';
import Chart from 'react-apexcharts';

const ApexLineChart = ({ data }) => {
  // Map the data for the chart
  const forecastValues = data.map(item => parseFloat(item.fc));
  const lowerBound = data.map(item => parseFloat(item.lower));
  const upperBound = data.map(item => parseFloat(item.upper));
  const runDates = data.map(item => item.RunDate);

  // Chart options and data
  const options = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    stroke: {
      curve: 'smooth',
      dashArray: [0, 5, 5] // forecast: solid, lowerBound & upperBound: dashed
    },
    xaxis: {
      categories: runDates, // X-axis will show the dates
    },
    title: {
      text: 'Forecast vs Prediction Intervals',
      align: 'left'
    },
    yaxis: {
      title: {
        text: 'Values'
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
    }
  };

  const series = [
    {
      name: 'Forecast',
      data: forecastValues
    },
    {
      name: 'Prediction Interval Lower',
      data: lowerBound
    },
    {
      name: 'Prediction Interval Upper',
      data: upperBound
    }
  ];

  return (
    <div>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default ApexLineChart;
