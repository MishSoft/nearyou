import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-50 via-white to-blue-50 px-4">
      <form className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg flex flex-col">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h1>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
        </div>

        <button className="mt-6 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-xl font-semibold shadow-md hover:from-pink-600 hover:to-pink-700 transition">
          Log In
        </button>

        <Link
          href="/forgot-password"
          className="mt-3 text-center text-pink-500 hover:underline"
        >
          Forgot password?
        </Link>

        <div className="my-6 border-t border-gray-200 relative text-center">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 text-gray-400 text-sm">
            OR
          </span>
        </div>

        <button className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition">
          Create New Account
        </button>
      </form>
    </div>
  );
}
