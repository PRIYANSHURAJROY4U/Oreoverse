import { Heart, Users, Sparkles, Star, MessageCircleHeartIcon as MessageHeart, Crown } from "lucide-react"
import Navbar from "../components/Navbar"
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

const PrivateFriendsPage = () => {
  const friendMessages = [
    {
      name: "Keerthi",
      message:
        "Oreo, your poetry always makes my day brighter! Every time you share a new poem, it's like receiving a little piece of magic. Your words have this incredible way of capturing exactly what the heart feels but can't express. Keep shining, my dear friend! ✨💜",
      color: "from-pink-400 to-rose-500",
      emoji: "🌸",
      memories: ["Late night poetry sessions", "Taylor Swift song discussions", "Dream sharing moments"],
    },
    {
      name: "Mouli",
      message:
        "Girl, you're literally the Taylor Swift of poetry! 🎵 Your verses flow like music and every poem tells a story that touches the soul. I'm so proud to call you my friend and witness your incredible talent. The world needs more of your beautiful words! 💫",
      color: "from-purple-400 to-indigo-500",
      emoji: "🎭",
      memories: ["Poetry reading sessions", "Creative brainstorming", "Friendship adventures"],
    },
  ]

  const friendshipMoments = [
    {
      title: "Poetry Circle",
      description: "Those magical moments when the three of you share poems and dreams",
      icon: "📖",
      color: "bg-purple-100",
    },
    {
      title: "Taylor Swift Sessions",
      description: "Singing along to Taylor's songs and finding poetry inspiration",
      icon: "🎵",
      color: "bg-pink-100",
    },
    {
      title: "Creative Support",
      description: "Always there to encourage and celebrate each other's talents",
      icon: "🤝",
      color: "bg-yellow-100",
    },
    {
      title: "Dream Sharing",
      description: "Sharing hopes, dreams, and supporting each other's journeys",
      icon: "✨",
      color: "bg-indigo-100",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <Users className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
              </div>
              <div className="absolute -bottom-2 -left-2">
                <Sparkles className="w-6 h-6 text-purple-400 animate-bounce" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Keerthi & Mouli 💕
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Welcome to this special corner dedicated to Oreo's amazing best friends! This is where friendship, poetry,
            and Taylor Swift vibes come together ✨
          </p>

          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white mb-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">🌟 The Dream Team 🌟</h2>
            <p className="text-lg opacity-90">
              You three are the perfect friendship trio - supporting each other's dreams, sharing poetry, and creating
              beautiful memories together. This page celebrates the special bond you share with our talented poet Oreo!
            </p>
          </div>
        </div>
      </section>

      {/* Friend Messages */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Messages for Oreo 💌
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {friendMessages.map((friend, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${friend.color} rounded-full flex items-center justify-center shadow-lg mr-4`}
                    >
                      <span className="text-2xl">{friend.emoji}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">{friend.name}</h3>
                      <p className="text-slate-500">Best Friend Forever 💜</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-slate-50 to-purple-50 rounded-xl p-6 mb-6">
                    <MessageHeart className="w-6 h-6 text-pink-500 mb-3" />
                    <p className="text-slate-700 leading-relaxed italic">"{friend.message}"</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Favorite Memories Together:</h4>
                    <div className="space-y-2">
                      {friend.memories.map((memory, idx) => (
                        <div key={idx} className="flex items-center text-slate-600">
                          <Star className="w-4 h-4 text-yellow-400 mr-2" />
                          <span className="text-sm">{memory}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Friendship Moments */}
      <section className="py-16 px-4 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent">
              Beautiful Friendship Moments 🌈
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {friendshipMoments.map((moment, index) => (
              <div
                key={index}
                className={`${moment.color} rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="text-4xl mb-4">{moment.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{moment.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{moment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Message */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            <div className="relative z-10 text-center">
              <Crown className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">To the Best Friend Trio 👑</h2>
              <div className="text-lg leading-relaxed space-y-4 max-w-3xl mx-auto">
                <p className="opacity-90">
                  Keerthi and Mouli, you two are the most amazing friends Oreo could ask for! Your support, love, and
                  encouragement mean the world to her.
                </p>
                <p className="opacity-90">
                  The way you celebrate her poetry, share in her Taylor Swift obsession, and create beautiful memories
                  together is truly special. Friendship like yours is rare and precious.
                </p>
                <p className="text-xl font-semibold text-yellow-300">
                  Keep being the incredible friends you are! The world needs more friendships like yours ✨
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-50">
                  <Heart className="w-5 h-5 mr-2" />
                  Send Love to Oreo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Friendship Goals
                </Button>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-8 right-8 opacity-20">
              <Sparkles className="w-16 h-16" />
            </div>
            <div className="absolute bottom-8 left-8 opacity-20">
              <Heart className="w-12 h-12" />
            </div>
            <div className="absolute top-1/2 left-8 opacity-10">
              <Users className="w-20 h-20" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivateFriendsPage
