import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import "chartjs-adapter-date-fns";

// Register all components
Chart.register(...registerables);

Chart.register(zoomPlugin);
const DataChartMain = (props) => {
  // console.log("props", props.chartData);
  const {
    previous_month_actuals,
    forecasted_data_modelA,
    forecasted_data_modelB,
  } = props.chartData;
  const actualData = [];
  const forecastValueA = [];
  const forecastAUpper = [];
  const forecastAlower = [];
  const forecastValueB = [];
  const forecastBUpper = [];
  const forecastBlower = [];
  const labels = [];

  previous_month_actuals?.map((item) => {
    labels.push(item.activitydate);
    actualData.push(item.actuals);
    forecastValueA.push(null);
    forecastAUpper.push(null);
    forecastAlower.push(null);
    forecastValueB.push(null);
    forecastBUpper.push(null);
    forecastBlower.push(null);
  });
  forecasted_data_modelA?.map((item) => {
    labels.push(item.activitydate);
    actualData.push(null);
    forecastValueA.push(item.forecast_values.toFixed());
    forecastAUpper.push(item.prediction_interval_upper.toFixed());
    forecastAlower.push(item.prediction_interval_lower.toFixed());
  });
  forecasted_data_modelB?.map((item) => {
    labels.push(item.activitydate);
    actualData.push(null);
    forecastValueB.push(item.forecast_values.toFixed());
    forecastBUpper.push(item.prediction_interval_upper.toFixed());
    forecastBlower.push(item.prediction_interval_lower.toFixed());
  });

  const actualsStartDate = previous_month_actuals[0].activitydate;
  const actualsEndDate = previous_month_actuals.at(-1).activitydate;

  console.log(actualsStartDate, actualsEndDate);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Actual Data",
        data: actualData,
        borderColor: "rgba(255, 128, 39, 1)",
        backgroundColor: "rgba(255, 128, 39, 1)",
        fill: false,
        tension: 0.4,
        pointRadius: 2,
      },
      {
        label: "Model A Forecast Value",
        data: forecastValueA,
        backgroundColor: "rgba(44, 157, 239, 1)",
        fill: false,
        pointRadius: 2,
      },
      {
        label: "Forecast A Upper Interval",
        data: forecastAUpper,
        backgroundColor: "rgba(204, 232, 251, 1)",
        pointRadius: 0,
        tension: 0.4,
        fill: "origin",
      },
      {
        label: "Forecast A Lower Interval",
        data: forecastAlower,
        backgroundColor: "rgba(204, 232, 251, 1)",
        pointRadius: 0,
        tension: 0.4,
        fill: "origin",
      },
      {
        label: "Model B Forecast Value",
        data: forecastValueB,
        backgroundColor: "rgba(0, 184, 69, 1)",
        fill: false,
        pointRadius: 1,
      },
      {
        label: "Forecast Upper Interval",
        data: forecastBUpper,
        pointRadius: 0,
        tension: 0.4,
        backgroundColor: "rgba(200, 240, 215, 1)",
      },
      {
        label: "Forecast Lower Interval",
        data: forecastBlower,
        pointRadius: 0,
        tension: 0.4,
        backgroundColor: "rgba(200, 240, 215, 1)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,

        // ticks: {
        //   stepSize: 30,
        // },
        title: {
          display: true,
          text: "Disconnects",
        },
      },
      x: {
        // position: "bottom",
        // type: "time",
        // time: {
        //   unit: "month",
        //   displayFormats: {
        //     month: "MMM",
        //   },
        // },
        ticks: {
          // stepSize: 10,
          precision: 1,
          callback: function (value) {
            // show month only
          },
        },
      },
    },

    plugins: {
      legend: {
        position: "bottom",
      },

      zoom: {
        zoom: {
          wheel: {
            enabled: true, // Enable zooming with mouse wheel
          },
          pinch: {
            enabled: true, // Enable pinch-to-zoom on touch devices
          },
          mode: "xy", // Allow zooming in both directions
        },
        pan: {
          enabled: true, // Enable panning
          mode: "xy", // Allow panning in both directions
        },
        limits: {
          x: {
            min: new Date("2024-01-01").toISOString(), // Set the minimum date for panning
            max: new Date("2024-06-30").toISOString(), // Set the maximum date for panning
          }, // Set limits for the x-axis
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
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default DataChartMain;
