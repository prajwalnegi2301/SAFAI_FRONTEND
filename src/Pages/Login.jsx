import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context, ContextW } from "../main";
import axios from "axios";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const { isUserAuthenticated,token, setIsUserAuthenticated } = useContext(Context);
  const { isWorkerAuthenticated, setIsWorkerAuthenticated } = useContext(ContextW);
  const navigateTo = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const loginUser = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (email === "") {
      toast.error("Enter email");
    } else if (password === "") {
      toast.error("Enter Password");
    } else if (role === "") {
      toast.error("Select role");
    } else {
      try {
        const { data } = await axios.post(
          // `http://localhost:8000/api/v1/user/${token}/login${role}`
           `http://localhost:8000/api/v1/user/login${role}`
          , {
          email,
          password,
          role,
        }, {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        })

        if (role === "User") {
          setIsUserAuthenticated(true)
          // setIsWorkerAuthenticated(false)
          console.log(role);
        }
        else if (role === "Worker") {
          setIsWorkerAuthenticated(true)
          // setIsUserAuthenticated(false);
          console.log(role);
        }
        // {`setIs${role}Authenticated(true)`};

        setEmail("");
        setPassword("");
        setRole("");
        toast.success("Logged in successfully");

        // navigateTo(`/profile/${token}`);
        navigateTo(`/profile`);
      } catch (err) {
        toast.error("Problem logging in User");
        console.log(err);
      }
    }
  };



  useEffect(() => {
    if (isUserAuthenticated || isWorkerAuthenticated) {
      // navigateTo(`/profile/${token}`);
      navigateTo(`/profile`);
    }
  }, [isUserAuthenticated, isWorkerAuthenticated]);

  return (
    <div className="flex min-h-screen bg-slate-100 justify-center items-center">
      <ToastContainer position="top-center" />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-slate-700">
          Login
        </h2>
        <form onSubmit={loginUser}>
          <div className="mb-4">
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <motion.div
              className="flex items-center border rounded py-2 px-3"
              whileHover={{ scale: 1.02 }}
            >
              <FaEnvelope className="text-slate-500 mr-2" />
              <input
                type="email"
                id="email"
                name="email"
                className="w-full py-1 px-2 text-slate-700 leading-tight focus:outline-none"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>
          </div>
          <div className="mb-6">
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <motion.div
              className="flex items-center border rounded py-2 px-3"
              whileHover={{ scale: 1.02 }}
            >
              <FaLock className="text-slate-500 mr-2" />
              <input
                type="password"
                id="password"
                name="password"
                className="w-full py-1 px-2 text-slate-700 leading-tight focus:outline-none"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </motion.div>
          </div>
          <div className="mb-6">
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="role"
            >
              Select Role
            </label>
            <motion.div
              className="flex items-center border rounded py-2 px-3"
              whileHover={{ scale: 1.02 }}
            >
              <FaUser className="text-slate-500 mr-2" />
              <select
                id="role"
                name="role"
                className="w-full p-2 text-slate-700 leading-tight focus:outline-none"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="User">User</option>
                <option value="Worker">Worker</option>
              </select>
            </motion.div>
          </div>
          <div className="flex items-center justify-center">
            <motion.button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              whileHover={{ scale: 1.05 }}
            >
              Login
            </motion.button>
          </div>
        </form>
        <h4 className="mt-4 font-semibold text-center">
          Don't have an account?
        </h4>


        <Link
          to="/register"
          className="block text-center font-bold text-blue-600 hover:text-red-800"
        >
          Register
        </Link>
      </motion.div>

    </div>
  );
}

export default Login;
