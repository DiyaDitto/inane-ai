import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMyResults } from "../services/resultService";
import PerformanceChart from "../components/analytics/PerformanceChart";
import DashboardLayout from "../layouts/DashboardLayout";

function Dashboard() {

  const [results, setResults] =
    useState([]);

  useEffect(() => {

    const fetchResults =
      async () => {

        try {

          const data =
            await getMyResults();

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
            (result) =>
              result.score
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
          ) /
          results.length
        ).toFixed(2)
      : 0;

  return (
    <DashboardLayout>

      <div className="min-h-screen bg-slate-950 text-white p-8">

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Welcome Back
        </p>

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

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <Link
            to="/mock-test"
            className="bg-purple-600 p-6 rounded-2xl text-center font-bold"
          >
            Take Mock Test
          </Link>

          <Link
            to="/subjects"
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center"
          >
            Subjects
          </Link>

          <Link
            to="/pyqs"
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center"
          >
            PYQs
          </Link>

          <Link
            to="/current-affairs"
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center"
          >
            Current Affairs
          </Link>

          <Link
            to="/history"
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center"
          >
            Attempt History
          </Link>

          <Link
            to="/analytics"
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center"
          >
            Analytics
          </Link>

        </div>

        <div className="mt-10">
          <PerformanceChart
            results={results}
          />
        </div>

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

    </DashboardLayout>
  );
}

export default Dashboard;