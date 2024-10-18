import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import { useRef } from "react";

// Register the custom scale and plugins
Chart.register(...registerables, zoomPlugin);

const FanChartWithRestrictions = ({ actualData, forecastData }) => {
  const actualDataDaysLength = actualData.data.length - 1;
  const forecastDataDaysLength = forecastData.ModelA.mean.data.length;

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
        label: "Model A - Forecast Mean",
        data: Array(actualDataDaysLength)
          .fill(null)
          .concat([null])
          .concat(forecastData.ModelA.mean.data),
        borderColor: forecastData.ModelA.mean.borderColor,
        fill: false,
        borderDash: [5, 5],
        pointRadius: (data) => pointStyleFn(data),
        pointBackgroundColor: (data) => pointBackgroundColorFn(data),
        pointBorderColor: (data) => pointBorderColorFn(data),
        pointBorderWidth: (data) => pointBorderWidthFn(data),
      },
      {
        label: "Model A - Upper Bound",
        data: Array(actualDataDaysLength)
          .fill(null)
          .concat(lastActualDataPoint)
          .concat(forecastData.ModelA.upper_bound.data),
        borderColor: forecastData.ModelA.upper_bound.borderColor,
        backgroundColor: forecastData.ModelA.backgroundColor,
        fill: "+1",
        pointRadius: 0,
      },
      {
        label: "Model A - Lower Bound",
        data: Array(actualDataDaysLength)
          .fill(null)
          .concat(lastActualDataPoint)
          .concat(forecastData.ModelA.lower_bound.data),
        borderColor: forecastData.ModelA.lower_bound.borderColor,
        backgroundColor: forecastData.ModelA.lower_bound.backgroundColor,
        fill: "-1",
        pointRadius: 0,
      },
      {
        label: "Model B - Forecast Mean",
        data: Array(actualDataDaysLength)
          .fill(null)
          .concat([null])
          .concat(forecastData.ModelB.mean.data),
        borderColor: forecastData.ModelB.mean.borderColor,
        fill: false,
        borderDash: [5, 5],
        pointRadius: (data) => pointStyleFn(data),
        pointBackgroundColor: (data) => pointBackgroundColorFn(data),
        pointBorderColor: (data) => pointBorderColorFn(data),
        pointBorderWidth: (data) => pointBorderWidthFn(data),
      },
      {
        label: "Model B - Upper Bound",
        data: Array(actualDataDaysLength)
          .fill(null)
          .concat(lastActualDataPoint)
          .concat(forecastData.ModelB.upper_bound.data),
        borderColor: forecastData.ModelB.upper_bound.borderColor,
        backgroundColor: forecastData.ModelB.upper_bound.backgroundColor,
        fill: "+1",
        pointRadius: 0,
      },
      {
        label: "Model B - Lower Bound",
        data: Array(actualDataDaysLength)
          .fill(null)
          .concat(lastActualDataPoint)
          .concat(forecastData.ModelB.lower_bound.data),
        borderColor: forecastData.ModelB.lower_bound.borderColor,
        backgroundColor: forecastData.ModelB.lower_bound.backgroundColor,
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
              return `𝗠𝗼𝗱𝗲𝗹 𝗔\nMTD - 550\n\n𝗠𝗼𝗱𝗲𝗹 𝗕\nMTD - 500`;
            } else if (tooltipItem.datasetIndex === 1) {
              let result = "𝗠𝗼𝗱𝗲𝗹 𝗔";
              if (tooltipItem.datasetIndex === 1) {
                result += `\nForecast - ${tooltipItem.parsed.y}`;
              }
              result += "\nMTD - 550";
              return result;
            } else if (tooltipItem.datasetIndex === 4) {
              let result = "\n𝗠𝗼𝗱𝗲𝗹 𝗕";
              if (tooltipItem.datasetIndex === 4) {
                result += `\nForecast - ${tooltipItem.parsed.y}`;
              }
              result += "\nMTD - 500";
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
// function getCurrentDate() {
//   const indiaTimeZone = "Asia/Kolkata";
//   const currentDate = new Date();
//   const indiaDate = new Intl.DateTimeFormat("en-IN", {
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//     timeZone: indiaTimeZone,
//   }).format(currentDate);

//   return indiaDate;
// }
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

function formatDate(inputDate) {
  // Split the input date string into day, month, and year
  const [day, month, year] = inputDate.split("/").map(Number);

  // Define an array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Define an array of weekday names
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Function to get the ordinal suffix for the day
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return "th"; // Covers 11th to 13th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  // Create a Date object using the input date
  const dateObject = new Date(year, month - 1, day);

  // Get the name of the day of the week
  const dayOfWeek = dayNames[dateObject.getDay()].slice(0, 3);

  // Format the date
  const formattedDate = `${dayOfWeek}, ${day}${getOrdinalSuffix(day)} ${
    monthNames[month - 1]
  }, ${year}`;

  return formattedDate;
}
