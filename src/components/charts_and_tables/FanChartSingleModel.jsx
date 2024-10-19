import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import { useRef } from "react";
import { generateDateLabels, getDateWithOffset, formatDate } from "./utils";

// Register the custom scale and plugins
Chart.register(...registerables, zoomPlugin);

const FanChartSingleModel = ({
  label = "Model X",
  labelBold,
  actualData,
  forecastData,
  showZoomCtrls = false,
}) => {
  const actualDataDaysLength = actualData.data.length - 1;
  const forecastDataDaysLength = forecastData.mean.data.length;

  const startDate = getDateWithOffset(-actualDataDaysLength);
  const endDate = getDateWithOffset(+forecastDataDaysLength);
  const dateLabels = generateDateLabels(startDate, endDate);

  const today = new Date();
  const lastActualDataPoint = actualData.data.at(-1);
  const startDay = 4;

  const pointStyleFn = (data) => {
    return (data.dataIndex + startDay) % 7 === 0 ? 4 : 0;
  };
  const pointBackgroundColorFn = (data) => {
    return (data.dataIndex + startDay) % 7 === 0 ? "white" : "transparent";
  };
  const pointBorderColorFn = (data) => {
    return (data.dataIndex + startDay) % 7 === 0 ? "black" : "white";
  };
  const pointBorderWidthFn = (data) => {
    return (data.dataIndex + startDay) % 7 === 0 ? 2 : 0;
  };

  const chartData = {
    labels: dateLabels,
    datasets: [
      {
        label: "Actual Data",
        data: actualData.data,
        borderColor: actualData.borderColor,
        fill: false,
        pointRadius: (data) => pointStyleFn(data),
        pointBackgroundColor: (data) => pointBackgroundColorFn(data),
        pointBorderColor: (data) => pointBorderColorFn(data),
        pointBorderWidth: (data) => pointBorderWidthFn(data),
      },
      {
        label: `${label} - Forecast Mean`,
        data: Array(actualDataDaysLength)
          .fill(null)
          .concat([null])
          .concat(forecastData.mean.data),
        borderColor: forecastData.mean.borderColor,
        fill: false,
        borderDash: [5, 5],
        pointRadius: (data) => pointStyleFn(data),
        pointBackgroundColor: (data) => pointBackgroundColorFn(data),
        pointBorderColor: (data) => pointBorderColorFn(data),
        pointBorderWidth: (data) => pointBorderWidthFn(data),
      },
      {
        label: `${label} - Upper Bound`,
        data: Array(actualDataDaysLength)
          .fill(null)
          .concat(lastActualDataPoint)
          .concat(forecastData.upper_bound.data),
        borderColor: forecastData.upper_bound.borderColor,
        backgroundColor: forecastData.backgroundColor,
        fill: "+1",
        pointRadius: 0,
      },
      {
        label: `${label} - Lower Bound`,
        data: Array(actualDataDaysLength)
          .fill(null)
          .concat(lastActualDataPoint)
          .concat(forecastData.lower_bound.data),
        borderColor: forecastData.lower_bound.borderColor,
        backgroundColor: forecastData.lower_bound.backgroundColor,
        fill: "-1",
        pointRadius: 0,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        // type: 'logarithmic',
        beginAtZero: true,
        min: 0,
        max: 200, // Set maximum value for y-axis
        ticks: {
          // stepSize: 10,
          precision: 1,
          callback: function (value) {
            if (value >= 1000) {
              return Math.round(value / 1000, 1) + "K";
            }
            return Math.round(value, 1);
          },
        },
      },
      x: {
        min: 0, // Set minimum value for x-axis
        offset: false,
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
          mode: "xy", // Allow zooming in both directions
          // onZoomComplete: function ({ chart }) {
          //   chart.update(); // Update chart after zoom to apply formatting
          // },
        },
        pan: {
          enabled: true, // Enable panning
          mode: "xy", // Allow panning in both directions
        },
        limits: {
          x: { min: 0, max: 30 }, // Set limits for the x-axis
          y: { min: 0, max: 200 }, // Set limits for the y-axis
          // y: { min: 0, max: 1_000_000 }, // Set limits for the y-axis
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        yAlign: "bottom",
        displayColors: false,
        backgroundColor: "rgba(255,255,255,1)",
        titleColor: "rgba(0,0,0,1)",
        bodyColor: "rgba(0,0,0,1)",
        footerColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        borderColor: "rgba(100,100,100,0.15)",
        titleMarginBottom: 0,

        filter: function (tooltipItem) {
          return [0, 1, 4].includes(tooltipItem.datasetIndex);
        },

        callbacks: {
          beforeTitle: (value) => {
            if (value.length === 0) {
              return;
            }
            const tooltipItem = value[0];
            const datasetLabel = tooltipItem.dataset.label;
            if (
              datasetLabel.includes("Upper Bound") ||
              datasetLabel.includes("Lower Bound")
            ) {
              return null; // Disable tooltip for these datasets
            }
            if (value && value.length > 0) {
              const date_0 = value[0].label;
              const date_1 = formatDate(date_0);
              return `${date_1}`;
            }
            return null;
          },
          title: (value) => {
            return " ";
          },
          beforeLabel: (tooltipItem) => {
            const datasetLabel = tooltipItem.dataset.label;
            if (
              datasetLabel.includes("Upper Bound") ||
              datasetLabel.includes("Lower Bound")
            ) {
              return null; // Disable tooltip for these datasets
            }
            if (tooltipItem.datasetIndex === 0) {
              return `${labelBold}\nMTD - 500`;
            } else if (tooltipItem.datasetIndex === 1) {
              let result = `${labelBold}`;
              if (tooltipItem.datasetIndex === 1) {
                result += `\nForecast - ${tooltipItem.parsed.y}`;
              }
              result += "\nMTD - 550";
              return result;
            }
            return "";
          },
          label: (value) => {
            return "";
          },
        },
      },
    },
  };

  const chartRef = useRef(null);
  function resetZoom() {
    if (chartRef.current) {
      chartRef.current.resetZoom();
    }
  }
  function zoomIn() {
    if (chartRef.current) {
      chartRef.current.zoom(1.2); // Zoom in by 20%
    }
  }
  function zoomOut() {
    if (chartRef.current) {
      chartRef.current.zoom(0.8); // Zoom out by 20%
    }
  }

  return (
    <div
      style={{
        width: "800px",
        height: "500px",
        background: "white",
        position: "relative",
      }}
    >
      <h2>Fan Chart</h2>
      {showZoomCtrls && (
        <div
          style={{
            position: "absolute",
            right: "10px",
            bottom: "10px",
            color: "white",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <button onClick={resetZoom}>RESET</button>
          <button onClick={zoomIn}>ZOOM IN</button>
          <button onClick={zoomOut}>ZOOM OUT</button>
        </div>
      )}
      <Line ref={chartRef} data={chartData} options={chartOptions} />
    </div>
  );
};

export default FanChartSingleModel;
