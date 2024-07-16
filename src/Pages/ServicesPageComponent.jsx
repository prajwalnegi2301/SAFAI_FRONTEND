import React, { useContext, useState, useEffect } from "react";
import {
  FaCut,
  FaCar,
  FaMobileAlt,
  FaBroom,
  FaShoppingCart,
  FaWrench,
  FaHammer,
  FaBolt,
  FaBaby,
} from "react-icons/fa";
import axios from "axios";
import { Context } from "../main";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    name: "Barber",
    icon: <FaCut />,
    description: "Haircut and styling services for men and women.",
  },
  {
    id: 2,
    name: "Mechanic",
    icon: <FaCar />,
    description: "Vehicle repair and maintenance services.",
  },
  {
    id: 3,
    name: "MobileRepairing",
    icon: <FaMobileAlt />,
    description: "Mobile phone repair services.",
  },
  {
    id: 4,
    name: "House Work",
    icon: <FaBroom />,
    description: "Cleaning and housekeeping services.",
  },
  {
    id: 5,
    name: "SalesMan",
    icon: <FaShoppingCart />,
    description: "Sales and retail services.",
  },
  {
    id: 6,
    name: "Plumber",
    icon: <FaWrench />,
    description: "Plumbing installation and repair services.",
  },
  {
    id: 7,
    name: "Carpenter",
    icon: <FaHammer />,
    description: "Woodwork and furniture making services.",
  },
  {
    id: 8,
    name: "Electrician",
    icon: <FaBolt />,
    description: "Electrical installation and repair services.",
  },
  {
    id: 9,
    name: "BabySitter",
    icon: <FaBaby />,
    description: "Childcare services for infants and toddlers.",
  },
  {
    id: 10,
    name: "Helper",
    icon: <FaBaby />,
    description: "Helper for shops and other household works.",
  },
  {
    id: 11,
    name: "Driver",
    icon: <FaBaby />,
    description: "A Driver to accompany you..",
  },
  {
    id: 12,
    name: "Others",
    icon: <FaBaby />,
    description: "Childcare services for infants and toddlers.",
  },
];

const ServicesPage = () => {
  const [workers, setWorkers] = useState([]);
  const {token} = useContext(Context)

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/user/getWorkers",
          {
            withCredentials: true,
          }
        );
        setWorkers(data.workers);
        console.log(workers);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWorkers();
  }, []);

  return (
    <div className="container mx-auto bg-slate-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white shadow-md rounded p-4">
            <div className="flex items-center mb-4">
              {service.icon}
              <h2 className="text-lg font-bold ml-2">{service.name}</h2>
            </div>
            <p>{service.description}</p>
            <div >
              <h3 className="font-bold mt-4">Available Workers:</h3>
              {workers
                .filter((worker) => worker.occupation === service.name)
                .map((worker) => (
                  <div key={worker._id} className="mt-2 ">
                    <div className="bg-slate-100 rounded-lg  p-4 mb-1 mt-2 h-auto">
                      <img
                        src={
                          worker.avatar && worker.avatar.url
                            ? worker.avatar.url
                            : "default-image-url"
                        }
                        alt="Profile Image"
                        className="h-48 w-48 object-cover shadow-xl rounded-xl rounded-full"
                      />

                      <p>Name: {worker.name}</p>
                      <p>Gender: {worker.gender}</p>
                      <p>Rent: {worker.salary}</p>
                      <p>Available: {worker.available}</p>
                    </div>

                    <Link
                    //  to={`/worker/${worker._id}${token}`}
                    to={`/worker/${worker._id}`}
                     >
                      {" "}
                      <button className="bg-slate-800 hover:bg-orange-500 text-white font-bold py-2 px-4 mb-2 rounded mt-2">
                        Contact
                      </button>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

   
    </div>
  );
};

export default ServicesPage;
