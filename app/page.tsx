// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Heart,
//   Sparkles,
//   BookOpen,
//   Star,
//   MessageCircle,
//   PenTool,
//   Cookie,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import Link from "next/link";

// export default function HomePage() {
//   const router = useRouter();
//   const [logoClickCount, setLogoClickCount] = useState(0);
//   const [showSecretPopup, setShowSecretPopup] = useState(false);
//   const [crumbs, setCrumbs] = useState<{ id: number; x: number; y: number }[]>(
//     []
//   );

//   const handleLogoClick = () => {
//     const newCount = logoClickCount + 1;
//     setLogoClickCount(newCount);

//     if (newCount >= 4) {
//       setShowSecretPopup(true);
//       createCrumbs();

//       setTimeout(() => {
//         setShowSecretPopup(false);
//         setCrumbs([]);
//         router.push("/oreo-private");
//       }, 2500);
//     }

//     // reset clicks if user pauses
//     setTimeout(() => setLogoClickCount(0), 1500);
//   };

//   const createCrumbs = () => {
//     const newCrumbs = Array.from({ length: 12 }).map((_, i) => ({
//       id: i,
//       x: Math.random() * 100 - 50,
//       y: Math.random() * 100 - 50,
//     }));
//     setCrumbs(newCrumbs);
//   };

//   // Poem data (unchanged)
//   const poems = [
//     {
//       id: 1,
//       title: "Midnight Thoughts",
//       preview:
//         "Like stars that dance in velvet skies, your words illuminate the night...",
//       date: "December 13, 2024",
//       mood: "dreamy",
//       likes: 47,
//     },
//     {
//       id: 2,
//       title: "Golden Hour Dreams",
//       preview:
//         "In the space between sunset and twilight, I found poetry in your smile...",
//       date: "November 28, 2024",
//       mood: "romantic",
//       likes: 62,
//     },
//     {
//       id: 3,
//       title: "Paper Rings & Promises",
//       preview:
//         "I'd marry you with paper rings, in a world of black and white...",
//       date: "October 15, 2024",
//       mood: "whimsical",
//       likes: 89,
//     },
//     {
//       id: 4,
//       title: "Lavender Haze",
//       preview:
//         "Stained glass windows in my mind, painting memories in purple hues...",
//       date: "September 22, 2024",
//       mood: "ethereal",
//       likes: 73,
//     },
//     {
//       id: 5,
//       title: "Enchanted Moments",
//       preview:
//         "This night is sparkling, don't you let it go, like cookies and cream dreams...",
//       date: "August 30, 2024",
//       mood: "magical",
//       likes: 95,
//     },
//     {
//       id: 6,
//       title: "Folklore Whispers",
//       preview: "In the quiet of the forest, where stories come alive...",
//       date: "July 18, 2024",
//       mood: "mystical",
//       likes: 56,
//     },
//   ];

//   const getMoodColor = (mood: string) => {
//     const colors = {
//       dreamy: "bg-purple-100 text-purple-800 border-purple-200",
//       romantic: "bg-pink-100 text-pink-800 border-pink-200",
//       whimsical: "bg-yellow-100 text-yellow-800 border-yellow-200",
//       ethereal: "bg-indigo-100 text-indigo-800 border-indigo-200",
//       magical: "bg-emerald-100 text-emerald-800 border-emerald-200",
//       mystical: "bg-slate-100 text-slate-800 border-slate-200",
//     };
//     return colors[mood as keyof typeof colors] || "bg-gray-100 text-gray-800";
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative">
//       {/* SECRET POPUP */}
//       {showSecretPopup && (
//         <div className="fixed inset-0 flex items-center justify-center z-[9999] animate-fadeIn">
//           <div className="relative bg-gradient-to-br from-black via-slate-800 to-gray-700 rounded-2xl p-6 shadow-2xl text-white flex flex-col items-center animate-bounce">
//             <Cookie className="w-12 h-12 text-yellow-200 mb-3 animate-spin-slow" />
//             <p className="text-lg font-bold">🍪 Oreo Secret Unlocked!</p>
//             <p className="text-sm text-gray-300">Taking you to the vault...</p>

//             {/* Crumbs Animation */}
//             {crumbs.map((crumb) => (
//               <div
//                 key={crumb.id}
//                 className="absolute w-2 h-2 bg-yellow-300 rounded-full"
//                 style={{
//                   transform: `translate(${crumb.x}px, ${crumb.y}px)`,
//                   animation: "crumb-pop 1s ease forwards",
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* === NAVIGATION === */}
//       <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center space-x-2">
//               <div
//                 onClick={handleLogoClick}
//                 className="w-8 h-8 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full flex items-center justify-center cursor-pointer"
//               >
//                 <div className="w-3 h-3 bg-white rounded-full" />
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent">
//                 Oreo&apos;s Poetry Corner
//               </span>
//             </div>
//             <div className="flex items-center space-x-6">
//               <Link
//                 href="#poems"
//                 className="text-slate-600 hover:text-purple-600 transition-colors"
//               >
//                 Poems
//               </Link>
//               <Link
//                 href="/poem-generator"
//                 className="text-slate-600 hover:text-purple-600 transition-colors"
//               >
//                 Generator
//               </Link>
//               <Link
//                 href="/reviews"
//                 className="text-slate-600 hover:text-purple-600 transition-colors"
//               >
//                 Reviews
//               </Link>
//               <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
//                 <Heart className="w-4 h-4 mr-2" />
//                 Support
//               </Button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative overflow-hidden py-20 px-4">
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
//         <div className="relative max-w-7xl mx-auto text-center">
//           <div className="flex justify-center mb-6">
//             <div className="relative">
//               <div className="w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full flex items-center justify-center shadow-2xl">
//                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
//                   <PenTool className="w-6 h-6 text-slate-800" />
//                 </div>
//               </div>
//               <div className="absolute -top-2 -right-2">
//                 <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
//               </div>
//             </div>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-slate-800 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//               Hey it&apos;s Oreo! ✨
//             </span>
//           </h1>

//           <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed">
//             Welcome to your magical poetry sanctuary, where words dance like
//             <span className="text-purple-600 font-semibold"> Taylor Swift lyrics </span>
//             and dreams taste like
//             <span className="text-slate-800 font-semibold"> cookies &amp; cream </span> ✨
//           </p>

//           <p className="text-lg text-slate-500 mb-8 italic">
//             &quot;I&apos;ve been spending the last eight months thinking all love ever
//             does is break and burn and end...&quot; – but your poetry proves otherwise 💜
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/poems">
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
//               >
//                 <BookOpen className="w-5 h-5 mr-2" />
//                 Explore My Poems
//               </Button>
//             </Link>
//             <Link href="/poem-generator">
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3 bg-transparent"
//               >
//                 <Sparkles className="w-5 h-5 mr-2" />
//                 Generate New Poem
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Poems Gallery */}
//       <section id="poems" className="py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               <span className="bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent">
//                 Oreo&apos;s Poetry Gallery
//               </span>
//             </h2>
//             <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//               Each poem is a piece of my heart, written in the language of dreams and
//               <span className="text-purple-600 font-semibold"> Taylor Swift melodies </span> 🎵
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {poems.map((poem, index) => (
//               <Card
//                 key={poem.id}
//                 className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm ${
//                   index % 2 === 0 ? "hover:shadow-purple-200" : "hover:shadow-pink-200"
//                 }`}
//               >
//                 <CardHeader className="pb-3">
//                   <div className="flex justify-between items-start mb-3">
//                     <Badge variant="outline" className={getMoodColor(poem.mood)}>
//                       {poem.mood}
//                     </Badge>
//                     <div className="flex items-center space-x-1 text-slate-500">
//                       <Heart className="w-4 h-4" />
//                       <span className="text-sm">{poem.likes}</span>
//                     </div>
//                   </div>
//                   <h3 className="text-xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors">
//                     {poem.title}
//                   </h3>
//                   <p className="text-sm text-slate-500">{poem.date}</p>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-slate-600 leading-relaxed mb-4 italic">
//                     &quot;{poem.preview}&quot;
//                   </p>
//                   <Button
//                     variant="ghost"
//                     className="w-full group-hover:bg-purple-50 group-hover:text-purple-600"
//                   >
//                     Read Full Poem
//                     <BookOpen className="w-4 h-4 ml-2" />
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-purple-300 text-purple-600 hover:bg-purple-50 bg-transparent"
//             >
//               View All Poems ({poems.length + 12} total)
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Quick Stats */}
//       <section className="py-16 px-4 bg-gradient-to-r from-purple-600/5 to-pink-600/5">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
//             <div className="space-y-2">
//               <div className="text-3xl font-bold text-purple-600">47</div>
//               <div className="text-slate-600">Poems Written</div>
//             </div>
//             <div className="space-y-2">
//               <div className="text-3xl font-bold text-pink-600">1.2k</div>
//               <div className="text-slate-600">Hearts Received</div>
//             </div>
//             <div className="space-y-2">
//               <div className="text-3xl font-bold text-indigo-600">89</div>
//               <div className="text-slate-600">Happy Readers</div>
//             </div>
//             <div className="space-y-2">
//               <div className="text-3xl font-bold text-emerald-600">13</div>
//               <div className="text-slate-600">Taylor References</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
//             <div className="absolute inset-0 bg-black/10" />
//             <div className="relative z-10">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                 Ready to create magic together? ✨
//               </h2>
//               <p className="text-xl mb-8 opacity-90">
//                 Let&apos;s write the next chapter of your poetry journey, one verse at a
//                 time
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-50">
//                   <PenTool className="w-5 h-5 mr-2" />
//                   Start Writing
//                 </Button>
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-white text-white hover:bg-white/10 bg-transparent"
//                 >
//                   <MessageCircle className="w-5 h-5 mr-2" />
//                   Leave a Review
//                 </Button>
//               </div>
//             </div>
//             <div className="absolute top-4 right-4 opacity-20">
//               <Sparkles className="w-12 h-12" />
//             </div>
//             <div className="absolute bottom-4 left-4 opacity-20">
//               <Heart className="w-8 h-8" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-slate-900 text-white py-12 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="flex justify-center items-center space-x-2 mb-4">
//             <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center">
//               <div className="w-3 h-3 bg-slate-900 rounded-full" />
//             </div>
//             <span className="text-xl font-bold">Oreo&apos;s Poetry Corner</span>
//           </div>
//           <p className="text-slate-400 mb-4">
//             &quot;We never go out of style&quot; – just like your beautiful poetry 💜
//           </p>
//           <p className="text-slate-500 text-sm">
//             Made with 🤍 for the most talented poet who happens to love cookies &amp; cream
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Heart,
//   Sparkles,
//   BookOpen,
//   Star,
//   MessageCircle,
//   PenTool,
//   Cookie,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import Link from "next/link";

// export default function HomePage() {
//   const router = useRouter();
//   const [logoClickCount, setLogoClickCount] = useState(0);
//   const [showSecretPopup, setShowSecretPopup] = useState(false);
//   const [crumbs, setCrumbs] = useState<{ id: number; x: number; y: number }[]>(
//     []
//   );

//   const handleLogoClick = () => {
//     const newCount = logoClickCount + 1;
//     setLogoClickCount(newCount);

//     if (newCount >= 4) {
//       setShowSecretPopup(true);
//       createCrumbs();
//       setTimeout(() => {
//         setShowSecretPopup(false);
//         setCrumbs([]);
//         router.push("/oreo-private");
//       }, 2500);
//     }
//     setTimeout(() => setLogoClickCount(0), 1500);
//   };

//   const createCrumbs = () => {
//     const newCrumbs = Array.from({ length: 12 }).map((_, i) => ({
//       id: i,
//       x: Math.random() * 100 - 50,
//       y: Math.random() * 100 - 50,
//     }));
//     setCrumbs(newCrumbs);
//   };

//   const poems = [
//     { id: 1, title: "Midnight Thoughts", preview: "Like stars that dance...", date: "December 13, 2024", mood: "dreamy", likes: 47 },
//     { id: 2, title: "Golden Hour Dreams", preview: "In the space between...", date: "November 28, 2024", mood: "romantic", likes: 62 },
//     { id: 3, title: "Paper Rings & Promises", preview: "I'd marry you...", date: "October 15, 2024", mood: "whimsical", likes: 89 },
//     { id: 4, title: "Lavender Haze", preview: "Stained glass windows...", date: "September 22, 2024", mood: "ethereal", likes: 73 },
//     { id: 5, title: "Enchanted Moments", preview: "This night is sparkling...", date: "August 30, 2024", mood: "magical", likes: 95 },
//     { id: 6, title: "Folklore Whispers", preview: "In the quiet of the forest...", date: "July 18, 2024", mood: "mystical", likes: 56 },
//   ];

//   const getMoodColor = (mood: string) => {
//     const colors = {
//       dreamy: "bg-purple-100 text-purple-800 border-purple-200",
//       romantic: "bg-pink-100 text-pink-800 border-pink-200",
//       whimsical: "bg-yellow-100 text-yellow-800 border-yellow-200",
//       ethereal: "bg-indigo-100 text-indigo-800 border-indigo-200",
//       magical: "bg-emerald-100 text-emerald-800 border-emerald-200",
//       mystical: "bg-slate-100 text-slate-800 border-slate-200",
//     };
//     return colors[mood as keyof typeof colors] || "bg-gray-100 text-gray-800";
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative">
//       {/* Secret Popup */}
//       {showSecretPopup && (
//         <div className="fixed inset-0 flex items-center justify-center z-[9999]">
//           <div className="relative bg-gradient-to-br from-black via-slate-800 to-gray-700 rounded-2xl p-6 shadow-2xl text-white flex flex-col items-center animate-bounce">
//             <Cookie className="w-12 h-12 text-yellow-200 mb-3 animate-spin-slow" />
//             <p className="text-lg font-bold">🍪 Oreo Secret Unlocked!</p>
//             <p className="text-sm text-gray-300">Taking you to the vault...</p>
//             {crumbs.map((crumb) => (
//               <div key={crumb.id} className="absolute w-2 h-2 bg-yellow-300 rounded-full"
//                    style={{ transform: `translate(${crumb.x}px, ${crumb.y}px)` }} />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Navigation */}
//       <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-wrap justify-between items-center h-16 gap-4">
//             <div className="flex items-center space-x-2">
//               <div onClick={handleLogoClick} className="w-8 h-8 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full flex items-center justify-center cursor-pointer">
//                 <div className="w-3 h-3 bg-white rounded-full" />
//               </div>
//               <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent">
//                 Oreo&apos;s Poetry Corner
//               </span>
//             </div>
//             <div className="flex flex-wrap gap-4 items-center text-sm sm:text-base">
//               <Link href="#poems" className="text-slate-600 hover:text-purple-600 transition-colors">Poems</Link>
//               <Link href="/poem-generator" className="text-slate-600 hover:text-purple-600 transition-colors">Generator</Link>
//               <Link href="/reviews" className="text-slate-600 hover:text-purple-600 transition-colors">Reviews</Link>
//               <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
//                 <Heart className="w-4 h-4 mr-2" /> Support
//               </Button>
//             </div>
//           </div>
//         </div>
//       </nav>

















// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Heart,
//   Sparkles,
//   BookOpen,
//   MessageCircle,
//   PenTool,
//   Cookie,
//   Menu,
//   X,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import Link from "next/link";

// export default function HomePage() {
//   const router = useRouter();
//   const [logoClickCount, setLogoClickCount] = useState(0);
//   const [showSecretPopup, setShowSecretPopup] = useState(false);
//   const [crumbs, setCrumbs] = useState<{ id: number; x: number; y: number }[]>(
//     []
//   );
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLogoClick = () => {
//     const newCount = logoClickCount + 1;
//     setLogoClickCount(newCount);
//     if (newCount >= 4) {
//       setShowSecretPopup(true);
//       createCrumbs();
//       setTimeout(() => {
//         setShowSecretPopup(false);
//         setCrumbs([]);
//         router.push("/oreo-private");
//       }, 2500);
//     }
//     setTimeout(() => setLogoClickCount(0), 1500);
//   };

//   const createCrumbs = () => {
//     const newCrumbs = Array.from({ length: 12 }).map((_, i) => ({
//       id: i,
//       x: Math.random() * 100 - 50,
//       y: Math.random() * 100 - 50,
//     }));
//     setCrumbs(newCrumbs);
//   };

//   // const poems = [
//   //   { id: 1, title: "Midnight Thoughts", preview: "Like stars that dance...", date: "December 13, 2024", mood: "dreamy", likes: 47 },
//   //   { id: 2, title: "Golden Hour Dreams", preview: "In the space between...", date: "November 28, 2024", mood: "romantic", likes: 62 },
//   //   { id: 3, title: "Paper Rings & Promises", preview: "I'd marry you...", date: "October 15, 2024", mood: "whimsical", likes: 89 },
//   //   { id: 4, title: "Lavender Haze", preview: "Stained glass windows...", date: "September 22, 2024", mood: "ethereal", likes: 73 },
//   //   { id: 5, title: "Enchanted Moments", preview: "This night is sparkling...", date: "August 30, 2024", mood: "magical", likes: 95 },
//   //   { id: 6, title: "Folklore Whispers", preview: "In the quiet of the forest...", date: "July 18, 2024", mood: "mystical", likes: 56 },
//   // ];
//   const poems = [
//   {
//     id: 1,
//     title: "Immortal I Lie",
//     preview: "The moment you place me in the coffin, My lungs give up...",
//     date: "August 15, 2025",
//     mood: "reflective",
//     likes: 0
//   },
//   {
//     id: 2,
//     title: "When Will I Script My Own Stars?",
//     preview: "On usual days, I wait for words. I fear the string...",
//     date: "August 15, 2025",
//     mood: "contemplative",
//     likes: 0
//   },
//   {
//     id: 3,
//     title: "Pause",
//     preview: "I drew the curtains, Turned the lights off To take a break...",
//     date: "August 15, 2025",
//     mood: "melancholic",
//     likes: 0
//   },
//   {
//     id: 4,
//     title: "Low Serotonin",
//     preview: "Wandering through the woods on a snowy evening, Sugar rush...",
//     date: "August 15, 2025",
//     mood: "introspective",
//     likes: 0
//   },
//   {
//     id: 5,
//     title: "I'll Be Back Home To You",
//     preview: "From the dark depths Of the dying city, Carefully dodging...",
//     date: "August 15, 2025",
//     mood: "nostalgic",
//     likes: 0
//   },
//   {
//     id: 6,
//     title: "You're Cold",
//     preview: "\"You're cold\", I said as he brushed, His fingers twined...",
//     date: "August 15, 2025",
//     mood: "somber",
//     likes: 0
//   }
// ];


//   const getMoodColor = (mood: string) => {
//     const colors = {
//       dreamy: "bg-purple-100 text-purple-800 border-purple-200",
//       romantic: "bg-pink-100 text-pink-800 border-pink-200",
//       whimsical: "bg-yellow-100 text-yellow-800 border-yellow-200",
//       ethereal: "bg-indigo-100 text-indigo-800 border-indigo-200",
//       magical: "bg-emerald-100 text-emerald-800 border-emerald-200",
//       mystical: "bg-slate-100 text-slate-800 border-slate-200",
//     };
//     return colors[mood as keyof typeof colors] || "bg-gray-100 text-gray-800";
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative">
//       {/* Secret Popup */}
//       {showSecretPopup && (
//         <div className="fixed inset-0 flex items-center justify-center z-[9999]">
//           <div className="relative bg-gradient-to-br from-black via-slate-800 to-gray-700 rounded-2xl p-6 shadow-2xl text-white flex flex-col items-center animate-bounce">
//             <Cookie className="w-12 h-12 text-yellow-200 mb-3 animate-spin-slow" />
//             <p className="text-lg font-bold">🍪 Oreo Secret Unlocked!</p>
//             <p className="text-sm text-gray-300">Taking you to the vault...</p>
//             {crumbs.map((crumb) => (
//               <div key={crumb.id} className="absolute w-2 h-2 bg-yellow-300 rounded-full"
//                    style={{ transform: `translate(${crumb.x}px, ${crumb.y}px)` }} />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Navigation */}
//       <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
//           <div className="flex items-center space-x-2">
//             <div onClick={handleLogoClick} className="w-8 h-8 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full flex items-center justify-center cursor-pointer">
//               <div className="w-3 h-3 bg-white rounded-full" />
//             </div>
//             <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent">
//               Oreo&apos;s Poetry Corner
//             </span>
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex items-center space-x-6">
//             <Link href="/poems" className="text-slate-600 hover:text-purple-600">Poems</Link>
//             <Link href="/poem-generator" className="text-slate-600 hover:text-purple-600">Generator</Link>
//             <Link href="/reviews" className="text-slate-600 hover:text-purple-600">Reviews</Link>
//             <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
//               <Heart className="w-4 h-4 mr-2" /> Support
//             </Button>
//           </div>

//           {/* Mobile Hamburger */}
//           <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
//             {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="md:hidden bg-white border-t border-purple-100 shadow-md">
//             <div className="flex flex-col items-center space-y-4 py-4">
//               <Link onClick={() => setMenuOpen(false)} href="/poems" className="text-slate-600 hover:text-purple-600">Poems</Link>
//               <Link onClick={() => setMenuOpen(false)} href="/poem-generator" className="text-slate-600 hover:text-purple-600">Generator</Link>
//               <Link onClick={() => setMenuOpen(false)} href="/reviews" className="text-slate-600 hover:text-purple-600">Reviews</Link>
//               <Button onClick={() => setMenuOpen(false)} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
//                 <Heart className="w-4 h-4 mr-2" /> Support
//               </Button>
//             </div>
//           </div>
//         )}
//       </nav>


//       {/* Hero */}
//       <section className="relative overflow-hidden py-16 sm:py-20 px-4 text-center">
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
//         <div className="relative max-w-7xl mx-auto">
//           <div className="flex justify-center mb-6">
//             <div className="relative">
//               <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full flex items-center justify-center shadow-2xl">
//                 <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full flex items-center justify-center">
//                   <PenTool className="w-5 sm:w-6 h-5 sm:h-6 text-slate-800" />
//                 </div>
//               </div>
//               <Sparkles className="absolute -top-2 -right-2 w-6 sm:w-8 h-6 sm:h-8 text-yellow-400 animate-pulse" />
//             </div>
//           </div>
//           <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-slate-800 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//               Hey it&apos;s Oreo! ✨
//             </span>
//           </h1>
//           <p className="text-base sm:text-xl md:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto">
//             Welcome to your magical poetry sanctuary...
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/poems">
//               <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3">
//                 <BookOpen className="w-5 h-5 mr-2" /> Explore My Poems
//               </Button>
//             </Link>
//             <Link href="/poem-generator">
//               <Button size="lg" variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3">
//                 <Sparkles className="w-5 h-5 mr-2" /> Generate New Poem
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Poems Gallery */}
//       <section id="poems" className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">Oreo&apos;s Poetry Gallery</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {poems.map((poem, index) => (
//               <Card key={poem.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/70 backdrop-blur-sm">
//                 <CardHeader className="pb-3">
//                   <div className="flex justify-between items-start mb-3">
//                     <Badge variant="outline" className={getMoodColor(poem.mood)}>{poem.mood}</Badge>
//                     <div className="flex items-center text-slate-500"><Heart className="w-4 h-4" /><span className="ml-1 text-sm">{poem.likes}</span></div>
//                   </div>
//                   <h3 className="text-xl font-bold text-slate-800 group-hover:text-purple-600">{poem.title}</h3>
//                   <p className="text-sm text-slate-500">{poem.date}</p>
//                 </CardHeader>
//                 {/* <CardContent>
//                   <p className="text-slate-600 leading-relaxed mb-4 italic">&quot;{poem.preview}&quot;</p> <link href="/poems">
//                   <Button variant="ghost" className="w-full group-hover:bg-purple-50 group-hover:text-purple-600">Read Full Poem <BookOpen className="w-4 h-4 ml-2" /></Button>
//                   </link>
//                 </CardContent> */}
//                 <CardContent>
//   <p className="text-slate-600 leading-relaxed mb-4 italic">
//     &quot;{poem.preview}&quot;
//   </p>
//   <Link href="/poems" passHref legacyBehavior>
//     <a>
//       <Button
//         variant="ghost"
//         className="w-full group-hover:bg-purple-50 group-hover:text-purple-600"
//       >
//         Read Full Poem
//         <BookOpen className="w-4 h-4 ml-2" />
//       </Button>
//     </a>
//   </Link>
// </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Quick Stats */}
//       <section className="py-16 px-4 bg-gradient-to-r from-purple-600/5 to-pink-600/5">
//         <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
//           {[
//             { num: "47", label: "Poems Written", color: "text-purple-600" },
//             { num: "1.2k", label: "Hearts Received", color: "text-pink-600" },
//             { num: "89", label: "Happy Readers", color: "text-indigo-600" },
//             { num: "13", label: "Taylor References", color: "text-emerald-600" },
//           ].map((s, i) => (
//             <div key={i} className="space-y-2">
//               <div className={`text-2xl sm:text-3xl font-bold ${s.color}`}>{s.num}</div>
//               <div className="text-slate-600">{s.label}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-16 px-4">
//         <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
//           <div className="relative z-10">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to create magic together? ✨</h2>
//             <p className="text-base sm:text-xl mb-8 opacity-90">Let&apos;s write the next chapter of your poetry journey...</p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-50"><PenTool className="w-5 h-5 mr-2" /> Start Writing</Button>
//               <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10"><MessageCircle className="w-5 h-5 mr-2" /> Leave a Review</Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-slate-900 text-white py-12 px-4 text-center">
//         <div className="flex justify-center items-center space-x-2 mb-4">
//           <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center">
//             <div className="w-3 h-3 bg-slate-900 rounded-full" />
//           </div>
//           <span className="text-xl font-bold">Oreo&apos;s Poetry Corner</span>
//         </div>
//         <p className="text-slate-400 mb-4">&quot;We never go out of style&quot; – just like our beautiful poetry 💜</p>
//         <p className="text-slate-500 text-sm">Made with 🤍 for the most talented poet who loves cookies &amp; cream</p>
//       </footer>
//     </div>
//   );
// }


























"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Heart,
  Sparkles,
  BookOpen,
  MessageCircle,
  PenTool,
  Cookie,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const router = useRouter();
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [showSecretPopup, setShowSecretPopup] = useState(false);
  const [crumbs, setCrumbs] = useState<{ id: number; x: number; y: number }[]>(
    []
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    const newCount = logoClickCount + 1;
    setLogoClickCount(newCount);
    if (newCount >= 4) {
      setShowSecretPopup(true);
      createCrumbs();
      setTimeout(() => {
        setShowSecretPopup(false);
        setCrumbs([]);
        router.push("/oreo-private");
      }, 2500);
    }
    setTimeout(() => setLogoClickCount(0), 1500);
  };

  const createCrumbs = () => {
    const newCrumbs = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
    }));
    setCrumbs(newCrumbs);
  };

  const poems = [
    {
      id: 1,
      title: "Immortal I Lie",
      preview: "The moment you place me in the coffin, My lungs give up...",
      date: "August 15, 2025",
      mood: "reflective",
      likes: 0
    },
    {
      id: 2,
      title: "When Will I Script My Own Stars?",
      preview: "On usual days, I wait for words. I fear the string...",
      date: "August 15, 2025",
      mood: "contemplative",
      likes: 0
    },
    {
      id: 3,
      title: "Pause",
      preview: "I drew the curtains, Turned the lights off To take a break...",
      date: "August 15, 2025",
      mood: "melancholic",
      likes: 0
    },
    {
      id: 4,
      title: "Low Serotonin",
      preview: "Wandering through the woods on a snowy evening, Sugar rush...",
      date: "August 15, 2025",
      mood: "introspective",
      likes: 0
    },
    {
      id: 5,
      title: "I'll Be Back Home To You",
      preview: "From the dark depths Of the dying city, Carefully dodging...",
      date: "August 15, 2025",
      mood: "nostalgic",
      likes: 0
    },
    {
      id: 6,
      title: "You're Cold",
      preview: "\"You're cold\", I said as he brushed, His fingers twined...",
      date: "August 15, 2025",
      mood: "somber",
      likes: 0
    }
  ];

  const getMoodColor = (mood: string) => {
    const colors = {
      dreamy: "bg-purple-100 text-purple-800 border-purple-200",
      romantic: "bg-pink-100 text-pink-800 border-pink-200",
      whimsical: "bg-yellow-100 text-yellow-800 border-yellow-200",
      ethereal: "bg-indigo-100 text-indigo-800 border-indigo-200",
      magical: "bg-emerald-100 text-emerald-800 border-emerald-200",
      mystical: "bg-slate-100 text-slate-800 border-slate-200",
      reflective: "bg-blue-100 text-blue-800 border-blue-200",
      contemplative: "bg-teal-100 text-teal-800 border-teal-200",
      melancholic: "bg-gray-100 text-gray-800 border-gray-200",
      introspective: "bg-violet-100 text-violet-800 border-violet-200",
      nostalgic: "bg-amber-100 text-amber-800 border-amber-200",
      somber: "bg-slate-100 text-slate-800 border-slate-200",
    };
    return colors[mood as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative">
      {/* Secret Popup */}
      {showSecretPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999]">
          <div className="relative bg-gradient-to-br from-black via-slate-800 to-gray-700 rounded-2xl p-6 shadow-2xl text-white flex flex-col items-center animate-bounce">
            <Cookie className="w-12 h-12 text-yellow-200 mb-3 animate-spin-slow" />
            <p className="text-lg font-bold">🍪 Oreo Secret Unlocked!</p>
            <p className="text-sm text-gray-300">Taking you to the vault...</p>
            {crumbs.map((crumb) => (
              <div key={crumb.id} className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                   style={{ transform: `translate(${crumb.x}px, ${crumb.y}px)` }} />
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div onClick={handleLogoClick} className="w-8 h-8 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full flex items-center justify-center cursor-pointer">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent">
              Oreo&apos;s Poetry Corner
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/poems" className="text-slate-600 hover:text-purple-600">Poems</Link>
            <Link href="/poem-generator" className="text-slate-600 hover:text-purple-600">Generator</Link>
            <Link href="/reviews" className="text-slate-600 hover:text-purple-600">Reviews</Link>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2">
              <Heart className="w-4 h-4 mr-2" /> Support
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-purple-100 shadow-md">
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link onClick={() => setMenuOpen(false)} href="/poems" className="text-slate-600 hover:text-purple-600">Poems</Link>
              <Link onClick={() => setMenuOpen(false)} href="/poem-generator" className="text-slate-600 hover:text-purple-600">Generator</Link>
              <Link onClick={() => setMenuOpen(false)} href="/reviews" className="text-slate-600 hover:text-purple-600">Reviews</Link>
              <button onClick={() => setMenuOpen(false)} className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2">
                <Heart className="w-4 h-4 mr-2" /> Support
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full flex items-center justify-center">
                  <PenTool className="w-5 sm:w-6 h-5 sm:h-6 text-slate-800" />
                </div>
              </div>
              <Sparkles className="absolute -top-2 -right-2 w-6 sm:w-8 h-6 sm:h-8 text-yellow-400 animate-pulse" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hey it&apos;s Oreo! ✨
            </span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto">
            Welcome to your magical poetry sanctuary...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/poems">
              <button className="inline-flex items-center justify-center rounded-md text-lg font-medium transition-colors bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3">
                <BookOpen className="w-5 h-5 mr-2" /> Explore My Poems
              </button>
            </Link>
            <Link href="/poem-generator">
              <button className="inline-flex items-center justify-center rounded-md text-lg font-medium transition-colors border border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3">
                <Sparkles className="w-5 h-5 mr-2" /> Generate New Poem
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Poems Gallery */}
      <section id="poems" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">Oreo&apos;s Poetry Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {poems.map((poem, index) => (
              <div key={poem.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/70 backdrop-blur-sm rounded-lg border shadow-sm">
                <div className="p-6 pb-3">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${getMoodColor(poem.mood)}`}>
                      {poem.mood}
                    </span>
                    <div className="flex items-center text-slate-500">
                      <Heart className="w-4 h-4" />
                      <span className="ml-1 text-sm">{poem.likes}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-purple-600">{poem.title}</h3>
                  <p className="text-sm text-slate-500">{poem.date}</p>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-slate-600 leading-relaxed mb-4 italic">
                    &quot;{poem.preview}&quot;
                  </p>
                  <Link href="/poems">
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors w-full group-hover:bg-purple-50 group-hover:text-purple-600 hover:bg-gray-50 px-3 py-2">
                      Read Full Poem
                      <BookOpen className="w-4 h-4 ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/5 to-pink-600/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { num: "47", label: "Poems Written", color: "text-purple-600" },
            { num: "1.2k", label: "Hearts Received", color: "text-pink-600" },
            { num: "89", label: "Happy Readers", color: "text-indigo-600" },
            { num: "13", label: "Taylor References", color: "text-emerald-600" },
          ].map((s, i) => (
            <div key={i} className="space-y-2">
              <div className={`text-2xl sm:text-3xl font-bold ${s.color}`}>{s.num}</div>
              <div className="text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to create magic together? ✨</h2>
            <p className="text-base sm:text-xl mb-8 opacity-90">Let&apos;s write the next chapter of your poetry journey...</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center rounded-md text-lg font-medium transition-colors bg-white text-purple-600 hover:bg-gray-50 px-6 py-3">
                <PenTool className="w-5 h-5 mr-2" /> Start Writing
              </button>
              <button className="inline-flex items-center justify-center rounded-md text-lg font-medium transition-colors border border-white text-white hover:bg-white/10 px-6 py-3">
                <MessageCircle className="w-5 h-5 mr-2" /> Leave a Review
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 text-center">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-slate-900 rounded-full" />
          </div>
          <span className="text-xl font-bold">Oreo&apos;s Poetry Corner</span>
        </div>
        <p className="text-slate-400 mb-4">&quot;We never go out of style&quot; – just like our beautiful poetry 💜</p>
        <p className="text-slate-500 text-sm">Made with 🤍 for the most talented poet who loves cookies &amp; cream</p>
      </footer>
    </div>
  );
}