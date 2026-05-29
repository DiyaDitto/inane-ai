function AnalyticsCard({
  title,
  value,
}) {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl">
      <h3 className="text-slate-400">
        {title}
      </h3>

      <p className="text-4xl font-bold text-purple-500 mt-2">
        {value}
      </p>
    </div>
  );
}

export default AnalyticsCard;