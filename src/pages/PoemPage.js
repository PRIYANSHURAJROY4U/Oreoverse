"use client"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Heart, Share2, BookOpen, Calendar, MessageCircle } from "lucide-react"
import Navbar from "../components/Navbar"
import Button from "../components/ui/Button"
import Badge from "../components/ui/Badge"

const PoemPage = () => {
  const { id } = useParams()

  // Mock poem data (in real app, fetch from API)
  const poem = {
    id: 1,
    title: "Midnight Thoughts",
    content: `Like stars that dance in velvet skies,
Your words illuminate the night,
Each whisper carries ancient sighs,
Of dreams that shimmer, pure and bright.

In shadows deep where silence dwells,
My heart finds solace in your voice,
Like distant, magical temple bells,
That make my weary soul rejoice.

The moon above, a silver coin,
Reflects the beauty of your grace,
Where earth and heaven gently join,
I see the wonder in your face.

So let us dance beneath the stars,
And write our story in the sand,
Beyond the reach of earthly scars,
Together, heart and soul and hand.`,
    date: "December 13, 2024",
    mood: "dreamy",
    likes: 47,
    author: "Oreo",
  }

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-slate-600 hover:text-purple-600 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Poetry Collection
        </Link>

        {/* Poem Header */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-purple-100 p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="mb-4 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">{poem.title}</h1>
              <div className="flex items-center space-x-4 text-slate-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{poem.date}</span>
                </div>
                <span>by {poem.author}</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className={getMoodColor(poem.mood)}>
                {poem.mood}
              </Badge>
              <div className="flex items-center space-x-1 text-slate-500">
                <Heart className="w-5 h-5" />
                <span>{poem.likes}</span>
              </div>
            </div>
          </div>

          {/* Poem Content */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
            <div className="prose prose-lg max-w-none">
              <div className="text-slate-700 leading-relaxed whitespace-pre-line font-serif text-lg">
                {poem.content}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Heart className="w-4 h-4 mr-2" />
              Like This Poem
            </Button>
            <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50 bg-transparent">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Link to="/">
              <Button variant="outline" className="border-slate-300 text-slate-600 hover:bg-slate-50 bg-transparent">
                <BookOpen className="w-4 h-4 mr-2" />
                Read More Poems
              </Button>
            </Link>
          </div>
        </div>

        {/* Comments Section Placeholder */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-purple-100 p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Reader Comments</h3>
          <div className="text-center py-12 text-slate-500">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Comments section coming soon! Share your thoughts about this beautiful poem.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PoemPage
