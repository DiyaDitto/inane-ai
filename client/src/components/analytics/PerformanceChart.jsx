import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { week: "W1", score: 40 },
  { week: "W2", score: 55 },
  { week: "W3", score: 68 },
  { week: "W4", score: 82 },
];

function PerformanceChart() {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <LineChart data={data}>
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="score"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default PerformanceChart;