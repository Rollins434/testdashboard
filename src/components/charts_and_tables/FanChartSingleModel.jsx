import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import { useRef } from "react";
import { generateDateLabels, getDateWithOffset } from "./utils";

// Register the custom scale and plugins
Chart.register(...registerables, zoomPlugin);

const FanChartSingleModel = ({
  label = "Model X",
  actualData,
  forecastData,
  showZoomCtrls = false,
  chartOptions,
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
        background: "white",
        position: "relative",
      }}
    >
      <h2>Fan Chart Single Model</h2>
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
