import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function PerformanceChart({ results }) {
  const chartData = results
    .slice()
    .reverse()
    .map((result, index) => ({
      attempt: index + 1,
      score: result.score,
    }));

  return (
    <div className="bg-slate-900 p-6 rounded-2xl mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Performance Trend
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="attempt" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#8b5cf6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceChart;