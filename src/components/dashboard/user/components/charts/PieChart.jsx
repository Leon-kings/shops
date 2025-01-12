import React from "react";
import { PieChart, Pie, Cell } from "recharts";
React;
const data = [
  { name: "A", value: 400 },
  { name: "B", value: 300 },
  { name: "C", value: 300 },
  { name: "D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="Gray"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const MyPieChart = () => {
  return (
    <div className="p-4 bg-amber-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">LD Pie Chart</h2>
      <div className="w-full h-64 sm:h-60 md:h-70">
        <PieChart width={500} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            //   fill="#8884d8"
            dataKey="value"
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {data.map((index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default MyPieChart;
