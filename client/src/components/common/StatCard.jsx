function StatCard({
  title,
  value,
  color,
}) {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">

      <h3 className="text-slate-400">
        {title}
      </h3>

      <p
        className={`text-4xl font-bold mt-3 ${color}`}
      >
        {value}
      </p>

    </div>
  );
}

export default StatCard;