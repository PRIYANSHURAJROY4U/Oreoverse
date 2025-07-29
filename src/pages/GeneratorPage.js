"use client"

import { useState } from "react"
import { Sparkles, Wand2, Heart, RefreshCw } from "lucide-react"
import Navbar from "../components/Navbar"
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

const GeneratorPage = () => {
  const [theme, setTheme] = useState("")
  const [generatedPoem, setGeneratedPoem] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const poemTemplates = [
    {
      theme: "love",
      template: `Like {object}, your {quality} shines so bright,
In {context}, you are my guiding light,
With every {action}, my heart takes flight,
Together we dance through day and night.`,
    },
    {
      theme: "nature",
      template: `In the {place} where {element} flows,
{Beauty} blooms like morning rose,
{Feeling} whispers through the trees,
Dancing with the gentle breeze.`,
    },
    {
      theme: "dreams",
      template: `In dreams of {color} and {texture} light,
Where {creatures} soar through endless night,
{Emotion} fills my sleeping mind,
Leaving earthly cares behind.`,
    },
    {
      theme: "friendship",
      template: `Like {metaphor}, our bond runs deep,
Through {challenges} and {joys} we keep,
{Promise} echoes in my heart,
True friends never drift apart.`,
    },
  ]

  const wordBanks = {
    object: ["moonlight", "starlight", "sunshine", "crystal", "diamond", "flower"],
    quality: ["kindness", "beauty", "wisdom", "grace", "laughter", "spirit"],
    context: ["darkness", "silence", "chaos", "storms", "winter", "twilight"],
    action: ["smile", "touch", "word", "glance", "embrace", "whisper"],
    place: ["garden", "forest", "meadow", "valley", "mountain", "river"],
    element: ["water", "wind", "sunlight", "mist", "rain", "snow"],
    Beauty: ["Wonder", "Magic", "Peace", "Joy", "Love", "Hope"],
    Feeling: ["Serenity", "Wonder", "Peace", "Joy", "Calm", "Bliss"],
    color: ["golden", "silver", "purple", "azure", "crimson", "emerald"],
    texture: ["silken", "velvet", "crystal", "gossamer", "satin", "pearl"],
    creatures: ["angels", "butterflies", "birds", "spirits", "fairies", "stars"],
    Emotion: ["Wonder", "Peace", "Love", "Hope", "Joy", "Magic"],
    metaphor: ["rivers", "mountains", "stars", "roots", "threads", "bridges"],
    challenges: ["storms", "trials", "changes", "seasons", "years", "miles"],
    joys: ["laughter", "memories", "dreams", "adventures", "moments", "songs"],
    Promise: ["Loyalty", "Trust", "Love", "Faith", "Hope", "Care"],
  }

  const generatePoem = () => {
    if (!theme.trim()) return

    setIsGenerating(true)

    // Simulate API call delay
    setTimeout(() => {
      const matchingTemplate = poemTemplates.find(
        (t) =>
          t.theme.toLowerCase().includes(theme.toLowerCase()) || theme.toLowerCase().includes(t.theme.toLowerCase()),
      )

      const template = matchingTemplate ? matchingTemplate.template : poemTemplates[0].template

      // Replace placeholders with random words
      const poem = template.replace(/\{(\w+)\}/g, (match, key) => {
        const words = wordBanks[key]
        return words ? words[Math.floor(Math.random() * words.length)] : match
      })

      setGeneratedPoem(poem)
      setIsGenerating(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-xl">
              <Wand2 className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Poetry Generator ✨
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Let Oreo's poetic spirit inspire a personalized poem just for you! Enter a theme and watch the magic happen
            🎵
          </p>
        </div>

        {/* Generator Form */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl mb-8">
          <div className="p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="theme" className="block text-lg font-semibold text-slate-800 mb-3">
                  What's inspiring you today?
                </label>
                <input
                  type="text"
                  id="theme"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  placeholder="Enter a theme (love, nature, dreams, friendship, etc.)"
                  className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/70 text-lg"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={generatePoem}
                  disabled={!theme.trim() || isGenerating}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Creating Magic...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generate Poem
                    </>
                  )}
                </Button>

                {generatedPoem && (
                  <Button
                    onClick={() => setGeneratedPoem("")}
                    variant="outline"
                    className="border-slate-300 text-slate-600 hover:bg-slate-50 px-6 py-3"
                  >
                    Clear
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Generated Poem */}
        {generatedPoem && (
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Your Personalized Poem</h2>
                <div className="flex items-center space-x-2 text-purple-600">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">Generated with Oreo's magic</span>
                </div>
              </div>

              <div className="bg-white/80 rounded-2xl p-8 border border-purple-100">
                <div className="text-slate-700 leading-relaxed whitespace-pre-line font-serif text-lg text-center">
                  {generatedPoem}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Heart className="w-4 h-4 mr-2" />
                  Love This Poem
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-300 text-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Another
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* How It Works */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">How the Magic Works ✨</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/50 rounded-2xl p-6 border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Choose Your Theme</h4>
              <p className="text-slate-600 text-sm">
                Enter any theme that inspires you - love, nature, dreams, or anything else!
              </p>
            </div>

            <div className="bg-white/50 rounded-2xl p-6 border border-purple-100">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Oreo's Magic</h4>
              <p className="text-slate-600 text-sm">
                Our generator uses Oreo's poetic style to create something beautiful and unique.
              </p>
            </div>

            <div className="bg-white/50 rounded-2xl p-6 border border-purple-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💜</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Enjoy & Share</h4>
              <p className="text-slate-600 text-sm">
                Your personalized poem is ready! Share it with friends or keep it as inspiration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneratorPage
