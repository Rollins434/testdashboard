import { formatDate } from "../utils";

export const defaultTooltips = ({
  labelBold = "[LABEL_BOLD]",
  showForDatasetIDs = [0, 1, 4],
}) => {
  return {
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
      return showForDatasetIDs.includes(tooltipItem.datasetIndex);
    },

    // callbacks: {
    //   beforeTitle: (value) => {
    //     if (value.length === 0) {
    //       return;
    //     }
    //     const tooltipItem = value[0];
    //     const datasetLabel = tooltipItem.dataset.label;
    //     if (
    //       datasetLabel.includes("Upper Bound") ||
    //       datasetLabel.includes("Lower Bound")
    //     ) {
    //       return null; // Disable tooltip for these datasets
    //     }
    //     if (value && value.length > 0) {
    //       const date_0 = value[0].label;
    //       const date_1 = formatDate(date_0);
    //       return `${date_1}`;
    //     }
    //     return null;
    //   },
    //   title: (value) => {
    //     return " ";
    //   },
    //   beforeLabel: (tooltipItem) => {
    //     const datasetLabel = tooltipItem.dataset.label;
    //     if (
    //       datasetLabel.includes("Upper Bound") ||
    //       datasetLabel.includes("Lower Bound")
    //     ) {
    //       return null; // Disable tooltip for these datasets
    //     }
    //     if (tooltipItem.datasetIndex === 0) {
    //       return `${labelBold}\nMTD - 500`;
    //     } else if (tooltipItem.datasetIndex === 1) {
    //       let result = `${labelBold}`;
    //       if (tooltipItem.datasetIndex === 1) {
    //         result += `\nForecast - ${tooltipItem.parsed.y}`;
    //       }
    //       result += "\nMTD - 550";
    //       return result;
    //     }
    //     return "";
    //   },
    //   label: (value) => {
    //     return "";
    //   },
    // },
  };
};

export const tooltipsTwoModels = ({
  labelBold1 = "[LABEL_BOLD_1]",
  labelBold2 = "[LABEL_BOLD_2]",
}) => {
  return {
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
          return `${labelBold1}\nMTD - 550\n\n${labelBold2}\nMTD - 500`;
        } else if (tooltipItem.datasetIndex === 1) {
          let result = `${labelBold1}`;
          if (tooltipItem.datasetIndex === 1) {
            result += `\nForecast - ${tooltipItem.parsed.y}`;
          }
          result += "\nMTD - 550";
          return result;
        } else if (tooltipItem.datasetIndex === 4) {
          let result = `\n${labelBold2}`;
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
  };
};
