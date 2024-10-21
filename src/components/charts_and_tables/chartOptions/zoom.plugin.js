export const defaultZoom = {
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
    // x: { min: 0, max: 30 }, // Set limits for the x-axis
    // y: { min: 0, max: 200 }, // Set limits for the y-axis
    y: { min: -1_000_000, max: 1_000_000 }, // Set limits for the y-axis
  },
};
