// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";

// export default function LoginPage() {
//   const router = useRouter();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function handleLogin(e: React.FormEvent) {
//     e.preventDefault();
//     setLoading(true);

//     const res = await fetch(`${API_BASE}/api/auth/login`, {
//       method: "POST",
//       credentials: "include",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, password }),
//     });

//     setLoading(false);
//     if (!res.ok) {
//       const err = await res.json();
//       alert(err.message || "Login failed");
//       return;
//     }

//     router.push("/admin");
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-slate-50">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-6 rounded-md shadow-md w-full max-w-sm"
//       >
//         <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
//         <input
//           className="w-full mb-3 p-2 border rounded"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           className="w-full mb-3 p-2 border rounded"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           disabled={loading}
//           className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
//         >
//           {loading ? "Logging in..." : "Login"}
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
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        credentials: "include", // Send cookies cross-origin
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // Store token and user info in localStorage as fallback
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        localStorage.setItem("role", data.role);
        
        console.log("✅ Login successful, token stored");
        console.log("Redirecting to admin dashboard...");
        
        // Redirect to admin dashboard
        router.push("/admin");
      } else {
        setError("Login successful but no token received");
        setLoading(false);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Network error. Please check your connection.");
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-md shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        
        <input
          className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={loading}
          required
        />
        <input
          type="password"
          className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          required
        />
        <button
          disabled={loading}
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}