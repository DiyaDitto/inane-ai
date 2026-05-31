import { Link } from "react-router-dom";

function PYQPage() {

  const exams = [
    "SSC CGL",
    "SSC CHSL",
    "SSC GD",
    "SSC MTS",
    "SSC Stenographer",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold">
        Previous Year Questions
      </h1>

      <p className="text-slate-400 mt-2">
        Select an exam
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        {exams.map((exam) => (
          <Link
            key={exam}
            to={`/pyqs/${exam}`}
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-purple-500"
          >
            <h2 className="text-xl font-bold">
              {exam}
            </h2>
          </Link>
        ))}

      </div>

    </div>
  );
}

export default PYQPage;