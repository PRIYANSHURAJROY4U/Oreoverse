// "use client"

// import { useState } from "react"
// import { Star, Heart, MessageCircle, Send, User } from "lucide-react"
// import Navbar from "../../src/components/Navbar"
// import Button from "../../src/components/ui/Button"
// import Card from "../../src/components/ui/Card"

// const ReviewsPage = () => {
//   const [newReview, setNewReview] = useState({
//     name: "",
//     email: "",
//     rating: 5,
//     comment: "",
//   })

//   const [reviews] = useState([
//     {
//       id: 1,
//       name: "Sarah M.",
//       rating: 5,
//       comment:
//         "Oreo's poetry is absolutely magical! Every poem touches my heart and makes me believe in the beauty of words again. Her Taylor Swift-inspired verses are pure art! ✨",
//       date: "2 days ago",
//       verified: true,
//     },
//     {
//       id: 2,
//       name: "Alex Chen",
//       rating: 5,
//       comment:
//         "I discovered this poetry collection last week and I'm completely mesmerized. The way Oreo captures emotions and paints them with words is incredible. Keep writing! 💜",
//       date: "1 week ago",
//       verified: true,
//     },
//     {
//       id: 3,
//       name: "Maya Patel",
//       rating: 5,
//       comment:
//         "As a fellow poetry lover, I can say that Oreo has a rare gift. Her poems remind me why I fell in love with poetry in the first place. The Oreo cookie theme is so creative! 🍪",
//       date: "2 weeks ago",
//       verified: false,
//     },
//     {
//       id: 4,
//       name: "Jordan K.",
//       rating: 4,
//       comment:
//         "Beautiful collection! The poems have such depth and the Taylor Swift influences are perfectly woven in. Looking forward to reading more! 🎵",
//       date: "3 weeks ago",
//       verified: true,
//     },
//     {
//       id: 5,
//       name: "Emma Rose",
//       rating: 5,
//       comment:
//         "Oreo's poetry speaks to my soul. Each poem is like a warm hug on a cold day. The generator tool is also amazing - it created a poem that made me cry happy tears! 💕",
//       date: "1 month ago",
//       verified: true,
//     },
//   ])

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // In a real app, this would submit to an API
//     console.log("New review:", newReview)
//     // Reset form
//     setNewReview({
//       name: "",
//       email: "",
//       rating: 5,
//       comment: "",
//     })
//     alert("Thank you for your review! It will be published after moderation.")
//   }

//   const renderStars = (rating, interactive = false, onRatingChange = null) => {
//     return (
//       <div className="flex space-x-1">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <Star
//             key={star}
//             className={`w-5 h-5 ${
//               star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
//             } ${interactive ? "cursor-pointer hover:text-yellow-400" : ""}`}
//             onClick={interactive ? () => onRatingChange(star) : undefined}
//           />
//         ))}
//       </div>
//     )
//   }

//   const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
//       <Navbar />

//       <div className="max-w-6xl mx-auto px-4 py-12">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="flex justify-center mb-6">
//             <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-xl">
//               <MessageCircle className="w-8 h-8 text-white" />
//             </div>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//               Reader Reviews 💜
//             </span>
//           </h1>
//           <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//             See what poetry lovers are saying about Oreo's beautiful work
//           </p>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//           <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center p-6">
//             <div className="text-3xl font-bold text-purple-600 mb-2">{reviews.length}</div>
//             <div className="text-slate-600">Total Reviews</div>
//           </Card>
//           <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center p-6">
//             <div className="flex items-center justify-center mb-2">
//               <span className="text-3xl font-bold text-yellow-500 mr-2">{averageRating.toFixed(1)}</span>
//               <Star className="w-6 h-6 text-yellow-400 fill-current" />
//             </div>
//             <div className="text-slate-600">Average Rating</div>
//           </Card>
//           <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center p-6">
//             <div className="text-3xl font-bold text-pink-600 mb-2">98%</div>
//             <div className="text-slate-600">Recommend</div>
//           </Card>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Reviews List */}
//           <div className="lg:col-span-2 space-y-6">
//             <h2 className="text-2xl font-bold text-slate-800 mb-6">What Readers Are Saying</h2>

//             {reviews.map((review) => (
//               <Card
//                 key={review.id}
//                 className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="p-6">
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="flex items-center space-x-3">
//                       <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
//                         <User className="w-5 h-5 text-white" />
//                       </div>
//                       <div>
//                         <div className="flex items-center space-x-2">
//                           <h3 className="font-semibold text-slate-800">{review.name}</h3>
//                           {review.verified && (
//                             <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verified</span>
//                           )}
//                         </div>
//                         <p className="text-sm text-slate-500">{review.date}</p>
//                       </div>
//                     </div>
//                     {renderStars(review.rating)}
//                   </div>

//                   <p className="text-slate-700 leading-relaxed">{review.comment}</p>

//                   <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-slate-100">
//                     <button className="flex items-center space-x-1 text-slate-500 hover:text-purple-600 transition-colors">
//                       <Heart className="w-4 h-4" />
//                       <span className="text-sm">Helpful</span>
//                     </button>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>

//           {/* Review Form */}
//           <div className="lg:col-span-1">
//             <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg sticky top-24">
//               <div className="p-6">
//                 <h2 className="text-xl font-bold text-slate-800 mb-6">Leave a Review</h2>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
//                       Your Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       value={newReview.name}
//                       onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
//                       className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/70"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
//                       Email (optional)
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       value={newReview.email}
//                       onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
//                       className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/70"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-slate-700 mb-2">Rating</label>
//                     {renderStars(newReview.rating, true, (rating) => setNewReview({ ...newReview, rating }))}
//                   </div>

//                   <div>
//                     <label htmlFor="comment" className="block text-sm font-medium text-slate-700 mb-2">
//                       Your Review
//                     </label>
//                     <textarea
//                       id="comment"
//                       rows={4}
//                       value={newReview.comment}
//                       onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
//                       className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/70 resize-none"
//                       placeholder="Share your thoughts about Oreo's poetry..."
//                       required
//                     />
//                   </div>

//                   <Button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
//                   >
//                     <Send className="w-4 h-4 mr-2" />
//                     Submit Review
//                   </Button>
//                 </form>

//                 <p className="text-xs text-slate-500 mt-4 text-center">
//                   Reviews are moderated and will be published after approval.
//                 </p>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ReviewsPage







// new tsx page added to backend 


"use client"

import { useState, useEffect } from "react" // Import useEffect
import { Star, Heart, MessageCircle, Send, User, Loader2 } from "lucide-react"
import Navbar from "../../src/components/Navbar"
import Button from "../../src/components/ui/Button"
import Card from "../../src/components/ui/Card"

// Define a type for our Review object to make the code safer and easier to read
interface Review {
  _id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string; // The backend provides this timestamp
  verified: boolean;
}

// Set a base URL for your API to make it easy to change later
const API_BASE_URL = "http://localhost:5000";

const ReviewsPage = () => {
  // 1. STATE MANAGEMENT: Initialize with empty array and add loading/error states
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [newReview, setNewReview] = useState({
    name: "",
    // Email is not in our backend model, so it can be removed or used just for client-side
    rating: 5,
    comment: "",
  });
  
  // A new state to manage form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. DATA FETCHING: Use useEffect to fetch reviews when the component loads
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/api/reviews`);
        
        if (!response.ok) {
          throw new Error('Something went wrong while fetching reviews.');
        }

        const data = await response.json();
        setReviews(data);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []); // The empty array [] means this effect runs only once on component mount

  // 3. API SUBMISSION: Update handleSubmit to send data to the backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReview),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit review.");
      }

      // Reset form after successful submission
      setNewReview({ name: "", rating: 5, comment: "" });
      alert("Thank you for your review! It will be published after moderation.");

    } catch (err: any) {
      alert(`Error: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  // Helper function to format dates nicely
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  const renderStars = (rating: number, interactive = false, onRatingChange: ((rating: number) => void) | null = null) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            } ${interactive ? "cursor-pointer hover:text-yellow-400 transition-transform transform hover:scale-125" : ""}`}
            onClick={interactive && onRatingChange ? () => onRatingChange(star) : undefined}
          />
        ))}
      </div>
    )
  }

  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section remains mostly the same */}
        <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-xl">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Reader Reviews 💜
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See what poetry lovers are saying about Oreo's beautiful work
            </p>
          </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">{loading ? '...' : reviews.length}</div>
            <div className="text-slate-600">Total Reviews</div>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center p-6">
            <div className="flex items-center justify-center mb-2">
              <span className="text-3xl font-bold text-yellow-500 mr-2">
                {loading ? '...' : averageRating.toFixed(1)}
              </span>
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
            </div>
            <div className="text-slate-600">Average Rating</div>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center p-6">
            <div className="text-3xl font-bold text-pink-600 mb-2">98%</div>
            <div className="text-slate-600">Recommend</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">What Readers Are Saying</h2>
            
            {/* 4. DYNAMIC RENDERING: Show loading, error, or reviews content */}
            {loading && (
              <div className="text-center py-10">
                <Loader2 className="w-8 h-8 mx-auto animate-spin text-purple-600" />
                <p className="text-slate-500 mt-2">Loading reviews...</p>
              </div>
            )}
            
            {error && <p className="text-red-500 text-center">{error}</p>}
            
            {!loading && !error && reviews.length === 0 && (
              <Card className="bg-white/70 p-6 text-center text-slate-500">
                <p>Be the first to leave a review!</p>
              </Card>
            )}

            {!loading && !error && reviews.map((review) => (
              <Card
                key={review._id} // Use _id from MongoDB
                className="bg-white/70 backdrop-blur-sm border-0 shadow-lg"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-slate-800">{review.name}</h3>
                          {review.verified && ( // This works as before, controlled by DB
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verified</span>
                          )}
                        </div>
                        <p className="text-sm text-slate-500">{formatDate(review.createdAt)}</p>
                      </div>
                    </div>
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-slate-700 leading-relaxed">{review.comment}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Review Form (largely the same, but with updated handleSubmit logic) */}
          <div className="lg:col-span-1">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg sticky top-24">
              <div className="p-6">
                <h2 className="text-xl font-bold text-slate-800 mb-6">Leave a Review</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Form fields are the same */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                      <input type="text" id="name" value={newReview.name} onChange={(e) => setNewReview({ ...newReview, name: e.target.value })} className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/70" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Rating</label>
                      {renderStars(newReview.rating, true, (rating) => setNewReview({ ...newReview, rating }))}
                    </div>
                    <div>
                      <label htmlFor="comment" className="block text-sm font-medium text-slate-700 mb-2">Your Review</label>
                      <textarea id="comment" rows={4} value={newReview.comment} onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })} className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/70" placeholder="Share your thoughts..." required />
                    </div>
                  
                  {/* Updated Button to show submitting state */}
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                        <Send className="w-4 h-4 mr-2" />
                    )}
                    {isSubmitting ? 'Submitting...' : 'Submit Review'}
                  </Button>
                </form>
                <p className="text-xs text-slate-500 mt-4 text-center">
                  Reviews are moderated and will be published after approval.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewsPage
