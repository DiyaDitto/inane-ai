import { useParams, Link } from "react-router-dom";

function PYQDetailPage() {

  const { exam } =
    useParams();

  const years = [
    2025,
    2024,
    2023,
    2022,
    2021,
    2020,
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold">
        {exam}
      </h1>

      <p className="text-slate-400 mt-2">
        Select Year
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        {years.map((year) => (

          <Link
            key={year}
            to={`/pyqs/${exam}/${year}`}
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-purple-500 transition"
          >

            <h2 className="text-2xl font-bold">
              {year}
            </h2>

            <p className="text-slate-400 mt-2">
              View Questions
            </p>

          </Link>

        ))}

      </div>

    </div>
  );
}

export default PYQDetailPage;