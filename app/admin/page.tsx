// // "use client";

// // import PrivateRoute from "../../components/PrivateRoute";
// // import { useState } from "react";
// // import {
// //   Plus,
// //   Edit,
// //   Trash2,
// //   Save,
// //   X,
// //   BookOpen,
// //   Calendar,
// //   Tag,
// //   Heart,
// // } from "lucide-react";

// // import Navbar from "../../src/components/Navbar";
// // import Button from "../../src/components/ui/Button";
// // import Card from "../../src/components/ui/Card";
// // import Badge from "../../src/components/ui/Badge";

// // const moods = [
// //   "dreamy",
// //   "romantic",
// //   "whimsical",
// //   "ethereal",
// //   "magical",
// //   "mystical",
// // ];

// // const getMoodColor = (mood: string) => {
// //   const colors = {
// //     dreamy: "bg-purple-100 text-purple-800 border-purple-200",
// //     romantic: "bg-pink-100 text-pink-800 border-pink-200",
// //     whimsical: "bg-yellow-100 text-yellow-800 border-yellow-200",
// //     ethereal: "bg-indigo-100 text-indigo-800 border-indigo-200",
// //     magical: "bg-emerald-100 text-emerald-800 border-emerald-200",
// //     mystical: "bg-slate-100 text-slate-800 border-slate-200",
// //   };
// //   return colors[mood as keyof typeof colors] || "bg-gray-100 text-gray-800";
// // };

// // export default function AdminPage() {
// //   const [poems, setPoems] = useState([
// //     {
// //       id: 1,
// //       title: "Midnight Thoughts",
// //       content: `Like stars that dance in velvet skies...`,
// //       preview:
// //         "Like stars that dance in velvet skies, your words illuminate the night...",
// //       date: "December 13, 2024",
// //       mood: "dreamy",
// //       likes: 47,
// //       published: true,
// //     },
// //     {
// //       id: 2,
// //       title: "Golden Hour Dreams",
// //       content: `In the space between sunset and twilight...`,
// //       preview:
// //         "In the space between sunset and twilight, I found poetry in your smile...",
// //       date: "November 28, 2024",
// //       mood: "romantic",
// //       likes: 62,
// //       published: true,
// //     },
// //   ]);

// //   const [isAddingPoem, setIsAddingPoem] = useState(false);
// //   const [editingPoem, setEditingPoem] = useState<any>(null);
// //   const [newPoem, setNewPoem] = useState({
// //     title: "",
// //     content: "",
// //     mood: "dreamy",
// //     published: false,
// //   });

// //   const generatePreview = (content: string) => {
// //     const firstLine = content.split("\n")[0];
// //     return firstLine.length > 60
// //       ? firstLine.substring(0, 60) + "..."
// //       : firstLine + "...";
// //   };

// //   const handleAddPoem = () => {
// //     if (!newPoem.title || !newPoem.content) return;
// //     const poem = {
// //       id: Date.now(),
// //       ...newPoem,
// //       preview: generatePreview(newPoem.content),
// //       date: new Date().toLocaleDateString("en-US", {
// //         year: "numeric",
// //         month: "long",
// //         day: "numeric",
// //       }),
// //       likes: 0,
// //     };
// //     setPoems([poem, ...poems]);
// //     setNewPoem({ title: "", content: "", mood: "dreamy", published: false });
// //     setIsAddingPoem(false);
// //   };

// //   const handleUpdatePoem = () => {
// //     if (!editingPoem.title || !editingPoem.content) return;
// //     const updatedPoems = poems.map((poem) =>
// //       poem.id === editingPoem.id
// //         ? { ...editingPoem, preview: generatePreview(editingPoem.content) }
// //         : poem
// //     );
// //     setPoems(updatedPoems);
// //     setEditingPoem(null);
// //   };

// //   const handleDeletePoem = (id: number) => {
// //     if (window.confirm("Are you sure you want to delete this poem?")) {
// //       setPoems(poems.filter((poem) => poem.id !== id));
// //     }
// //   };

// //   const togglePublished = (id: number) => {
// //     setPoems(
// //       poems.map((poem) =>
// //         poem.id === id ? { ...poem, published: !poem.published } : poem
// //       )
// //     );
// //   };

// //   return (
// //     <PrivateRoute>
// //       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
// //         <Navbar />
// //         <div className="max-w-7xl mx-auto px-4 py-12">
// //           {/* Header */}
// //           <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
// //             <div>
// //               <h1 className="text-4xl md:text-5xl font-bold mb-4">
// //                 <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// //                   Admin Dashboard 👑
// //                 </span>
// //               </h1>
// //               <p className="text-xl text-slate-600">
// //                 Manage your beautiful poetry collection, Oreo! ✨
// //               </p>
// //             </div>
// //             <Button
// //               onClick={() => setIsAddingPoem(true)}
// //               className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 mt-4 md:mt-0"
// //             >
// //               <Plus className="w-5 h-5 mr-2" />
// //               Add New Poem
// //             </Button>
// //           </div>

// //           {/* Stats */}
// //           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
// //             <Card className="text-center p-6 bg-white/70 backdrop-blur-sm shadow-lg border-0">
// //               <div className="text-3xl font-bold text-purple-600 mb-2">
// //                 {poems.length}
// //               </div>
// //               <div className="text-slate-600">Total Poems</div>
// //             </Card>
// //             <Card className="text-center p-6 bg-white/70 backdrop-blur-sm shadow-lg border-0">
// //               <div className="text-3xl font-bold text-green-600 mb-2">
// //                 {poems.filter((p) => p.published).length}
// //               </div>
// //               <div className="text-slate-600">Published</div>
// //             </Card>
// //             <Card className="text-center p-6 bg-white/70 backdrop-blur-sm shadow-lg border-0">
// //               <div className="text-3xl font-bold text-yellow-600 mb-2">
// //                 {poems.filter((p) => !p.published).length}
// //               </div>
// //               <div className="text-slate-600">Drafts</div>
// //             </Card>
// //             <Card className="text-center p-6 bg-white/70 backdrop-blur-sm shadow-lg border-0">
// //               <div className="text-3xl font-bold text-pink-600 mb-2">
// //                 {poems.reduce((sum, poem) => sum + poem.likes, 0)}
// //               </div>
// //               <div className="text-slate-600">Total Likes</div>
// //             </Card>
// //           </div>

// //           {/* Poem List */}
// //           <div className="grid gap-6 md:grid-cols-2">
// //             {poems.map((poem) => (
// //               <Card
// //                 key={poem.id}
// //                 className="bg-white/70 backdrop-blur-sm shadow-md border-0 p-6"
// //               >
// //                 <div className="flex justify-between items-start mb-4">
// //                   <div>
// //                     <h2 className="text-2xl font-bold text-slate-800">
// //                       {poem.title}
// //                     </h2>
// //                     <p className="text-sm text-slate-500">{poem.date}</p>
// //                   </div>
// //                   <Badge variant="outline" className={getMoodColor(poem.mood)}>
// //                     {poem.mood}
// //                   </Badge>
// //                 </div>
// //                 <p className="text-slate-600 italic mb-4">{poem.preview}</p>
// //                 <div className="flex justify-between items-center">
// //                   <div className="flex gap-3">
// //                     <Button
// //                       variant="outline"
// //                       size="sm"
// //                       onClick={() => setEditingPoem({ ...poem })}
// //                     >
// //                       <Edit className="w-4 h-4 mr-1" /> Edit
// //                     </Button>
// //                     <Button
// //                       variant="destructive"
// //                       size="sm"
// //                       onClick={() => handleDeletePoem(poem.id)}
// //                     >
// //                       <Trash2 className="w-4 h-4 mr-1" /> Delete
// //                     </Button>
// //                   </div>
// //                   <Button
// //                     variant={poem.published ? "outline" : "default"}
// //                     size="sm"
// //                     onClick={() => togglePublished(poem.id)}
// //                   >
// //                     {poem.published ? "Unpublish" : "Publish"}
// //                   </Button>
// //                 </div>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* === Add Poem Modal === */}
// //       {isAddingPoem && (
// //         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
// //           <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
// //             <h2 className="text-xl font-bold mb-4">Add New Poem</h2>
// //             <input
// //               className="w-full border p-2 mb-4 rounded"
// //               placeholder="Title"
// //               value={newPoem.title}
// //               onChange={(e) =>
// //                 setNewPoem({ ...newPoem, title: e.target.value })
// //               }
// //             />
// //             <textarea
// //               className="w-full border p-2 mb-4 rounded"
// //               rows={6}
// //               placeholder="Content"
// //               value={newPoem.content}
// //               onChange={(e) =>
// //                 setNewPoem({ ...newPoem, content: e.target.value })
// //               }
// //             />
// //             <select
// //               className="w-full border p-2 mb-4 rounded"
// //               value={newPoem.mood}
// //               onChange={(e) => setNewPoem({ ...newPoem, mood: e.target.value })}
// //             >
// //               {moods.map((m) => (
// //                 <option key={m} value={m}>
// //                   {m}
// //                 </option>
// //               ))}
// //             </select>
// //             <div className="flex justify-end gap-2">
// //               <Button variant="outline" onClick={() => setIsAddingPoem(false)}>
// //                 Cancel
// //               </Button>
// //               <Button onClick={handleAddPoem}>
// //                 <Save className="w-4 h-4 mr-1" /> Save
// //               </Button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* === Edit Poem Modal === */}
// //       {editingPoem && (
// //         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
// //           <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
// //             <h2 className="text-xl font-bold mb-4">Edit Poem</h2>
// //             <input
// //               className="w-full border p-2 mb-4 rounded"
// //               placeholder="Title"
// //               value={editingPoem.title}
// //               onChange={(e) =>
// //                 setEditingPoem({ ...editingPoem, title: e.target.value })
// //               }
// //             />
// //             <textarea
// //               className="w-full border p-2 mb-4 rounded"
// //               rows={6}
// //               placeholder="Content"
// //               value={editingPoem.content}
// //               onChange={(e) =>
// //                 setEditingPoem({ ...editingPoem, content: e.target.value })
// //               }
// //             />
// //             <select
// //               className="w-full border p-2 mb-4 rounded"
// //               value={editingPoem.mood}
// //               onChange={(e) =>
// //                 setEditingPoem({ ...editingPoem, mood: e.target.value })
// //               }
// //             >
// //               {moods.map((m) => (
// //                 <option key={m} value={m}>
// //                   {m}
// //                 </option>
// //               ))}
// //             </select>
// //             <div className="flex justify-end gap-2">
// //               <Button variant="outline" onClick={() => setEditingPoem(null)}>
// //                 Cancel
// //               </Button>
// //               <Button onClick={handleUpdatePoem}>
// //                 <Save className="w-4 h-4 mr-1" /> Update
// //               </Button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </PrivateRoute>
// //   );
// // }





// new code-01


// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Plus, Edit, Trash2, Save, X
// } from "lucide-react";
// // import Button from "@/components/ui/button";
// // import Card from "@/components/ui/card";
// // import Badge from "@/components/ui/badge";

// import Navbar from "../../src/components/Navbar"
// import Button from "../../src/components/ui/Button"
// import Card from "../../src/components/ui/Card"

// type PoemType = {
//   _id?: string;
//   title: string;
//   content: string;
//   preview?: string;
//   mood?: string;
//   published?: boolean;
//   author?: string;
// };

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";

// export default function AdminPage() {
//   const router = useRouter();
//   const [poems, setPoems] = useState<PoemType[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [isAdding, setIsAdding] = useState(false);
//   const [editing, setEditing] = useState<PoemType | null>(null);
//   const [newPoem, setNewPoem] = useState<PoemType>({ title: "", content: "", mood: "dreamy", published: false });

//   // check session
//   useEffect(() => {
//     (async () => {
//       const me = await fetch(`${API_BASE}/api/auth/me`, { credentials: "include" });
//       if (!me.ok) {
//         router.push("/auth/login");
//         return;
//       }
//       fetchPoems();
//     })();
//   }, []);

//   async function fetchPoems() {
//     setLoading(true);
//     const res = await fetch(`${API_BASE}/api/poems`, { credentials: "include" });
//     if (!res.ok) {
//       // likely unauthorized
//       router.push("/auth/login");
//       return;
//     }
//     const data = await res.json();
//     setPoems(data);
//     setLoading(false);
//   }

//   async function handleAdd() {
//     if (!newPoem.title || !newPoem.content) return alert("Title + content required");
//     const res = await fetch(`${API_BASE}/api/poems`, {
//       method: "POST",
//       credentials: "include",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newPoem),
//     });
//     if (!res.ok) {
//       const err = await res.json();
//       return alert(err.message || "Failed");
//     }
//     setNewPoem({ title: "", content: "", mood: "dreamy", published: false });
//     setIsAdding(false);
//     fetchPoems();
//   }

//   async function handleUpdate() {
//     if (!editing?._id) return;
//     const res = await fetch(`${API_BASE}/api/poems/${editing._id}`, {
//       method: "PUT",
//       credentials: "include",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(editing),
//     });
//     if (!res.ok) return alert("Update failed");
//     setEditing(null);
//     fetchPoems();
//   }

//   async function handleDelete(id?: string) {
//     if (!id) return;
//     if (!confirm("Delete poem?")) return;
//     const res = await fetch(`${API_BASE}/api/poems/${id}`, {
//       method: "DELETE",
//       credentials: "include",
//     });
//     if (!res.ok) return alert("Delete failed");
//     fetchPoems();
//   }

//   if (loading) return <div className="p-6">Loading…</div>;

//   return (
//     <div className="min-h-screen p-6 bg-slate-50">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//           <div className="flex items-center gap-2">
//             <Button onClick={() => setIsAdding(true)}><Plus className="w-4 h-4 mr-2" />Add Poem</Button>
//             <Button onClick={() => { fetch(`${API_BASE}/api/auth/logout`, { method: "POST", credentials: "include" }).then(()=>router.push("/")); }}>
//               Logout
//             </Button>
//           </div>
//         </div>

//         <div className="grid gap-4 md:grid-cols-2">
//           {poems.map((p) => (
//             <Card key={p._id} className="p-4">
//               <div className="flex justify-between">
//                 <div>
//                   <h3 className="text-xl font-bold">{p.title}</h3>
//                   <p className="text-sm text-slate-500">{p.author} • {new Date((p as any).createdAt || Date.now()).toLocaleDateString()}</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Badge variant="outline">{p.mood || "dreamy"}</Badge>
//                 </div>
//               </div>
//               <p className="mt-3 italic text-slate-600">{p.preview}</p>

//               <div className="mt-4 flex justify-between items-center">
//                 <div className="flex gap-2">
//                   <Button variant="outline" onClick={() => setEditing(p)}><Edit className="w-4 h-4 mr-1" />Edit</Button>
//                   <Button variant="destructive" onClick={() => handleDelete(p._id)}><Trash2 className="w-4 h-4" /></Button>
//                 </div>
//                 <div className="text-sm text-slate-600">{p.published ? "Published" : "Draft"}</div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Add modal */}
//       {isAdding && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-md p-6 w-full max-w-2xl">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-bold">Add Poem</h3>
//               <button onClick={() => setIsAdding(false)}><X /></button>
//             </div>

//             <input className="w-full mb-2 p-2 border rounded" placeholder="Title" value={newPoem.title} onChange={e => setNewPoem({...newPoem, title: e.target.value})} />
//             <textarea className="w-full mb-2 p-2 border rounded" rows={8} placeholder="Content" value={newPoem.content} onChange={e => setNewPoem({...newPoem, content: e.target.value})}/>
//             <div className="flex gap-2 items-center mb-4">
//               <select value={newPoem.mood} onChange={e => setNewPoem({...newPoem, mood: e.target.value})} className="p-2 border rounded">
//                 <option>dreamy</option><option>romantic</option><option>whimsical</option><option>ethereal</option><option>magical</option><option>mystical</option>
//               </select>
//               <label className="flex items-center gap-2 text-sm">
//                 <input type="checkbox" checked={!!newPoem.published} onChange={e => setNewPoem({...newPoem, published: e.target.checked})} />
//                 Publish
//               </label>
//             </div>

//             <div className="flex justify-end gap-2">
//               <Button variant="outline" onClick={() => setIsAdding(false)}>Cancel</Button>
//               <Button onClick={handleAdd}><Save className="w-4 h-4 mr-1" /> Save</Button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Edit modal */}
//       {editing && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-md p-6 w-full max-w-2xl">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-bold">Edit Poem</h3>
//               <button onClick={() => setEditing(null)}><X /></button>
//             </div>

//             <input className="w-full mb-2 p-2 border rounded" placeholder="Title" value={editing.title} onChange={e => setEditing({...editing, title: e.target.value})} />
//             <textarea className="w-full mb-2 p-2 border rounded" rows={8} placeholder="Content" value={editing.content} onChange={e => setEditing({...editing, content: e.target.value})}/>
//             <div className="flex gap-2 items-center mb-4">
//               <select value={editing.mood} onChange={e => setEditing({...editing, mood: e.target.value})} className="p-2 border rounded">
//                 <option>dreamy</option><option>romantic</option><option>whimsical</option><option>ethereal</option><option>magical</option><option>mystical</option>
//               </select>
//               <label className="flex items-center gap-2 text-sm">
//                 <input type="checkbox" checked={!!editing.published} onChange={e => setEditing({...editing, published: e.target.checked})} />
//                 Publish
//               </label>
//             </div>

//             <div className="flex justify-end gap-2">
//               <Button variant="outline" onClick={() => setEditing(null)}>Cancel</Button>
//               <Button onClick={handleUpdate}><Save className="w-4 h-4 mr-1" /> Update</Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }





// below is the original code keeping the without ref next.js edit shift 



// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Plus, Edit, Trash2, Save, X } from "lucide-react";

// // import Navbar from "@/components/Navbar";
// // import Button from "@/components/ui/Button";
// // import Card from "@/components/ui/Card";
// import { Badge } from "../../components/badge";

// import Navbar from "../../src/components/Navbar"
// import Button from "../../src/components/ui/Button"
// import Card from "../../src/components/ui/Card"

// type PoemType = {
//   _id?: string;
//   title: string;
//   content: string;
//   preview?: string;
//   mood?: string;
//   published?: boolean;
//   author?: string;
// };

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";

// export default function AdminPage() {
//   const router = useRouter();
//   const [poems, setPoems] = useState<PoemType[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [isAdding, setIsAdding] = useState(false);
//   const [editing, setEditing] = useState<PoemType | null>(null);
//   const [newPoem, setNewPoem] = useState<PoemType>({
//     title: "",
//     content: "",
//     mood: "dreamy",
//     published: false,
//   });

//   useEffect(() => {
//     (async () => {
//       const me = await fetch(`${API_BASE}/api/auth/me`, {
//         credentials: "include",
//       });
//       if (!me.ok) {
//         router.push("/auth/login");
//         return;
//       }
//       fetchPoems();
//     })();
//   }, []);

//   async function fetchPoems() {
//     setLoading(true);
//     const res = await fetch(`${API_BASE}/api/poems`, { credentials: "include" });
//     if (!res.ok) {
//       router.push("/auth/login");
//       return;
//     }
//     const data = await res.json();
//     setPoems(data);
//     setLoading(false);
//   }

//   async function handleAdd() {
//     if (!newPoem.title || !newPoem.content)
//       return alert("Title + content required");
//     const res = await fetch(`${API_BASE}/api/poems`, {
//       method: "POST",
//       credentials: "include",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newPoem),
//     });
//     if (!res.ok) {
//       const err = await res.json();
//       return alert(err.message || "Failed");
//     }
//     setNewPoem({ title: "", content: "", mood: "dreamy", published: false });
//     setIsAdding(false);
//     fetchPoems();
//   }

//   async function handleUpdate() {
//     if (!editing?._id) return;
//     const res = await fetch(`${API_BASE}/api/poems/${editing._id}`, {
//       method: "PUT",
//       credentials: "include",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(editing),
//     });
//     if (!res.ok) return alert("Update failed");
//     setEditing(null);
//     fetchPoems();
//   }

//   async function handleDelete(id?: string) {
//     if (!id) return;
//     if (!confirm("Delete poem?")) return;
//     const res = await fetch(`${API_BASE}/api/poems/${id}`, {
//       method: "DELETE",
//       credentials: "include",
//     });
//     if (!res.ok) return alert("Delete failed");
//     fetchPoems();
//   }

//   if (loading) return <div className="p-6">Loading…</div>;

//   return (
//     <div className="min-h-screen p-6 bg-slate-50">
//       <Navbar />
//       <div className="max-w-6xl mx-auto">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//           <div className="flex items-center gap-2">
//             // @ts-ignore
//             {/* <Button onClick={() => setIsAdding(true)}>
//               <Plus className="w-4 h-4 mr-2" />
//               Add Poem
//             </Button> */}
        
// {(Button as any)({ 
//   onClick: () => setIsAdding(true), 
//   children: [
//     <Plus key="icon" className="w-4 h-4 mr-2" />,
//     "Add Poem"
//   ]
// })}
//             // @ts-ignore
//             {/* <Button
//               onClick={() => {
//                 fetch(`${API_BASE}/api/auth/logout`, {
//                   method: "POST",
//                   credentials: "include",
//                 }).then(() => router.push("/"));
//               }}
//             >
//               Logout
//             </Button> */}

//           {(Button as any)({ 
//   onClick: () => {
//     fetch(`${API_BASE}/api/auth/logout`, {
//       method: "POST",
//       credentials: "include",
//     }).then(() => router.push("/"));
//   }, 
//   children: "Logout"
// })}

//           </div>
//         </div>

//         <div className="grid gap-4 md:grid-cols-2">
//           {poems.map((p) => (
//             <Card key={p._id} className="p-4">
//               <div className="flex justify-between">
//                 <div>
//                   <h3 className="text-xl font-bold">{p.title}</h3>
//                   <p className="text-sm text-slate-500">
//                     {p.author} •{" "}
//                     {new Date((p as any).createdAt || Date.now()).toLocaleDateString()}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Badge variant="outline">{p.mood || "dreamy"}</Badge>
//                 </div>
//               </div>
//               <p className="mt-3 italic text-slate-600">{p.preview}</p>

//               <div className="mt-4 flex justify-between items-center">
//                 <div className="flex gap-2">
//                   <Button variant="outline" onClick={() => setEditing(p)}>
//                     <Edit className="w-4 h-4 mr-1" />
//                     Edit
//                   </Button>
//                   <Button variant="destructive" onClick={() => handleDelete(p._id)}>
//                     <Trash2 className="w-4 h-4" />
//                   </Button>
//                 </div>
//                 <div className="text-sm text-slate-600">
//                   {p.published ? "Published" : "Draft"}
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Add Modal */}
//       {isAdding && (
//         <Modal title="Add Poem" onClose={() => setIsAdding(false)}>
//           <input
//             className="w-full mb-2 p-2 border rounded"
//             placeholder="Title"
//             value={newPoem.title}
//             onChange={(e) => setNewPoem({ ...newPoem, title: e.target.value })}
//           />
//           <textarea
//             className="w-full mb-2 p-2 border rounded"
//             rows={8}
//             placeholder="Content"
//             value={newPoem.content}
//             onChange={(e) => setNewPoem({ ...newPoem, content: e.target.value })}
//           />
//           <div className="flex gap-2 items-center mb-4">
//             <select
//               value={newPoem.mood}
//               onChange={(e) => setNewPoem({ ...newPoem, mood: e.target.value })}
//               className="p-2 border rounded"
//             >
//               <option>dreamy</option>
//               <option>romantic</option>
//               <option>whimsical</option>
//               <option>ethereal</option>
//               <option>magical</option>
//               <option>mystical</option>
//             </select>
//             <label className="flex items-center gap-2 text-sm">
//               <input
//                 type="checkbox"
//                 checked={!!newPoem.published}
//                 onChange={(e) =>
//                   setNewPoem({ ...newPoem, published: e.target.checked })
//                 }
//               />
//               Publish
//             </label>
//           </div>
//           <div className="flex justify-end gap-2">
//             <Button variant="outline" onClick={() => setIsAdding(false)}>
//               Cancel
//             </Button>
//             <Button onClick={handleAdd}>
//               <Save className="w-4 h-4 mr-1" /> Save
//             </Button>
//           </div>
//         </Modal>
//       )}

//       {/* Edit Modal */}
//       {editing && (
//         <Modal title="Edit Poem" onClose={() => setEditing(null)}>
//           <input
//             className="w-full mb-2 p-2 border rounded"
//             placeholder="Title"
//             value={editing.title}
//             onChange={(e) => setEditing({ ...editing, title: e.target.value })}
//           />
//           <textarea
//             className="w-full mb-2 p-2 border rounded"
//             rows={8}
//             placeholder="Content"
//             value={editing.content}
//             onChange={(e) => setEditing({ ...editing, content: e.target.value })}
//           />
//           <div className="flex gap-2 items-center mb-4">
//             <select
//               value={editing.mood}
//               onChange={(e) => setEditing({ ...editing, mood: e.target.value })}
//               className="p-2 border rounded"
//             >
//               <option>dreamy</option>
//               <option>romantic</option>
//               <option>whimsical</option>
//               <option>ethereal</option>
//               <option>magical</option>
//               <option>mystical</option>
//             </select>
//             <label className="flex items-center gap-2 text-sm">
//               <input
//                 type="checkbox"
//                 checked={!!editing.published}
//                 onChange={(e) =>
//                   setEditing({ ...editing, published: e.target.checked })
//                 }
//               />
//               Publish
//             </label>
//           </div>
//           <div className="flex justify-end gap-2">
//             <Button variant="outline" onClick={() => setEditing(null)}>
//               Cancel
//             </Button>
//             <Button onClick={handleUpdate}>
//               <Save className="w-4 h-4 mr-1" /> Update
//             </Button>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// }

// function Modal({
//   title,
//   onClose,
//   children,
// }: {
//   title: string;
//   onClose: () => void;
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-md p-6 w-full max-w-2xl">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-lg font-bold">{title}</h3>
//           <button onClick={onClose}>
//             <X />
//           </button>
//         </div>
//         {children}
//       </div>
//     </div>
//   );
// }


// below is new claude change code 







// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Plus, Edit, Trash2, Save, X } from "lucide-react";

// import Navbar from "../../src/components/Navbar"

// type PoemType = {
//   _id?: string;
//   title: string;
//   content: string;
//   preview?: string;
//   mood?: string;
//   published?: boolean;
//   author?: string;
// };

// type ReviewType = {
//   _id: string;
//   name: string;
//   rating: number;
//   comment: string;
//   verified: boolean;
//   createdAt: string;
// };


// const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";

// export default function AdminPage() {
//   const router = useRouter();
//   const [poems, setPoems] = useState<PoemType[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [isAdding, setIsAdding] = useState(false);
//   const [editing, setEditing] = useState<PoemType | null>(null);
//   const [newPoem, setNewPoem] = useState<PoemType>({
//     title: "",
//     content: "",
//     mood: "dreamy",
//     published: false,
//   });

//     const [reviews, setReviews] = useState<ReviewType[]>([]);
//   const [reviewsLoading, setReviewsLoading] = useState(true);

//    useEffect(() => {
//     (async () => {
//       const me = await fetch(`${API_BASE}/api/auth/me`, { credentials: "include" });
//       if (!me.ok) {
//         router.push("/auth/login");
//         return;
//       }
//       // Once authenticated, fetch everything
//       fetchPoems();
//       fetchReviews(); // NEW: Fetch reviews
//     })();
//   }, []);


//    async function fetchReviews() {
//     setReviewsLoading(true);
//     const res = await fetch(`${API_BASE}/api/reviews/all`, { credentials: "include" });
//     if (res.ok) {
//       setReviews(await res.json());
//     }
//     setReviewsLoading(false);
//   }

//   async function fetchPoems() {
//     setLoading(true);
//     const res = await fetch(`${API_BASE}/api/poems`, { credentials: "include" });
//     if (!res.ok) {
//       router.push("/auth/login");
//       return;
//     }
//     const data = await res.json();
//     setPoems(data);
//     setLoading(false);
//   }

//   async function handleAdd() {
//     if (!newPoem.title || !newPoem.content)
//       return alert("Title + content required");
//     const res = await fetch(`${API_BASE}/api/poems`, {
//       method: "POST",
//       credentials: "include",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newPoem),
//     });
//     if (!res.ok) {
//       const err = await res.json();
//       return alert(err.message || "Failed");
//     }
//     setNewPoem({ title: "", content: "", mood: "dreamy", published: false });
//     setIsAdding(false);
//     fetchPoems();
//   }

//   async function handleUpdate() {
//     if (!editing?._id) return;
//     const res = await fetch(`${API_BASE}/api/poems/${editing._id}`, {
//       method: "PUT",
//       credentials: "include",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(editing),
//     });
//     if (!res.ok) return alert("Update failed");
//     setEditing(null);
//     fetchPoems();
//   }

//   async function handleDelete(id?: string) {
//     if (!id) return;
//     if (!confirm("Delete poem?")) return;
//     const res = await fetch(`${API_BASE}/api/poems/${id}`, {
//       method: "DELETE",
//       credentials: "include",
//     });
//     if (!res.ok) return alert("Delete failed");
//     fetchPoems();
//   }


//   // --- NEW: Review Moderation Functions ---
//   async function fetchReviews() {
//     setReviewsLoading(true);
//     const res = await fetch(`${API_BASE}/api/reviews/all`, { credentials: "include" });
//     if (res.ok) {
//       setReviews(await res.json());
//     }
//     setReviewsLoading(false);
//   }
  
//   async function handleApproveReview(id: string) {
//     const res = await fetch(`${API_BASE}/api/reviews/${id}/verify`, {
//       method: 'PUT',
//       credentials: 'include',
//     });
//     if (res.ok) {
//       fetchReviews(); // Refresh the list of reviews
//     } else {
//       alert("Failed to approve review.");
//     }
//   }

//   async function handleDeleteReview(id: string) {
//     if (!confirm("Are you sure you want to delete this review?")) return;
//     const res = await fetch(`${API_BASE}/api/reviews/${id}`, {
//       method: 'DELETE',
//       credentials: 'include',
//     });
//     if (res.ok) {
//       fetchReviews(); // Refresh the list of reviews
//     } else {
//       alert("Failed to delete review.");
//     }
//   }

//   const renderStars = (rating: number) => {
//     return (
//       <div className="flex space-x-1">
//         {[...Array(5)].map((_, i) => (
//           <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
//         ))}
//       </div>
//     );
//   };
  
//   const pendingReviewsCount = reviews.filter(r => !r.verified).length;

//   if (loading) return <div className="p-6">Loading Admin Dashboard.…</div>;

//   return (
//     <div className="min-h-screen p-6 bg-slate-50">
//       <Navbar />
//       <div className="max-w-6xl mx-auto">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//           <div className="flex items-center gap-2">
//             <button
//               className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700 px-4 py-2"
//               onClick={() => setIsAdding(true)}
//             >
//               <Plus className="w-4 h-4 mr-2" />
//               Add Poem
//             </button>
            
//             <button
//               className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-red-600 text-white hover:bg-red-700 px-4 py-2"
//               onClick={() => {
//                 fetch(`${API_BASE}/api/auth/logout`, {
//                   method: "POST",
//                   credentials: "include",
//                 }).then(() => router.push("/"));
//               }}
//             >
//               Logout
//             </button>
//           </div>
//         </div>

//         <div className="grid gap-4 md:grid-cols-2">
//           {poems.map((p) => (
//             <div key={p._id} className="p-4 rounded-lg border bg-white shadow-sm">
//               <div className="flex justify-between">
//                 <div>
//                   <h3 className="text-xl font-bold">{p.title}</h3>
//                   <p className="text-sm text-slate-500">
//                     {p.author} •{" "}
//                     {new Date((p as any).createdAt || Date.now()).toLocaleDateString()}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-slate-100 text-slate-900">
//                     {p.mood || "dreamy"}
//                   </span>
//                 </div>
//               </div>
//               <p className="mt-3 italic text-slate-600">{p.preview}</p>

//               <div className="mt-4 flex justify-between items-center">
//                 <div className="flex gap-2">
//                   <button
//                     className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 px-3 py-2"
//                     onClick={() => setEditing(p)}
//                   >
//                     <Edit className="w-4 h-4 mr-1" />
//                     Edit
//                   </button>
//                   <button
//                     className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-red-600 text-white hover:bg-red-700 px-3 py-2"
//                     onClick={() => handleDelete(p._id)}
//                   >
//                     <Trash2 className="w-4 h-4" />
//                   </button>
//                 </div>
//                 <div className="text-sm text-slate-600">
//                   {p.published ? "Published" : "Draft"}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Add Modal */}
//       {isAdding && (
//         <Modal title="Add Poem" onClose={() => setIsAdding(false)}>
//           <input
//             className="w-full mb-2 p-2 border rounded"
//             placeholder="Title"
//             value={newPoem.title}
//             onChange={(e) => setNewPoem({ ...newPoem, title: e.target.value })}
//           />
//           <textarea
//             className="w-full mb-2 p-2 border rounded"
//             rows={8}
//             placeholder="Content"
//             value={newPoem.content}
//             onChange={(e) => setNewPoem({ ...newPoem, content: e.target.value })}
//           />
//           <div className="flex gap-2 items-center mb-4">
//             <select
//               value={newPoem.mood}
//               onChange={(e) => setNewPoem({ ...newPoem, mood: e.target.value })}
//               className="p-2 border rounded"
//             >
//               <option>dreamy</option>
//               <option>romantic</option>
//               <option>whimsical</option>
//               <option>ethereal</option>
//               <option>magical</option>
//               <option>mystical</option>
//             </select>
//             <label className="flex items-center gap-2 text-sm">
//               <input
//                 type="checkbox"
//                 checked={!!newPoem.published}
//                 onChange={(e) =>
//                   setNewPoem({ ...newPoem, published: e.target.checked })
//                 }
//               />
//               Publish
//             </label>
//           </div>
//           <div className="flex justify-end gap-2">
//             <button
//               className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 px-4 py-2"
//               onClick={() => setIsAdding(false)}
//             >
//               Cancel
//             </button>
//             <button
//               className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700 px-4 py-2"
//               onClick={handleAdd}
//             >
//               <Save className="w-4 h-4 mr-1" /> Save
//             </button>
//           </div>
//         </Modal>
//       )}

//       {/* Edit Modal */}
//       {editing && (
//         <Modal title="Edit Poem" onClose={() => setEditing(null)}>
//           <input
//             className="w-full mb-2 p-2 border rounded"
//             placeholder="Title"
//             value={editing.title}
//             onChange={(e) => setEditing({ ...editing, title: e.target.value })}
//           />
//           <textarea
//             className="w-full mb-2 p-2 border rounded"
//             rows={8}
//             placeholder="Content"
//             value={editing.content}
//             onChange={(e) => setEditing({ ...editing, content: e.target.value })}
//           />
//           <div className="flex gap-2 items-center mb-4">
//             <select
//               value={editing.mood}
//               onChange={(e) => setEditing({ ...editing, mood: e.target.value })}
//               className="p-2 border rounded"
//             >
//               <option>dreamy</option>
//               <option>romantic</option>
//               <option>whimsical</option>
//               <option>ethereal</option>
//               <option>magical</option>
//               <option>mystical</option>
//             </select>
//             <label className="flex items-center gap-2 text-sm">
//               <input
//                 type="checkbox"
//                 checked={!!editing.published}
//                 onChange={(e) =>
//                   setEditing({ ...editing, published: e.target.checked })
//                 }
//               />
//               Publish
//             </label>
//           </div>
//           <div className="flex justify-end gap-2">
//             <button
//               className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 px-4 py-2"
//               onClick={() => setEditing(null)}
//             >
//               Cancel
//             </button>
//             <button
//               className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700 px-4 py-2"
//               onClick={handleUpdate}
//             >
//               <Save className="w-4 h-4 mr-1" /> Update
//             </button>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// }

// // Add this function to your admin component
// const generatePreview = (content: string) => {
//   const firstLine = content.split("\n")[0];
//   return firstLine.length > 80 
//     ? firstLine.substring(0, 80) + "..." 
//     : firstLine + (content.includes("\n") ? "..." : "");
// };

// // Update your handleAdd function:
// async function handleAdd() {
//   if (!newPoem.title || !newPoem.content)
//     return alert("Title + content required");
  
//   const poemWithPreview = {
//     ...newPoem,
//     preview: generatePreview(newPoem.content)
//   };
  
//   const res = await fetch(`${API_BASE}/api/poems`, {
//     method: "POST",
//     credentials: "include",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(poemWithPreview),
//   });
//   // newly added preview 
// }

// function Modal({
//   title,
//   onClose,
//   children,
// }: {
//   title: string;
//   onClose: () => void;
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-md p-6 w-full max-w-2xl">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-lg font-bold">{title}</h3>
//           <button onClick={onClose}>
//             <X />
//           </button>
//         </div>
//         {children}
//       </div>
//     </div>
//   );
// }




"use client";

import { useEffect, useState, FC, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Plus, Edit, Trash2, Save, X, Star, CheckCircle, Clock } from "lucide-react";

import Navbar from "../../src/components/Navbar";
// Using placeholder components based on your existing style.
// Ensure the import paths match your project structure.
import Button from "../../src/components/ui/Button"; 
import Card from "../../src/components/ui/Card"; 

// A simple Badge component definition if you don't have one.
// You can move this to its own file (e.g., ui/Badge.tsx).
const Badge: FC<{variant?: string; className?: string; children: ReactNode}> = ({ className, children }) => (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${className}`}>
        {children}
    </span>
);


// --- Type Definitions ---
type PoemType = {
  _id?: string;
  title: string;
  content: string;
  preview?: string;
  mood?: string;
  published?: boolean;
  author?: string;
  createdAt?: string;
};

type ReviewType = {
  _id: string;
  name: string;
  rating: number;
  comment: string;
  verified: boolean;
  createdAt: string;
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";

export default function AdminPage() {
  const router = useRouter();

  // --- State Management ---
  const [poems, setPoems] = useState<PoemType[]>([]);
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [loading, setLoading] = useState(true);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  
  // Modal states for poems
  const [isAddingPoem, setIsAddingPoem] = useState(false);
  const [editingPoem, setEditingPoem] = useState<PoemType | null>(null);
  const [newPoem, setNewPoem] = useState<PoemType>({
    title: "", content: "", mood: "dreamy", published: false,
  });

  // --- Data Fetching ---
  useEffect(() => {
    (async () => {
      const me = await fetch(`${API_BASE}/api/auth/me`, { credentials: "include" });
      if (!me.ok) {
        router.push("/auth/login");
        return;
      }
      // Once authenticated, fetch everything in parallel
      await Promise.all([fetchPoems(), fetchReviews()]);
      setLoading(false); // Set main loading to false after both fetches complete
    })();
  }, []); // The empty array ensures this runs only once on mount

  // --- Poem Functions ---
  const generatePreview = (content: string) => {
      const firstLine = content.split("\n")[0];
      return firstLine.length > 80 
        ? firstLine.substring(0, 80) + "..." 
        : firstLine + (content.includes("\n") ? "..." : "");
  };

  async function fetchPoems() {
    const res = await fetch(`${API_BASE}/api/poems`, { credentials: "include" });
    if (!res.ok) router.push("/auth/login");
    else setPoems(await res.json());
  }

  async function handleAddPoem() {
    if (!newPoem.title || !newPoem.content) return alert("Title + content required");
    const poemWithPreview = { ...newPoem, preview: generatePreview(newPoem.content) };
    const res = await fetch(`${API_BASE}/api/poems`, {
      method: "POST", credentials: "include",
      headers: { "Content-Type": "application/json" }, body: JSON.stringify(poemWithPreview),
    });
    if (!res.ok) return alert((await res.json()).message || "Failed");
    setNewPoem({ title: "", content: "", mood: "dreamy", published: false });
    setIsAddingPoem(false);
    await fetchPoems();
  }

  async function handleUpdatePoem() {
    if (!editingPoem?._id) return;
    const poemWithPreview = { ...editingPoem, preview: generatePreview(editingPoem.content) };
    const res = await fetch(`${API_BASE}/api/poems/${editingPoem._id}`, {
      method: "PUT", credentials: "include",
      headers: { "Content-Type": "application/json" }, body: JSON.stringify(poemWithPreview),
    });
    if (!res.ok) return alert("Update failed");
    setEditingPoem(null);
    await fetchPoems();
  }

  async function handleDeletePoem(id?: string) {
    if (!id || !confirm("Delete poem?")) return;
    const res = await fetch(`${API_BASE}/api/poems/${id}`, {
      method: "DELETE", credentials: "include",
    });
    if (!res.ok) return alert("Delete failed");
    await fetchPoems();
  }

  // --- Review Moderation Functions ---
  async function fetchReviews() {
    setReviewsLoading(true);
    const res = await fetch(`${API_BASE}/api/reviews/all`, { credentials: "include" });
    if (res.ok) setReviews(await res.json());
    setReviewsLoading(false);
  }
  
  async function handleApproveReview(id: string) {
    const res = await fetch(`${API_BASE}/api/reviews/${id}/verify`, { method: 'PUT', credentials: 'include' });
    if (res.ok) await fetchReviews();
    else alert("Failed to approve review.");
  }

  async function handleDeleteReview(id: string) {
    if (!confirm("Delete this review?")) return;
    const res = await fetch(`${API_BASE}/api/reviews/${id}`, { method: 'DELETE', credentials: 'include' });
    if (res.ok) await fetchReviews();
    else alert("Failed to delete review.");
  }
  
  // --- Helper Functions ---
  const renderStars = (rating: number) => (
    <div className="flex space-x-1">{[...Array(5)].map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ))}</div>
  );

  const pendingReviewsCount = reviews.filter(r => !r.verified).length;

  if (loading) return <div className="p-6">Loading Admin Dashboard…</div>;

  return (
    <div className="min-h-screen p-6 bg-slate-50">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Admin Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button onClick={() => setIsAddingPoem(true)}>
              <Plus className="w-4 h-4 mr-2" />Add Poem
            </Button>
            <Button variant="destructive" onClick={() => {
              fetch(`${API_BASE}/api/auth/logout`, { method: "POST", credentials: "include" })
              .then(() => router.push("/"));
            }}>Logout</Button>
          </div>
        </div>

        {/* --- Stats Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
           <Card className="text-center p-6"><div className="text-3xl font-bold">{poems.length}</div><div className="text-slate-600">Total Poems</div></Card>
           <Card className="text-center p-6"><div className="text-3xl font-bold">{poems.filter(p=>p.published).length}</div><div className="text-slate-600">Published</div></Card>
           <Card className="text-center p-6 text-orange-600"><div className="text-3xl font-bold">{pendingReviewsCount}</div><div className="text-slate-600">Pending Reviews</div></Card>
           <Card className="text-center p-6 text-green-600"><div className="text-3xl font-bold">{reviews.filter(r=>r.verified).length}</div><div className="text-slate-600">Approved Reviews</div></Card>
        </div>
        
        {/* --- Poem Management Section --- */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Poem Management</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {poems.map((p) => (
                  <Card key={p._id} className="p-4">
                      <h3 className="text-xl font-bold">{p.title}</h3>
                      <p className="mt-2 italic text-slate-600">{p.preview}</p>
                      <div className="mt-4 flex justify-between items-center">
                          <div className="flex gap-2">
                              <Button variant="outline" size="sm" onClick={() => setEditingPoem(p)}><Edit className="w-4 h-4 mr-1" />Edit</Button>
                              <Button variant="destructive" size="sm" onClick={() => handleDeletePoem(p._id)}><Trash2 className="w-4 h-4" /></Button>
                          </div>
                          <Badge variant="outline" className={p.published ? "border-green-300 text-green-800" : "border-gray-300 text-gray-800"}>{p.published ? "Published" : "Draft"}</Badge>
                      </div>
                  </Card>
              ))}
            </div>
        </div>

        {/* --- Review Moderation Section --- */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Review Moderation</h2>
          <div className="space-y-4">
            {reviewsLoading && <p className="text-slate-500">Loading reviews...</p>}
            {!reviewsLoading && reviews.length === 0 && <p className="text-slate-500">No reviews submitted yet.</p>}
            {reviews.map(review => (
              <Card key={review._id} className="p-4 bg-white/90">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="flex-1 mb-3 md:mb-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-lg">{review.name}</h3>
                      {renderStars(review.rating)}
                    </div>
                     <p className="mt-2 text-slate-700 italic">"{review.comment}"</p>
                     <p className="text-xs text-slate-400 mt-2">Submitted on {new Date(review.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center gap-2 self-start">
                      {review.verified ? (
                         <Badge className="bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1"/>Verified</Badge>
                      ) : (
                         <Badge className="bg-yellow-100 text-yellow-800"><Clock className="w-3 h-3 mr-1"/>Pending</Badge>
                      )}
                    {!review.verified && (
                      <Button onClick={() => handleApproveReview(review._id)} size="sm" className="bg-green-500 hover:bg-green-600"><CheckCircle className="w-4 h-4 mr-1" />Approve</Button>
                    )}
                    <Button onClick={() => handleDeleteReview(review._id)} size="sm" variant="destructive"><Trash2 className="w-4 h-4" /></Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* --- Poem Modals --- */}
      {isAddingPoem && (
        <Modal title="Add Poem" onClose={() => setIsAddingPoem(false)}>
          {/* Poem Add Form JSX */}
        </Modal>
      )}
      {editingPoem && (
        <Modal title="Edit Poem" onClose={() => setEditingPoem(null)}>
          {/* Poem Edit Form JSX */}
        </Modal>
      )}
    </div>
  );
}

// --- Modal Component ---
function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-md p-6 w-full max-w-2xl animate-in fade-in-0 zoom-in-95">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-slate-100"><X className="w-4 h-4" /></button>
        </div>
        {children}
      </div>
    </div>
  );
}