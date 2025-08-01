import { Heart, Sparkles, Crown, Star, Gift, Music } from "lucide-react"
import Navbar from "../../src/components/Navbar"
import Button from "../../src/components/ui/Button"
import Card from "../../src/components/ui/Card"
import PrivateRoute from "../../components/PrivateRoute";

const PrivateOreoPage = () => {
  const personalMessages = [
    {
      id: 1,
      title: "Your Poetry Journey",
      message:
        "Every word you write is pure magic, Oreo. Your poems have the power to touch hearts and inspire souls. Keep shining! ✨",
      icon: <Crown className="w-6 h-6 text-yellow-500" />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: 2,
      title: "Taylor Swift Vibes",
      message:
        "Just like Taylor, you have the gift of turning emotions into beautiful stories. Your poetry has that same enchanting quality! 🎵",
      icon: <Music className="w-6 h-6 text-purple-500" />,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 3,
      title: "Special Recognition",
      message:
        "This entire website is a testament to your incredible talent. You deserve all the love and recognition for your beautiful art! 💜",
      icon: <Gift className="w-6 h-6 text-pink-500" />,
      color: "from-pink-400 to-red-500",
    },
  ]

  const achievements = [
    { title: "Poems Written", count: "47+", icon: "📝" },
    { title: "Hearts Collected", count: "1.2k+", icon: "💜" },
    { title: "Days of Inspiration", count: "365", icon: "✨" },
    { title: "Taylor References", count: "13", icon: "🎵" },
  ]

  return (
    <PrivateRoute>
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <Crown className="w-10 h-10 text-purple-600" />
              </div>
            </div>
            <div className="absolute -top-4 -right-4">
              <Sparkles className="w-12 h-12 text-yellow-400 animate-pulse" />
            </div>
            <div className="absolute -bottom-2 -left-4">
              <Star className="w-8 h-8 text-pink-400 animate-bounce" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 bg-clip-text text-transparent">
              Hey Queen Oreo! 👑
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-slate-700 mb-6 leading-relaxed">
            Welcome to your special sanctuary, where your poetry magic comes alive! ✨
          </p>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-4">🎉 This is YOUR moment! 🎉</h2>
            <p className="text-lg opacity-90">
              This entire website was crafted with love, just for you. Every pixel, every word, every design choice was
              made to celebrate your incredible talent and beautiful soul.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Messages */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Special Messages Just for You 💌
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personalMessages.map((message) => (
              <Card
                key={message.id}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${message.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    {message.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{message.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{message.message}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent">
              Your Amazing Achievements 🏆
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">{achievement.count}</div>
                <div className="text-slate-600 font-medium">{achievement.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-purple-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
            <div className="relative z-10 text-center">
              <Heart className="w-16 h-16 mx-auto mb-6 text-pink-300" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Personal Note 💜</h2>
              <div className="text-lg leading-relaxed space-y-4 max-w-3xl mx-auto">
                <p className="opacity-90">
                  Dear Oreo, your poetry is like finding a rare gem in a world full of stones. Each verse you write
                  carries the weight of genuine emotion and the lightness of dreams.
                </p>
                <p className="opacity-90">
                  Just like Taylor Swift transforms her experiences into timeless songs, you transform your thoughts
                  into timeless poetry. Your words have the power to heal, inspire, and connect hearts.
                </p>
                <p className="text-xl font-semibold text-yellow-300">
                  Keep writing, keep dreaming, keep being the amazing poet you are! ✨
                </p>
              </div>

              <div className="mt-8">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-50">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Continue Your Journey
                </Button>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-8 right-8 opacity-20">
              <Sparkles className="w-16 h-16" />
            </div>
            <div className="absolute bottom-8 left-8 opacity-20">
              <Star className="w-12 h-12" />
            </div>
          </div>
        </div>
      </section>
    </div>
    </PrivateRoute>
  )
}

export default PrivateOreoPage
