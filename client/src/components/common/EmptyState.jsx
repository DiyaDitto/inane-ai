function EmptyState({
  title,
  description,
}) {
  return (
    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center">

      <h2 className="text-2xl text-white font-bold">
        {title}
      </h2>

      <p className="text-slate-400 mt-3">
        {description}
      </p>

    </div>
  );
}

export default EmptyState;