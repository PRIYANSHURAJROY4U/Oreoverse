import { Link } from "react-router-dom"
import { Heart, Sparkles, BookOpen, Star, MessageCircle, PenTool, User, Users } from "lucide-react"
import Navbar from "../components/Navbar"
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"
import Badge from "../components/ui/Badge"

const HomePage = () => {
  const poems = [
    {
      id: 1,
      title: "Midnight Thoughts",
      preview: "Like stars that dance in velvet skies, your words illuminate the night...",
      date: "December 13, 2024",
      mood: "dreamy",
      likes: 47,
    },
    {
      id: 2,
      title: "Golden Hour Dreams",
      preview: "In the space between sunset and twilight, I found poetry in your smile...",
      date: "November 28, 2024",
      mood: "romantic",
      likes: 62,
    },
    {
      id: 3,
      title: "Paper Rings & Promises",
      preview: "I'd marry you with paper rings, in a world of black and white...",
      date: "October 15, 2024",
      mood: "whimsical",
      likes: 89,
    },
    {
      id: 4,
      title: "Lavender Haze",
      preview: "Stained glass windows in my mind, painting memories in purple hues...",
      date: "September 22, 2024",
      mood: "ethereal",
      likes: 73,
    },
    {
      id: 5,
      title: "Enchanted Moments",
      preview: "This night is sparkling, don't you let it go, like cookies and cream dreams...",
      date: "August 30, 2024",
      mood: "magical",
      likes: 95,
    },
    {
      id: 6,
      title: "Folklore Whispers",
      preview: "In the quiet of the forest, where stories come alive...",
      date: "July 18, 2024",
      mood: "mystical",
      likes: 56,
    },
  ]

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

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <PenTool className="w-6 h-6 text-slate-800" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Oreo's Poetry ✨
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            Welcome to the enchanting world of Oreo's poetry, where words dance like
            <span className="text-purple-600 font-semibold"> Taylor Swift melodies </span>
            and dreams taste like
            <span className="text-slate-800 font-semibold"> cookies & cream </span> ✨
          </p>

          <p className="text-lg text-slate-500 mb-8 italic">
            "Poetry is when an emotion has found its thought and the thought has found words" 💜
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Poems
            </Button>
            <Link to="/generator">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3 bg-transparent"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Generate Poem
              </Button>
            </Link>
          </div>

          {/* Private Access Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/oreo-private">
              <Button size="sm" variant="ghost" className="text-slate-500 hover:text-purple-600 hover:bg-purple-50">
                <User className="w-4 h-4 mr-2" />
                Oreo's Private Space
              </Button>
            </Link>
            <Link to="/friends-keerthi-mouli">
              <Button size="sm" variant="ghost" className="text-slate-500 hover:text-pink-600 hover:bg-pink-50">
                <Users className="w-4 h-4 mr-2" />
                Friends Corner
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-4 h-4 bg-purple-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-32 right-20 animate-pulse">
          <Star className="w-6 h-6 text-yellow-400" />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce delay-1000">
          <div className="w-3 h-3 bg-pink-400 rounded-full opacity-60"></div>
        </div>
      </section>

      {/* About Oreo Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent">
              Meet the Poet
            </span>
          </h2>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-slate-800" />
              </div>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Oreo is a passionate poet who finds magic in everyday moments and transforms them into beautiful verses.
              Inspired by Taylor Swift's storytelling and the simple joy of cookies and cream, her poetry captures the
              essence of dreams, love, and wonder.
            </p>
            <p className="text-slate-500 italic">
              "Every poem is a piece of my heart, shared with the world" - Oreo ✨
            </p>
          </div>
        </div>
      </section>

      {/* Poems Gallery */}
      <section id="poems" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent">
                Poetry Collection
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover Oreo's beautiful poems, each one a journey through emotions and dreams 🎵
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poems.map((poem, index) => (
              <Card
                key={poem.id}
                className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm ${
                  index % 2 === 0 ? "hover:shadow-purple-200" : "hover:shadow-pink-200"
                }`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="outline" className={getMoodColor(poem.mood)}>
                      {poem.mood}
                    </Badge>
                    <div className="flex items-center space-x-1 text-slate-500">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{poem.likes}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors mb-2">
                    {poem.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">{poem.date}</p>
                  <p className="text-slate-600 leading-relaxed mb-4 italic">"{poem.preview}"</p>
                  <Link to={`/poem/${poem.id}`}>
                    <Button variant="ghost" className="w-full group-hover:bg-purple-50 group-hover:text-purple-600">
                      Read Full Poem
                      <BookOpen className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-purple-300 text-purple-600 hover:bg-purple-50 bg-transparent"
            >
              View All Poems ({poems.length + 12} total)
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/5 to-pink-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">47</div>
              <div className="text-slate-600">Poems Written</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-pink-600">1.2k</div>
              <div className="text-slate-600">Hearts Received</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-indigo-600">89</div>
              <div className="text-slate-600">Happy Readers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-emerald-600">13</div>
              <div className="text-slate-600">Taylor References</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Oreo's Poetry Journey ✨</h2>
              <p className="text-xl mb-8 opacity-90">Experience the magic of words and share in the beauty of poetry</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/generator">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-50">
                    <PenTool className="w-5 h-5 mr-2" />
                    Generate Poem
                  </Button>
                </Link>
                <Link to="/reviews">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Leave a Review
                  </Button>
                </Link>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 opacity-20">
              <Sparkles className="w-12 h-12" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <Heart className="w-8 h-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
            </div>
            <span className="text-xl font-bold">Oreo's Poetry</span>
          </div>
          <p className="text-slate-400 mb-4">"We never go out of style" - just like beautiful poetry 💜</p>
          <p className="text-slate-500 text-sm">© 2024 Oreo's Poetry. Made with 🤍 for poetry lovers everywhere.</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
