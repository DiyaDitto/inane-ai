import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AuthLayout from "../layouts/AuthLayout";

import {
  registerUser,
} from "../services/authService";

function Register() {

  const navigate =
    useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const data =
          await registerUser({
            name,
            email,
            password,
          });

        localStorage.setItem(
          "token",
          data.token
        );

        localStorage.setItem(
          "user",
          JSON.stringify(
            data.user
          )
        );

        toast.success(
          "Account Created"
        );

        navigate(
          "/dashboard"
        );

      } catch (error) {

        toast.error(
          error.response?.data
            ?.message ||
            "Registration Failed"
        );

      }

    };

  return (
    <AuthLayout>

      <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-800">

        <h1 className="text-3xl font-bold text-center">
          Create Account
        </h1>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-4 mt-8"
        >

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
          />

          <button
            className="w-full bg-purple-600 py-4 rounded-xl font-semibold"
          >
            Register
          </button>

        </form>

      </div>

    </AuthLayout>
  );
}

export default Register;