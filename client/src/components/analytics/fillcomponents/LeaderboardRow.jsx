function LeaderboardRow({
  rank,
  name,
  score,
}) {
  return (
    <div className="flex justify-between py-4 border-b border-slate-800">
      <span>#{rank}</span>
      <span>{name}</span>
      <span>{score}</span>
    </div>
  );
}

export default LeaderboardRow;