"use client";

import PrivateRoute from "../../components/PrivateRoute";
import { useState } from "react";
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  BookOpen,
  Calendar,
  Tag,
  Heart,
} from "lucide-react";

// ✅ Using alias imports (Next.js standard)
import Navbar from "../../src/components/Navbar";
import Button from "../../src/components/ui/Button";
import Card from "../../src/components/ui/Card";
import Badge from "../../src/components/ui/Badge";

const AdminPage = () => {
  const [poems, setPoems] = useState([
    {
      id: 1,
      title: "Midnight Thoughts",
      content: `Like stars that dance in velvet skies,
Your words illuminate the night,
Each whisper carries ancient sighs,
Of dreams that shimmer, pure and bright.

In shadows deep where silence dwells,
My heart finds solace in your voice,
Like distant, magical temple bells,
That make my weary soul rejoice.`,
      preview:
        "Like stars that dance in velvet skies, your words illuminate the night...",
      date: "December 13, 2024",
      mood: "dreamy",
      likes: 47,
      published: true,
    },
    {
      id: 2,
      title: "Golden Hour Dreams",
      content: `In the space between sunset and twilight,
I found poetry in your smile,
Where golden rays meet purple night,
And time stands still for just a while.

Your laughter echoes through the air,
Like music from a distant shore,
In this moment, free from care,
I couldn't ask for anything more.`,
      preview:
        "In the space between sunset and twilight, I found poetry in your smile...",
      date: "November 28, 2024",
      mood: "romantic",
      likes: 62,
      published: true,
    },
  ]);

  const [isAddingPoem, setIsAddingPoem] = useState(false);
  const [editingPoem, setEditingPoem] = useState(null);
  const [newPoem, setNewPoem] = useState({
    title: "",
    content: "",
    mood: "dreamy",
    published: false,
  });

  const moods = [
    "dreamy",
    "romantic",
    "whimsical",
    "ethereal",
    "magical",
    "mystical",
  ];

  const getMoodColor = (mood) => {
    const colors = {
      dreamy: "bg-purple-100 text-purple-800 border-purple-200",
      romantic: "bg-pink-100 text-pink-800 border-pink-200",
      whimsical: "bg-yellow-100 text-yellow-800 border-yellow-200",
      ethereal: "bg-indigo-100 text-indigo-800 border-indigo-200",
      magical: "bg-emerald-100 text-emerald-800 border-emerald-200",
      mystical: "bg-slate-100 text-slate-800 border-slate-200",
    };
    return colors[mood] || "bg-gray-100 text-gray-800";
  };

  const generatePreview = (content) => {
    const firstLine = content.split("\n")[0];
    return firstLine.length > 60
      ? firstLine.substring(0, 60) + "..."
      : firstLine + "...";
  };

  const handleAddPoem = () => {
    if (newPoem.title && newPoem.content) {
      const poem = {
        id: Date.now(),
        ...newPoem,
        preview: generatePreview(newPoem.content),
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        likes: 0,
      };
      setPoems([poem, ...poems]);
      setNewPoem({ title: "", content: "", mood: "dreamy", published: false });
      setIsAddingPoem(false);
    }
  };

  const handleEditPoem = (poem) => setEditingPoem({ ...poem });

  const handleUpdatePoem = () => {
    if (editingPoem.title && editingPoem.content) {
      const updatedPoems = poems.map((poem) =>
        poem.id === editingPoem.id
          ? { ...editingPoem, preview: generatePreview(editingPoem.content) }
          : poem
      );
      setPoems(updatedPoems);
      setEditingPoem(null);
    }
  };

  const handleDeletePoem = (id) => {
    if (window.confirm("Are you sure you want to delete this poem?")) {
      setPoems(poems.filter((poem) => poem.id !== id));
    }
  };

  const togglePublished = (id) =>
    setPoems(
      poems.map((poem) =>
        poem.id === id ? { ...poem, published: !poem.published } : poem
      )
    );

  return (
    <PrivateRoute>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Admin Dashboard 👑
              </span>
            </h1>
            <p className="text-xl text-slate-600">
              Manage your beautiful poetry collection, Oreo! ✨
            </p>
          </div>
          <Button
            onClick={() => setIsAddingPoem(true)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 mt-4 md:mt-0"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Poem
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {poems.length}
            </div>
            <div className="text-slate-600">Total Poems</div>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {poems.filter((p) => p.published).length}
            </div>
            <div className="text-slate-600">Published</div>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center p-6">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {poems.filter((p) => !p.published).length}
            </div>
            <div className="text-slate-600">Drafts</div>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center p-6">
            <div className="text-3xl font-bold text-pink-600 mb-2">
              {poems.reduce((sum, poem) => sum + poem.likes, 0)}
            </div>
            <div className="text-slate-600">Total Likes</div>
          </Card>
        </div>

        {/* Poem Management UI (unchanged for brevity) */}
        {/* Add/Edit Modals & Poem Cards as per original code */}
        {/* --- Keep same as your version --- */}
      </div>
    </div>
    </PrivateRoute>
  );
};

export default AdminPage;
