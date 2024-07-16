import React from "react";
import { Link } from "react-router-dom";
import {
  FaHandshake,
  FaCheckCircle,
  FaStar,
  FaMoneyBillWave,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect } from "react";
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

const HomePage = () => {
 


//   const getToken = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/api/v1/visitor/getToken');
//       const { token } = response.data.visitor;
//       localStorage.setItem('token', token);
//       console.log('Token generated and stored:', token);
//     } catch (error) {
//       console.error('Error generating token:', error);
//     }
//   };

//   const uniqueId = generateUniqueId();
//   generateToken(uniqueId);
  
// }, []);

  return (
    <div className=" min-h-screen bg-slate-100">
      <header className="text-center py-16">
        <h1 className="text-4xl font-bold text-slate-800">
          Make yourself at home happy{" "}
          <span className="text-blue-500">By giving your Work</span> to us
        </h1>
        <p className="mt-4 text-slate-600">Simple - unique - friendly</p>
        <p className="mt-4 text-slate-600">
          At our agency, we believe in building strong relationships with our
          clients. Understanding your needs, we can help you get work done
          faster.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link to="/servicesPage">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
              Find Services
            </button>
          </Link>

          <div className="">
            <Link to="/contact">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full mr-4 hover:bg-blue-700 transition duration-300">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
        <p className="mt-4 text-slate-600">
          ⭐ Rated 4.8/5 from over 500+ reviews.
        </p>
      </header>
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">
          What Our Clients Say
        </h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-slate-50 shadow-md rounded-lg p-6 max-w-xs hover:bg-white transition duration-300">
            <FaStar className="text-4xl text-yellow-500 mx-auto mb-4" />
            <p className="text-lg italic text-slate-600">
              "Amazing service! Highly recommend to anyone looking for top-notch
              quality and professionalism."
            </p>
            <h3 className="text-xl font-bold text-slate-800 mt-4">- Emily R.</h3>
          </div>
          <div className="bg-slate-50 shadow-md rounded-lg p-6 max-w-xs hover:bg-white transition duration-300">
            <FaStar className="text-4xl text-yellow-500 mx-auto mb-4" />
            <p className="text-lg italic text-slate-600">
              "The team was efficient and very helpful throughout the entire
              process."
            </p>
            <h3 className="text-xl font-bold text-slate-800 mt-4">
              - Michael S.
            </h3>
          </div>
          <div className="bg-slate-50 shadow-md rounded-lg p-6 max-w-xs hover:bg-white transition duration-300">
            <FaStar className="text-4xl text-yellow-500 mx-auto mb-4" />
            <p className="text-lg italic text-slate-600">
              "Great experience! Will definitely use their services again."
            </p>
            <h3 className="text-xl font-bold text-slate-800 mt-4">- Sarah W.</h3>
          </div>
        </div>
      </section>
      {/* <section className="flex justify-center  py-8">
        <img
          src="/worker1.avif"
          alt="Hotel Room"
          className="w-full max-w-3xl rounded-lg shadow-md"
        />
      </section> */}

      <h2 className="text-2xl text-center font-bold pb-8 my-4 text-slate-800">
        Solutions for Your Problems
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center py-12">
        <div className="bg-white rounded-lg shadow-md m-4 w-full md:w-1/2 p-6">
          <h3 className="text-xl font-bold text-slate-800 flex items-center">
            <FaHandshake className="mr-2" /> Cleaning Purpose
          </h3>
          <p className="mb-4 text-slate-700">
            Simple and intuitive booking process that saves you time and effort.
            Hassle-free, secure payment system to ensure smooth transactions.
            Sign up for free and create your profile. All our workers are
            thoroughly vetted to ensure quality. Experience the ease and
            efficiency of hiring online. Make payments securely once you're
            satisfied with the work. 24/7 customer support to assist you at any
            stage of the hiring process. Receive bids from qualified
            professionals who are eager to work on your project. Review
            profiles, compare proposals, and select the worker that best meets
            your needs.
          </p>
        </div>
        <div className="m-4 w-full md:w-1/2">
          <motion.div whileHover={{ scale: 1.05 }}>
            <img
              src="worker2.avif"
              alt="worker image"
              className="w-full rounded-lg shadow-md object-cover h-80"
            />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-center py-12">
        <div className="bg-white rounded-lg shadow-md m-4 w-full md:w-1/2 p-6">
          <h3 className="text-xl font-bold text-slate-800 flex items-center">
            <FaCheckCircle className="mr-2" /> Verified Workers with Us
          </h3>
          <p className="mb-4 text-slate-700">
            We believe in fostering a strong sense of community and support
            among our team and clients. Our processes are designed to maximize
            efficiency and deliver results promptly. We offer the best value for
            your investment with our competitive pricing and high-quality
            service. You can easily schedule appointments that fit your timeline
            and needs. Our booking system is simple and secure. Enjoy peace of
            mind knowing your job is in capable hands. Our workers are dedicated
            to delivering top-notch service.
          </p>
        </div>
        <div className="m-4 w-full md:w-1/2">
          <motion.div whileHover={{ scale: 1.05 }}>
            <img
              src="worker3.avif"
              alt="apartment"
              className="w-full rounded-lg shadow-md object-cover h-80"
            />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center py-12">
        <div className="bg-white rounded-lg shadow-md m-4 w-full md:w-1/2 p-6">
          <h3 className="text-xl font-bold text-slate-800 flex items-center">
            <FaMoneyBillWave className="mr-2" /> No Extra Charges
          </h3>
          <p className="mb-4 text-slate-700">
            We believe in transparent pricing with no hidden fees. When you book
            a worker through our platform, you can rest assured knowing that the
            price you see is the price you pay. We prioritize clarity and
            honesty in all our transactions, ensuring that you can budget
            confidently without any surprises. Clear Pricing: Each service
            listing includes upfront pricing details, so you know exactly what
            to expect before booking. No Hidden Fees: We do not charge
            additional fees for booking or processing. The price you see is
            inclusive of taxes and service charges. Peace of Mind: Focus on the
            job at hand without worrying about unexpected costs creeping up
            later.
          </p>
        </div>
        <div className="m-4 w-full md:w-1/2">
          <motion.div whileHover={{ scale: 1.05 }}>
            <img
              src="worker4.avif"
              alt="apartment"
              className="w-full rounded-lg shadow-md object-cover h-80"
            />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-center py-12">
        <div className="bg-white rounded-lg shadow-md m-4 w-full md:w-1/2 p-6">
          <h3 className="text-xl font-bold text-slate-800 flex items-center">
            <FaCheckCircle className="mr-2" /> Experienced Team
          </h3>
          <p className="mb-4 text-slate-700">
            Our team consists of highly skilled professionals with years of
            experience in the industry. We ensure that your projects are
            completed on time, every time. Get the best value for your money
            with our affordable services. We begin with understanding your needs
            and creating a tailored plan. Our team executes the plan with
            precision, ensuring timely delivery. We review and ensure the
            highest quality standards are met. Schedule appointments that work
            for you, whether it's a one-time service or ongoing maintenance.
          </p>
        </div>
        <div className="m-4 w-full md:w-1/2">
          <motion.div whileHover={{ scale: 1.05 }}>
            <img
              src="worker5.avif"
              alt="apartment"
              className="w-full rounded-lg shadow-md object-cover h-80"
            />
          </motion.div>
        </div>
      </div>
      <section className="text-center py-16 ">
        <h2 className="text-2xl font-bold text-slate-800">
          Trusted by Top Brands
        </h2>
        <div className="flex justify-center mt-8 space-x-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQB9xU0yx4cBpIL35YYD_DjQMN-fI7PfcghA&s"
            alt="Nextdoor"
            className="h-12"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUy9w6cty0srN4K1Iwm_bYrGoW6XoftOOI-FM4k1dTNt7NBhlwRFVIiJf8-O4yoOdXhPw&usqp=CAU"
            alt="Slack"
            className="h-12"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbCTgwbKYBOfZX5aiqvsVg-Z6eMiYAK07amg&s"
            alt="Amazon"
            className="h-12"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dR8VjDPiSdASkCnhZkOKXLT8Zs5YcOk3yQ&s"
            alt="WooCommerce"
            className="h-12"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPMqk0y4s1WttNm3g9azuIEa9h4Vj5fVJeJg&s"
            alt="Google"
            className="h-12"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
