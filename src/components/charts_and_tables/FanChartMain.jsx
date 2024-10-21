import { Chart, registerables } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import "chartjs-adapter-date-fns";
import FanChartWithRestrictions from "./FanChartWithRestrictions";
import FanChartSingleModel from "./FanChartSingleModel";
import { defaultChartOptions } from "./chartOptions";
import {
  defaultXaxisScale,
  XaxisScale1,
  XaxisTimeScale,
  XAxisTimeScaleRangeFn,
} from "./chartOptions/scales.xaxis";
import { defaultYAxisScale, YAxisScale1 } from "./chartOptions/scales.yaxis";
import {
  defaultTooltips,
  tooltipsTwoModels,
} from "./chartOptions/tooltips.plugin";
import FanChartSingleModel2 from "./FanChartSingleModel2";
import { forecast_data } from "./forecast_data2";

// Register all components
Chart.register(...registerables, zoomPlugin);

const COLORS = {
  BLUE: "0, 0, 255",
  DBLUE: "",
  LBLUE: "",
  GREEN: "41, 171, 77",
  DGREEN: "",
  LGREEN: "",
};

function fixForecastValue(value) {
  return value.toFixed();
}

const FanChartMain = ({ chartData }) => {
  const {
    previous_month_actuals: raw_actualData,
    forecasted_data_modelA: raw_modelAData,
    forecasted_data_modelB: raw_modelBData,
  } = chartData;

  const linechartActualData = {
    data: raw_actualData.map((item) => item.actuals).map(fixForecastValue),
    borderColor: "orange",
  };

  const linechartForecastData = {
    ModelA: {
      mean: {
        data: raw_modelAData
          .map((item) => item.forecast_values)
          .map(fixForecastValue),
        borderColor: `rgba(${COLORS.BLUE}, 1)`,
      },
      upper_bound: {
        data: raw_modelAData
          .map((item) => item.prediction_interval_upper)
          .map(fixForecastValue),
        borderColor: `rgba(${COLORS.BLUE}, 0)`,
        backgroundColor: `rgba(${COLORS.BLUE}, 0.1)`,
      },
      lower_bound: {
        data: raw_modelAData
          .map((item) => item.prediction_interval_lower)
          .map(fixForecastValue),
        borderColor: `rgba(${COLORS.BLUE}, 0)`,
        backgroundColor: `rgba(${COLORS.BLUE}, 0.1)`,
      },
    },
    ModelB: {
      mean: {
        data: raw_modelBData
          .map((item) => item.forecast_values)
          .map(fixForecastValue),
        borderColor: `rgba(${COLORS.GREEN}, 1)`,
      },
      upper_bound: {
        data: raw_modelBData
          .map((item) => item.prediction_interval_upper)
          .map(fixForecastValue),
        borderColor: `rgba(${COLORS.GREEN}, 0)`,
        backgroundColor: `rgba(${COLORS.GREEN}, 0.1)`,
      },
      lower_bound: {
        data: raw_modelBData
          .map((item) => item.prediction_interval_lower)
          .map(fixForecastValue),
        borderColor: `rgba(${COLORS.GREEN}, 0)`,
        backgroundColor: `rgba(${COLORS.GREEN}, 0.1)`,
      },
    },
  };

  return (
    <>
      {/* <FanChartWithRestrictions
        actualData={linechartActualData}
        forecastData={linechartForecastData}
        chartOptions={defaultChartOptions({
          scales: { x: XaxisTimeScale, y: YAxisScale1 },
          tooltipsArgs: tooltipsTwoModels({
            labelBold1: "𝗠𝗼𝗱𝗲𝗹 𝗔",
            labelBold2: "𝗠𝗼𝗱𝗲𝗹 𝗕",
          }),
        })}
      /> */}
      <br />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <FanChartSingleModel2
          label="Modal A"
          actualData={forecast_data.previous_month_actuals}
          forecastData={forecast_data.forecasted_data_modelA}
          chartOptions={defaultChartOptions({
            scales: {
              x: XAxisTimeScaleRangeFn({
                minValue: new Date(
                  forecast_data.previous_month_actuals.at(0).activitydate
                )
                  .toISOString()
                  .split("T")[0],
                maxValue: new Date(
                  forecast_data.forecasted_data_modelA.at(-1).activitydate
                )
                  .toISOString()
                  .split("T")[0],
              }),
              y: YAxisScale1,
            },
            zoomArgs: {
              zoom: {
                wheel: {
                  enabled: true, // Enable zooming with mouse wheel
                },
                pinch: {
                  enabled: true, // Enable pinch-to-zoom on touch devices
                },
                mode: "xy",
              },
              pan: {
                enabled: true, // Enable panning
                mode: "xy", // Allow panning in both directions
              },
              limits: {
                min: new Date(
                  forecast_data.previous_month_actuals.at(0).activitydate
                )
                  .toISOString()
                  .split("T")[0],
                max: new Date(
                  forecast_data.forecasted_data_modelA.at(-1).activitydate
                )
                  .toISOString()
                  .split("T")[0],
              },
            },
            tooltipsArgs: defaultTooltips({
              labelBold: "𝗠𝗼𝗱𝗲𝗹 𝗔",
              showForDatasetIDs: [0, 1],
            }),
          })}
        />
        <FanChartSingleModel
          label="Modal A"
          actualData={linechartActualData}
          forecastData={linechartForecastData.ModelA}
          chartOptions={defaultChartOptions({
            scales: { x: XaxisScale1, y: YAxisScale1 },
            tooltipsArgs: defaultTooltips({ labelBold: "𝗠𝗼𝗱𝗲𝗹 𝗔" }),
          })}
        />
        <FanChartSingleModel
          label="Modal B"
          actualData={linechartActualData}
          forecastData={linechartForecastData.ModelB}
          chartOptions={defaultChartOptions({
            scales: { x: XaxisScale1, y: YAxisScale1 },
            tooltipsArgs: defaultTooltips({ labelBold: "𝗠𝗼𝗱𝗲𝗹 𝗕" }),
          })}
        />
      </div>
    </>
  );
};

export default FanChartMain;
