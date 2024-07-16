import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context, ContextW } from "../main";
import axios from "axios";


const Profile = () => {
  const { isUserAuthenticated,token,setToken, setIsUserAuthenticated } = useContext(Context);
  const { isWorkerAuthenticated, setIsWorkerAuthenticated } = useContext(ContextW);
  const navigateTo = useNavigate();
  const [user, setUser] = useState("");
  const [worker, setWorker] = useState("");


  const fetchUser = async () => {
    try {
      const { data } = await axios.get(
        // `http://localhost:8000/api/v1/user/${token}/userProfile`
         `http://localhost:8000/api/v1/user/userProfile`
        , {
        withCredentials: true,
      });


      setUser(data.user);
      setIsWorkerAuthenticated(false);

    } catch (error) {

      setUser({});
      console.log(error)
    }
  };

  const fetchWorker = async () => {
    try {
      const { data } =
       await axios.get(
        // `http://localhost:8000/api/v1/user/${token}/workerProfile`
         `http://localhost:8000/api/v1/user/workerProfile`
        , {
        withCredentials: true,
      });


      setWorker(data.worker);
      setIsUserAuthenticated(false);

    } catch (error) {

      setWorker({});
    }
  };



  useEffect(() => {
    if (!isUserAuthenticated && !isWorkerAuthenticated) {
      // navigateTo(`/login/${token}`);
      navigateTo(`/login`);
    }
    else {
      if (isUserAuthenticated) {
        fetchUser();
      }
      else if (isWorkerAuthenticated) {
        fetchWorker();
      }
    }

  }, [isUserAuthenticated, isWorkerAuthenticated, setUser, setWorker])

  return (
    <div className="min-h-screen py-12 flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {isUserAuthenticated && user && (
          <div className="flex justify-center py-6 hover:bg-blue-50">
            <img
              src={
                user.avatar && user.avatar.url
                  ? user.avatar.url
                  : "default-image-url"
              }
              alt="Profile Image"
              className="h-48 w-48 object-cover shadow-xl rounded-full"
            />
          </div>
        )}
        {isWorkerAuthenticated && worker && (
          <div className="flex justify-center py-6 hover:bg-blue-50">
            <img
              src={
                worker.avatar && worker.avatar.url
                  ? worker.avatar.url
                  : "default-image-url"
              }
              alt="Profile Image"
              className="h-48 w-48 object-cover shadow-xl rounded-full"
            />
          </div>
        )}

        <div className="py-6 px-10">
          <div className="text-center text-3xl font-bold text-slate-800 mb-4">
            {user.name} {worker.name}
          </div>
          <div className="flex flex-col  text-slate-700">
            <div className="mb-2">
              <strong>Email:</strong> {user.email}{worker.email}
            </div>
            <div className="mb-2">
              <strong>Gender:</strong> {user.gender}{worker.gender}
            </div>
            <div className="mb-2">
              <strong>Document Verified:</strong> {user.document}{worker.document}
            </div>

          </div>
        </div>




        {/* <div className="flex justify-center">
          <Link
            to="/feedbackform"
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
          >
            Provide Feedback
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
