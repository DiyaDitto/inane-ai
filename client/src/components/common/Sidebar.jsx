import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-6">

      <h1 className="text-3xl font-bold mb-10">
        Inane<span className="text-purple-500">AI</span>
      </h1>

      <nav className="flex flex-col gap-4">

        <Link
          to="/dashboard"
          className="text-slate-300 hover:text-purple-500"
        >
          Dashboard
        </Link>

        <Link
          to="/chatbot"
          className="text-slate-300 hover:text-purple-500"
        >
          AI Chatbot
        </Link>

        <Link
          to="/mock-test"
          className="text-slate-300 hover:text-purple-500"
        >
          Mock Tests
        </Link>

        <Link
          to="/analytics"
          className="text-slate-300 hover:text-purple-500"
        >
          Analytics
        </Link>

        <Link
          to="/profile"
          className="text-slate-300 hover:text-purple-500"
        >
          Profile
              </Link>
              <Link
  to="/leaderboard"
  className="text-slate-300 hover:text-purple-500"
>
  Leaderboard
</Link>

<Link
  to="/settings"
  className="text-slate-300 hover:text-purple-500"
>
  Settings
</Link>

      </nav>

    </aside>
  );
}

export default Sidebar;