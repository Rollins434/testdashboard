/* @ @ @ @ @ @ @
 * @ UTILITIES @
 * @ @ @ @ @ @ @
 */

// Function to generate all date strings between startDate and endDate
export function generateDateLabels(startDate, endDate) {
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
export function getDateWithOffset(days) {
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

export function formatDate(inputDate) {
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
