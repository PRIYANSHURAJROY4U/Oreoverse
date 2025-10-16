// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import {
//   ArrowLeft,
//   Heart,
//   Share2,
//   BookOpen,
//   Calendar,
//   MessageCircle,
// } from "lucide-react";

// import { Badge } from "@/components/ui/badge";

// // import Navbar from "@/components/Navbar";
// // import { Button } from "@/components/ui/button";
// // import { Badge } from "@/components/ui/badge";

// import Navbar from "../../src/components/Navbar";
// import Button from "../../src/components/ui/Button";
// import Card from "../../src/components/ui/Card";

// export default function PoemPage() {
//   const params = useParams();
//   const id = params?.id;

//   // Mock poem data (replace with API call or DB)
//   const poem = {
//     id: id,
//     title: "Midnight Thoughts",
//     content: `Like stars that dance in velvet skies,
// Your words illuminate the night,
// Each whisper carries ancient sighs,
// Of dreams that shimmer, pure and bright.

// In shadows deep where silence dwells,
// My heart finds solace in your voice,
// Like distant, magical temple bells,
// That make my weary soul rejoice.

// The moon above, a silver coin,
// Reflects the beauty of your grace,
// Where earth and heaven gently join,
// I see the wonder in your face.

// So let us dance beneath the stars,
// And write our story in the sand,
// Beyond the reach of earthly scars,
// Together, heart and soul and hand.`,
//     date: "December 13, 2024",
//     mood: "dreamy",
//     likes: 47,
//     author: "Oreo",
//   };

//   const getMoodColor = (mood: string) => {
//     const colors: Record<string, string> = {
//       dreamy: "bg-purple-100 text-purple-800 border-purple-200",
//       romantic: "bg-pink-100 text-pink-800 border-pink-200",
//       whimsical: "bg-yellow-100 text-yellow-800 border-yellow-200",
//       ethereal: "bg-indigo-100 text-indigo-800 border-indigo-200",
//       magical: "bg-emerald-100 text-emerald-800 border-emerald-200",
//       mystical: "bg-slate-100 text-slate-800 border-slate-200",
//     };
//     return colors[mood] || "bg-gray-100 text-gray-800";
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
//       <Navbar />

//       <div className="max-w-4xl mx-auto px-4 py-12">
//         {/* Back Button */}
//         <Link
//           href="/"
//           className="inline-flex items-center text-slate-600 hover:text-purple-600 transition-colors mb-8"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back to Poetry Collection
//         </Link>

//         {/* Poem Header */}
//         <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-purple-100 p-8 mb-8">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
//             <div className="mb-4 md:mb-0">
//               <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">
//                 {poem.title}
//               </h1>
//               <div className="flex items-center space-x-4 text-slate-600">
//                 <div className="flex items-center">
//                   <Calendar className="w-4 h-4 mr-1" />
//                   <span>{poem.date}</span>
//                 </div>
//                 <span>by {poem.author}</span>
//               </div>
//             </div>
//             <div className="flex items-center space-x-3">
//               <Badge variant="outline" className={getMoodColor(poem.mood)}>
//                 {poem.mood}
//               </Badge>
//               <div className="flex items-center space-x-1 text-slate-500">
//                 <Heart className="w-5 h-5" />
//                 <span>{poem.likes}</span>
//               </div>
//             </div>
//           </div>

//           {/* Poem Content */}
//           <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
//             <div className="prose prose-lg max-w-none">
//               <div className="text-slate-700 leading-relaxed whitespace-pre-line font-serif text-lg">
//                 {poem.content}
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 mt-8">
//             <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
//               <Heart className="w-4 h-4 mr-2" />
//               Like This Poem
//             </Button>
//             <Button
//               variant="outline"
//               className="border-purple-300 text-purple-600 hover:bg-purple-50 bg-transparent"
//             >
//               <Share2 className="w-4 h-4 mr-2" />
//               Share
//             </Button>
//             <Link href="/">
//               <Button
//                 variant="outline"
//                 className="border-slate-300 text-slate-600 hover:bg-slate-50 bg-transparent"
//               >
//                 <BookOpen className="w-4 h-4 mr-2" />
//                 Read More Poems
//               </Button>
//             </Link>
//           </div>
//         </div>

//         {/* Comments Section */}
//         <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-purple-100 p-8">
//           <h3 className="text-2xl font-bold text-slate-800 mb-6">
//             Reader Comments
//           </h3>
//           <div className="text-center py-12 text-slate-500">
//             <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
//             <p>
//               Comments section coming soon! Share your thoughts about this
//               beautiful poem.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import {
//   ArrowLeft,
//   Heart,
//   Share2,
//   BookOpen,
//   Calendar,
//   MessageCircle,
// } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// // import Navbar from "@/components/Navbar";
// // import Button from "@/components/ui/Button";


// import Navbar from "../../src/components/Navbar";
// import Button from "../../src/components/ui/Button";
// import Card from "../../src/components/ui/Card";
// const poems = [
//   {
//     title: "Immortal I Lie",
//     author: "@oreongutan // @oftoreo",
//     content: `The moment you place me in the coffin,
// My lungs give up, my lungs give out.

// As the saddest of lullabies find their way to my heart,
// My last tear spills, my last tear dries.

// The moment you shut the door in my face,
// The dark torments, the dark consumes me.

// And lastly, as you put the final nail on my coffin,
// A part of me dies, every part of me dies.

// But I didn’t want to die
// For I was immortal. Immortal was I.

// So, the moment you place my secret chest in your lap,
// A part of me lives, a part of me tries.

// Intrigued to the core, when you open its door,
// The day eases, the day unfolds me.

// The moment you touch the smudged ink on the papers,
// I get resurrected, I breathe a sigh.

// The more you breathe my words, my muse,
// The more I live, the more I live.

// ‘Cause I never did nor shall I die
// For I am immortal. Immortal I lie.`,
//     date: "December 13, 2024",
//     mood: "dreamy",
//     likes: 47,
//   },
//   {
//     title: "When Will I Script My Own Stars?",
//     author: "@oreongutan // @oftoreo",
//     content: `On usual days, I wait for words.
// I fear the string, I fear the flow.
// But tonight, I sit in this corner,
// Cold and vulnerable,
// Witnessing the show You put on outside my window
// With Heavens as the audience,
// Crying at intervals,
// And skies that applaud periodically.

// For the narrator, ever so gifted:
// The trees take center stage
// and sing the Sapphic lyrics from my book,
// so mesmerizing,
// With leaves playing lyre,
// so gently,
// rustling against each other.

// On this unusual night,
// so cold and vulnerable,
// I sit with a pen in hand,
// longing for an answer from You,
// who wrote this play for me:
// "When will I script my own stars?"`,
//     date: "November 22, 2024",
//     mood: "romantic",
//     likes: 39,
//   },
//   {
//     title: "Pause",
//     author: "@oreongutan // @oftoreo",
//     content: `I drew the curtains,
// Turned the lights off
// To take a break.
// A pause.
// The little girl, scared
// Of fast moving trains
// Comes to a halt.
// A pause.
// I lay next to her;
// Curled up with me
// Rests next to me.
// A pause.
// I felt her heart
// Ripping in two,
// Beat madly with
// No pause.
// Eyes measured the corners
// Of the ceiling of my room
// For the last time,
// We pause.
// I looked at her,
// She looked away.
// We wished the time
// To pause.
// And I dozed off
// When she left me,
// Didn't look behind.
// Didn't pause.
// I woke up
// In a different room
// To no one.
// I pause.
// A faint red light
// Barging through the window
// It's a new stop.
// Another pause.
// I draw the curtains
// Turn the lights on
// To find her somewhere
// In the pause.
// There's a new ceiling
// New eyes,
// New curtains,
// And new skies.
// But not the little girl
// Who'd hold my hand
// Under the same old skies,
// Who'd look me,
// Softly,
// In the same old eyes
// And ask,
// "Can we pause?"`,
//     date: "October 10, 2024",
//     mood: "whimsical",
//     likes: 28,
//   },
//   {
//     title: "Low Serotonin",
//     author: "@oony.may // @oftoreo",
//     content: `Wandering through the woods on a snowy evening,
// Sugar rush with the candy sweetness,
// Parched mouth, "I need something",
// I tumble slowly upon low serotonin.
// Faded out of reality written in black and white ink,
// My veins demand the seven colors of ecstasy.
// With years of searching at its peak of madness,
// I had my feet stuck 6 inches deep in the snow
// And hands tied behind my back, "I need you".
// You make a grand appearance straight from Heaven,
// Stroke the parchment of my heart with six beautiful colors
// But taking away all the blues of the starry night.
// I don't mean to wreck your life, honey
// Nor to bind you with the earthly pleasures.
// I just wish to make my life better,
// I can beg to make you stay forever.
// Forever, here with me.
// Together we can wander through the woods every evening,
// Sugar rush with the candy sweetness,
// I'm afraid you said "I need something",
// You tumble slowly upon low serotonin.
// Yet I stroke your hair, your wings, your petals.
// Try to make you mine as you shy away.
// You now bore the sunlit future ahead
// Covered gently in your flower beds.
// You shiver and whimper, "I need it".
// Yet I suck the sap out of all our tomorrows
// And I pluck and burn our flowers
// Knowing not how exactly to stop the sorrows.
// I wreck the home till it's the final day of fall
// When the last dry leaf kills the silence beneath my foot
// And the bronze of Hell changes back to black and white.
// I'm thrown back to reality where you've left for your wonderland.
// And I,
// Wander through the woods on a snowy evening.
// My mouth misses the taste of candy,
// Parched mouth, "it's better for us, it's better for you",
// I tumble slowly upon low serotonin.`,
//     date: "September 5, 2024",
//     mood: "mystical",
//     likes: 32,
//   },
//   {
//     title: "I'll Be Back Home To You",
//     author: "@oony.may // @oftoreo",
//     content: `From the dark depths
// Of the dying city,
// Carefully dodging
// The cruel crowds,
// Through icy rainstorms
// And cruel caverns,
// I'll be back home.
// To you.

// Jumping too high
// Into the oceans,
// Bleeding blues
// Lost in the Tokyo skies,
// Like a strange familiarity
// Unfurls the yearning,
// I'll be back home.
// To you.

// Going 'round the globe
// On my rickety cart,
// Picking the best flowers
// To garland our entrance,
// With a 180 turnaround
// To just be enough,
// I'll be back home.
// To you.

// Not a brothel-spawn
// Nor a disgrace to them,
// Lighting my own way
// Like a lost kid on the streets,
// With a spark in his eyes,
// Two pennies in the pocket,
// I'll be back home.
// To you.

// Till then,
// Wait for your brave child
// And waste no tears, mother,
// 'Cause I'll be back home.
// I'll be back to you.`,
//     date: "August 18, 2024",
//     mood: "ethereal",
//     likes: 25,
//   },
//   {
//     title: "You're Cold",
//     author: "@oony.may // @oftoreo",
//     content: `"You're cold",
// I said as he brushed,
// His fingers twined with mine.
// The Sun was extra bright,
// Clement and cool: his eyes.
// My heart lost in the falsities,
// drunk on all the vows, soaks up
// The sorrow you hide in the boxes.
// Balancing the broken yoke of hope
// And what I thought was love, 
// Alice fell down the rabbit hole.
// Meteorically. 
// I knew and I knew well,
// There's no return of the fallen.
// I looked back, held out my hand
// For the last brush of your fingers,
// Though you turned your back to me,
// "Yes, I'm cold."`,
//     date: "July 7, 2024",
//     mood: "magical",
//     likes: 20,
//   },
// ];

// const getMoodColor = (mood: string) => {
//   const colors: Record<string, string> = {
//     dreamy: "bg-purple-100 text-purple-800 border-purple-200",
//     romantic: "bg-pink-100 text-pink-800 border-pink-200",
//     whimsical: "bg-yellow-100 text-yellow-800 border-yellow-200",
//     ethereal: "bg-indigo-100 text-indigo-800 border-indigo-200",
//     magical: "bg-emerald-100 text-emerald-800 border-emerald-200",
//     mystical: "bg-slate-100 text-slate-800 border-slate-200",
//   };
//   return colors[mood] || "bg-gray-100 text-gray-800";
// };

// export default function PoemPage() {
//   const params = useParams();
//   const id = Number(params?.id);
//   const poem = poems[id] || null;

//   if (!poem) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-xl text-slate-500">Poem not found.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
//       <Navbar />
//       <div className="max-w-4xl mx-auto px-4 py-12">
//         <Link
//           href="/"
//           className="inline-flex items-center text-slate-600 hover:text-purple-600 transition-colors mb-8"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back to Poetry Collection
//         </Link>
//         <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-purple-100 p-8 mb-8">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
//             <div className="mb-4 md:mb-0">
//               <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">
//                 {poem.title}
//               </h1>
//               <div className="flex items-center space-x-4 text-slate-600">
//                 <div className="flex items-center">
//                   <Calendar className="w-4 h-4 mr-1" />
//                   <span>{poem.date}</span>
//                 </div>
//                 <span>by {poem.author}</span>
//               </div>
//             </div>
//             <div className="flex items-center space-x-3">
//               <Badge variant="outline" className={getMoodColor(poem.mood)}>
//                 {poem.mood}
//               </Badge>
//               <div className="flex items-center space-x-1 text-slate-500">
//                 <Heart className="w-5 h-5" />
//                 <span>{poem.likes}</span>
//               </div>
//             </div>
//           </div>
//           <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
//             <div className="text-slate-700 leading-relaxed whitespace-pre-line font-serif text-lg">
//               {poem.content}
//             </div>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-4 mt-8">
//             <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
//               <Heart className="w-4 h-4 mr-2" />
//               Like This Poem
//             </Button>
//             <Button
//               variant="outline"
//               className="border-purple-300 text-purple-600 hover:bg-purple-50 bg-transparent"
//             >
//               <Share2 className="w-4 h-4 mr-2" />
//               Share
//             </Button>
//             <Link href="/">
//               <Button
//                 variant="outline"
//                 className="border-slate-300 text-slate-600 hover:bg-slate-50 bg-transparent"
//               >
//                 <BookOpen className="w-4 h-4 mr-2" />
//                 Read More Poems
//               </Button>
//             </Link>
//           </div>
//         </div>
//         <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-purple-100 p-8">
//           <h3 className="text-2xl font-bold text-slate-800 mb-6">
//             Reader Comments
//           </h3>
//           <div className="text-center py-12 text-slate-500">
//             <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
//             <p>
//               Comments section coming soon! Share your thoughts about this
//               beautiful poem.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client"

// import { useState } from "react"
// import { BookOpen, Heart, User } from "lucide-react"
// import Navbar from "../../src/components/Navbar"
// import Card from "../../src/components/ui/Card"

// interface Poem {
//   title: string
//   author: string
//   content: string
// }

// const PoemsPage = () => {
//   const poems: Poem[] = [
//     {
//       title: "Immortal I Lie",
//       author: "@oreongutan // @oftoreo",
//       content: `The moment you place me in the coffin,
// My lungs give up, my lungs give out.

// As the saddest of lullabies find their way to my heart,
// My last tear spills, my last tear dries.

// The moment you shut the door in my face,
// The dark torments, the dark consumes me.

// And lastly, as you put the final nail on my coffin,
// A part of me dies, every part of me dies.

// But I didn’t want to die
// For I was immortal. Immortal was I.

// So, the moment you place my secret chest in your lap,
// A part of me lives, a part of me tries.

// Intrigued to the core, when you open its door,
// The day eases, the day unfolds me.

// The moment you touch the smudged ink on the papers,
// I get resurrected, I breathe a sigh.

// The more you breathe my words, my muse,
// The more I live, the more I live.

// ‘Cause I never did nor shall I die
// For I am immortal. Immortal I lie.`
//     },
//     {
//       title: "When Will I Script My Own Stars?",
//       author: "@oreongutan // @oftoreo",
//       content: `On usual days, I wait for words.
// I fear the string, I fear the flow.
// But tonight, I sit in this corner,
// Cold and vulnerable,
// Witnessing the show You put on outside my window
// With Heavens as the audience,
// Crying at intervals,
// And skies that applaud periodically.

// For the narrator, ever so gifted:
// The trees take center stage
// and sing the Sapphic lyrics from my book,
// so mesmerizing,
// With leaves playing lyre,
// so gently,
// rustling against each other.

// On this unusual night,
// so cold and vulnerable,
// I sit with a pen in hand,
// longing for an answer from You,
// who wrote this play for me:
// "When will I script my own stars?"`
//     },
//     {
//       title: "Pause",
//       author: "@oreongutan // @oftoreo",
//       content: `I drew the curtains,
// Turned the lights off
// To take a break.
// A pause.
// The little girl, scared
// Of fast moving trains
// Comes to a halt.
// A pause.
// I lay next to her;
// Curled up with me
// Rests next to me.
// A pause.
// I felt her heart
// Ripping in two,
// Beat madly with
// No pause.
// Eyes measured the corners
// Of the ceiling of my room
// For the last time,
// We pause.
// I looked at her,
// She looked away.
// We wished the time
// To pause.
// And I dozed off
// When she left me,
// Didn't look behind.
// Didn't pause.
// I woke up
// In a different room
// To no one.
// I pause.
// A faint red light
// Barging through the window
// It's a new stop.
// Another pause.
// I draw the curtains
// Turn the lights on
// To find her somewhere
// In the pause.
// There's a new ceiling
// New eyes,
// New curtains,
// And new skies.
// But not the little girl
// Who'd hold my hand
// Under the same old skies,
// Who'd look me,
// Softly,
// In the same old eyes
// And ask,
// "Can we pause?"`
//     },
//     {
//       title: "Low Serotonin",
//       author: "@oony.may // @oftoreo",
//       content: `Wandering through the woods on a snowy evening,
// Sugar rush with the candy sweetness,
// Parched mouth, "I need something",
// I tumble slowly upon low serotonin.
// Faded out of reality written in black and white ink,
// My veins demand the seven colors of ecstasy.
// With years of searching at its peak of madness,
// I had my feet stuck 6 inches deep in the snow
// And hands tied behind my back, "I need you".
// You make a grand appearance straight from Heaven,
// Stroke the parchment of my heart with six beautiful colors
// But taking away all the blues of the starry night.
// I don't mean to wreck your life, honey
// Nor to bind you with the earthly pleasures.
// I just wish to make my life better,
// I can beg to make you stay forever.
// Forever, here with me.
// Together we can wander through the woods every evening,
// Sugar rush with the candy sweetness,
// I'm afraid you said "I need something",
// You tumble slowly upon low serotonin.
// Yet I stroke your hair, your wings, your petals.
// Try to make you mine as you shy away.
// You now bore the sunlit future ahead
// Covered gently in your flower beds.
// You shiver and whimper, "I need it".
// Yet I suck the sap out of all our tomorrows
// And I pluck and burn our flowers
// Knowing not how exactly to stop the sorrows.
// I wreck the home till it's the final day of fall
// When the last dry leaf kills the silence beneath my foot
// And the bronze of Hell changes back to black and white.
// I'm thrown back to reality where you've left for your wonderland.
// And I,
// Wander through the woods on a snowy evening.
// My mouth misses the taste of candy,
// Parched mouth, "it's better for us, it's better for you",
// I tumble slowly upon low serotonin.`
//     },
//     {
//       title: "I'll Be Back Home To You",
//       author: "@oony.may // @oftoreo",
//       content: `From the dark depths
// Of the dying city,
// Carefully dodging
// The cruel crowds,
// Through icy rainstorms
// And cruel caverns,
// I'll be back home.
// To you.

// Jumping too high
// Into the oceans,
// Bleeding blues
// Lost in the Tokyo skies,
// Like a strange familiarity
// Unfurls the yearning,
// I'll be back home.
// To you.

// Going 'round the globe
// On my rickety cart,
// Picking the best flowers
// To garland our entrance,
// With a 180 turnaround
// To just be enough,
// I'll be back home.
// To you.

// Not a brothel-spawn
// Nor a disgrace to them,
// Lighting my own way
// Like a lost kid on the streets,
// With a spark in his eyes,
// Two pennies in the pocket,
// I'll be back home.
// To you.

// Till then,
// Wait for your brave child
// And waste no tears, mother,
// 'Cause I'll be back home.
// I'll be back to you.`
//     },
//     {
//       title: "You're Cold",
//       author: "@oony.may // @oftoreo",
//       content: `"You're cold",
// I said as he brushed,
// His fingers twined with mine.
// The Sun was extra bright,
// Clement and cool: his eyes.
// My heart lost in the falsities,
// drunk on all the vows, soaks up
// The sorrow you hide in the boxes.
// Balancing the broken yoke of hope
// And what I thought was love, 
// Alice fell down the rabbit hole.
// Meteorically. 
// I knew and I knew well,
// There's no return of the fallen.
// I looked back, held out my hand
// For the last brush of your fingers,
// Though you turned your back to me,
// "Yes, I'm cold."`
//     }
//   ]

//   const [likedPoems, setLikedPoems] = useState<number[]>([])

//   const toggleLike = (index: number) => {
//     setLikedPoems((prev) =>
//       prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
//       <Navbar />

//       <div className="max-w-6xl mx-auto px-4 py-12">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="flex justify-center mb-6">
//             <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-xl">
//               <BookOpen className="w-8 h-8 text-white" />
//             </div>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//               Oreo&apos;s Poetry Collection ✨
//             </span>
//           </h1>
//           <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//             A journey through words, emotions, and timeless verses.
//           </p>
//         </div>

//         {/* Poems List */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {poems.map((poem, index) => (
//             <div
//               key={index}
//               className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
//                       <User className="w-5 h-5 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-slate-800">{poem.title}</h3>
//                       <p className="text-sm text-slate-500">{poem.author}</p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => toggleLike(index)}
//                     className={`flex items-center space-x-1 text-sm transition-colors ${
//                       likedPoems.includes(index)
//                         ? "text-pink-600"
//                         : "text-slate-500 hover:text-pink-600"
//                     }`}
//                   >
//                     <Heart
//                       className={`w-5 h-5 ${
//                         likedPoems.includes(index) ? "fill-current" : ""
//                       }`}
//                     />
//                     <span>{likedPoems.includes(index) ? "Liked" : "Like"}</span>
//                   </button>
//                 </div>
//                 <pre className="whitespace-pre-wrap text-slate-700 leading-relaxed text-sm">
//                   {poem.content}
//                 </pre>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PoemsPage

// app/page.tsx

















// "use client";


// import Navbar from "../../src/components/Navbar";
// import Button from "../../src/components/ui/Button";
// import Card from "../../src/components/ui/Card";
// import { motion } from "framer-motion";


//   const poems = [
//     {
//       title: "Immortal I Lie",
//       author: "@oreongutan // @oftoreo",
//       content: `The moment you place me in the coffin,
// My lungs give up, my lungs give out.

// As the saddest of lullabies find their way to my heart,
// My last tear spills, my last tear dries.

// The moment you shut the door in my face,
// The dark torments, the dark consumes me.

// And lastly, as you put the final nail on my coffin,
// A part of me dies, every part of me dies.

// But I didn’t want to die
// For I was immortal. Immortal was I.

// So, the moment you place my secret chest in your lap,
// A part of me lives, a part of me tries.

// Intrigued to the core, when you open its door,
// The day eases, the day unfolds me.

// The moment you touch the smudged ink on the papers,
// I get resurrected, I breathe a sigh.

// The more you breathe my words, my muse,
// The more I live, the more I live.

// ‘Cause I never did nor shall I die
// For I am immortal. Immortal I lie.`
//     },
//     {
//       title: "When Will I Script My Own Stars?",
//       author: "@oreongutan // @oftoreo",
//       content: `On usual days, I wait for words.
// I fear the string, I fear the flow.
// But tonight, I sit in this corner,
// Cold and vulnerable,
// Witnessing the show You put on outside my window
// With Heavens as the audience,
// Crying at intervals,
// And skies that applaud periodically.

// For the narrator, ever so gifted:
// The trees take center stage
// and sing the Sapphic lyrics from my book,
// so mesmerizing,
// With leaves playing lyre,
// so gently,
// rustling against each other.

// On this unusual night,
// so cold and vulnerable,
// I sit with a pen in hand,
// longing for an answer from You,
// who wrote this play for me:
// "When will I script my own stars?"`
//     },
//     {
//       title: "Pause",
//       author: "@oreongutan // @oftoreo",
//       content: `I drew the curtains,
// Turned the lights off
// To take a break.
// A pause.
// The little girl, scared
// Of fast moving trains
// Comes to a halt.
// A pause.
// I lay next to her;
// Curled up with me
// Rests next to me.
// A pause.
// I felt her heart
// Ripping in two,
// Beat madly with
// No pause.
// Eyes measured the corners
// Of the ceiling of my room
// For the last time,
// We pause.
// I looked at her,
// She looked away.
// We wished the time
// To pause.
// And I dozed off
// When she left me,
// Didn't look behind.
// Didn't pause.
// I woke up
// In a different room
// To no one.
// I pause.
// A faint red light
// Barging through the window
// It's a new stop.
// Another pause.
// I draw the curtains
// Turn the lights on
// To find her somewhere
// In the pause.
// There's a new ceiling
// New eyes,
// New curtains,
// And new skies.
// But not the little girl
// Who'd hold my hand
// Under the same old skies,
// Who'd look me,
// Softly,
// In the same old eyes
// And ask,
// "Can we pause?"`
//     },
//     {
//       title: "Low Serotonin",
//       author: "@oony.may // @oftoreo",
//       content: `Wandering through the woods on a snowy evening,
// Sugar rush with the candy sweetness,
// Parched mouth, "I need something",
// I tumble slowly upon low serotonin.
// Faded out of reality written in black and white ink,
// My veins demand the seven colors of ecstasy.
// With years of searching at its peak of madness,
// I had my feet stuck 6 inches deep in the snow
// And hands tied behind my back, "I need you".
// You make a grand appearance straight from Heaven,
// Stroke the parchment of my heart with six beautiful colors
// But taking away all the blues of the starry night.
// I don't mean to wreck your life, honey
// Nor to bind you with the earthly pleasures.
// I just wish to make my life better,
// I can beg to make you stay forever.
// Forever, here with me.
// Together we can wander through the woods every evening,
// Sugar rush with the candy sweetness,
// I'm afraid you said "I need something",
// You tumble slowly upon low serotonin.
// Yet I stroke your hair, your wings, your petals.
// Try to make you mine as you shy away.
// You now bore the sunlit future ahead
// Covered gently in your flower beds.
// You shiver and whimper, "I need it".
// Yet I suck the sap out of all our tomorrows
// And I pluck and burn our flowers
// Knowing not how exactly to stop the sorrows.
// I wreck the home till it's the final day of fall
// When the last dry leaf kills the silence beneath my foot
// And the bronze of Hell changes back to black and white.
// I'm thrown back to reality where you've left for your wonderland.
// And I,
// Wander through the woods on a snowy evening.
// My mouth misses the taste of candy,
// Parched mouth, "it's better for us, it's better for you",
// I tumble slowly upon low serotonin.`
//     },
//     {
//       title: "I'll Be Back Home To You",
//       author: "@oony.may // @oftoreo",
//       content: `From the dark depths
// Of the dying city,
// Carefully dodging
// The cruel crowds,
// Through icy rainstorms
// And cruel caverns,
// I'll be back home.
// To you.

// Jumping too high
// Into the oceans,
// Bleeding blues
// Lost in the Tokyo skies,
// Like a strange familiarity
// Unfurls the yearning,
// I'll be back home.
// To you.

// Going 'round the globe
// On my rickety cart,
// Picking the best flowers
// To garland our entrance,
// With a 180 turnaround
// To just be enough,
// I'll be back home.
// To you.

// Not a brothel-spawn
// Nor a disgrace to them,
// Lighting my own way
// Like a lost kid on the streets,
// With a spark in his eyes,
// Two pennies in the pocket,
// I'll be back home.
// To you.

// Till then,
// Wait for your brave child
// And waste no tears, mother,
// 'Cause I'll be back home.
// I'll be back to you.`
//     },
//     {
//       title: "You're Cold",
//       author: "@oony.may // @oftoreo",
//       content: `"You're cold",
// I said as he brushed,
// His fingers twined with mine.
// The Sun was extra bright,
// Clement and cool: his eyes.
// My heart lost in the falsities,
// drunk on all the vows, soaks up
// The sorrow you hide in the boxes.
// Balancing the broken yoke of hope
// And what I thought was love, 
// Alice fell down the rabbit hole.
// Meteorically. 
// I knew and I knew well,
// There's no return of the fallen.
// I looked back, held out my hand
// For the last brush of your fingers,
// Though you turned your back to me,
// "Yes, I'm cold."`
//     }
//   ];

// export default function Page() {
//   return (
//     <div className="bg-gradient-to-b from-purple-100 via-pink-50 to-yellow-50 min-h-screen flex flex-col">
//       {/* Header/Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <main className="flex-grow py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
//             Oreo's Poetry Gallery
//           </h2>

//           {/* Poems grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {poems.map((poem, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 whileHover={{ scale: 1.03 }}
//               >
//                 <div className="p-6 bg-white/80 backdrop-blur-md shadow-xl rounded-2xl border border-purple-100 hover:shadow-2xl transition duration-500">
//                   <h3 className="text-2xl font-bold mb-2 text-purple-700">
//                     {poem.title}
//                   </h3>
//                   <p className="text-sm italic mb-4 text-pink-500">
//                     by {poem.author}
//                   </p>
//                   <p className="text-gray-700 whitespace-pre-line leading-relaxed">
//                     {poem.content}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       {/* <footer className="bg-pink-400 text-white text-center py-4 mt-8">
     
//       </footer> */}
//        <footer className="bg-slate-900 text-white py-12 px-4 text-center">
//         <div className="flex justify-center items-center space-x-2 mb-4">
//           <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center">
//             <div className="w-3 h-3 bg-slate-900 rounded-full" />
//           </div>
//           <span className="text-xl font-bold">Oreo&apos;s Poetry Corner</span>
//         </div>
//         <p className="text-slate-400 mb-4">&quot;We never go out of style&quot; – just like our beautiful poetry 💜</p>
//         <p className="text-slate-500 text-sm">Made with 🤍 for the most talented poet who loves cookies &amp; cream</p>
//            {/* <p>© {new Date().getFullYear()} Oreo's Poetry. All rights reserved.</p> */}
//       </footer>
//     </div>
//   );
// }






















"use client";

import { useEffect, useState } from "react";
import Navbar from "../../src/components/Navbar";
import { motion } from "framer-motion";

type PoemType = {
  _id?: string;   
  title: string;
  content: string;
  preview?: string;
  mood?: string;
  published?: boolean;
  author?: string;
  createdAt?: string;
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";

// Existing published poems (hardcoded)
// Existing published poems (hardcoded)
const existingPoems = [
  {
    _id: "poem-1",
    title: "Immortal I Lie",
    author: "@oreongutan // @oftoreo",
    createdAt: "2024-12-13T00:00:00Z",
    content: `The moment you place me in the coffin,
My lungs give up, my lungs give out.

As the saddest of lullabies find their way to my heart,
My last tear spills, my last tear dries.

The moment you shut the door in my face,
The dark torments, the dark consumes me.

And lastly, as you put the final nail on my coffin,
A part of me dies, every part of me dies.

But I didn't want to die
For I was immortal. Immortal was I.

So, the moment you place my secret chest in your lap,
A part of me lives, a part of me tries.

Intrigued to the core, when you open its door,
The day eases, the day unfolds me.

The moment you touch the smudged ink on the papers,
I get resurrected, I breathe a sigh.

The more you breathe my words, my muse,
The more I live, the more I live.

'Cause I never did nor shall I die
For I am immortal. Immortal I lie.`,
    mood: "mystical"
  },
  {
    _id: "poem-2",
    title: "When Will I Script My Own Stars?",
    author: "@oreongutan // @oftoreo",
    createdAt: "2024-11-22T00:00:00Z",
    content: `On usual days, I wait for words.
I fear the string, I fear the flow.
But tonight, I sit in this corner,
Cold and vulnerable,
Witnessing the show You put on outside my window
With Heavens as the audience,
Crying at intervals,
And skies that applaud periodically.

For the narrator, ever so gifted:
The trees take center stage
and sing the Sapphic lyrics from my book,
so mesmerizing,
With leaves playing lyre,
so gently,
rustling against each other.

On this unusual night,
so cold and vulnerable,
I sit with a pen in hand,
longing for an answer from You,
who wrote this play for me:
"When will I script my own stars?"`,
    mood: "ethereal"
  },
  {
    _id: "poem-3",
    title: "Pause",
    author: "@oreongutan // @oftoreo",
    createdAt: "2024-10-10T00:00:00Z",
    content: `I drew the curtains,
Turned the lights off
To take a break.
A pause.
The little girl, scared
Of fast moving trains
Comes to a halt.
A pause.
I lay next to her;
Curled up with me
Rests next to me.
A pause.
I felt her heart
Ripping in two,
Beat madly with
No pause.
Eyes measured the corners
Of the ceiling of my room
For the last time,
We pause.
I looked at her,
She looked away.
We wished the time
To pause.
And I dozed off
When she left me,
Didn't look behind.
Didn't pause.
I woke up
In a different room
To no one.
I pause.
A faint red light
Barging through the window
It's a new stop.
Another pause.
I draw the curtains
Turn the lights on
To find her somewhere
In the pause.
There's a new ceiling
New eyes,
New curtains,
And new skies.
But not the little girl
Who'd hold my hand
Under the same old skies,
Who'd look me,
Softly,
In the same old eyes
And ask,
"Can we pause?"`,
    mood: "whimsical"
  },
  {
    _id: "poem-4",
    title: "Low Serotonin",
    author: "@oreongutan // @oftoreo",
    createdAt: "2024-09-05T00:00:00Z",
    content: `Wandering through the woods on a snowy evening,
Sugar rush with the candy sweetness,
Parched mouth, "I need something",
I tumble slowly upon low serotonin.
Faded out of reality written in black and white ink,
My veins demand the seven colors of ecstasy.
With years of searching at its peak of madness,
I had my feet stuck 6 inches deep in the snow
And hands tied behind my back, "I need you".
You make a grand appearance straight from Heaven,
Stroke the parchment of my heart with six beautiful colors
But taking away all the blues of the starry night.
I don't mean to wreck your life, honey
Nor to bind you with the earthly pleasures.
I just wish to make my life better,
I can beg to make you stay forever.
Forever, here with me.
Together we can wander through the woods every evening,
Sugar rush with the candy sweetness,
I'm afraid you said "I need something",
You tumble slowly upon low serotonin.
Yet I stroke your hair, your wings, your petals.
Try to make you mine as you shy away.
You now bore the sunlit future ahead
Covered gently in your flower beds.
You shiver and whimper, "I need it".
Yet I suck the sap out of all our tomorrows
And I pluck and burn our flowers
Knowing not how exactly to stop the sorrows.
I wreck the home till it's the final day of fall
When the last dry leaf kills the silence beneath my foot
And the bronze of Hell changes back to black and white.
I'm thrown back to reality where you've left for your wonderland.
And I,
Wander through the woods on a snowy evening.
My mouth misses the taste of candy,
Parched mouth, "it's better for us, it's better for you",
I tumble slowly upon low serotonin.`,
    mood: "dreamy"
  },
  {
    _id: "poem-5",
    title: "I'll Be Back Home To You",
    author: "@oreongutan // @oftoreo",
    createdAt: "2024-08-18T00:00:00Z",
    content: `From the dark depths
Of the dying city,
Carefully dodging
The cruel crowds,
Through icy rainstorms
And cruel caverns,
I'll be back home.
To you.

Jumping too high
Into the oceans,
Bleeding blues
Lost in the Tokyo skies,
Like a strange familiarity
Unfurls the yearning,
I'll be back home.
To you.

Going 'round the globe
On my rickety cart,
Picking the best flowers
To garland our entrance,
With a 180 turnaround
To just be enough,
I'll be back home.
To you.

Not a brothel-spawn
Nor a disgrace to them,
Lighting my own way
Like a lost kid on the streets,
With a spark in his eyes,
Two pennies in the pocket,
I'll be back home.
To you.

Till then,
Wait for your brave child
And waste no tears, mother,
'Cause I'll be back home.
I'll be back to you.`,
    mood: "romantic"
  },
  {
    _id: "poem-6",
    title: "You're Cold",
    author: "@oreongutan // @oftoreo",
    createdAt: "2024-07-07T00:00:00Z",
    content: `"You're cold",
I said as he brushed,
His fingers twined with mine.
The Sun was extra bright,
Clement and cool: his eyes.
My heart lost in the falsities,
drunk on all the vows, soaks up
The sorrow you hide in the boxes.
Balancing the broken yoke of hope
And what I thought was love, 
Alice fell down the rabbit hole.
Meteorically. 
I knew and I knew well,
There's no return of the fallen.
I looked back, held out my hand
For the last brush of your fingers,
Though you turned your back to me,
"Yes, I'm cold."`,
    mood: "magical"
  }
];

export default function PoemsPage() {
  const [newPoems, setNewPoems] = useState<PoemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Combine existing hardcoded poems with new ones from API
  const allPoems = [...newPoems, ...existingPoems];

  useEffect(() => {
    fetchPublishedPoems();
  }, []);

  async function fetchPublishedPoems() {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/api/poems/published`);
      if (!res.ok) {
        // If API fails, just show existing poems
        setLoading(false);
        return;
      }
      const data = await res.json();
      setNewPoems(data);
    } catch (err) {
      setError(null); // Don't show error, just use existing poems
      console.error('Error fetching poems:', err);
    } finally {
      setLoading(false);
    }
  }

  const getMoodColor = (mood: string = 'dreamy') => {
    const colors = {
      dreamy: 'from-purple-400 to-purple-600',
      romantic: 'from-pink-400 to-pink-600',
      whimsical: 'from-yellow-400 to-yellow-600',
      ethereal: 'from-indigo-400 to-indigo-600',
      magical: 'from-emerald-400 to-emerald-600',
      mystical: 'from-slate-400 to-slate-600',
    };
    return colors[mood as keyof typeof colors] || colors.dreamy;
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-b from-purple-100 via-pink-50 to-yellow-50 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-xl text-purple-600">Loading beautiful poetry...</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-purple-100 via-pink-50 to-yellow-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            Oreo's Poetry Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPoems.map((poem, index) => (
              <motion.div
                key={poem._id || `${poem.title}-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="p-6 bg-white/80 backdrop-blur-md shadow-xl rounded-2xl border border-purple-100 hover:shadow-2xl transition duration-500 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-purple-700">
                      {poem.title}
                    </h3>
                    {poem.mood && (
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getMoodColor(poem.mood)}`}>
                        {poem.mood}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm italic mb-4 text-pink-500">
                    by {poem.author || '@oreongutan // @oftoreo'}
                  </p>
                  
                  {poem.createdAt && (
                    <p className="text-xs text-gray-400 mb-4">
                      {new Date(poem.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  )}
                  
                  <div className="flex-grow">
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {poem.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-12 px-4 text-center">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-slate-900 rounded-full" />
          </div>
          <span className="text-xl font-bold">Oreo's Poetry Corner</span>
        </div>
        <p className="text-slate-400 mb-4">"We never go out of style" – just like our beautiful poetry 💜</p>
        <p className="text-slate-500 text-sm">Made with 🤍 for the most talented poet who loves cookies & cream</p>
      </footer>
    </div>
  );
}









//  added subscribing button
