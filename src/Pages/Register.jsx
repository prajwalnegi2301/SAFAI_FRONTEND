import axios from "axios";
import React, { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaBirthdayCake, FaVenusMars, FaUserTag } from 'react-icons/fa';
import { Context } from "../main";
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

const Register = () => {
  const { isUserAuthenticated,token, setIsUserAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [document, setDocument] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [docAvatar, setDocAvatar] = useState("");
  const [docAvatarPreview, setDocAvatarPreview] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");
  const [role, setRole] = useState("");

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDocAvatarPreview(reader.result);
      setDocAvatar(file);
    };
  };

  const handleAvatar2 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setAvatarPreview(reader.result);
      setAvatar(file);
    };
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !document || !password || !address || !gender || !role || !avatar || !docAvatar) {
      toast.error("Please fill out all fields.");
      return;
    }
    
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("address", address);
    formData.append("role", role);
    formData.append("docAvatar", docAvatar);
    formData.append("avatar", avatar);
    formData.append("gender", gender);
    formData.append("document", document);

    try {
      const { data } = await axios.post(
        // `http://localhost:8000/api/v1/user/${token}/registerUser`,
        `http://localhost:8000/api/v1/user/registerUser`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      toast.success("User registered successfully");
      setIsUserAuthenticated(true);
      navigateTo("/profile");
      // Clear form fields after successful registration
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setGender("");
      setPassword("");
      setRole("");
      setDocument("");
    } catch (error) {
      toast.error("Failed to register user");
    }
  };

  useEffect(() => {
    if (isUserAuthenticated) {
      // navigateTo(`/profile/${token}`);
       navigateTo(`/profile/`);
      
    }
  }, [isUserAuthenticated]);

  return (
    <div className="min-h-screen py-12 flex items-center justify-center bg-slate-100">
      <ToastContainer position="top-center" />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-slate-800">Sign Up</h2>
        <form onSubmit={handleRegistration} className="space-y-6">
          {/* Document Avatar Preview and Input */}
          <div className="">
            <label htmlFor="docAvatar" className=" item-center flex justify-center cursor-pointer">
              <motion.img
                src={docAvatarPreview ? `${docAvatarPreview}` : "/docHolder.jpg"}
                alt="Document Preview"
                className="w-32 h-32 object-cover bg-blue-100 text-sm rounded-full mb-4 cursor-pointer"
                whileHover={{ scale: 1.1 }}
              />
              <input
                type="file"
                id="docAvatar"
                onChange={handleAvatar}
                className="hidden"
              />
            </label>

            {/* Avatar Preview and Input */}
            <label htmlFor="avatar" className="cursor-pointer item-center flex justify-center">
              <motion.img
                src={avatarPreview ? `${avatarPreview}` : "/avatarHolder.jpg"}
                alt="Avatar Preview"
                className="w-32 h-32 object-cover bg-blue-100 text-sm rounded-full mb-4 cursor-pointer"
                whileHover={{ scale: 1.1 }}
              />
              <input
                type="file"
                id="avatar"
                onChange={handleAvatar2}
                className="hidden"
              />
            </label>
          </div>

          {/* Name Input */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-slate-500" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 p-3 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-slate-500" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 p-3 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Phone Input */}
          <div className="relative">
            <FaPhone className="absolute left-3 top-3 text-slate-500" />
            <input
              type="tel"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full pl-10 p-3 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Address Input */}
          <div className="relative">
            <FaBirthdayCake className="absolute left-3 top-3 text-slate-500" />
            <input
              type="text"
              placeholder="Address.."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full pl-10 p-3 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Gender Select */}
          <div className="relative">
            <FaVenusMars className="absolute left-3 top-3 text-slate-500" />
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full pl-10 p-3 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Document Type Select */}
          <div className="relative">
            <FaUserTag className="absolute left-3 top-3 text-slate-500" />
            <select
              value={document}
              onChange={(e) => setDocument(e.target.value)}
              className="w-full pl-10 p-3 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Document </option>
              <option value="License">License</option>
              <option value="AadharCard">Aadhar Card</option>
              <option value="PanCard">Pan Card</option>
              <option value="VoterID">Voter ID</option>
            </select>
          </div>

          {/* Password Input */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-slate-500" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 p-3 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Role Select */}
          <div className="relative">
            <FaUserTag className="absolute left-3 top-3 text-slate-500" />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full pl-10 p-3 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Role</option>
              <option value="User">User</option>
            </select>
          </div>

          {/* Register Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
            >
              Register
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="flex justify-center mt-4">
          <p className="mb-0">Already Registered?</p>
          <Link to="/login" className="text-blue-600 hover:underline ml-1">
            Login Now
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
