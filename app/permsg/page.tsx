// "use client";

// import { useState } from "react";
// import { Heart, Sparkles } from "lucide-react";
// import Navbar from "../../src/components/Navbar";
// import Button from "../../src/components/ui/Button";

// export default function OreoLovePage() {
//   const [response, setResponse] = useState<string | null>(null);

//   const handleYes = () => {
//     setResponse("yes");
//     createConfetti();
//   };

//   const handleNo = () => {
//     setResponse("no");
//   };

//   const createConfetti = () => {
//     const emojis = ["🍪", "❤️"];
//     for (let i = 0; i < 50; i++) {
//       const emoji = document.createElement("div");
//       emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
//       emoji.style.position = "fixed";
//       emoji.style.left = Math.random() * 100 + "vw";
//       emoji.style.top = "-2vh";
//       emoji.style.fontSize = "2rem";
//       emoji.style.animation = `fall ${3 + Math.random() * 2}s linear`;
//       emoji.style.zIndex = "9999";
//       document.body.appendChild(emoji);

//       setTimeout(() => emoji.remove(), 5000);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-purple-100">
//       <Navbar />

//       <main className="max-w-4xl mx-auto px-4 py-16">
//         {/* Header */}
//         <section className="text-center mb-12">
//           <div className="flex justify-center mb-6">
//             <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
//               <Heart className="w-8 h-8 text-white" />
//             </div>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
//               Dedicated To Oreo 💜
//             </span>
//           </h1>
//           <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//             A little corner of the internet, just to say how grateful I am for you.
//           </p>
//         </section>

//         {/* Love Notes */}
//         <section className="space-y-10">
//           <div className="rounded-2xl p-8 shadow-md bg-gradient-to-br from-purple-50 to-pink-50 border border-pink-100">
//             <p className="text-2xl text-slate-800 font-serif text-center leading-relaxed">
//               One earth, seven seas, 7 continents, 196 countries and 8 billion people...
//               and somehow I am lucky enough to meet you.
//             </p>
//           </div>

//           <div className="rounded-2xl p-8 shadow-md bg-gradient-to-r from-pink-100 via-purple-100 to-slate-50">
//             <p className="text-2xl text-slate-700 italic font-semibold text-center">
//               Love is bent, like love tedha hai 💫
//             </p>
//           </div>

//           <div className="rounded-2xl p-8 shadow-md bg-gradient-to-br from-yellow-50 to-pink-100 border border-purple-100">
//             <p className="text-xl text-slate-700 font-serif text-center leading-relaxed">
//               See... there is a million nos it can't work,
//               but there is one yes to...
//               that we enjoy each other's company...
//               and many things... 💜
//             </p>
//           </div>
//         </section>

//         {/* Lady Luck Note */}
//         <section className="mt-12 text-center">
//           <p className="text-lg text-slate-700 italic">
//             U r my lady luck... every time I use it. nd I will be using it in future...  
//             u r my safe space 🥺
//           </p>
//         </section>

//         {/* Interactive Buttons */}
//         <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
//           <Button
//             onClick={handleYes}
//             className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg"
//           >
//             <Heart className="w-5 h-5 mr-2" /> Yes ❤️
//           </Button>
//           <Button
//             onClick={handleNo}
//             variant="outline"
//             className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 text-lg"
//           >
//             <Sparkles className="w-5 h-5 mr-2" /> No 💔
//           </Button>
//         </div>

//         {/* Response Message */}
//         {response === "no" && (
//           <p className="mt-6 text-center text-red-600 text-lg">
//             😢 Oh no... my heart breaks.
//           </p>
//         )}
//       </main>

//       {/* Falling animation style */}
//       <style jsx>{`
//         @keyframes fall {
//           to {
//             transform: translateY(100vh) rotate(360deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


"use client";

import Link from "next/link";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import Navbar from "../../src/components/Navbar";
import Button from "../../src/components/ui/Button";

export default function OreoLovePage() {
  const [response, setResponse] = useState<string | null>(null);

  const handleYes = () => {
    setResponse("yes");
    createConfetti();
  };

  const handleNo = () => {
    setResponse("no");
  };

  const createConfetti = () => {
    const emojis = ["🍪", "❤️"];
    for (let i = 0; i < 50; i++) {
      const emoji = document.createElement("div");
      emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.position = "fixed";
      emoji.style.left = Math.random() * 100 + "vw";
      emoji.style.top = "-2vh";
      emoji.style.fontSize = "2rem";
      emoji.style.animation = `fall ${3 + Math.random() * 2}s linear`;
      emoji.style.zIndex = "9999";
      document.body.appendChild(emoji);

      setTimeout(() => emoji.remove(), 5000);
    }
  };

  // Animation variants for staggered entry
  const fadeInUp = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-purple-100">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <section className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
            >
              <Heart className="w-8 h-8 text-white" />
            </motion.div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Dedicated To Oreo 💜
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            A little corner of the internet, just to say how grateful I am for you.
          </motion.p>
        </section>

        {/* Love Notes */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.4 },
            },
          }}
          className="space-y-10"
        >
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl p-8 shadow-md bg-gradient-to-br from-purple-50 to-pink-50 border border-pink-100"
          >
            <p className="text-2xl text-slate-800 font-serif text-center leading-relaxed">
              One earth, seven seas, 7 continents, 196 countries and 8 billion
              people... and somehow I am lucky enough to meet you.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="rounded-2xl p-8 shadow-md bg-gradient-to-r from-pink-100 via-purple-100 to-slate-50"
          >
            <p className="text-2xl text-slate-700 italic font-semibold text-center">
              Love is bent, like love tedha hai 💫
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="rounded-2xl p-8 shadow-md bg-gradient-to-br from-yellow-50 to-pink-100 border border-purple-100"
          >
            <p className="text-xl text-slate-700 font-serif text-center leading-relaxed">
              See... there is a million nos it can't work, but there is one yes
              to... that we enjoy each other's company... and many things... 💜
            </p>
          </motion.div>
        </motion.section>

        {/* Lady Luck Note */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-slate-700 italic">
            U r my lady luck... every time I use it. nd I will be using it in
            future... u r my safe space 🥺
          </p>
        </motion.section>

        {/* Interactive Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-6 mt-12"
        >
          <Button
            onClick={handleYes}
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg"
          >
            <Heart className="w-5 h-5 mr-2" /> Yes ❤️
          </Button>
          <Button
            onClick={handleNo}
            variant="outline"
            className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 text-lg"
          >
            <Sparkles className="w-5 h-5 mr-2" /> No 💔
          </Button>
        </motion.div>

        {/* Response Message */}
        {response === "no" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-center text-red-600 text-lg"
          >
            😢 Oh no... my heart breaks.
          </motion.p>
        )}
      </main>

      {/* Falling animation style */}
      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

