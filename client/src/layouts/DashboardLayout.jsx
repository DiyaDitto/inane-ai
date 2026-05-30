import { Link } from "react-router-dom";

function DashboardLayout({ children }) {

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";

  };

  return (
    <div className="flex min-h-screen bg-slate-950">

      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6">

        <h1 className="text-2xl font-bold text-purple-500">
          Inane AI
        </h1>

        <nav className="mt-10 space-y-3">

          <Link
            to="/dashboard"
            className="block p-3 rounded-xl hover:bg-slate-800 text-white"
          >
            Dashboard
          </Link>

          <Link
            to="/mock-test"
            className="block p-3 rounded-xl hover:bg-slate-800 text-white"
          >
            Mock Tests
          </Link>

          <Link
            to="/analytics"
            className="block p-3 rounded-xl hover:bg-slate-800 text-white"
          >
            Analytics
          </Link>

          <Link
            to="/chatbot"
            className="block p-3 rounded-xl hover:bg-slate-800 text-white"
          >
            AI Chatbot
          </Link>

          <Link
            to="/leaderboard"
            className="block p-3 rounded-xl hover:bg-slate-800 text-white"
          >
            Leaderboard
          </Link>

          <Link
            to="/profile"
            className="block p-3 rounded-xl hover:bg-slate-800 text-white"
          >
            Profile
          </Link>

          <Link
            to="/settings"
            className="block p-3 rounded-xl hover:bg-slate-800 text-white"
          >
            Settings
          </Link>

        </nav>

        {/* Logout Button */}

        <button
          onClick={logout}
          className="w-full mt-10 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold"
        >
          Logout
        </button>

      </aside>

      {/* Main Content */}

      <main className="flex-1">
        {children}
      </main>

    </div>
  );
}

export default DashboardLayout;