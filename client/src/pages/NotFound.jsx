import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">

      <div className="text-center">

        <h1 className="text-8xl font-bold text-purple-500">
          404
        </h1>

        <p className="text-2xl mt-4">
          Page Not Found
        </p>

        <Link
          to="/"
          className="inline-block mt-6 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl"
        >
          Go Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;