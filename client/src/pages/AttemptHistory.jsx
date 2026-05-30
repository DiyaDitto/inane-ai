import { useEffect, useState } from "react";
import { getMyResults } from "../services/resultService";

function AttemptHistory() {
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

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold">
        Attempt History
      </h1>

      <div className="mt-8 space-y-4">

        {results.map((result) => (
          <div
            key={result._id}
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800"
          >

            <div className="flex justify-between">

              <div>

                <h2 className="text-xl font-bold">
                  Score:
                  {" "}
                  {result.score}
                  /
                  {result.totalQuestions}
                </h2>

                <p className="text-slate-400 mt-2">
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

          </div>
        ))}

      </div>

    </div>
  );
}

export default AttemptHistory;