import AuthLayout from "../layouts/AuthLayout";

function Register() {
  return (
    <AuthLayout>
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-800">

        <h1 className="text-3xl font-bold text-white text-center">
          Create Account
        </h1>

        <p className="text-slate-400 text-center mt-2">
          Start your SSC journey today
        </p>

        <form className="mt-8 space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none"
          />

          <button
            className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-semibold text-white"
          >
            Register
          </button>

        </form>

      </div>
    </AuthLayout>
  );
}

export default Register;