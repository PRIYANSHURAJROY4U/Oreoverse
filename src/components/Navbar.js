"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Heart, Menu, X, BookOpen, Sparkles, MessageCircle, User, Users, Settings } from "lucide-react"
import Button from "./ui/Button"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: "/", label: "Home", icon: <BookOpen className="w-4 h-4" /> },
    { path: "/generator", label: "Generator", icon: <Sparkles className="w-4 h-4" /> },
    { path: "/reviews", label: "Reviews", icon: <MessageCircle className="w-4 h-4" /> },
  ]

  const privateLinks = [
    { path: "/oreo-private", label: "Oreo's Space", icon: <User className="w-4 h-4" /> },
    { path: "/friends-keerthi-mouli", label: "Friends Corner", icon: <Users className="w-4 h-4" /> },
    { path: "/admin", label: "Admin", icon: <Settings className="w-4 h-4" /> },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent">
              Oreo's Poetry
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-1 transition-colors ${
                  isActive(link.path) ? "text-purple-600 font-medium" : "text-slate-600 hover:text-purple-600"
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}

            <div className="h-4 w-px bg-slate-300"></div>

            {privateLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-1 text-sm transition-colors ${
                  isActive(link.path) ? "text-purple-600 font-medium" : "text-slate-500 hover:text-purple-600"
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}

            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Heart className="w-4 h-4 mr-2" />
              Support
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-purple-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-100">
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? "text-purple-600 bg-purple-50 font-medium"
                      : "text-slate-600 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}

              <div className="h-px bg-slate-200 my-3"></div>

              {privateLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive(link.path)
                      ? "text-purple-600 bg-purple-50 font-medium"
                      : "text-slate-500 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}

              <div className="pt-3">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Heart className="w-4 h-4 mr-2" />
                  Support
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
