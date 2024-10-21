import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import ZoomControls from "./ZoomControls";
import { useRef } from "react";

// Register the custom scale and plugins
Chart.register(...registerables, zoomPlugin);

const FanChartSingleModel2 = ({
  label = "Model X",
  actualData,
  forecastData,
  showZoomCtrls = false,
  chartOptions = {},
}) => {
  const actualFormattedData = actualData.map((dataPoint) => ({
    x: new Date(dataPoint.activitydate).toISOString().split("T")[0], // Converts to 'YYYY-MM-DD'
    y: dataPoint.actuals,
  }));

  const forecastFormattedData = forecastData.map((dataPoint) => ({
    x: new Date(dataPoint.activitydate).toISOString().split("T")[0], // Converts to 'YYYY-MM-DD'
    y: dataPoint.forecast_values,
  }));

  const forecastUpperFormattedData = [{ ...actualFormattedData.at(-1) }].concat(
    forecastData.map((dataPoint) => ({
      x: new Date(dataPoint.activitydate).toISOString().split("T")[0], // Converts to 'YYYY-MM-DD'
      y: dataPoint.prediction_interval_upper / 1,
    }))
  );

  const forecastLowerFormattedData = [{ ...actualFormattedData.at(-1) }].concat(
    forecastData.map((dataPoint) => ({
      x: new Date(dataPoint.activitydate).toISOString().split("T")[0], // Converts to 'YYYY-MM-DD'
      y: dataPoint.prediction_interval_lower / 1,
    }))
  );

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

  console.log(actualFormattedData, forecastFormattedData);
  console.log(chartOptions);

  const chartData = {
    labels: actualData.map((dataPoint) => dataPoint.x),
    datasets: [
      {
        label: "Actual Data",
        data: actualFormattedData,
        fill: false,
        pointRadius: (data) => pointStyleFn(data),
        pointBackgroundColor: (data) => pointBackgroundColorFn(data),
        pointBorderColor: (data) => pointBorderColorFn(data),
        pointBorderWidth: (data) => pointBorderWidthFn(data),
      },
      {
        label: `${label} - Forecast Mean`,
        data: forecastFormattedData,
        fill: false,
        borderDash: [5, 5],
        pointRadius: (data) => pointStyleFn(data),
        pointBackgroundColor: (data) => pointBackgroundColorFn(data),
        pointBorderColor: (data) => pointBorderColorFn(data),
        pointBorderWidth: (data) => pointBorderWidthFn(data),
      },
      {
        label: `${label} - Upper Bound`,
        data: forecastUpperFormattedData,
        fill: "+1",
        pointRadius: 0,
      },
      {
        label: `${label} - Lower Bound`,
        data: forecastLowerFormattedData,
        fill: "-1",
        pointRadius: 0,
      },
    ],
  };

  const chartRef = useRef(null);
  function resetZoom() {
    if (chartRef.current) chartRef.current.resetZoom();
  }
  function zoomIn() {
    if (chartRef.current) chartRef.current.zoom(1.2); // Zoom in by 20%
  }
  function zoomOut() {
    if (chartRef.current) chartRef.current.zoom(0.8); // Zoom out by 20%
  }

  return (
    <div
      style={{
        background: "white",
        position: "relative",
      }}
    >
      <h2>Fan Chart Single Model 2</h2>
      {showZoomCtrls && (
        <ZoomControls resetZoom={resetZoom} zoomIn={zoomIn} zoomOut={zoomOut} />
      )}
      <Line ref={chartRef} data={chartData} options={chartOptions} />
    </div>
  );
};
export default FanChartSingleModel2;
