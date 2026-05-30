import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold">
        Admin Dashboard
      </h1>

      <p className="text-slate-400 mt-2">
        Manage your SSC Platform
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <Link
          to="/admin/questions"
          className="bg-slate-900 p-6 rounded-2xl border border-slate-800"
        >
          <h2 className="text-xl font-bold">
            Questions
          </h2>

          <p className="text-slate-400 mt-2">
            Add & Manage Questions
          </p>
        </Link>

        <Link
          to="/admin/pyqs"
          className="bg-slate-900 p-6 rounded-2xl border border-slate-800"
        >
          <h2 className="text-xl font-bold">
            PYQs
          </h2>

          <p className="text-slate-400 mt-2">
            Manage PYQs
          </p>
        </Link>

        <Link
          to="/admin/current-affairs"
          className="bg-slate-900 p-6 rounded-2xl border border-slate-800"
        >
          <h2 className="text-xl font-bold">
            Current Affairs
          </h2>

          <p className="text-slate-400 mt-2">
            Manage Articles
          </p>
        </Link>

      </div>

    </div>
  );
}

export default AdminDashboard;