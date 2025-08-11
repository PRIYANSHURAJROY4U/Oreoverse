// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   async function submit(e: React.FormEvent) {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000"}/api/auth/login`, {
//         method: "POST",
//         credentials: "include",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });
//       if (!res.ok) {
//         const err = await res.json();
//         alert(err.message || "Login failed");
//         setLoading(false);
//         return;
//       }
//       // success -> redirect to admin
//       router.push("/admin");
//     } catch (err) {
//       alert("Network error");
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
//       <form onSubmit={submit} className="w-full max-w-md bg-white p-6 rounded-2xl shadow">
//         <h2 className="text-2xl font-bold mb-4">Admin login</h2>
//         <input value={username} onChange={e => setUsername(e.target.value)} placeholder="username" className="w-full mb-3 p-2 border rounded" />
//         <input value={password} onChange={e => setPassword(e.target.value)} placeholder="password" type="password" className="w-full mb-4 p-2 border rounded" />
//         <button disabled={loading} className="w-full py-2 rounded bg-purple-600 text-white">
//           {loading ? "Signing in…" : "Sign in"}
//         </button>
//       </form>
//     </div>
//   );
// }

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
