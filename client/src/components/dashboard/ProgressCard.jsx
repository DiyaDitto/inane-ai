function ProgressCard() {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
      <h2 className="text-2xl font-semibold">
        Overall Progress
      </h2>

      <div className="w-full bg-slate-800 h-4 rounded-full mt-6">
        <div className="bg-purple-500 h-4 rounded-full w-3/4"></div>
      </div>

      <p className="mt-4 text-slate-400">
        75% syllabus completed
      </p>
    </div>
  );
}

export default ProgressCard;