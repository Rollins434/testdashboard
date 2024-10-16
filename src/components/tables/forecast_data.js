// import { ColumnDef } from "@tanstack/react-table";

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
