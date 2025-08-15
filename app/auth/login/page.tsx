"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    setLoading(false);
    if (!res.ok) {
      const err = await res.json();
      alert(err.message || "Login failed");
      return;
    }

    router.push("/admin");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-md shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <input
          className="w-full mb-3 p-2 border rounded"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="w-full mb-3 p-2 border rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

// username kitkat4u , psswrd 12345678
