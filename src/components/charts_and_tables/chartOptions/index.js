import { defaultXaxisScale } from "./scales.xaxis";
import { defaultYAxisScale } from "./scales.yaxis";
import { defaultTooltips } from "./tooltips.plugin";
import { defaultZoom } from "./zoom.plugin";

export const defaultChartOptions = ({ scales, zoomArgs, tooltipsArgs }) => {
  return {
    scales: {
      x: scales?.x || defaultXaxisScale,
      y: scales?.y || defaultYAxisScale,
    },
    plugins: {
      zoom: zoomArgs || defaultZoom,
      tooltip: tooltipsArgs || {},
    },
  };
};
