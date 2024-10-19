// import { ColumnDef } from "@tanstack/react-table";

const COLORS = {
  BLUE: "0, 0, 255",
  DBLUE: "",
  LBLUE: "",
  GREEN: "41, 171, 77",
  DGREEN: "",
  LGREEN: "",
};

export const linechartActualData = {
  data: [50, 55, 60, 62, 65, 68, 70, 75, 78], // LENGTH = 9
  borderColor: "orange",
};

export const linechartForecastData = {
  ModelA: {
    mean: {
      data: [80, 82, 85, 88, 90, 92, 94, 96, 98, 100, 102], // LENGTH = 11
      borderColor: `rgba(${COLORS.BLUE}, 1)`,
    },
    upper_bound: {
      data: [90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140],
      borderColor: `rgba(${COLORS.BLUE}, 0)`,
      backgroundColor: `rgba(${COLORS.BLUE}, 0.1)`,
    },
    lower_bound: {
      data: [70, 75, 76, 78, 80, 82, 84, 86, 88, 90, 92],
      borderColor: `rgba(${COLORS.BLUE}, 0)`,
      backgroundColor: `rgba(${COLORS.BLUE}, 0.1)`,
    },
  },
  ModelB: {
    mean: {
      data: [85, 87, 90, 93, 95, 97, 99, 101, 103, 105, 107],
      borderColor: `rgba(${COLORS.GREEN}, 1)`,
    },
    upper_bound: {
      data: [95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145],
      borderColor: `rgba(${COLORS.GREEN}, 0)`,
      backgroundColor: `rgba(${COLORS.GREEN}, 0.1)`,
    },
    lower_bound: {
      data: [75, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98],
      borderColor: `rgba(${COLORS.GREEN}, 0)`,
      backgroundColor: `rgba(${COLORS.GREEN}, 0.1)`,
    },
  },
};

// type ForecastAccuracy = {
//   channel: number;
//   model_a_begin_forecast: number;
//   model_b_begin_forecast: number;
//   actuals_cm: number;
//   model_a_accuracy: number;
//   model_b_accuracy: number;
// };

export const forecastAccuracyColumns = [
  {
    accessorKey: "channel",
    header: "Channel",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "model_a_begin_forecast",
    header: "Model A Begin Forecast",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "model_b_begin_forecast",
    header: "Model B Begin Forecast",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "actuals_cm",
    header: "Actuals CM",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "model_a_accuracy",
    header: "Model A Accuracy",
    cell: (info) => info.getValue() + "%",
  },
  {
    accessorKey: "model_b_accuracy",
    header: "Model B Accuracy",
    cell: (info) => info.getValue() + "%",
  },
];

export const forecastAccuracyData = [
  {
    channel: 1,
    model_a_begin_forecast: 1033,
    model_b_begin_forecast: 1016,
    actuals_cm: 1020,
    model_a_accuracy: 101.27,
    model_b_accuracy: 99.61,
  },
  {
    channel: 2,
    model_a_begin_forecast: 1034,
    model_b_begin_forecast: 1169,
    actuals_cm: 1084,
    model_a_accuracy: 95.39,
    model_b_accuracy: 107.84,
  },
  {
    channel: 3,
    model_a_begin_forecast: 1093,
    model_b_begin_forecast: 1124,
    actuals_cm: 1000,
    model_a_accuracy: 109.3,
    model_b_accuracy: 112.4,
  },
  {
    channel: 4,
    model_a_begin_forecast: 1112,
    model_b_begin_forecast: 1009,
    actuals_cm: 1066,
    model_a_accuracy: 104.32,
    model_b_accuracy: 94.65,
  },
  {
    channel: 5,
    model_a_begin_forecast: 1069,
    model_b_begin_forecast: 1057,
    actuals_cm: 1193,
    model_a_accuracy: 89.61,
    model_b_accuracy: 88.6,
  },
  {
    channel: 6,
    model_a_begin_forecast: 1107,
    model_b_begin_forecast: 1070,
    actuals_cm: 1183,
    model_a_accuracy: 93.58,
    model_b_accuracy: 90.45,
  },
  {
    channel: 7,
    model_a_begin_forecast: 1106,
    model_b_begin_forecast: 1186,
    actuals_cm: 1039,
    model_a_accuracy: 106.45,
    model_b_accuracy: 114.15,
  },
  {
    channel: 8,
    model_a_begin_forecast: 1043,
    model_b_begin_forecast: 1036,
    actuals_cm: 1020,
    model_a_accuracy: 102.25,
    model_b_accuracy: 101.57,
  },
  {
    channel: 9,
    model_a_begin_forecast: 1174,
    model_b_begin_forecast: 1000,
    actuals_cm: 1184,
    model_a_accuracy: 99.16,
    model_b_accuracy: 84.46,
  },
  {
    channel: 10,
    model_a_begin_forecast: 1042,
    model_b_begin_forecast: 1005,
    actuals_cm: 1007,
    model_a_accuracy: 103.48,
    model_b_accuracy: 99.8,
  },
  {
    channel: 11,
    model_a_begin_forecast: 1100,
    model_b_begin_forecast: 1126,
    actuals_cm: 1085,
    model_a_accuracy: 101.38,
    model_b_accuracy: 103.78,
  },
  {
    channel: 12,
    model_a_begin_forecast: 1188,
    model_b_begin_forecast: 1007,
    actuals_cm: 1159,
    model_a_accuracy: 102.5,
    model_b_accuracy: 86.89,
  },
  {
    channel: 13,
    model_a_begin_forecast: 1149,
    model_b_begin_forecast: 1021,
    actuals_cm: 1094,
    model_a_accuracy: 105.03,
    model_b_accuracy: 93.33,
  },
  {
    channel: 14,
    model_a_begin_forecast: 1110,
    model_b_begin_forecast: 1020,
    actuals_cm: 1081,
    model_a_accuracy: 102.68,
    model_b_accuracy: 94.36,
  },
  {
    channel: 15,
    model_a_begin_forecast: 1021,
    model_b_begin_forecast: 1011,
    actuals_cm: 1029,
    model_a_accuracy: 99.22,
    model_b_accuracy: 98.25,
  },
  {
    channel: 16,
    model_a_begin_forecast: 1073,
    model_b_begin_forecast: 1168,
    actuals_cm: 1000,
    model_a_accuracy: 107.3,
    model_b_accuracy: 116.8,
  },
  {
    channel: 17,
    model_a_begin_forecast: 1188,
    model_b_begin_forecast: 1000,
    actuals_cm: 1078,
    model_a_accuracy: 110.2,
    model_b_accuracy: 92.76,
  },
  {
    channel: 18,
    model_a_begin_forecast: 1068,
    model_b_begin_forecast: 1032,
    actuals_cm: 1148,
    model_a_accuracy: 93.03,
    model_b_accuracy: 89.9,
  },
  {
    channel: 19,
    model_a_begin_forecast: 1191,
    model_b_begin_forecast: 1152,
    actuals_cm: 1010,
    model_a_accuracy: 117.92,
    model_b_accuracy: 114.06,
  },
  {
    channel: 20,
    model_a_begin_forecast: 1088,
    model_b_begin_forecast: 1147,
    actuals_cm: 1161,
    model_a_accuracy: 93.71,
    model_b_accuracy: 98.79,
  },
  {
    channel: 21,
    model_a_begin_forecast: 1115,
    model_b_begin_forecast: 1071,
    actuals_cm: 1095,
    model_a_accuracy: 101.83,
    model_b_accuracy: 97.81,
  },
  {
    channel: 22,
    model_a_begin_forecast: 1096,
    model_b_begin_forecast: 1154,
    actuals_cm: 1149,
    model_a_accuracy: 95.39,
    model_b_accuracy: 100.44,
  },
  {
    channel: 23,
    model_a_begin_forecast: 1169,
    model_b_begin_forecast: 1074,
    actuals_cm: 1159,
    model_a_accuracy: 100.86,
    model_b_accuracy: 92.67,
  },
  {
    channel: 24,
    model_a_begin_forecast: 1137,
    model_b_begin_forecast: 1179,
    actuals_cm: 1193,
    model_a_accuracy: 95.31,
    model_b_accuracy: 98.83,
  },
  {
    channel: 25,
    model_a_begin_forecast: 1077,
    model_b_begin_forecast: 1085,
    actuals_cm: 1142,
    model_a_accuracy: 94.31,
    model_b_accuracy: 95.01,
  },
];

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// type ForecastModelComparison = {
//   channel: number;
//   model_a_begin_forecast: number;
//   model_a_latest_forecast: number;
//   model_b_begin_forecast: number;
//   model_b_latest_forecast: number;
//   model_c_begin_forecast: number;
//   model_c_latest_forecast: number;
//   prior_year_actuals: number;
// };

export const forecastModelComparisonColumns = [
  {
    accessorKey: "channel",
    header: "Channel",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "model_a_begin_forecast",
    header: "Model A Begin Forecast",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "model_a_latest_forecast",
    header: "Model A Latest Forecast",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "model_b_begin_forecast",
    header: "Model B Begin Forecast",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "model_b_latest_forecast",
    header: "Model B Latest Forecast",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "model_c_begin_forecast",
    header: "Model C Begin Forecast",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "model_c_latest_forecast",
    header: "Model C Latest Forecast",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "prior_year_actuals",
    header: "Prior Year Actuals",
    cell: (info) => info.getValue(),
  },
];

export const forecastModelComparisonData = [
  {
    channel: 1,
    model_a_begin_forecast: 1026,
    model_a_latest_forecast: 1179,
    model_b_begin_forecast: 1020,
    model_b_latest_forecast: 1004,
    model_c_begin_forecast: 1007,
    model_c_latest_forecast: 1135,
    prior_year_actuals: 1100,
  },
  {
    channel: 2,
    model_a_begin_forecast: 1124,
    model_a_latest_forecast: 1186,
    model_b_begin_forecast: 1070,
    model_b_latest_forecast: 1041,
    model_c_begin_forecast: 1007,
    model_c_latest_forecast: 1058,
    prior_year_actuals: 1018,
  },
  {
    channel: 3,
    model_a_begin_forecast: 1119,
    model_a_latest_forecast: 1063,
    model_b_begin_forecast: 1092,
    model_b_latest_forecast: 1044,
    model_c_begin_forecast: 1147,
    model_c_latest_forecast: 1004,
    prior_year_actuals: 1045,
  },
  {
    channel: 4,
    model_a_begin_forecast: 1077,
    model_a_latest_forecast: 1168,
    model_b_begin_forecast: 1060,
    model_b_latest_forecast: 1123,
    model_c_begin_forecast: 1108,
    model_c_latest_forecast: 1123,
    prior_year_actuals: 1167,
  },
  {
    channel: 5,
    model_a_begin_forecast: 1111,
    model_a_latest_forecast: 1104,
    model_b_begin_forecast: 1093,
    model_b_latest_forecast: 1076,
    model_c_begin_forecast: 1155,
    model_c_latest_forecast: 1107,
    prior_year_actuals: 1095,
  },
  {
    channel: 6,
    model_a_begin_forecast: 1101,
    model_a_latest_forecast: 1091,
    model_b_begin_forecast: 1148,
    model_b_latest_forecast: 1131,
    model_c_begin_forecast: 1075,
    model_c_latest_forecast: 1127,
    prior_year_actuals: 1198,
  },
  {
    channel: 7,
    model_a_begin_forecast: 1051,
    model_a_latest_forecast: 1103,
    model_b_begin_forecast: 1122,
    model_b_latest_forecast: 1095,
    model_c_begin_forecast: 1006,
    model_c_latest_forecast: 1075,
    prior_year_actuals: 1103,
  },
  {
    channel: 8,
    model_a_begin_forecast: 1023,
    model_a_latest_forecast: 1145,
    model_b_begin_forecast: 1091,
    model_b_latest_forecast: 1145,
    model_c_begin_forecast: 1167,
    model_c_latest_forecast: 1032,
    prior_year_actuals: 1022,
  },
  {
    channel: 9,
    model_a_begin_forecast: 1053,
    model_a_latest_forecast: 1093,
    model_b_begin_forecast: 1138,
    model_b_latest_forecast: 1195,
    model_c_begin_forecast: 1189,
    model_c_latest_forecast: 1114,
    prior_year_actuals: 1004,
  },
];

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// type TemplateTableType = {
//   channel: string;
//   "Jul-24": number;
//   "Aug-24": number;
//   "Sep-24": number;
//   "Q3-2024": number;

//   "Jul-24_2": number;
//   "Aug-24_2": number;
//   "Sep-24_2": number;
//   "Q3-2024_2": number;

//   "Sep-24_3": number;
//   "Sep-24_4": number;
//   "Sep-24_Percentage": number;
// };

export const templateTableDataColumns = [
  {
    header: " ", // Space character to Hide Header name
    columns: [
      {
        header: "Channel",
        accessorKey: "channel",
      },
    ],
  },
  {
    header: "Model C Latest Forecast",
    columns: [
      {
        header: "Jul-24",
        accessorKey: "Jul-24",
      },
      {
        header: "Aug-24",
        accessorKey: "Aug-24",
      },
      {
        header: "Sep-24",
        accessorKey: "Sep-24",
      },
      {
        header: "Q3-2024",
        accessorKey: "Q3-2024",
      },
    ],
  },

  {
    header: " ", // Space character to Hide Header name
  },

  {
    header: "Model C Week 1 Forecast",
    columns: [
      {
        header: "Jul-24",
        accessorKey: "Jul-24_2",
      },
      {
        header: "Aug-24",
        accessorKey: "Aug-24_2",
      },
      {
        header: "Sep-24",
        accessorKey: "Sep-24_2",
      },
      {
        header: "Q3-2024",
        accessorKey: "Q3-2024_2",
      },
    ],
  },

  {
    header: " ", // Using this header for displaying a GAP
  },

  {
    header: "Model C Week 1 Accuracy",
    columns: [
      {
        header: "Sep-24\n(Actuals MTD)",
        accessorKey: "Sep-24_3",
      },
      {
        header: "Sep-24\n(Forecast MTD)",
        accessorKey: "Sep-24_4",
      },
      {
        header: "Sep-24\n(Accuracy %)",
        accessorKey: "Sep-24_Percentage",
        cell: (info) => info.getValue() + "%",
      },
    ],
  },
];

export const templateTableData = [
  {
    channel: "Disconnects",
    "Jul-24": 6570,
    "Aug-24": 6654,
    "Sep-24": 6758,
    "Q3-2024": 19982,
    "Jul-24_2": 6740,
    "Aug-24_2": 6645,
    "Sep-24_2": 6666,
    "Q3-2024_2": 20051,
    "Sep-24_3": 3262,
    "Sep-24_4": 3353,
    "Sep-24_Percentage": 102.79,
  },
  {
    channel: "CSO Managed",
    "Jul-24": 3313,
    "Aug-24": 3350,
    "Sep-24": 3435,
    "Q3-2024": 10098,
    "Jul-24_2": 3392,
    "Aug-24_2": 3163,
    "Sep-24_2": 3328,
    "Q3-2024_2": 9883,
    "Sep-24_3": 1635,
    "Sep-24_4": 1748,
    "Sep-24_Percentage": 106.91,
  },
  {
    channel: "Stores",
    "Jul-24": 1135,
    "Aug-24": 1038,
    "Sep-24": 1155,
    "Q3-2024": 3328,
    "Jul-24_2": 1095,
    "Aug-24_2": 1021,
    "Sep-24_2": 1171,
    "Q3-2024_2": 3287,
    "Sep-24_3": 541,
    "Sep-24_4": 591,
    "Sep-24_Percentage": 109.24,
  },
  {
    channel: "Agent",
    "Jul-24": 1018,
    "Aug-24": 1168,
    "Sep-24": 1095,
    "Q3-2024": 3281,
    "Jul-24_2": 1102,
    "Aug-24_2": 1138,
    "Sep-24_2": 1114,
    "Q3-2024_2": 3354,
    "Sep-24_3": 533,
    "Sep-24_4": 581,
    "Sep-24_Percentage": 109.01,
  },
  {
    channel: "National Retail",
    "Jul-24": 1160,
    "Aug-24": 1144,
    "Sep-24": 1185,
    "Q3-2024": 3489,
    "Jul-24_2": 1195,
    "Aug-24_2": 1004,
    "Sep-24_2": 1043,
    "Q3-2024_2": 3242,
    "Sep-24_3": 561,
    "Sep-24_4": 576,
    "Sep-24_Percentage": 102.67,
  },
  {
    channel: "CCS Managed",
    "Jul-24": 2090,
    "Aug-24": 2223,
    "Sep-24": 2210,
    "Q3-2024": 6523,
    "Jul-24_2": 2227,
    "Aug-24_2": 2364,
    "Sep-24_2": 2258,
    "Q3-2024_2": 6849,
    "Sep-24_3": 1116,
    "Sep-24_4": 1049,
    "Sep-24_Percentage": 94.0,
  },
  {
    channel: "Inside Sales",
    "Jul-24": 1082,
    "Aug-24": 1049,
    "Sep-24": 1062,
    "Q3-2024": 3193,
    "Jul-24_2": 1157,
    "Aug-24_2": 1182,
    "Sep-24_2": 1101,
    "Q3-2024_2": 3440,
    "Sep-24_3": 597,
    "Sep-24_4": 528,
    "Sep-24_Percentage": 88.44,
  },
  {
    channel: "CS & Other",
    "Jul-24": 1008,
    "Aug-24": 1174,
    "Sep-24": 1148,
    "Q3-2024": 3330,
    "Jul-24_2": 1070,
    "Aug-24_2": 1182,
    "Sep-24_2": 1157,
    "Q3-2024_2": 3409,
    "Sep-24_3": 519,
    "Sep-24_4": 521,
    "Sep-24_Percentage": 100.39,
  },
  {
    channel: "CXO Managed",
    "Jul-24": 1167,
    "Aug-24": 1081,
    "Sep-24": 1113,
    "Q3-2024": 3361,
    "Jul-24_2": 1121,
    "Aug-24_2": 1118,
    "Sep-24_2": 1080,
    "Q3-2024_2": 3319,
    "Sep-24_3": 511,
    "Sep-24_4": 556,
    "Sep-24_Percentage": 108.81,
  },
  {
    channel: "Digital",
    "Jul-24": 1167,
    "Aug-24": 1081,
    "Sep-24": 1113,
    "Q3-2024": 3361,
    "Jul-24_2": 1121,
    "Aug-24_2": 1118,
    "Sep-24_2": 1080,
    "Q3-2024_2": 3319,
    "Sep-24_3": 511,
    "Sep-24_4": 556,
    "Sep-24_Percentage": 108.81,
  },
];

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// type DailyForecast = {
//   date: string;
//   weekday: string;
//   stores: number;
//   agent: number;
//   nationalRetail: number;
//   insideSales: number;
//   csAndOther: number;
//   digital: number;
//   forecastTotal: number;
//   hqForecast: number;
//   actualsCY: number | null;
//   actualsLY: number;
//   yoyActuals: number | null;
// };

export const dailyForecastDataColumns = [
  {
    header: " ", // Space character to Hide Header name
    columns: [
      {
        header: "Date",
        accessorKey: "date",
      },
    ],
  },
  {
    header: " ", // Space character to Hide Header name
    columns: [
      {
        header: "Weekday",
        accessorKey: "weekday",
      },
    ],
  },
  {
    header: "CSO Managed",
    columns: [
      {
        header: "Stores",
        accessorKey: "stores",
      },
      {
        header: "Agent",
        accessorKey: "agent",
      },
      {
        header: "National\nRetail",
        accessorKey: "nationalRetail",
      },
    ],
  },

  {
    header: " ", // Space character to Hide Header name
  },

  {
    header: "CSS Managed",
    columns: [
      {
        header: "Inside\nSales",
        accessorKey: "insideSales",
      },
      {
        header: "CS & Other",
        accessorKey: "csAndOther",
      },
    ],
  },

  {
    header: " ", // Using this header for displaying a GAP
  },

  {
    header: "CXO Managed",
    columns: [
      {
        header: "Digital",
        accessorKey: "digital",
      },
    ],
  },

  {
    header: " ", // Space character to Hide Header name
  },

  {
    header: " ", // Space character to Hide Header name
    columns: [
      {
        header: "Beginning\nForecast Total",
        accessorKey: "forecastTotal",
      },
    ],
  },
  {
    header: " ", // Space character to Hide Header name
    columns: [
      {
        header: "Actuals CY",
        accessorKey: "actualsCY",
      },
    ],
  },
  {
    header: " ", // Space character to Hide Header name
    columns: [
      {
        header: "Actuals LY",
        accessorKey: "actualsLY",
      },
    ],
  },
  {
    header: " ", // Space character to Hide Header name
    columns: [
      {
        header: "YOY\nActuals",
        accessorKey: "yoyActuals",
        cell: (info) => (info.getValue() ? info.getValue() + "%" : ""),
      },
    ],
  },
];

export const dailyForecastData = [
  {
    date: "10/1/2024",
    weekday: "Tuesday",
    stores: 180,
    agent: 203,
    nationalRetail: 190,
    insideSales: 206,
    csAndOther: 215,
    digital: 187,
    forecastTotal: 1181,
    hqForecast: 1189,
    actualsCY: 1086,
    actualsLY: 1114,
    yoyActuals: -2.51,
  },
  {
    date: "10/2/2024",
    weekday: "Wednesday",
    stores: 174,
    agent: 192,
    nationalRetail: 166,
    insideSales: 170,
    csAndOther: 201,
    digital: 198,
    forecastTotal: 1101,
    hqForecast: 1156,
    actualsCY: 1181,
    actualsLY: 1067,
    yoyActuals: 10.68,
  },
  {
    date: "10/3/2024",
    weekday: "Thursday",
    stores: 161,
    agent: 162,
    nationalRetail: 176,
    insideSales: 182,
    csAndOther: 212,
    digital: 171,
    forecastTotal: 1064,
    hqForecast: 1177,
    actualsCY: 1060,
    actualsLY: 1112,
    yoyActuals: -4.68,
  },
  {
    date: "10/4/2024",
    weekday: "Friday",
    stores: 184,
    agent: 191,
    nationalRetail: 175,
    insideSales: 203,
    csAndOther: 219,
    digital: 170,
    forecastTotal: 1142,
    hqForecast: 1193,
    actualsCY: 1123,
    actualsLY: 1063,
    yoyActuals: 5.64,
  },
  {
    date: "10/5/2024",
    weekday: "Saturday",
    stores: 198,
    agent: 182,
    nationalRetail: 173,
    insideSales: 170,
    csAndOther: 178,
    digital: 193,
    forecastTotal: 1094,
    hqForecast: 1044,
    actualsCY: 1021,
    actualsLY: 1052,
    yoyActuals: -2.95,
  },
  {
    date: "10/6/2024",
    weekday: "Sunday",
    stores: 211,
    agent: 219,
    nationalRetail: 214,
    insideSales: 180,
    csAndOther: 199,
    digital: 191,
    forecastTotal: 1214,
    hqForecast: 1140,
    actualsCY: 1002,
    actualsLY: 1013,
    yoyActuals: -1.09,
  },
  {
    date: "10/7/2024",
    weekday: "Monday",
    stores: 168,
    agent: 171,
    nationalRetail: 168,
    insideSales: 209,
    csAndOther: 211,
    digital: 179,
    forecastTotal: 1106,
    hqForecast: 1063,
    actualsCY: 1165,
    actualsLY: 1128,
    yoyActuals: 3.28,
  },
  {
    date: "10/8/2024",
    weekday: "Tuesday",
    stores: 182,
    agent: 170,
    nationalRetail: 199,
    insideSales: 202,
    csAndOther: 191,
    digital: 210,
    forecastTotal: 1154,
    hqForecast: 1062,
    actualsCY: 1052,
    actualsLY: 1187,
    yoyActuals: -11.37,
  },
  {
    date: "10/9/2024",
    weekday: "Wednesday",
    stores: 182,
    agent: 183,
    nationalRetail: 166,
    insideSales: 168,
    csAndOther: 187,
    digital: 189,
    forecastTotal: 1075,
    hqForecast: 1195,
    actualsCY: 1150,
    actualsLY: 1091,
    yoyActuals: 5.41,
  },
  {
    date: "10/10/2024",
    weekday: "Thursday",
    stores: 171,
    agent: 186,
    nationalRetail: 166,
    insideSales: 216,
    csAndOther: 208,
    digital: 210,
    forecastTotal: 1157,
    hqForecast: 1089,
    actualsCY: 1159,
    actualsLY: 1096,
    yoyActuals: 5.75,
  },
  {
    date: "10/11/2024",
    weekday: "Friday",
    stores: 161,
    agent: 185,
    nationalRetail: 170,
    insideSales: 205,
    csAndOther: 160,
    digital: 216,
    forecastTotal: 1097,
    hqForecast: 1120,
    actualsCY: 1122,
    actualsLY: 1001,
    yoyActuals: 12.09,
  },
  {
    date: "10/12/2024",
    weekday: "Saturday",
    stores: 163,
    agent: 161,
    nationalRetail: 202,
    insideSales: 172,
    csAndOther: 171,
    digital: 179,
    forecastTotal: 1048,
    hqForecast: 1147,
    actualsCY: 1113,
    actualsLY: 1031,
    yoyActuals: 7.95,
  },
  {
    date: "10/13/2024",
    weekday: "Sunday",
    stores: 205,
    agent: 175,
    nationalRetail: 163,
    insideSales: 177,
    csAndOther: 206,
    digital: 196,
    forecastTotal: 1122,
    hqForecast: 1093,
    actualsCY: 1074,
    actualsLY: 1159,
    yoyActuals: -7.33,
  },
  {
    date: "10/14/2024",
    weekday: "Monday",
    stores: 199,
    agent: 171,
    nationalRetail: 217,
    insideSales: 176,
    csAndOther: 209,
    digital: 179,
    forecastTotal: 1151,
    hqForecast: 1054,
    actualsCY: 1020,
    actualsLY: 1071,
    yoyActuals: -4.76,
  },
  {
    date: "10/15/2024",
    weekday: "Tuesday",
    stores: 195,
    agent: 186,
    nationalRetail: 211,
    insideSales: 180,
    csAndOther: 171,
    digital: 185,
    forecastTotal: 1128,
    hqForecast: 1165,
    actualsCY: 1090,
    actualsLY: 1042,
    yoyActuals: 4.61,
  },
  {
    date: "10/16/2024",
    weekday: "Wednesday",
    stores: 173,
    agent: 186,
    nationalRetail: 187,
    insideSales: 216,
    csAndOther: 172,
    digital: 176,
    forecastTotal: 1110,
    hqForecast: 1080,
    actualsCY: 1007,
    actualsLY: 1185,
    yoyActuals: -15.02,
  },
  {
    date: "10/17/2024",
    weekday: "Thursday",
    stores: 182,
    agent: 163,
    nationalRetail: 179,
    insideSales: 200,
    csAndOther: 175,
    digital: 217,
    forecastTotal: 1116,
    hqForecast: 1172,
    actualsCY: 1033,
    actualsLY: 1007,
    yoyActuals: 2.58,
  },
  {
    date: "10/18/2024",
    weekday: "Friday",
    stores: 193,
    agent: 201,
    nationalRetail: 208,
    insideSales: 186,
    csAndOther: 165,
    digital: 220,
    forecastTotal: 1173,
    hqForecast: 1037,
    actualsCY: 1137,
    actualsLY: 1122,
    yoyActuals: 1.34,
  },
  {
    date: "10/19/2024",
    weekday: "Saturday",
    stores: 210,
    agent: 175,
    nationalRetail: 202,
    insideSales: 185,
    csAndOther: 219,
    digital: 161,
    forecastTotal: 1152,
    hqForecast: 1024,
    actualsCY: 1001,
    actualsLY: 1029,
    yoyActuals: -2.72,
  },
  {
    date: "10/20/2024",
    weekday: "Sunday",
    stores: 186,
    agent: 170,
    nationalRetail: 181,
    insideSales: 196,
    csAndOther: 181,
    digital: 217,
    forecastTotal: 1131,
    hqForecast: 1142,
    actualsCY: 1028,
    actualsLY: 1175,
    yoyActuals: -12.51,
  },
  {
    date: "10/21/2024",
    weekday: "Monday",
    stores: 160,
    agent: 201,
    nationalRetail: 161,
    insideSales: 174,
    csAndOther: 198,
    digital: 206,
    forecastTotal: 1100,
    hqForecast: 1095,
    actualsCY: 1099,
    actualsLY: 1177,
    yoyActuals: -6.63,
  },
  {
    date: "10/22/2024",
    weekday: "Tuesday",
    stores: 212,
    agent: 181,
    nationalRetail: 218,
    insideSales: 202,
    csAndOther: 190,
    digital: 216,
    forecastTotal: 1219,
    hqForecast: 1101,
    actualsCY: 1072,
    actualsLY: 1170,
    yoyActuals: -8.38,
  },
  {
    date: "10/23/2024",
    weekday: "Wednesday",
    stores: 175,
    agent: 202,
    nationalRetail: 163,
    insideSales: 199,
    csAndOther: 179,
    digital: 196,
    forecastTotal: 1114,
    hqForecast: 1044,
    actualsCY: 1067,
    actualsLY: 1188,
    yoyActuals: -10.19,
  },
  {
    date: "10/24/2024",
    weekday: "Thursday",
    stores: 197,
    agent: 178,
    nationalRetail: 194,
    insideSales: 200,
    csAndOther: 165,
    digital: 200,
    forecastTotal: 1134,
    hqForecast: 1119,
    actualsCY: 1150,
    actualsLY: 1144,
    yoyActuals: 0.52,
  },
  {
    date: "10/25/2024",
    weekday: "Friday",
    stores: 192,
    agent: 177,
    nationalRetail: 206,
    insideSales: 184,
    csAndOther: 213,
    digital: 198,
    forecastTotal: 1170,
    hqForecast: 1139,
    actualsCY: null,
    actualsLY: 1044,
    yoyActuals: null,
  },
  {
    date: "10/26/2024",
    weekday: "Saturday",
    stores: 196,
    agent: 186,
    nationalRetail: 186,
    insideSales: 203,
    csAndOther: 190,
    digital: 168,
    forecastTotal: 1129,
    hqForecast: 1129,
    actualsCY: null,
    actualsLY: 1067,
    yoyActuals: null,
  },
  {
    date: "10/27/2024",
    weekday: "Sunday",
    stores: 218,
    agent: 213,
    nationalRetail: 202,
    insideSales: 164,
    csAndOther: 212,
    digital: 176,
    forecastTotal: 1185,
    hqForecast: 1194,
    actualsCY: null,
    actualsLY: 1133,
    yoyActuals: null,
  },
  {
    date: "10/28/2024",
    weekday: "Monday",
    stores: 217,
    agent: 210,
    nationalRetail: 161,
    insideSales: 172,
    csAndOther: 186,
    digital: 173,
    forecastTotal: 1119,
    hqForecast: 1145,
    actualsCY: null,
    actualsLY: 1073,
    yoyActuals: null,
  },
  {
    date: "10/29/2024",
    weekday: "Tuesday",
    stores: 218,
    agent: 163,
    nationalRetail: 212,
    insideSales: 204,
    csAndOther: 182,
    digital: 178,
    forecastTotal: 1157,
    hqForecast: 1166,
    actualsCY: null,
    actualsLY: 1118,
    yoyActuals: null,
  },
  {
    date: "10/30/2024",
    weekday: "Wednesday",
    stores: 177,
    agent: 177,
    nationalRetail: 178,
    insideSales: 213,
    csAndOther: 199,
    digital: 213,
    forecastTotal: 1157,
    hqForecast: 1197,
    actualsCY: null,
    actualsLY: 1012,
    yoyActuals: null,
  },
  {
    date: "10/31/2024",
    weekday: "Thursday",
    stores: 220,
    agent: 195,
    nationalRetail: 196,
    insideSales: 217,
    csAndOther: 168,
    digital: 207,
    forecastTotal: 1203,
    hqForecast: 1161,
    actualsCY: null,
    actualsLY: 1162,
    yoyActuals: null,
  },
];
