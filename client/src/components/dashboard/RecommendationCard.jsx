function RecommendationCard() {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">

      <h2 className="text-2xl font-semibold">
        AI Recommendations
      </h2>

      <ul className="mt-5 space-y-3 text-slate-300">

        <li>
          ✅ Practice Percentage questions today
        </li>

        <li>
          ✅ Revise Blood Relations concepts
        </li>

        <li>
          ✅ Attempt Quantitative Aptitude Mock Test
        </li>

      </ul>

    </div>
  );
}

export default RecommendationCard;