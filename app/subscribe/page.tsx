// "use client";

// import { useState, FC, ReactNode } from "react";
// import Navbar from "../../src/components/Navbar";
// import { motion } from "framer-motion";
// import { Cookie, Loader2, Send, MailCheck } from "lucide-react"; // Icons for this page

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";

// // --- Helper Components for Styling ---
// // You likely have these in your project already, but they are here for completeness.
// // You can remove them if you import them from your own ui folder.
// const Card: FC<{className?: string; children: ReactNode}> = ({ className, children }) => (
//     <div className={`bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-purple-100 ${className}`}>
//         {children}
//     </div>
// );
// const Button: FC<{type?: 'submit' | 'button'; className?: string; disabled?: boolean; onClick?: () => void; children: ReactNode}> = ({ type, className, disabled, onClick, children }) => (
//     <button type={type} className={`w-full sm:w-auto flex items-center justify-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-all disabled:opacity-70 ${className}`} disabled={disabled} onClick={onClick}>
//         {children}
//     </button>
// );

 
// export default function SubscribePage() {
//   // State to manage the form
//   const [email, setEmail] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [message, setMessage] = useState('');
//   const [isSuccess, setIsSuccess] = useState(false);

//   // Function to submit the email to your backend API
//   const handleSubscribe = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email) return;

//     setIsSubmitting(true);
//     setMessage('');
//     setIsSuccess(false);

//     try {
//       const response = await fetch(`${API_BASE}/api/subscribers`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email }),
//       });
//       const data = await response.json();

//       setMessage(data.message);

//       if (!response.ok) {
//         throw new Error(data.message || 'An error occurred.');
//       }
      
//       setIsSuccess(true);
//       setEmail(''); // Clear the input field on success

//     } catch (error: any) {
//       setIsSuccess(false);
//       setMessage(error.message || 'Something went wrong. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-b from-purple-100 via-pink-50 to-yellow-50 min-h-screen flex flex-col">
//       <Navbar />

//       <main className="flex-grow flex items-center justify-center py-16 px-4">
//         <motion.div 
//             className="w-full max-w-2xl text-center"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//         >
//           <Card>
//             <Cookie className="mx-auto w-16 h-16 text-yellow-600 mb-6 animate-pulse" />
//             <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Join the Cookie Jar!</h1>
//             <p className="text-lg text-slate-600 mb-8">
//               Get a sweet note in your inbox whenever a new poem drops. No spam, just pure poetry.
//             </p>
            
//             {/* This will show a success message after a user subscribes */}
//             {isSuccess ? (
//                 <div className="text-center bg-green-100/50 p-6 rounded-lg border border-green-200">
//                     <MailCheck className="mx-auto w-12 h-12 text-green-600 mb-4"/>
//                     <h3 className="text-2xl font-bold text-green-800">You're in!</h3>
//                     <p className="text-green-700">{message}</p>
//                 </div>
//             ) : (
//                 <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 items-center">
//                     <input 
//                         type="email" 
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="your.email@example.com"
//                         className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/70"
//                         required
//                         disabled={isSubmitting}
//                     />
//                     <Button type="submit" disabled={isSubmitting}>
//                         {isSubmitting ? <Loader2 className="w-5 h-5 mr-2 animate-spin"/> : <Send className="w-5 h-5 mr-2"/>}
//                         {isSubmitting ? "Saving..." : "Subscribe"}
//                     </Button>
//                 </form>
//             )}

//             {/* This will only show error messages */}
//             {message && !isSuccess && (
//                 <p className="text-sm mt-4 text-red-600">{message}</p>
//             )}
//           </Card>
//         </motion.div>
//       </main>

//       {/* FOOTER - Identical to your other pages for consistency */}
//       <footer className="bg-slate-900 text-white py-12 px-4 text-center">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//               <div className="flex justify-center items-center space-x-2 mb-4">
//                   <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center">
//                     <div className="w-3 h-3 bg-slate-900 rounded-full" />
//                   </div>
//                   <span className="text-xl font-bold">Oreo's Poetry Corner</span>
//               </div>
//               <p className="text-slate-400 mb-4">"We never go out of style" – just like our beautiful poetry 💜</p>
//               <p className="text-slate-500 text-sm">Made with 🤍 for the most talented poet who loves cookies & cream</p>
//           </motion.div>
//       </footer>
//     </div>
//   );
// }


// import { useState } from 'react';
// import axios from 'axios';

// const SubscribeForm = () => {
//   const [email, setEmail] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState({ text: '', type: '' }); // type: 'success' or 'error'

//   const handleSubscribe = async (e) => {
//     e.preventDefault();
    
//     // Clear previous messages
//     setMessage({ text: '', type: '' });
    
//     // Validate email
//     if (!email || !email.includes('@')) {
//       setMessage({ text: 'Please enter a valid email address', type: 'error' });
//       return;
//     }

//     setLoading(true);

//     try {
//       // NO TOKEN NEEDED - This is a public endpoint
//       const response = await axios.post(
//         'http://localhost:5000/api/subscribers/subscribe', // ✅ Update with your backend URL
//         { email }
//       );

//       console.log('Subscribe response:', response.data);

//       setMessage({ 
//         text: response.data.message || 'Successfully subscribed! 🎉', 
//         type: 'success' 
//       });
      
//       // Clear the email input
//       setEmail('');

//     } catch (error) {
//       console.error('Subscribe error:', error);
      
//       const errorMessage = error.response?.data?.message 
//         || 'Failed to subscribe. Please try again.';
      
//       setMessage({ 
//         text: errorMessage, 
//         type: 'error' 
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-purple-600 mb-4">
//         Subscribe to OreoVerse 🍪
//       </h2>
//       <p className="text-gray-600 mb-6">
//         Get notified when new poems are published!
//       </p>

//       <form onSubmit={handleSubscribe} className="space-y-4">
//         <div>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//             disabled={loading}
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-2 px-4 rounded-lg font-semibold text-white transition-colors ${
//             loading 
//               ? 'bg-gray-400 cursor-not-allowed' 
//               : 'bg-purple-600 hover:bg-purple-700'
//           }`}
//         >
//           {loading ? 'Subscribing...' : 'Subscribe'}
//         </button>
//       </form>

//       {/* Success/Error Message */}
//       {message.text && (
//         <div
//           className={`mt-4 p-3 rounded-lg ${
//             message.type === 'success'
//               ? 'bg-green-100 text-green-800'
//               : 'bg-red-100 text-red-800'
//           }`}
//         >
//           {message.text}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SubscribeForm;



// updated subscriber page 



"use client";

import { useState, FC, ReactNode } from "react";
import Navbar from "../../src/components/Navbar";
import { motion } from "framer-motion";
import { Cookie, Loader2, Send, MailCheck } from "lucide-react";

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
      className={`w-full sm:w-auto flex items-center justify-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed ${className}`} 
      disabled={disabled} 
      onClick={onClick}
    >
        {children}
    </button>
);

export default function SubscribePage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
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
      // ✅ FIXED: Correct endpoint path
      const response = await fetch(`${API_BASE}/api/subscribers/subscribe`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          // ❌ NO TOKEN - This is a public endpoint
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      console.log('Subscribe response:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Failed to subscribe');
      }

      // Success!
      setIsSuccess(true);
      setMessage(data.message || 'Successfully subscribed! 🎉');
      setEmail(''); // Clear input

    } catch (error: any) {
      console.error('Subscribe error:', error);
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
            <Cookie className="mx-auto w-16 h-16 text-yellow-600 mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Join the Cookie Jar!
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Get a sweet note in your inbox whenever a new poem drops. No spam, just pure poetry.
            </p>
            
            {/* Success Message */}
            {isSuccess ? (
                <motion.div 
                  className="text-center bg-green-100/50 p-6 rounded-lg border border-green-200"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                    <MailCheck className="mx-auto w-12 h-12 text-green-600 mb-4"/>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">You're in! 🎉</h3>
                    <p className="text-green-700">{message}</p>
                    <button 
                      onClick={() => {
                        setIsSuccess(false);
                        setMessage('');
                      }}
                      className="mt-4 text-sm text-green-600 underline hover:text-green-700"
                    >
                      Subscribe another email
                    </button>
                </motion.div>
            ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 items-center">
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/70 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        required
                        disabled={isSubmitting}
                    />
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin"/>
                            Saving...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2"/>
                            Subscribe
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
              By subscribing, you'll receive email notifications when new poems are published. 
              You can unsubscribe anytime.
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