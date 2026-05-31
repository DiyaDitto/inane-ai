import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AuthLayout from "../layouts/AuthLayout";
import { loginUser } from "../services/authService";

function Login() {
const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
e.preventDefault();


setLoading(true);

try {
  const data = await loginUser({
    email,
    password,
  });
  console.log("LOGIN DATA:", data);

  localStorage.setItem(
    "token",
    data.token
  );

  localStorage.setItem(
    "user",
    JSON.stringify(data.user)
  );

  toast.success("Login Successful");

  navigate("/dashboard");
} catch (error) {
  toast.error(
    error.response?.data?.message ||
    "Login Failed"
  );
} finally {
  setLoading(false);
}


};

return ( <AuthLayout> <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-800">


    <h1 className="text-3xl font-bold text-white text-center">
      Welcome Back
    </h1>

    <p className="text-slate-400 text-center mt-2">
      Login to continue learning
    </p>

    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-4"
    >

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        required
        className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        required
        className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-semibold text-white disabled:opacity-50"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

    </form>

  </div>
</AuthLayout>


);
}

export default Login;
