import DashboardLayout from "../layouts/DashboardLayout";
import ProgressCard from "../components/dashboard/ProgressCard";
import StreakCard from "../components/dashboard/StreakCard";
import WeakTopics from "../components/dashboard/WeakTopics";
import RecommendationCard from "../components/dashboard/RecommendationCard";
import DailyGoal from "../components/dashboard/DailyGoal";
import MotivationWidget from "../components/ai/MotivationWidget";
import AllInsights from "../components/ai/AllInsights";
function Dashboard() {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-950 text-white p-6">

        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-slate-400 mt-2">
          Continue your SSC preparation.
        </p>

        {/* Top Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <StreakCard />

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h2 className="text-slate-400">
              Accuracy
            </h2>

            <p className="text-4xl font-bold text-purple-500 mt-3">
              78%
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h2 className="text-slate-400">
              Tests Attempted
            </h2>

            <p className="text-4xl font-bold text-purple-500 mt-3">
              24
            </p>
          </div>

        </div>

        {/* Progress */}
        <div className="mt-8">
          <ProgressCard />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-8">

  <DailyGoal />

  <MotivationWidget />

</div>

<div className="mt-8">
  <AllInsights />
</div>

        {/* Weak Topics */}
        <div className="mt-8">
          <WeakTopics />
        </div>

        {/* AI Recommendations */}
        <div className="mt-8">
          <RecommendationCard />
        </div>

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;