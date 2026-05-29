function DailyGoal() {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">

      <h2 className="text-2xl font-semibold">
        Daily Goal
      </h2>

      <div className="w-full bg-slate-800 h-4 rounded-full mt-6">
        <div className="bg-green-500 h-4 rounded-full w-2/3"></div>
      </div>

      <p className="mt-4 text-slate-400">
        4 of 6 study tasks completed today
      </p>

    </div>
  );
}

export default DailyGoal;