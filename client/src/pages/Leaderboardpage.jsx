import DashboardLayout from "../layouts/DashboardLayout";

function LeaderboardPage() {
  const users = [
    { rank: 1, name: "Rahul", score: 98 },
    { rank: 2, name: "Anu", score: 96 },
    { rank: 3, name: "Diya", score: 94 },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold text-white mb-6">
        Leaderboard
      </h1>

      <div className="bg-slate-900 rounded-2xl p-6">
        {users.map((user) => (
          <div
            key={user.rank}
            className="flex justify-between border-b border-slate-800 py-4 text-white"
          >
            <span>#{user.rank}</span>
            <span>{user.name}</span>
            <span>{user.score}</span>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

export default LeaderboardPage;