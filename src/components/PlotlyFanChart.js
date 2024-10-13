import React from 'react';
import Plot from 'react-plotly.js';

const PlotlyFanChart = () => {
  return (
    <Plot
      data={[
        // Actuals data from 01-10-2024 to 09-10-2024
        {
          x: ['01-10-2024', '02-10-2024', '03-10-2024', '04-10-2024', '05-10-2024', '06-10-2024', '07-10-2024', '08-10-2024', '09-10-2024'],
          y: [100, 105, 102, 110, 108, 115, 118, 120, 122],
          mode: 'lines',
          name: 'Actuals',
          line: {
            color: 'blue',
            width: 2
          }
        },
        // Predicted values starting from 10-10-2024
        {
          x: ['10-10-2024', '11-10-2024', '12-10-2024', '13-10-2024'],
          y: [122, 123, 124, 125],
          mode: 'lines',
          name: 'Predicted Value',
          line: {
            color: 'orange',
            width: 2,
            dash: 'solid'
          }
        },
        // Prediction lower bound (low interval)
        {
          x: ['10-10-2024', '11-10-2024', '12-10-2024', '13-10-2024'],
          y: [120, 119, 118, 117],
          mode: 'lines',
          name: 'Prediction Low',
          line: {
            dash: 'dot',
            color: 'green',
            width: 2
          }
        },
        // Prediction upper bound (high interval)
        {
          x: ['10-10-2024', '11-10-2024', '12-10-2024', '13-10-2024'],
          y: [124, 125, 126, 127],
          mode: 'lines',
          name: 'Prediction High',
          line: {
            dash: 'dot',
            color: 'red',
            width: 2
          }
        },
        // Fill between Prediction Low and High for the fan effect
        {
          x: ['10-10-2024', '11-10-2024', '12-10-2024', '13-10-2024'],
          y: [120, 119, 118, 117],
          fill: 'tonexty',
          fillcolor: 'rgba(0, 255, 0, 0.2)',
          name: 'Prediction Range Low',
          line: { color: 'transparent' }
        },
        {
          x: ['10-10-2024', '11-10-2024', '12-10-2024', '13-10-2024'],
          y: [124, 125, 126, 127],
          fill: 'tonexty',
          fillcolor: 'rgba(255, 0, 0, 0.2)',
          name: 'Prediction Range High',
          line: { color: 'transparent' }
        }
      ]}
      layout={{
        title: 'Fan Chart (Actuals, Predictions, and Intervals)',
        width: 1000,  // Setting width to 1000px
        xaxis: {
          title: 'Date',
          tickformat: '%d-%m-%Y',
          type: 'category',
          rangeslider: { visible: true }  // Add range slider for the x-axis
        },
        yaxis: {
          title: 'Values'
        },
        dragmode: 'zoom',  // Enable zooming and panning
      }}
      config={{
        responsive: true,
        scrollZoom: true  // Enable scroll zooming
      }}
    />
  );
};

export default PlotlyFanChart;
