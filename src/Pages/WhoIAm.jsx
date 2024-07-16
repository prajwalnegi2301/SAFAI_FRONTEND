import React from "react";
import { Link } from "react-router-dom";
import {
  FaHandshake,
  FaCheckCircle,
  FaUsers,
  FaClock,
  FaChartLine,
  FaShieldAlt,
  FaCogs,
  FaStar,
  FaMoneyBillWave,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-white">
      <header className="text-center py-16">
      <Link to="/servicesPage">
            <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-400 transition duration-300">
              Explore our Services
            </button>
          </Link>
      </header>

      <section className="text-center py-16 hover:bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800">
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

      <section className="text-center py-16">
        <h2 className="text-2xl font-bold pb-8 text-gray-800">
          Solutions for Your Problems
        </h2>
        <div className="flex justify-center mt-8 space-x-8">
          <div className="bg-white hover:bg-gray-50 shadow-md rounded-lg p-6 max-w-xs">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              <FaHandshake className="mr-2" /> Cleaning Purpose
            </h3>
            <p className="mt-4 text-gray-600">
              Simple and intuitive booking process that saves you time and
              effort.
              <br />
              <br />
              Hassle-free, secure payment system to ensure smooth transactions.
              <br />
              <br />
              Sign up for free and create your profile.
            </p>
          </div>
          <div className="bg-white hover:bg-gray-50 shadow-md rounded-lg p-6 max-w-xs">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              <FaCheckCircle className="mr-2" /> Verified Workers with Us
            </h3>
            <p className="mt-4 text-gray-600">
              All our workers are thoroughly vetted to ensure quality.
              <br />
              <br />
              Experience the ease and efficiency of hiring online.
              <br />
              <br />
              Make payments securely once you're satisfied with the work.
            </p>
          </div>
          <div className="bg-white hover:bg-gray-50 shadow-md rounded-lg p-6 max-w-xs">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              <FaMoneyBillWave className="mr-2" /> No Extra Charges
            </h3>
            <p className="mt-4 text-gray-600">
              24/7 customer support to assist you at any stage of the hiring
              process.
              <br />
              <br />
              Receive bids from qualified professionals who are eager to work on
              your project.
              <br />
              <br />
              Review profiles, compare proposals, and select the worker that
              best meets your needs.
            </p>
          </div>
        </div>
      </section>

      <section className=" py-16">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Why Choose Us?
        </h2>
        <div className="flex justify-center mt-8 space-x-8">
          <div className="bg-white hover:bg-gray-50 shadow-md rounded-lg p-6 max-w-xs text-center">
            <FaUsers className="text-blue-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">
             
            </h3>
            <p className="mt-4 text-gray-600">
              
            </p>
          </div>
          <div className="bg-white hover:bg-gray-50 shadow-md rounded-lg p-6 max-w-xs text-center">
            <FaClock className="text-blue-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Timely Delivery</h3>
            <p className="mt-4 text-gray-600">
              We ensure that your projects are completed on time, every time.
            </p>
          </div>
          <div className="bg-white hover:bg-gray-50 shadow-md rounded-lg p-6 max-w-xs text-center">
            <FaMoneyBillWave className="text-blue-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Cost Effective</h3>
            <p className="mt-4 text-gray-600">
              Get the best value for your money with our affordable services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Process</h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-slate-50 shadow-md rounded-lg p-6 max-w-xs hover:bg-white transition duration-300">
            <FaCogs className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">
              Step 1: Planning
            </h3>
            <p className="mt-4 text-gray-600">
              We begin with understanding your needs and creating a tailored
              plan.
            </p>
          </div>
          <div className="bg-slate-50 shadow-md rounded-lg p-6 max-w-xs hover:bg-white transition duration-300">
            <FaChartLine className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">
              Step 2: Execution
            </h3>
            <p className="mt-4 text-gray-600">
              Our team executes the plan with precision, ensuring timely
              delivery.
            </p>
          </div>
          <div className="bg-slate-50 shadow-md rounded-lg p-6 max-w-xs hover:bg-white transition duration-300">
            <FaShieldAlt className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">
              Step 3: Quality Assurance
            </h3>
            <p className="mt-4 text-gray-600">
              We review and ensure the highest quality standards are met.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          What Our Clients Say
        </h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-gray-50 shadow-md rounded-lg p-6 max-w-xs hover:bg-white transition duration-300">
            <FaStar className="text-4xl text-yellow-500 mx-auto mb-4" />
            <p className="text-lg italic text-gray-600">
              "Amazing service! Highly recommend to anyone looking for top-notch
              quality and professionalism."
            </p>
            <h3 className="text-xl font-bold text-gray-800 mt-4">- Emily R.</h3>
          </div>
          <div className="bg-gray-50 shadow-md rounded-lg p-6 max-w-xs hover:bg-white transition duration-300">
            <FaStar className="text-4xl text-yellow-500 mx-auto mb-4" />
            <p className="text-lg italic text-gray-600">
              "The team was efficient and very helpful throughout the entire
              process."
            </p>
            <h3 className="text-xl font-bold text-gray-800 mt-4">
              - Michael S.
            </h3>
          </div>
          <div className="bg-gray-50 shadow-md rounded-lg p-6 max-w-xs hover:bg-white transition duration-300">
            <FaStar className="text-4xl text-yellow-500 mx-auto mb-4" />
            <p className="text-lg italic text-gray-600">
              "Great experience! Will definitely use their services again."
            </p>
            <h3 className="text-xl font-bold text-gray-800 mt-4">- Sarah W.</h3>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Our Core Values
        </h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-white shadow-md rounded-lg p-6 max-w-xs hover:bg-gray-50 transition duration-300">
            <FaUsers className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Community</h3>
            <p className="mt-4 text-gray-600">
              We believe in fostering a strong sense of community and support
              among our team and clients.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 max-w-xs hover:bg-gray-50 transition duration-300">
            <FaClock className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Efficiency</h3>
            <p className="mt-4 text-gray-600">
              Our processes are designed to maximize efficiency and deliver
              results promptly.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 max-w-xs hover:bg-gray-50 transition duration-300">
            <FaMoneyBillWave className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Value</h3>
            <p className="mt-4 text-gray-600">
              We offer the best value for your investment with our competitive
              pricing and high-quality service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
