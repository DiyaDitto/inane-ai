function ProfileStats({
  title,
  value,
}) {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl">
      <h3>{title}</h3>
      <p className="text-3xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
}

export default ProfileStats;