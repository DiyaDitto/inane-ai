import { Link } from "react-router-dom";

function AdminSidebar() {

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";

  };

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6">

      <h1 className="text-2xl font-bold text-purple-500">
        Admin Panel
      </h1>

      <nav className="mt-10 space-y-3">

        <Link
          to="/admin"
          className="block p-3 rounded-xl hover:bg-slate-800 text-white"
        >
          Overview
        </Link>

        <Link
          to="/admin/questions"
          className="block p-3 rounded-xl hover:bg-slate-800 text-white"
        >
          Questions
        </Link>

        <Link
          to="/admin/pyqs"
          className="block p-3 rounded-xl hover:bg-slate-800 text-white"
        >
          PYQs
        </Link>

        <Link
          to="/admin/current-affairs"
          className="block p-3 rounded-xl hover:bg-slate-800 text-white"
        >
          Current Affairs
        </Link>

        <Link
          to="/admin/users"
          className="block p-3 rounded-xl hover:bg-slate-800 text-white"
        >
          Users
        </Link>

        <Link
          to="/admin/analytics"
          className="block p-3 rounded-xl hover:bg-slate-800 text-white"
        >
          Analytics
        </Link>

        <Link
          to="/admin/upload"
          className="block p-3 rounded-xl hover:bg-slate-800 text-white"
        >
          Upload Center
        </Link>
        <Link
  to="/admin/bulk-upload"
  className="block p-3 rounded-xl hover:bg-slate-800 text-white"
>
  Bulk Upload
</Link>

      </nav>

      <button
        onClick={logout}
        className="w-full mt-10 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold"
      >
        Logout
      </button>

    </aside>
  );
}

export default AdminSidebar;