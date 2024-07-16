import React from "react";
import { motion } from "framer-motion";
import { FaClipboardCheck, FaRoute, FaRegLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-slate-100 min-h-screen">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center justify-center py-12">
        <div className="bg-white rounded-lg shadow-md m-4 w-full md:w-1/2 p-6">
          <h1 className="text-3xl font-bold mb-4">Who We Are?</h1>
          <p className="mb-4 text-slate-700">
            Welcome to <strong>Safai</strong>, the premier online platform for
            booking skilled professionals across a diverse range of industries.
            Whether you need a electrician, a mechanic, a carpenter, or a
            personal trainer, our mission is to connect you with top-rated
            experts who can meet your unique needs. We believe in making the
            process of finding and hiring professionals as seamless and
            hassle-free as possible. Our user-friendly interface, rigorous
            vetting process, and dedicated customer support ensure that you
            receive the highest quality service every time. At{" "}
            <strong>Safai</strong>, we are committed to bridging the gap between
            skilled workers and those who need their services, empowering both
            to achieve their best. Join us and experience the future of work
            today.
          </p>
        </div>
        <div className="m-4 w-full md:w-1/2">
          <motion.div whileHover={{ scale: 1.05 }}>
            <img
              src="worker1.avif"
              alt="worker"
              className="w-full rounded-lg shadow-md object-cover h-80"
            />
          </motion.div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center py-12">
        <div className="bg-white rounded-lg shadow-md m-4 w-full md:w-1/2 p-6">
          <h1 className="text-3xl font-bold mb-4">Why Choose Us?</h1>
          <p className="mb-4 text-slate-700">
            Choosing <strong>Safai</strong> means opting for reliability,
            convenience, and excellence. Our platform stands out for several
            reasons. Firstly, we prioritize quality by rigorously vetting all
            professionals to ensure they are highly skilled and trustworthy.
            Secondly, our user-friendly interface makes it easy to find and book
            the right expert for your needs, saving you time and effort.
            Thirdly, we offer a wide range of services, catering to various
            industries and requirements, so you can find everything you need in
            one place. Additionally, our customer support team is always ready
            to assist you, ensuring a smooth and satisfying experience. With{" "}
            <strong>Safai</strong>, you can have peace of mind knowing you are
            hiring the best, quickly and effortlessly. Choose us for unmatched
            service and a seamless booking experience.
          </p>
        </div>
        <div className="m-4 w-full md:w-1/2">
          <motion.div whileHover={{ scale: 1.05 }}>
            <img
              src="https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/483717698ConstructionLaborer.jpg=ws1280x960"
              alt="worker"
              className="w-full rounded-lg shadow-md object-cover h-80"
            />
          </motion.div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center justify-center py-12">
        <div className="bg-white rounded-lg shadow-md m-4 w-full md:w-1/2 p-6">
          <h1 className="text-3xl font-bold mb-4">Our Inspiration</h1>
          <p className="mb-4 text-slate-700">
            At <strong>Safai</strong>, our inspiration stems from a simple yet
            powerful idea: to make life easier by connecting people with the
            right professionals effortlessly. We understand the challenges of
            finding skilled and reliable experts, whether for home repairs,
            personal coaching, or freelance projects. This inspired us to create
            a platform that simplifies this process, saving you time and
            reducing stress. We are driven by the belief that everyone deserves
            access to high-quality services, and every professional deserves a
            chance to showcase their skills and grow their business. Our passion
            for innovation and commitment to excellence fuel our continuous
            efforts to improve and expand our offerings.
          </p>
        </div>
        <div className="m-4 w-full md:w-1/2">
          <motion.div whileHover={{ scale: 1.05 }}>
            <img
              src="worker3.avif"
              alt="worker"
              className="w-full rounded-lg shadow-md object-cover h-80"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
