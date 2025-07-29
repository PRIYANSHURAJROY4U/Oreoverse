"use client"

import { useState } from "react"
import { Plus, Edit, Trash2, Save, X, BookOpen, Calendar, Tag, Heart } from "lucide-react"
import Navbar from "../components/Navbar"
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"
import Badge from "../components/ui/Badge"

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
      preview: "Like stars that dance in velvet skies, your words illuminate the night...",
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
      preview: "In the space between sunset and twilight, I found poetry in your smile...",
      date: "November 28, 2024",
      mood: "romantic",
      likes: 62,
      published: true,
    },
  ])

  const [isAddingPoem, setIsAddingPoem] = useState(false)
  const [editingPoem, setEditingPoem] = useState(null)
  const [newPoem, setNewPoem] = useState({
    title: "",
    content: "",
    mood: "dreamy",
    published: false,
  })

  const moods = ["dreamy", "romantic", "whimsical", "ethereal", "magical", "mystical"]

  const getMoodColor = (mood) => {
    const colors = {
      dreamy: "bg-purple-100 text-purple-800 border-purple-200",
      romantic: "bg-pink-100 text-pink-800 border-pink-200",
      whimsical: "bg-yellow-100 text-yellow-800 border-yellow-200",
      ethereal: "bg-indigo-100 text-indigo-800 border-indigo-200",
      magical: "bg-emerald-100 text-emerald-800 border-emerald-200",
      mystical: "bg-slate-100 text-slate-800 border-slate-200",
    }
    return colors[mood] || "bg-gray-100 text-gray-800"
  }

  const generatePreview = (content) => {
    const firstLine = content.split("\n")[0]
    return firstLine.length > 60 ? firstLine.substring(0, 60) + "..." : firstLine + "..."
  }

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
      }
      setPoems([poem, ...poems])
      setNewPoem({ title: "", content: "", mood: "dreamy", published: false })
      setIsAddingPoem(false)
    }
  }

  const handleEditPoem = (poem) => {
    setEditingPoem({ ...poem })
  }

  const handleUpdatePoem = () => {
    if (editingPoem.title && editingPoem.content) {
      const updatedPoems = poems.map((poem) =>
        poem.id === editingPoem.id
          ? {
              ...editingPoem,
              preview: generatePreview(editingPoem.content),
            }
          : poem,
      )
      setPoems(updatedPoems)
      setEditingPoem(null)
    }
  }

  const handleDeletePoem = (id) => {
    if (window.confirm("Are you sure you want to delete this poem?")) {
      setPoems(poems.filter((poem) => poem.id !== id))
    }
  }

  const togglePublished = (id) => {
    const updatedPoems = poems.map((poem) => (poem.id === id ? { ...poem, published: !poem.published } : poem))
    setPoems(updatedPoems)
  }

  return (
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
            <p className="text-xl text-slate-600">Manage your beautiful poetry collection, Oreo! ✨</p>
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
            <div className="text-3xl font-bold text-purple-600 mb-2">{poems.length}</div>
            <div className="text-slate-600">Total Poems</div>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">{poems.filter((p) => p.published).length}</div>
            <div className="text-slate-600">Published</div>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center p-6">
            <div className="text-3xl font-bold text-yellow-600 mb-2">{poems.filter((p) => !p.published).length}</div>
            <div className="text-slate-600">Drafts</div>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center p-6">
            <div className="text-3xl font-bold text-pink-600 mb-2">
              {poems.reduce((sum, poem) => sum + poem.likes, 0)}
            </div>
            <div className="text-slate-600">Total Likes</div>
          </Card>
        </div>

        {/* Add New Poem Modal */}
        {isAddingPoem && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-800">Add New Poem ✨</h2>
                  <Button variant="ghost" onClick={() => setIsAddingPoem(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={newPoem.title}
                      onChange={(e) => setNewPoem({ ...newPoem, title: e.target.value })}
                      className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter poem title..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Mood</label>
                    <select
                      value={newPoem.mood}
                      onChange={(e) => setNewPoem({ ...newPoem, mood: e.target.value })}
                      className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      {moods.map((mood) => (
                        <option key={mood} value={mood}>
                          {mood.charAt(0).toUpperCase() + mood.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Content</label>
                    <textarea
                      value={newPoem.content}
                      onChange={(e) => setNewPoem({ ...newPoem, content: e.target.value })}
                      rows={12}
                      className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent font-serif"
                      placeholder="Write your beautiful poem here..."
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="published"
                      checked={newPoem.published}
                      onChange={(e) => setNewPoem({ ...newPoem, published: e.target.checked })}
                      className="w-4 h-4 text-purple-600 border-purple-300 rounded focus:ring-purple-500"
                    />
                    <label htmlFor="published" className="text-sm font-medium text-slate-700">
                      Publish immediately
                    </label>
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      onClick={handleAddPoem}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save Poem
                    </Button>
                    <Button variant="outline" onClick={() => setIsAddingPoem(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Edit Poem Modal */}
        {editingPoem && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-800">Edit Poem ✏️</h2>
                  <Button variant="ghost" onClick={() => setEditingPoem(null)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={editingPoem.title}
                      onChange={(e) => setEditingPoem({ ...editingPoem, title: e.target.value })}
                      className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Mood</label>
                    <select
                      value={editingPoem.mood}
                      onChange={(e) => setEditingPoem({ ...editingPoem, mood: e.target.value })}
                      className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      {moods.map((mood) => (
                        <option key={mood} value={mood}>
                          {mood.charAt(0).toUpperCase() + mood.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Content</label>
                    <textarea
                      value={editingPoem.content}
                      onChange={(e) => setEditingPoem({ ...editingPoem, content: e.target.value })}
                      rows={12}
                      className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent font-serif"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="editPublished"
                      checked={editingPoem.published}
                      onChange={(e) => setEditingPoem({ ...editingPoem, published: e.target.checked })}
                      className="w-4 h-4 text-purple-600 border-purple-300 rounded focus:ring-purple-500"
                    />
                    <label htmlFor="editPublished" className="text-sm font-medium text-slate-700">
                      Published
                    </label>
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      onClick={handleUpdatePoem}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Update Poem
                    </Button>
                    <Button variant="outline" onClick={() => setEditingPoem(null)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Poems List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Your Poems</h2>

          {poems.length === 0 ? (
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center p-12">
              <BookOpen className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-600 mb-2">No poems yet</h3>
              <p className="text-slate-500 mb-6">Start creating your beautiful poetry collection!</p>
              <Button
                onClick={() => setIsAddingPoem(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Your First Poem
              </Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {poems.map((poem) => (
                <Card
                  key={poem.id}
                  className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-slate-800">{poem.title}</h3>
                          <Badge variant="outline" className={getMoodColor(poem.mood)}>
                            {poem.mood}
                          </Badge>
                          {poem.published ? (
                            <Badge className="bg-green-100 text-green-800 border-green-200">Published</Badge>
                          ) : (
                            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Draft</Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {poem.date}
                          </div>
                          <div className="flex items-center">
                            <Heart className="w-4 h-4 mr-1" />
                            {poem.likes} likes
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 italic mb-4 line-clamp-2">"{poem.preview}"</p>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditPoem(poem)}
                          className="border-purple-300 text-purple-600 hover:bg-purple-50"
                        >
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => togglePublished(poem.id)}
                          className={
                            poem.published
                              ? "border-yellow-300 text-yellow-600 hover:bg-yellow-50"
                              : "border-green-300 text-green-600 hover:bg-green-50"
                          }
                        >
                          <Tag className="w-4 h-4 mr-1" />
                          {poem.published ? "Unpublish" : "Publish"}
                        </Button>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeletePoem(poem.id)}
                        className="border-red-300 text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminPage
