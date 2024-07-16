// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Context } from "../main";
// import { toast } from "react-toastify";

// const WorkerDetail = () => {
//   const { id } = useParams();
//   const [worker, setWorker] = useState(null);
//   const {isUserAuthenticated,setIsUserAuthenticated} = useContext(Context);

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

//   const bookWorker=async(e)=>{
//     e.preventDefault();
//     toast.success("Worker Booked");

//   }

//   return (
//     <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center">
//       <div className="bg-white shadow-lg my-20 rounded-lg p-8 w-full max-w-2xl">
//         <h1 className="text-3xl font-bold mb-6 text-center">{worker.name}</h1>
//         <div className="flex flex-col items-center mb-6">
//           <img
//             src={
//               worker.avatar && worker.avatar.url
//                 ? worker.avatar.url
//                 : "default-image-url"
//             }
//             alt="Profile Image"
//             className="h-48 w-48 object-cover shadow-xl rounded-full"
//           />

//           <img
//             src={
//               worker.docAvatar && worker.docAvatar.url
//                 ? worker.docAvatar.url
//                 : "default-image-url"
//             }
//             alt="Profile Image"
//             className="h-48 w-48 object-cover shadow-xl rounded-full"
//           />
//         </div>
//         <div className="text-left">
//           <p className="text-lg">
//             <strong>Gender:</strong> {worker.gender}
//           </p>
//           <p className="text-lg">
//             <strong>Rent:</strong> {worker.salary}
//           </p>
//           <p className="text-lg">
//             <strong>Available:</strong> {worker.available}
//           </p>
//           <p className="text-lg">
//             <strong>Occupation:</strong> {worker.occupation}
//           </p>
//           <p className="text-lg">
//             <strong>Phone:</strong> {worker.phone}
//           </p>
//           <p className="text-lg">
//             <strong>Document:</strong> {worker.document}
//           </p>
//         </div>
//       </div>

//       {isUserAuthenticated &&  <Link to={`/feedback/${id}`}>
//                       {" "}
//                       <button className="bg-slate-800 hover:bg-orange-500 text-white font-bold py-2 px-4 mb-8 rounded mt-2">
//                         Add Feedback For Worker
//                       </button>
//                     </Link> }

//                     {!isUserAuthenticated &&

//                       <div>User must be Login to book worker</div>

//            }

//                     {isUserAuthenticated &&

//                       <button onClick={bookWorker} className="bg-slate-800 hover:bg-orange-500 text-white font-bold py-2 px-4 mb-8 rounded mt-2">
//                         Book Worker

//                       </button>
//                      }

//     </div>
//   );
// };


// export default WorkerDetail;
import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Context, ContextW } from "../main";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const WorkerDetail = () => {
  const { id } = useParams();
  const [worker, setWorker] = useState(null);
  const [feedbacks, setFeedbacks] = useState("");
  const { isUserAuthenticated } = useContext(Context);
  const { isWorkerAuthenticated } = useContext(ContextW);

  useEffect(() => {
    const fetchWorker = async () => {
      try {
        const { data } = await axios.get(
          // `http://localhost:8000/api/v1/user/${token}//getParticularWorker/${id}`,
          `http://localhost:8000/api/v1/user/getParticularWorker/${id}`,
          {
            withCredentials: true,
          }
        );
        setWorker(data.worker);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWorker();
  }, [id]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/api/v1/feedback/getFeedbacks/${id}`,
          {
            withCredentials: true,
          }
        );
        setFeedbacks(data.feedbacks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFeedbacks();
  }, [id]);

  if (!worker) {
    return <div>Loading...</div>;
  }

  const bookWorker = async (e) => {
    e.preventDefault();
    toast.done("Worker Booked");
  };

  return (
    <motion.div
      className="min-h-screen bg-slate-100 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white shadow-lg mt-20 mb-2 rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-2 text-center text-blue-700">
          {worker.name}
        </h1>
        <div className="flex flex-col items-center mb-6 space-y-4">
          <img
            src={
              worker.avatar && worker.avatar.url
                ? worker.avatar.url
                : "default-image-url"
            }
            alt="Profile"
            className="h-48 w-48 object-cover shadow-xl rounded-full"
          />
          {/* <img
            src={
              worker.docAvatar && worker.docAvatar.url
                ? worker.docAvatar.url
                : "default-image-url"
            }
            alt="Document"
            className="h-48 w-48 object-cover shadow-xl rounded-full"
          /> */}
        </div>
        <div className="text-left space-y-2">
          <p className="text-lg text-slate-700">
            <strong>Gender:</strong> {worker.gender}
          </p>
          <p className="text-lg text-slate-700">
            <strong>Rent:</strong> {worker.salary}
          </p>
          <p className="text-lg text-slate-700">
            <strong>Available:</strong> {worker.available}
          </p>
          <p className="text-lg text-slate-700">
            <strong>Occupation:</strong> {worker.occupation}
          </p>
          <p className="text-lg text-slate-700">
            <strong>Phone:</strong> {worker.phone}
          </p>
          <p className="text-lg text-slate-700">
            <strong>Document:</strong> {worker.document}
          </p>
        </div>
      </div>

      {isUserAuthenticated ? (
        <>
          <button
            onClick={bookWorker}
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 mb-4 rounded mt-2 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Book Worker
          </button>
          <div>
            <div className="py-16 bg-slate-50 text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">
                Client Feedbacks
              </h2>
              {feedbacks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {feedbacks.map((feedback) => (
                    <div
                      key={feedback._id}
                      className="bg-white shadow-md rounded-lg p-6"
                    >
                      <h3 className="text-xl font-bold text-slate-800">
                        {feedback.userName}
                      </h3>
                      <p className="mt-2 text-slate-600">{feedback.review}</p>
                      <div className="flex items-center mt-2">
                        {[...Array(parseInt(feedback.rating))].map((_, i) => (
                          <FaStar key={i} className="text-yellow-500" />
                        ))}
                      </div>
                      <p className="text-sm text-slate-400 mt-2">
                        {new Date(feedback.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xl text-slate-600">No feedback available.</p>
              )}
            </div>

            {/* <div className="py-16 bg-slate-50 text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">
                Client Feedbacks
              </h2>
              {feedbacks.length > 0 ? (
                <div className="flex flex-col space-y-8">
                  {feedbacks.map((feedback) => (
                    <div
                      key={feedback._id}
                      className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
                    >
                      <h3 className="text-xl font-bold text-slate-800">
                        {feedback.userName}
                      </h3>
                      <p className="mt-2 text-slate-600">{feedback.review}</p>
                      <div className="flex items-center mt-2">
                        {[...Array(parseInt(feedback.rating))].map((_, i) => (
                          <FaStar key={i} className="text-yellow-500" />
                        ))}
                      </div>
                      <p className="text-sm text-slate-400 mt-2">
                        {new Date(feedback.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xl text-slate-600">No feedback available.</p>
              )}
            </div> */}
          </div>
          <Link to={`/feedback/${id}`}>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 mb-8 rounded mt-2 transition duration-300 ease-in-out transform hover:scale-105">
              Add Feedback For Worker
            </button>
          </Link>
        </>
      ) : (
        <div className="text-center text-red-500 text-xl font-bold">
          User must have profile to book worker
        </div>
      )}

      {isWorkerAuthenticated && (<div className="py-16 bg-slate-50 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">
          Client Feedbacks
        </h2>
        {feedbacks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {feedbacks.map((feedback) => (
              <div
                key={feedback._id}
                className="bg-white shadow-md rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-slate-800">
                  {feedback.userName}
                </h3>
                <p className="mt-2 text-slate-600">{feedback.review}</p>
                <div className="flex items-center mt-2">
                  {[...Array(parseInt(feedback.rating))].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  {new Date(feedback.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xl text-slate-600">No feedback available.</p>
        )}
      </div>)}
    </motion.div>
  );
};

export default WorkerDetail;
