import AuthLayout from "../layouts/AuthLayout";
import toast from "react-hot-toast";

function Login() {

  const handleLogin = (e) => {
    e.preventDefault();

    toast.success(
      "Login Successful - Welcome back!"
    );
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-800">

        <h1 className="text-3xl font-bold text-white text-center">
          Welcome Back
        </h1>

        <p className="text-slate-400 text-center mt-2">
          Login to continue learning
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-4"
        >

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
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-semibold text-white"
          >
            Login
          </button>

        </form>

      </div>
    </AuthLayout>
  );
}

export default Login;