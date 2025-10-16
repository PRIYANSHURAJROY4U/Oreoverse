"use client";

import { useState, FC, ReactNode } from "react";
import Navbar from "../../src/components/Navbar";
import { motion } from "framer-motion";
import { HeartCrack, Loader2, Send, CheckCircle } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";

// --- Helper Components ---
const Card: FC<{className?: string; children: ReactNode}> = ({ className, children }) => (
    <div className={`bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-purple-100 ${className}`}>
        {children}
    </div>
);

const Button: FC<{
  type?: 'submit' | 'button'; 
  className?: string; 
  disabled?: boolean; 
  onClick?: () => void; 
  children: ReactNode
}> = ({ type, className, disabled, onClick, children }) => (
    <button 
      type={type} 
      className={`w-full sm:w-auto flex items-center justify-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 rounded-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed ${className}`} 
      disabled={disabled} 
      onClick={onClick}
    >
        {children}
    </button>
);

export default function UnsubscribePage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address');
      setIsSuccess(false);
      return;
    }

    setIsSubmitting(true);
    setMessage('');
    setIsSuccess(false);

    try {
      const response = await fetch(`${API_BASE}/api/subscribers/unsubscribe`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      console.log('Unsubscribe response:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Failed to unsubscribe');
      }

      // Success!
      setIsSuccess(true);
      setMessage(data.message || 'Successfully unsubscribed!');
      setEmail('');

    } catch (error: any) {
      console.error('Unsubscribe error:', error);
      setIsSuccess(false);
      setMessage(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-purple-100 via-pink-50 to-yellow-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <motion.div 
            className="w-full max-w-2xl text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
          <Card>
            <HeartCrack className="mx-auto w-16 h-16 text-red-500 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              We'll Miss You 💔
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Sorry to see you go! Enter your email below to unsubscribe from our poetry updates.
            </p>
            
            {/* Success Message */}
            {isSuccess ? (
                <motion.div 
                  className="text-center bg-blue-100/50 p-6 rounded-lg border border-blue-200"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                    <CheckCircle className="mx-auto w-12 h-12 text-blue-600 mb-4"/>
                    <h3 className="text-2xl font-bold text-blue-800 mb-2">All Done</h3>
                    <p className="text-blue-700">{message}</p>
                    <p className="text-sm text-slate-600 mt-4">
                      You won't receive any more email notifications from us.
                    </p>
                    <a 
                      href="/"
                      className="mt-4 inline-block text-sm text-blue-600 underline hover:text-blue-700"
                    >
                      Return to homepage
                    </a>
                </motion.div>
            ) : (
                <form onSubmit={handleUnsubscribe} className="flex flex-col sm:flex-row gap-3 items-center">
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white/70 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        required
                        disabled={isSubmitting}
                    />
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin"/>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2"/>
                            Unsubscribe
                          </>
                        )}
                    </Button>
                </form>
            )}

            {/* Error Message */}
            {message && !isSuccess && (
                <motion.p 
                  className="text-sm mt-4 p-3 bg-red-100 text-red-700 rounded-lg border border-red-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {message}
                </motion.p>
            )}

            <p className="text-xs text-slate-500 mt-6">
              Changed your mind? You can always{' '}
              <a href="/subscribe" className="text-purple-600 hover:text-purple-700 underline">
                subscribe again
              </a>
              {' '}anytime!
            </p>
          </Card>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-12 px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
              <div className="flex justify-center items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-slate-900 rounded-full" />
                  </div>
                  <span className="text-xl font-bold">Oreo's Poetry Corner</span>
              </div>
              <p className="text-slate-400 mb-4">"We never go out of style" – just like our beautiful poetry 💜</p>
              <p className="text-slate-500 text-sm">Made with 🤍 for the most talented poet who loves cookies & cream</p>
          </motion.div>
      </footer>
    </div>
  );
}