import DashboardLayout from "../layouts/DashboardLayout";

function ResultPage() {
  return (
    <DashboardLayout>

      <div className="max-w-3xl mx-auto">

        <div className="bg-slate-900 p-8 rounded-2xl">

          <h1 className="text-4xl font-bold text-white">
            Test Completed 🎉
          </h1>

          <div className="grid md:grid-cols-3 gap-4 mt-8">

            <div className="bg-slate-800 p-4 rounded-xl">
              <h3 className="text-slate-400">
                Score
              </h3>

              <p className="text-3xl text-purple-500 font-bold">
                85
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              <h3 className="text-slate-400">
                Accuracy
              </h3>

              <p className="text-3xl text-green-500 font-bold">
                82%
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              <h3 className="text-slate-400">
                Rank
              </h3>

              <p className="text-3xl text-yellow-500 font-bold">
                #42
              </p>
            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default ResultPage;