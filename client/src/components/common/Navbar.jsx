import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <span className="text-white">Inane</span>
          <span className="text-purple-500">AI</span>
        </h1>

        <div className="flex gap-3">
          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border border-slate-700"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-lg bg-purple-600"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;