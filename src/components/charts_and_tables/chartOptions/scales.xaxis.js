export const defaultXaxisScale = {};

export const XaxisScale1 = {
  min: 0, // Set minimum value for x-axis
  offset: false,
};

export const XaxisTimeScale = {
  type: "time",
  // time: {
  //   unit: "month",
  // },
};

export const XAxisTimeScaleRangeFn = ({ minValue, maxValue }) => {
  return {
    min: minValue,
    max: maxValue,
    type: "time",
    time: {
      unit: "month",
    },
  };
};
