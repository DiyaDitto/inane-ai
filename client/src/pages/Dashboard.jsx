import { useEffect, useState } from "react";
import { getMyResults } from "../services/resultService";
import PerformanceChart from "../components/analytics/PerformanceChart";

function Dashboard() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await getMyResults();
        setResults(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchResults();
  }, []);

  const totalAttempts =
    results.length;

  const bestScore =
    results.length > 0
      ? Math.max(
          ...results.map(
            (result) => result.score
          )
        )
      : 0;

  const averageAccuracy =
    results.length > 0
      ? (
          results.reduce(
            (sum, result) =>
              sum +
              Number(
                result.accuracy
              ),
            0
          ) / results.length
        ).toFixed(2)
      : 0;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">

          <h2 className="text-slate-400">
            Total Attempts
          </h2>

          <p className="text-4xl font-bold mt-2">
            {totalAttempts}
          </p>

        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">

          <h2 className="text-slate-400">
            Best Score
          </h2>

          <p className="text-4xl font-bold mt-2">
            {bestScore}
          </p>

        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">

          <h2 className="text-slate-400">
            Average Accuracy
          </h2>

          <p className="text-4xl font-bold mt-2">
            {averageAccuracy}%
          </p>

        </div>

      </div>

      <PerformanceChart
        results={results}
      />

      <div className="bg-slate-900 p-6 rounded-2xl mt-8 border border-slate-800">

        <h2 className="text-2xl font-bold mb-6">
          Recent Attempts
        </h2>

        <div className="space-y-4">

          {results
            .slice(0, 5)
            .map((result) => (
              <div
                key={result._id}
                className="flex justify-between items-center bg-slate-800 p-4 rounded-xl"
              >

                <div>

                  <p className="font-semibold">
                    Score:
                    {" "}
                    {result.score}
                    /
                    {result.totalQuestions}
                  </p>

                  <p className="text-slate-400">
                    Accuracy:
                    {" "}
                    {result.accuracy}%
                  </p>

                </div>

                <div className="text-slate-500">

                  {new Date(
                    result.createdAt
                  ).toLocaleDateString()}

                </div>

              </div>
            ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;