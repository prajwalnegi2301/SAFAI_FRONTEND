import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiMail,
  TiPhone,
} from "react-icons/ti";

function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      toast.error("Please enter your name.");
      return;
    }
    if (message.trim() === "") {
      toast.error("Please enter your message.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:8000/api/v1/contact/createMessageContactUs",
        { name, message },
        { withCredentials: true }
      );
      toast.success("Message sent successfully!");
      setName("");
      setMessage("");
    } catch (error) {
      console.log("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-100 to-slate-200 pt-12 min-h-screen">
      <div className="container mx-auto pt-16 pb-10">
        <div className="flex flex-col lg:flex-row justify-around mx-10">
          <div className="text-center lg:text-left">
            <motion.div className="" whileHover={{ scale: 1.1 }}>
              {" "}
              <h1 className="text-slate-800 text-4xl mt-6 mb-4 font-semibold">
                WHAT THEY
              </h1>
            </motion.div>

            <motion.div className="" whileHover={{ scale: 1.2 }}>
              {" "}
              <h1 className="text-slate-800 text-6xl mb-10 font-bold">
                SAY FOR US
              </h1>
            </motion.div>
            <h4 className="text-slate-600 font-semibold text-lg mx-10 lg:mx-0 mt-4">
              <p>Safai is amazing</p>
            </h4>
            <h4 className="text-slate-600 font-semibold text-lg mx-10 lg:mx-0 mt-1">
              Amazing facilities, friendly workers and respectful faculty.
            </h4>
            <h4 className="text-slate-600 font-semibold text-lg mx-10 lg:mx-0 mt-1">
              Good service with friendly staff and super fast services.
            </h4>

            <div className="flex justify-center lg:justify-start">
              <h6 className="text-slate-600 font-semibold mt-4 text-lg">
                ~ our Users
              </h6>
              <h6 className="text-slate-800 font-bold mt-4 ml-2 text-lg">
                {" "}
                of Safai
              </h6>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="w-96 h-64 border border-blue-600 mr-0 lg:mr-40"></div>
            <div className="absolute bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 w-96 h-64 mt-6 mr-0 lg:mr-28">
              <div className="mx-1 my-0.5 "></div>
            </div>
          </div>
        </div>

        <div className="w-72 h-1 bg-blue-600 mx-auto mt-16 rounded-2xl"></div>
        <div className="flex justify-center mt-4 text-slate-800 text-4xl font-semibold">
          <motion.div className="" whileHover={{ scale: 1.2 }}>
            {" "}
            <h1>READY TO RELAX YOUR WORK</h1>
          </motion.div>
        </div>
        <div className="h-1 w-full bg-slate-500 mt-16"></div>

        <motion.div className="" whileHover={{ scale: 1.4 }}>
          {" "}
          <h1 className="text-4xl text-slate-800 text-center font-bold mb-8 mt-16">
            Contact Us
          </h1>
        </motion.div>

        <ToastContainer position="top-center" />
        <div className="px-4 lg:px-24">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-slate-800 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-slate-800 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-green-600 hover:text-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-12"
            >
              Submit
            </button>
          </form>
        </div>

        <div>
          <div className="flex justify-around  mt-16">
            <TiSocialFacebook className="w-10 h-10 text-slate-600 hover:text-slate-800" />
            <TiSocialLinkedin className="w-10 h-10 text-slate-600 hover:text-slate-800" />
            <TiSocialTwitter className="w-10 h-10 text-slate-600 hover:text-slate-800" />
            <TiMail className="w-10 h-10 text-slate-600 hover:text-slate-800" />
            <TiPhone className="w-10 h-10 text-slate-600 hover:text-slate-800" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
