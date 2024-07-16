// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { FaBirthdayCake, FaVenusMars } from "react-icons/fa";

// const FeedbackForm = () => {
//   const { id } = useParams();
//   const [worker, setWorker] = useState(null);
//   const [review, setReview] = useState("");
//   const [rating, setRating] = useState(0);
 

//   useEffect(() => {
//     const fetchWorker = async () => {
//       try {
//         const { data } = await axios.get(
//           `http://localhost:8000/api/v1/user/getParticularWorker/${id}`
//         );
//         setWorker(data.worker);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchWorker();
//   }, []);

//   if (!worker) {
//     return <div>Loading...</div>;
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         `http://localhost:8000/api/v1/feedback/createFeedback/${worker._id}`,
//         {
//           rating,
//           review,
          
//         },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       toast.success("Feddback submitted");
//     } catch (error) {
//       console.log(error);
//       toast.error("Error submitting feedback");
//     }
//   };
  

//   return (
//     <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center">
//       <div className="bg-white shadow-lg my-20 rounded-lg p-8 w-full max-w-2xl">
//         <form>
//           <h2 className="text-2xl font-bold mb-4">
//             Leave a Feedback for {""}
//             {worker.name}
        
//           </h2>
//           <div className="flex flex-col mb-4"></div>

//           <div className="relative">
//             <FaVenusMars className="absolute left-3 top-3 text-slate-500" />
//             <select
//               value={rating}
//               onChange={(e) => setRating(e.target.value)}
//               className="w-full pl-10 p-3 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
//             >
//               <option value="">Select Rating</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="5">5</option>
//             </select>
//           </div>

//           <div className="relative">
//             <FaBirthdayCake className="absolute left-3 top-3 text-slate-500" />
//             <input
//               type="text"
//               placeholder="Review"
//               value={review}
//               onChange={(e) => setReview(e.target.value)}
//               className="w-full pl-10 p-3 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>


//           <button on onClick={handleSubmit}>Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FeedbackForm;


import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FaStar, FaRegCommentDots } from "react-icons/fa";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";

const FeedbackForm = () => {

  const{ isUserAuthenticated, setIsUserAuthenticated} = useContext(Context);
  const { id } = useParams();
  const [worker, setWorker] = useState(null);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchWorker = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/api/v1/user/getParticularWorker/${id}`
        );
        setWorker(data.worker);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWorker();
  }, [id]);

  if (!worker) {
    return <div>Loading...</div>;
  }

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://localhost:8000/api/v1/feedback/createFeedback/${worker._id}`,
        {
          rating,
          review,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success("Feedback submitted");
      setRating(0);
      setReview("");
    } catch (error) {
      console.log(error);
      toast.error("Error submitting feedback");
    }
  };
  // const navigateTo = useNavigate();

  
  // useEffect(() => {
  //   if(!isUserAuthenticated){
  //     navigateTo("/login");
  //     // toast.("User must login to submit feedback for worker")
      
  //   }
  // }, [])
  

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Leave a Feedback for: - {worker.name}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <FaStar className="absolute left-3 top-3 text-slate-500" />
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full pl-10 p-3 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Rating</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>

          <div className="relative mb-6">
            <FaRegCommentDots className="absolute left-3 top-3 text-slate-500" />
            <textarea
              placeholder="Write your review here"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full pl-10 p-3 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
