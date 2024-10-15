import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import { useRef } from "react";

// Register all components
Chart.register(...registerables, zoomPlugin);

const actualData = {
  data: [50, 55, 60, 62, 65, 68, 70, 75, 78], // LENGTH = 9
};

const forecastData = {
  ModalA: {
    mean: {
      data: [80, 82, 85, 88, 90, 92, 94, 96, 98, 100, 102], // LENGTH = 11
    },
    upper_bound: {
      data: [90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140],
    },
    lower_bound: {
      data: [70, 75, 76, 78, 80, 82, 84, 86, 88, 90, 92],
    },
  },
  ModalB: {
    mean: {
      data: [85, 87, 90, 93, 95, 97, 99, 101, 103, 105, 107],
    },
    upper_bound: {
      data: [95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145],
    },
    lower_bound: {
      data: [75, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98],
    },
  },
};

const FanChartWithRestrictions = (
  {
    // actualData,
    // forecastData
  }
) => {
  const actualDataDaysLength = actualData.data.length - 1;
  const forecastDataDaysLength = forecastData.ModalA.mean.data.length - 1;

  const startDate = getDateWithOffset(-actualDataDaysLength);
  const endDate = getDateWithOffset(+forecastDataDaysLength);
  // console.log(startDate, endDate);
  const dateLabels = generateDateLabels(startDate, endDate);
  // console.log(dateLabels);
  const chartData = {
    labels: dateLabels,
    datasets: [
      {
        label: "Actual Data",
        data: actualData.data,
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
      {
        label: "Model A - Forecast Mean",
        data: Array(actualDataDaysLength)
          .fill(null)
          .concat(forecastData.ModalA.mean.data),
        borderColor: "rgba(153, 102, 255, 1)",
        fill: false,
        borderDash: [5, 5],
      },
      {
        label: "Model A - Upper Bound",
        data: Array(actualDataDaysLength)
          .fill(null)
          .concat(forecastData.ModalA.upper_bound.data),
        borderColor: "rgba(255, 99, 132, 0.5)",
        fill: "+1",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Model A - Lower Bound",
        data: Array(actualDataDaysLength)
          .fill(null)
          .concat(forecastData.ModalA.lower_bound.data),
        borderColor: "rgba(54, 162, 235, 0.5)",
        fill: "-1",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
      },
      {
        label: "Model B - Forecast Mean",
        data: Array(actualDataDaysLength)
          .fill(null)
          .concat(forecastData.ModalB.mean.data),
        borderColor: "rgba(255, 206, 86, 1)",
        fill: false,
        borderDash: [5, 5],
      },
      {
        label: "Model B - Upper Bound",
        data: Array(actualDataDaysLength)
          .fill(null)
          .concat(forecastData.ModalB.upper_bound.data),
        borderColor: "rgba(255, 159, 64, 0.5)",
        fill: "+1",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
      },
      {
        label: "Model B - Lower Bound",
        data: Array(actualDataDaysLength)
          .fill(null)
          .concat(forecastData.ModalB.lower_bound.data),
        borderColor: "rgba(54, 162, 235, 0.5)",
        fill: "-1",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
      },
    ],
  };
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 200, // Set maximum value for y-axis
      },
      x: {
        min: 0, // Set minimum value for x-axis
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
      chartRef.current.zoom(1.1); // Zoom in by 10%
    }
  }
  function zoomOut() {
    if (chartRef.current) {
      chartRef.current.zoom(0.9); // Zoom in by 10%
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
      <h2>Fan Chart with Multiple Models and Zoom</h2>
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
      <Line ref={chartRef} data={chartData} options={chartOptions} />
    </div>
  );
};

export default FanChartWithRestrictions;

/* @ @ @ @ @ @ @
 * @ UTILITIES @
 * @ @ @ @ @ @ @
 */

// Function to generate all date strings between startDate and endDate
function generateDateLabels(startDate, endDate) {
  const dateArray = [];

  // Ensure startDate and endDate are Date objects
  const start = new Date(startDate); // Clone the Date object
  const end = new Date(endDate); // Clone the Date object

  // Loop from start date to end date
  while (start <= end) {
    dateArray.push(
      new Intl.DateTimeFormat("en-IN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        timeZone: "Asia/Kolkata",
      }).format(start)
    );

    // Move to the next day
    start.setDate(start.getDate() + 1);
  }

  return dateArray;
}

function getDateWithOffset(days) {
  if (days === undefined || days === null) {
    throw new Error("Days not specified in getDateWithOffset()");
  }

  const indiaTimeZone = "Asia/Kolkata";
  const currentDate = new Date();

  // Subtracting or Adding the days
  currentDate.setDate(currentDate.getDate() + days);

  // Use toLocaleString to adjust the time based on the time zone if needed, otherwise return the Date object directly
  const indiaDate = new Date(
    currentDate.toLocaleString("en-US", { timeZone: indiaTimeZone })
  );

  return indiaDate; // Return the Date object
}
