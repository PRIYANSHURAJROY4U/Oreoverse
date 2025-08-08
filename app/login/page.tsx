"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000"}/api/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        const err = await res.json();
        alert(err.message || "Login failed");
        setLoading(false);
        return;
      }
      // success -> redirect to admin
      router.push("/admin");
    } catch (err) {
      alert("Network error");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <form onSubmit={submit} className="w-full max-w-md bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-4">Admin login</h2>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="username" className="w-full mb-3 p-2 border rounded" />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="password" type="password" className="w-full mb-4 p-2 border rounded" />
        <button disabled={loading} className="w-full py-2 rounded bg-purple-600 text-white">
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
