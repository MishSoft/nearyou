"use client"
import loginUser from "@/auth/loginUser";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        router.push("/dashboard")
      } else {
        setLoading(false)
      }
    })
  }, [router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = await loginUser(email, password)

    if (result?.error) {
      setMessage(result.error)
    } else {
      setMessage("Login successful")
      setTimeout(() => {
        router.push('/dashboard')
      }, 2000)
    }
  }

  if (loading) return null

  return (
    <div className="min-h-screen flex items-center justify-center  from-pink-50 via-white to-blue-50 px-4">
      <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg flex flex-col">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h1>

        {
          message && (
            <p className="font-semibold text-red-400 text-center">
              {message}
            </p>
          )
        }

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="mt-6  bg-green-400 text-white py-3 rounded-xl font-semibold shadow-md hover:from-pink-600 hover:to-pink-700 transition">
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

        <Link href={'/register'} className="bg-green-500 text-center hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition">
          Create New Account
        </Link>
      </form>
    </div>
  );
}
