export const defaultYAxisScale = {};

export const YAxisScale1 = {
  // type: 'logarithmic',
  beginAtZero: true,
  // min: 0,
  // max: 200, // Set maximum value for y-axis
  ticks: {
    // stepSize: 10,
    precision: 1,
    callback: function (value) {
      if (Math.abs(value) >= 1_000_000) {
        return Math.round(value / 1_000_000, 1) + "M";
      } else if (Math.abs(value) >= 1000) {
        return Math.round(value / 1000, 1) + "K";
      }
      return Math.round(value, 1);
    },
  },
};
