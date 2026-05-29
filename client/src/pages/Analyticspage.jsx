import DashboardLayout from "../layouts/DashboardLayout";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

function AnalyticsPage() {
  const performanceData = [
    { week: "Week 1", score: 45 },
    { week: "Week 2", score: 58 },
    { week: "Week 3", score: 67 },
    { week: "Week 4", score: 75 },
    { week: "Week 5", score: 82 },
  ];

  const topicData = [
    { topic: "Reasoning", accuracy: 90 },
    { topic: "Quant", accuracy: 70 },
    { topic: "English", accuracy: 85 },
    { topic: "GK", accuracy: 60 },
  ];

  return (
    <DashboardLayout>
      <div className="text-white">

        <h1 className="text-4xl font-bold mb-8">
          Analytics Dashboard
        </h1>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-slate-400">
              Accuracy
            </h3>

            <p className="text-4xl font-bold text-purple-500 mt-2">
              78%
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-slate-400">
              Tests Attempted
            </h3>

            <p className="text-4xl font-bold text-purple-500 mt-2">
              24
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-slate-400">
              Study Hours
            </h3>

            <p className="text-4xl font-bold text-purple-500 mt-2">
              120
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-slate-400">
              Current Rank
            </h3>

            <p className="text-4xl font-bold text-purple-500 mt-2">
              #15
            </p>
          </div>

        </div>

        {/* Performance Trend */}
        <div className="bg-slate-900 rounded-2xl p-6 mt-8">

          <h2 className="text-2xl font-semibold mb-6">
            Performance Trend
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
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

        {/* Topic Accuracy */}
        <div className="bg-slate-900 rounded-2xl p-6 mt-8">

          <h2 className="text-2xl font-semibold mb-6">
            Topic Accuracy
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topicData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="topic" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="accuracy"
                fill="#8b5cf6"
              />
            </BarChart>
          </ResponsiveContainer>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default AnalyticsPage;