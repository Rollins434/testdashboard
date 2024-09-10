import React from 'react';
import { ScatterChart, Scatter, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart } from 'recharts';

const data = [
  { x: 10, y: 30 },
  { x: 20, y: 50 },
  { x: 30, y: 70 },
  { x: 40, y: 90 },
];

const lineData = [
  { x: 10, y: 30 },
  { x: 20, y: 50 },
  { x: 30, y: 70 },
  { x: 40, y: 90 },
];

const CustomScatterChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="X-Axis" />
        <YAxis type="number" dataKey="y" name="Y-Axis" />
        <Tooltip />
        <Scatter data={data} fill="blue" />
        <LineChart data={lineData}>
          <Line type="monotone" dataKey="y" stroke="red" dot={false} />
        </LineChart>
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default CustomScatterChart;
